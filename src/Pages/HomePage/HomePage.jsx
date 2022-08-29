import React from 'react'
import '../../styles/styles.css'
import Book from './Components/Book';
import Home from './Components/Home';
import LoginForm from './Components/LoginForm';
import Packages from './Components/Packages';
import Services from './Components/Services';
import Gallery from './Components/Gallery';
import Review from './Components/Review';
import Contact from './Components/Contact';

export default function HomePage() {
  return (
    <div>
        <LoginForm/>
        <Home/>
        <Book/>
        <Packages/>
        <Services/>
        <Gallery/>
        <Review/>
        <Contact/>
    </div>
  )
}
