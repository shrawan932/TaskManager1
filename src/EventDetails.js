import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';

const EventDetails = () => {
  const { id } = useParams();
  //const { histroy } = useHistroy();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);

  useEffect(() => {
    const eventData = {
      id: 1,
      name: 'Concert',
      date: 'April 26',
      time: '8:00pm',
      venue: 'Venue A',
      availability: 50,
    };
    setEvent(eventData);
  }, [id]);

  const handleBooking = () => {
   // history.push('/');
   navigate('/');
  };
  return (
    <div>
      {event ? (
        <div>
          <div>{event.name}</div>
          <div>
            Date:
            {event.date}
          </div>
          <div>
            Time:
            {event.time}
          </div>
          <div>Venue: {event.venue}</div>
          <div>Availability: {event.availability}</div>
          <BookingForm
            availability={event.availability}
            onBook={handleBooking}
          />
        </div>
      ) : (
        <div>Loading ...</div>
      )}
    </div>
  );
};

export default EventDetails;
