import React from 'react';
import './Newsletter.css';
import bedroomimg from '../assets/bedroomimg.jpg';
import bannerimg1 from '../assets/loginimage.jpeg';


function Newsletter() {

  return (
    <div className="newsletter-container">
      <div className="newsletter-box">
        <img src={bedroomimg} alt="Newsletter" className="newsletter-image" />
      </div>
      <div className="newsletter-box">
        <h2>Join Our Newsletter</h2>
        <p>Sign up for deals, products, and promotions.</p>


        <form className="newsletter-form">
          <label   htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
          <button type="submit">Sign Up</button>
        </form>


      </div>
      <div className="newsletter-box">
        <img src={bannerimg1} alt="Newsletter" className="newsletter-image" />
        {/* <img src={bedroomimg} alt="Newsletter" className="newsletter-image" /> */}
      </div>
    </div>
  );
}

export default Newsletter;
