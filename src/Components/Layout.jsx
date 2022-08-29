import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../Pages/HomePage/HomePage'
import RegisterLogin from '../Pages/RegisterLogin/RegisterLogin'
import Footer from './Footer'
import Header from './Header'
import '../styles/styles.css'

export default function Layout() {
    return (
        <div className='Layout'>
            <BrowserRouter>
            <Header/>
                <Routes>
                    <Route path="/" element={<HomePage/>}></Route>
                    <Route path="/Register-Login" element={<RegisterLogin/>}></Route>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    )
}
