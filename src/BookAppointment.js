import React, { useState } from 'react';
import './BookAppointment.css';
import axios from 'axios';

const BookAppointment = () => {
  const [customerName, setCustomerName] = useState('');
  const [mobileModel, setMobileModel] = useState('');
  const [issue, setIssue] = useState('');
  const [appointmentDate, setAppointmentDate] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (customerName && mobileModel && issue && appointmentDate) {
      const selectedDate = new Date(appointmentDate);
      const currentDate = new Date();

      if (selectedDate < currentDate) {
        setErrorMessage('Please select a future date for the appointment.');
        return;
      }

      setSuccessMessage('Appointment booked successfully!');
      setCustomerName('');
      setMobileModel('');
      setIssue('');
      setAppointmentDate('');
    } else {
      setErrorMessage('Please fill in all fields.');
    }
    const data = {
      custname:customerName,
      mobilemodel:mobileModel,
      issue:issue,
      appoinment:appointmentDate,
      };
      axios.post('http://localhost:4001/postDetails', data);
  };

  return (
    <div className="book-appointment">
      <h2>Book an Appointment</h2>
      <form onSubmit={handleSubmit}>
        {successMessage && <p className="success-message">{successMessage}</p>}
        {errorMessage && <p className="error-message">{errorMessage}</p>}

        <label htmlFor="customerName">Customer Email:</label>
        <input
          type="text" required
          id="customerName"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />

        <label htmlFor="mobileModel">Mobile Model:</label>
        <input
          type="text" required
          id="mobileModel"
          value={mobileModel}
          onChange={(e) => setMobileModel(e.target.value)}
        />

        <label htmlFor="issue">Issue:</label>
        <textarea
          id="issue" required
          value={issue}
          onChange={(e) => setIssue(e.target.value)}
        />

        <label htmlFor="appointmentDate">Appointment Date:</label>
        <input
          type="date" required
          id="appointmentDate"
          value={appointmentDate}
          onChange={(e) => setAppointmentDate(e.target.value)}
        />

        <button type="submit" >Book Appointment</button>
      </form>
    </div>
  );
};

export default BookAppointment;
