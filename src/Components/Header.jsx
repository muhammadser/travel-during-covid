import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../styles/styles.css'
export default function Header() {
  const navigate = useNavigate();
  return (
    <div className='header'>
      <div id="menu-bar" className="fas fa-bars"></div>
      <div onClick={() => {navigate("/");window.scrollTo(0,0)}} className="logo"><span>T</span>ravel</div>
      <nav className="navbar">
        <div onClick={() => {navigate("/");window.scrollTo(0,0)}}>home</div>
        <div onClick={() => {navigate("/Register-Login");window.scrollTo(0,0)}}>register/login</div>
        <div onClick={()=>{navigate("/");window.scrollTo(0,715)}}>book</div>
        <div onClick={()=>{navigate("/");window.scrollTo(0,1550)}}>packages</div>
        <div onClick={()=>{navigate("/");window.scrollTo(0,2760)}}>services</div>
        <div onClick={()=>{navigate("/");window.scrollTo(0,3370)}}>gallery</div>
        <div onClick={()=>{navigate("/");window.scrollTo(0,4010)}}>review</div>
        <div onClick={()=>{navigate("/");window.scrollTo(0,5440)}}>contact</div>
      </nav>
    </div>
  )
}
