import React, { useState } from 'react'

function UserServices() {
  const [booking, setBooking] = useState({
    date: '',
    time: '',
    service: ''
});

const handleChange = (event) => {
    const { name, value } = event.target;
    setBooking(prevBooking => ({
        ...prevBooking,
        [name]: value
    }));
};

const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Booking Request:', booking);
    // Add logic to send booking data to the backend API
};
  return (
    <form onSubmit={handleSubmit}>
    <h2>Book a Service</h2>
    <label>
        Date:
        <input type="date" name="date" value={booking.date} onChange={handleChange} />
    </label>
    <br />
    <label>
        Time:
        <input type="time" name="time" value={booking.time} onChange={handleChange} />
    </label>
    <br />
    <label>
        Service:
        <select name="service" value={booking.service} onChange={handleChange}>
            <option value="">Select a Service</option>
            <option value="dog-walking">Dog Walking</option>
            <option value="pet-sitting">Pet Sitting</option>
            <option value="vet-visit">Vet Visit</option>
        </select>
    </label>
    <br />
    <button type="submit">Submit Booking</button>
</form>
  )
}

export default UserServices