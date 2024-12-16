import React from 'react';

const formatDate = (dateString) => {
  const date = new Date(dateString);
  // Using explicit format to ensure consistency between server and client
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const PastEventsSection = ({ pastEvents }) => {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Past Events</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pastEvents.map((event, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{event.name}</h3>
            <div className="text-gray-600">
              <p>Date: {formatDate(event.date)}</p>
              <p>Time: {event.time}</p>
              {event.attendees && (
                <p className="mt-2">Attendees: {event.attendees}</p>
              )}
              {event.summary && (
                <p className="mt-2 text-sm">{event.summary}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PastEventsSection; 