import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

import Login from './components/login.component'
import SignUp from './components/signup.component'
import Home from './Home'
import AboutUs from './About'
import Contact from './Contact'
import AppointmentForm from './BookAppointment'
import Dashboard from './Dashboard'
import Profile from './Profile'

 

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/sign-in'}>
              Log Out
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">

                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    New User?
                  </Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to={'/profile'}>
                 Profile
                </Link>
              </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/'}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                   About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/contact'}>
                   FeedBack
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/appointment'}>
                   Book an Appointment
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/Dashboard'}>
                   Status
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="about" element={<AboutUs />} />
              <Route exact path="contact" element={<Contact />} />
              <Route exact path="appointment" element={<AppointmentForm />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/Dashboard" element={<Dashboard/>}/>
              <Route path="/profile" element={<Profile/>}/>
             
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
