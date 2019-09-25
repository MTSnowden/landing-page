import React from 'react'
import './style/contact.css'

const Contact = () => (
  <div className="main-container">
    
    <div id="box1"><p>Contact Us</p></div>

    <div id="box2">
    <input type="text"id="fname"name="firstname"placeholder="First Name"/>
    <input type="text"id="lname" name="lastname" placeholder="Last Name"/>
    </div>
    
    <div id="box3">
    <input type="email"id="email"name="email"placeholder="Email"/>
    </div>
    
    <div id="box4">
    <textarea id="subject"name="subject"placeholder="Message"></textarea>
    </div>

    <div id="box5">
    <input type="submit"value="Submit"/>
    </div>

  </div>
)

export default Contact