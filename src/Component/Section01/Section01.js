import React from 'react';
import '../Section01/Section01.css';
import logo from '../../assets/images/logo.svg';

export default function Section01() {
  return (
    <>
    <div className='main'>
        <nav>
            <img className='netflixLogo' src={logo} alt="Netflix" />
            <button className='btn-signin'>Sign In</button>
        </nav>

        <div className="box">
        </div>

        <div className="hero">
        <span className='line1'>Unlimited movies, TV shows, and more</span>
        <span className='line2'>Watch anywhere. Cancel anytime.</span>
        <span className='line3'>Ready to watch? Enter your email to create or restart your membership.</span>

        <div className='getStarted'>
            <input type="text" placeholder='Email Address' />
            <button>Get Started</button>
        </div>     
        </div>
        
    </div>
    </>
  )
}
