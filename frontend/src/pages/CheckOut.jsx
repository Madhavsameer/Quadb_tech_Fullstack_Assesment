import React from 'react'
import "./CheckOut.css"
import Footer from "../components/footer";
import NavBar from "../components/Navbar";
import { Link } from 'react-router-dom'


const CheckOut = () => {
    return (
<div>

<NavBar/>

        <div className="product-page">

            <div className="option ">


                <h1 className="cart-heading">Check Out</h1>
                <div className="step-indicator">



                    <Link to={"/cart"}>

                        <div className="step ">1. Shopping cart</div>

                    </Link>

                    <div className="step active">2. Checkout details</div>

                    <Link to={"/completeorder"}>
                        <div className="step">3. Order complete</div>
                    </Link>

                </div>
            </div>







            <div className="checkout-container">
                <div className="checkout-form">
                    {/* Contact Information */}
                    <div className="form-section">
                        <h3>Contact Information</h3>
                        <div className="input-row">
                            <input type="text" placeholder="First name" />
                            <input type="text" placeholder="Last name" />
                        </div>
                        <div className="input-row">
                            <input type="text" placeholder="Phone number" />
                            <input type="email" placeholder="Your Email" />
                        </div>
                    </div>

                    {/* Shipping Address */}
                    <div className="form-section">
                        <h3>Shipping Address</h3>
                        <input type="text" placeholder="Street Address" />
                        <select>
                            <option>Country</option>
                            <option>USA</option>
                            <option>Canada</option>
                        </select>
                        <div className="input-row">
                            <input type="text" placeholder="Town / City" />
                            <input type="text" placeholder="State" />
                            <input type="text" placeholder="Zip Code" />
                        </div>
                        <div className="checkbox-row">
                            <input type="checkbox" id="billing" />
                            <label htmlFor="billing">Use a different billing address (optional)</label>
                        </div>
                    </div>

                    {/* Payment Method */}
                    <div className="form-section">
                        <h3>Payment method</h3>
                        <div className="radio-row">
                            <div>
                                <input type="radio" id="card" name="payment" />
                                <label htmlFor="card">Pay by Card Credit</label>
                            </div>
                            <div>
                                <input type="radio" id="paypal" name="payment" />
                                <label htmlFor="paypal">Paypal</label>
                            </div>
                        </div>
                        <input type="text" placeholder="1234 1234 1234 1234" />
                        <div className="input-row">
                            <input type="text" placeholder="MM/YY" />
                            <input type="text" placeholder="CVC code" />
                        </div>
                    </div>

                    <button className="place-order">Place Order</button>
                </div>



                {/* Order Summary */}
                <div className="order-summary">
                    <h3>Order summary</h3>
                    <div className="order-item">
                        <img src="./traytabler.png" alt="Tray Table" />
                        <div>
                            <p>Tray Table</p>
                            <p>Color: Black</p>
                            <p>$38.00</p>
                        </div>
                        <div className="quantity">
                            <button>-</button>
                            <span>2</span>
                            <button>+</button>
                        </div>
                    </div>
                    <div className="order-item">
                        <img src="./traytableb.png" alt="Tray Table Red" />
                        <div>
                            <p>Tray Table</p>
                            <p>Color: Red</p>
                            <p>$38.00</p>
                        </div>
                        <div className="quantity">
                            <button>-</button>
                            <span>2</span>
                            <button>+</button>
                        </div>
                    </div>
                    <div className="order-item">
                        <img src="./lamp.png" alt="Table lamp" />
                        <div>
                            <p>Table lamp</p>
                            <p>Color: Gold</p>
                            <p>$30.00</p>
                        </div>
                        <div className="quantity">
                            <button>-</button>
                            <span>2</span>
                            <button>+</button>
                        </div>
                    </div>
                    <div className="coupon">
                        <input type="text" placeholder="Input" />
                        <button>Apply</button>
                    </div>
                    <p>JenkateMW - $25.00 [Remove]</p>
                    <p>Shipping: Free</p>
                    <p>Subtotal: $99.00</p>
                    <h4>Total: $234.00</h4>
                </div>
            </div>



        </div>

            <Footer />


        </div>
    )
}

export default CheckOut