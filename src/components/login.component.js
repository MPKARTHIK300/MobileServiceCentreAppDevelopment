import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../redux/UserSlice';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
const dispatch=useDispatch()
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') setEmail(value);
    if (name === 'password') setPassword(value);
  };
  let navigate=useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Please fill in all fields');
    } else {
      // Perform your login logic here
      console.log('Logging in...');
    }

    const data = {
      username:email,
      password:password
      };
      axios.post('http://localhost:4001/post', data);
      navigate('/');
      dispatch(login(email))
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Sign In</h3>

      {error && <div className="alert alert-danger">{error}</div>}

      <div className="mb-3">
        <label>Email Address</label>
        <input
          type="email"
          required
          className="form-control"
          placeholder="Enter email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3">
        <label>Password</label>
        <input
          type="password"
          required
          className="form-control"
          placeholder="Enter password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
      </div>

      <div className="mb-3">
        <div className="custom-control custom-checkbox">
          <input
            type="checkbox"
            className="custom-control-input"
            id="customCheck1"
          />
          <label className="custom-control-label" htmlFor="customCheck1">
            Remember me
          </label>
        </div>
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
      <p className="forgot-password text-right">
        Forgot <a href="#">Password?</a>
      </p>
    </form>
  );
}




// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// export default function Login()  {
//   constructor(props) {
//     super(props);

//     this.state = {
//       email: '',
//       password: '',
//       error: '',
//     };
//   }

//   handleInputChange = (event) => {
//     const { name, value } = event.target;
//     this.setState({ [name]: value });
//   };

//   handleSubmit = (event) => {
//     event.preventDefault();

//     const { email, password } = this.state;

//     if (!email || !password) {
//       this.setState({ error: 'Please fill in all fields' });
//     } else {
//       // Perform your login logic here
//       console.log('Logging in...');
//     }
//   };

//     const { email, password, error } = this.state;

//     return (
//       <form onSubmit={this.handleSubmit}>
//         <h3>Sign In</h3>

//         {error && <div className="alert alert-danger">{error}</div>}

//         <div className="mb-3">
//           <label>Email Address</label>
//           <input
//             type="email" required
//             className="form-control"
//             placeholder="Enter email"
//             name="email"
//             value={email}
//             onChange={this.handleInputChange}
//           />
//         </div>

//         <div className="mb-3">
//           <label>Password</label>
//           <input
//             type="password" required
//             className="form-control"
//             placeholder="Enter password"
//             name="password"
//             value={password}
//             onChange={this.handleInputChange}
//           />
//         </div>

//         <div className="mb-3">
//           <div className="custom-control custom-checkbox">
//             <input
//               type="checkbox"
//               className="custom-control-input"
//               id="customCheck1"
//             />
//             <label className="custom-control-label" htmlFor="customCheck1">
//               Remember me
//             </label>
//           </div>
//         </div>

//         <div className="d-grid">
//           <button type="submit" className="btn btn-primary">
//             Submit
//           </button>
//         </div>
//         <p className="forgot-password text-right">
//           Forgot <a href="#">Password?</a>
//         </p>
//       </form>
//     );
//   }

