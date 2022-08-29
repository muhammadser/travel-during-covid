import React from 'react'
import '../../../styles/styles.css'
export default function Register() {
  return (
<section className="book" id="register-from">

<h1 className="heading">
    <span>r</span>
    <span>e</span>
    <span>g</span>
    <span>i</span>
    <span>s</span>
    <span>t</span>
    <span>e</span>
    <span>r</span>
                                    
    <span className="space"></span>
    <span>f</span>
    <span>o</span>
    <span>r</span>
    <span>m</span>
</h1>
 <div className="row">

    <div className="image">
        <img src="images/register-img.png" alt=""/>
    </div>
    
        <form action="">
        <div className="inputBox">
            <h3>First Name</h3>
            <input name="firstname" id="firstname"type="text" placeholder="enter first name here...."/>
        </div>
        <div className="inputBox">
              <h3>Last Name</h3>
            <input id="lastname" name="lastname" type="text" placeholder="enter last name here...."/>
        </div>
        <div className="inputBox">
            <h3>Email</h3>
            <input id="email" name="email" type="email" placeholder="enter email here..."/>
        </div>
        <div className="inputBox">
            <h3>Password</h3>
           <input id="password" name="password" type="password" className="box" placeholder="enter password here..."/>
        </div>
        <button className="btn" id="btn" type="button">Sigup</button>
        <div className="already">
        <h3>Already a member?<a href="#login-form">Log In</a></h3>
        </div>
    </form>
    </div>
</section>  )
}
