import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const EventList = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      name: 'Concert',
      date: 'April 26',
      time: '8:00pm',
      venue: 'Venue A',
      availability: 50,
    },
    {
      id: 2,
      name: 'Movie Premiere',
      date: 'April 27',
      time: '7:00pm',
      venue: 'Venue B',
      availability: 30,
    },
  ]);
  return (
    <div>
      <h2> Events</h2>
      <ul>
        {events.map((event) => (
          <li key={event.id}>
            <div>{event.name}</div>
            <div>
              {event.date} | {event.time}
            </div>
            <div>Venue: {event.venue}</div>
            <div>Availability: {event.availability}</div>
            <Link to={`/event/${event.id}`} className='new'>View details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default EventList;
