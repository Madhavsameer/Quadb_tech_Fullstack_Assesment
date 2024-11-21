import React, { useState } from "react";
import "./ShoppingCart.css";
import { Link } from "react-router-dom";
import NavBar from '../components/Navbar'
import Footer from "../components/footer";
const ShoppingCart = () => {

    return (

        <div className="cart-page">
            <NavBar />


            <div className="option ">


                <h1 className="cart-heading">Cart</h1>
                <div className="step-indicator">


                    <div className="step active">1. Shopping cart</div>

                    <Link to={"/checkout"}>

                        <div className="step">2. Checkout details</div>
                    </Link>

                    <Link to={"/completeorder"}>

                        <div className="step">3. Order complete</div>
                    </Link>
                </div>
            </div>




            <div className="car">


                <img src="./cart.png" alt="" />

            </div>



            <Footer />




        </div>
    );
};

export default ShoppingCart;
