import React from 'react'
import {Link} from 'react-router-dom'
import './style/nav.css'

const Nav = () => (
  <div className="nav-container">
    <ul className="nav-left" style={styles}>
      <Link to='/'>Snowden Denstistry</Link>
      <Link to='/OurPractice'>Our Practice</Link>
      <Link to='/OurDoctors'>Our Doctors</Link>
      <Link to='/DentalCare'>Dental Care</Link>
      <Link to='/CosmeticDentistry'>Cosmetic Denstistry</Link>
      <Link to='/Faq'>Faq</Link>
    </ul>
    <ul className="nav-right">
      <Link to='/contact'>Contact</Link>
    </ul>
  </div>
)

const styles = {
  color: 'grey'
}

export default Nav
