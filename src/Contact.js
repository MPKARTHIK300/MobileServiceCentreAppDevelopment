import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
const Contactus = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };


  const handleSubmit = async(e) => {
    e.preventDefault(); 
      const reg={"name":name,"email":email, "message":message};
      console.log(reg);
    const result=await axios.post("http://localhost:4001/feedback/addf",reg);
    console.log(result.data);
    toast.success("Message sent Succesfully!",{
      theme:"light",
    });
    window.location.reload();
  }
  return (
    <div className="contact-form-container" style={{ backgroundImage: "url()" }}>
      <h2>Feedback</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            onChange={handleMessageChange}
            placeholder="Enter your message"
            required
          ></textarea>
        </div>
        <button type="submit" className="submit-btn">Submit</button>
        <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
            />
      </form>
    </div>
  );
};

export default Contactus;