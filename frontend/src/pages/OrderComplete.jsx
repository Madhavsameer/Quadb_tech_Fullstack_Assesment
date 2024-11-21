import React from 'react';
import './OrderComplete.css';
import { Link } from 'react-router-dom';
import Footer from '../components/footer';
import NavBar from '../components/Navbar';
const OrderComplete = () => {
    return (

        <div className='cc'>
<NavBar/>

            <div className="option ">


                <h1 className="cart-heading">Complete!</h1>
                <div className="step-indicator">


                    <Link to={"/cart"}>
                        <div className="step ">1. Shopping cart</div>

                    </Link>

                    <Link to={"/checkout"}>

                        <div className="step ">2. Checkout details</div>
                    </Link>


                    <div className="step active">3. Order complete</div>
                </div>
            </div>







            <div className="order-confirmation-container">



                <div className="order-card">
                    <h2>Thank you! 🎉</h2>
                    <h3>Your order has been received</h3>

                    <div className="order-items">
                        <div className="item">
                            <img src="./traytableb.png" alt="Tray Table Black" />
                            <span className="item-quantity">2</span>
                        </div>
                        <div className="item">
                            <img src="./traytabler.png" alt="Tray Table Red" />
                            <span className="item-quantity">2</span>
                        </div>
                        <div className="item">
                            <img src="./lamp.png" alt="Table Lamp" />
                            <span className="item-quantity">1</span>
                        </div>
                    </div>

                    <div className="order-info">
                        <p><strong>Order code:</strong> #0123_45678</p>
                        <p><strong>Date:</strong> October 19, 2023</p>
                        <p><strong>Total:</strong> $1,345.00</p>
                        <p><strong>Payment method:</strong> Credit Card</p>
                    </div>

                    <button className="purchase-history-btn">Purchase history</button>
                </div>
            </div>




<Footer/>

        </div>
    );
};

export default OrderComplete;
