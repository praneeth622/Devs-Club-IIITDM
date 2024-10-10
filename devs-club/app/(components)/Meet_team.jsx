import { motion } from 'framer-motion'
import Image from 'next/image'

const teamMembers = [
  { name: 'Alex Johnson', role: 'Club President', image: '/placeholder.svg' },
  { name: 'Jamie Lee', role: 'Lead Programmer', image: '/placeholder.svg' },
  { name: 'Taylor Smith', role: 'Project Coordinator', image: '/placeholder.svg' },
  { name: 'Jordan Kim', role: 'Community Manager', image: '/placeholder.svg' },
]

export const MeetOurTeam = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-blue-500 mb-2"
        >
          Meet Our Team
        </motion.h2>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl font-bold text-gray-800 mb-4"
        >
          Developers
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl text-gray-600 mb-12 max-w-3xl"
        >
          Get to know the talented individuals who drive our club forward. Each member brings unique skills and passion.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-blue-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <Image src={member.image} alt={member.name} width={300} height={300} className="w-full h-64 object-cover" />
              <div className="p-4">
                <h4 className="font-bold text-lg text-gray-800">{member.name}</h4>
                <p className="text-blue-600">{member.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
