import React, { useState } from 'react';

const BookingForm = ({ availability, onBook }) => {
  const [tickets, setTickets] = useState(1);

  const handleTicketChange = (e) => {
    const value = parseInt(e.target.value);
    setTickets(value);
  };

  const handleBooking = (e) => {
    e.preventDefault();
    if (tickets <= availability) {
      onBook();
    } else {
      alert('Not enough tickets available');
    }
  };
  return (
    <div>
      <h3>Book tickets</h3>

      <form onSubmit={handleBooking}>
        <label>
          Tickets:
          <input
            type="number"
            min="1"
            max={availability}
            value={tickets}
            onChange={handleTicketChange}
          />
        </label>
        <button type="submit">Book</button>
      </form>
    </div>
  );
};

export default BookingForm;
