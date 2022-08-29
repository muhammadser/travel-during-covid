import React from 'react'
import '../../../styles/styles.css'
export default function Login() {
    return (

        <section className="book" id="login-form">
            <h1 className="heading">
                <span>L</span>
                <span>o</span>
                <span>g</span>
                <span className="space"></span>
                <span>I</span>
                <span>n</span>
            </h1>
            <div className="row">
                <form action="">
                    <div className="inputBox">
                        <h3>Email</h3>
                        <input name="loginemail" type="email" className="box" placeholder="enter your email" />
                    </div>
                    <div className="inputBox">
                        <h3>Password</h3>
                        <input name="loginpassword" type="password" className="box" placeholder="enter your password" />
                    </div>
                    <input type="submit" value="login now" className="btn"/>
                        <input type="checkbox" id="remember"/>
                            <label for="remember">remember me</label>
                            <p>forget password? <div>click here</div></p>
                            <p>don't have and account? <div>register now</div></p>
                        </form>
                        <div className="image">
                            <img src="images/login-img.jpg" alt="" />
                        </div>
                    </div>
                </section>
                )
}
