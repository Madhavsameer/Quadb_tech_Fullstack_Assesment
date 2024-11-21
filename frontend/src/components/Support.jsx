import React from 'react';
import './Support.css';
import { FaTruck, FaMoneyBillWave, FaCreditCard, FaPhone } from 'react-icons/fa';
function Support(){
    return(
        <div className='support-container'>
            <div className='support-box'>
            <p className='icon'><FaTruck/></p>
                <p className='title'>Free Shipping</p>
                <p className='content'>Order Above $199</p>
            </div>
            <div className='support-box'>
            <p className='icon'><FaMoneyBillWave/></p>
                <p className='title'>Money-Back</p>
                <p className='content'>Within 30 Days</p>
            </div>
            <div className='support-box'>
            <p className='icon'><FaCreditCard/></p>
                <p className='title'>Secure Payments</p>
                <p className='content'>Secured by Stripe</p>
            </div>
            <div className='support-box'>
                <p className='icon'><FaPhone/></p>
                <p className='title'>24/7 Support</p>
                <p className='content'>Phone and Email Support</p>
            </div>
        </div>

    )
}
export default Support;
