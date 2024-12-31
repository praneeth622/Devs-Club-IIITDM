import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { clerkClient } from '@clerk/clerk-sdk-node';

export async function POST(req) {
  const SIGNING_SECRET = process.env.CLERK_WEBHOOK_SECRET;

  if (!SIGNING_SECRET) {
    throw new Error('Error: Please add CLERK_WEBHOOK_SECRET to .env or .env.local');
  }

  // Create new Svix instance with secret
  const wh = new Webhook(SIGNING_SECRET);

  // Get headers
  const headerPayload = await headers();
  const svix_id = headerPayload.get('svix-id');
  const svix_timestamp = headerPayload.get('svix-timestamp');
  const svix_signature = headerPayload.get('svix-signature');

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error: Missing Svix headers', {
      status: 400,
    });
  }

  // Get body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  let evt;

  // Verify payload with headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    });
  } catch (err) {
    console.error('Error: Could not verify webhook:', err);
    return new Response('Error: Verification error', {
      status: 400,
    });
  }
  console.log('Verified');

  // If event type is "user.created", handle the event
  if (evt.type === 'user.created') {
    const userId = evt.data.id;

    let organizationId = 'org_2qq40cm0EtvF24HU5bM3f2GVz2f'


    try {
      // Add the new user to the "core" organization
      await clerkClient.organizations.createMembership({
        organizationId: organizationId,
        userId: userId,
        role: 'org:user',
      });

      console.log(`User ${userId} added to organization "core" as role "user".`);
    } catch (error) {
      console.error('Error: Could not find or create the "core" organization:', error);
      return new Response('Error: Could not find or create the "core" organization', {
        status: 500,
      });
    }
  }

  return new Response('Webhook received', { status: 200 });
}
