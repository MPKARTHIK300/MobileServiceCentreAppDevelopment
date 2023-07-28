import React from 'react';
import {Routes, Route, BrowserRouter } from 'react-router-dom';
import Login from './components/login.component';
import SignUp from './components/signup.component';
import AboutUs from './About';
import Contact from './Contact';
import AppointmentForm from './BookAppointment';
import Home from './Home';


export default function Routing(){
    return(
        <BrowserRouter>
        <Routes>
        <Route exact path='/sign-in' element={<Login/>}></Route>
        <Route exact path='/' element={<Home/>}></Route>
        <Route exact path='/signup' element={<SignUp/>}></Route>
        <Route exact path='/about' element={<AboutUs/>}></Route>
        <Route exact path='/contact' element={<Contact/>}></Route>
        <Route exact path='/appointment' element={<AppointmentForm/>}></Route>
        
        
        </Routes>
        </BrowserRouter>
    )
}