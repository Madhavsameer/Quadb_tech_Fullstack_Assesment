import React from 'react'
import { HiArrowRight } from 'react-icons/hi';
import { FaStar } from 'react-icons/fa';
import loveseatsofa from '../assets/loveseatsofa.jpg';
import tablelamp from '../assets/tablelamp.jpg';
import beigelamp from '../assets/beigelamp.jpg';
import basket from '../assets/basket.jpg';
import kitchenimg from '../assets/kitchenimg.jpg';
import './Product.css';



function Product(){
    return(
        <div className='product'>
            <div className='product-heading'>
                <div className='product-title'>
                <h2>New</h2>
                <h2>Arrivals</h2>
                </div>
                <div className='product-more'>
                <a>More Products <HiArrowRight/></a>
                </div>
            </div>
            <div className='product-container'>
                <div className='products'>
                <div className='product-image' style={{ backgroundImage: `url(${loveseatsofa})` }}>
                    <h3>New</h3>
                    <p>-50%</p>
                    <button>Add To Cart</button>
                </div>
                <div className='product-price'>
                <p><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                <h6>Loveseat Sofa</h6>
                <p>$199</p>
                </div>
                </div>

                <div className='products'>
                <div className='product-image' style={{ backgroundImage: `url(${tablelamp})` }}>
                    <h3>New</h3>
                    <p>-50%</p>
                    <button>Add To Cart</button>
                </div>
                <div className='product-price'>
                <p><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                <h6>Table Lamp</h6>
                <p>$200</p>
                </div>
                </div>

                <div className='products'>
                <div className='product-image' style={{ backgroundImage: `url(${beigelamp})` }}>
                    <h3>New</h3>
                    <p>-50%</p>
                    <button>Add To Cart</button>
                </div>
                <div className='product-price'>
                <p><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                <h6>Beige Table Lamp</h6>
                <p>$220</p>
                </div>
                </div>

                <div className='products'>
                <div className='product-image' style={{ backgroundImage: `url(${basket})` }}>
                    <h3>New</h3>
                    <p>-50%</p>
                    <button>Add To Cart</button>
                </div>
                <div className='product-price'>
                <p><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                <h6>Basket</h6>
                <p>$130</p>
                </div>
                </div>

                <div className='products'>
                <div className='product-image' style={{ backgroundImage: `url(${kitchenimg})` }}>
                    <h3>New</h3>
                    <p>-50%</p>
                    <button>Add To Cart</button>
                </div>
                <div className='product-price'>
                <p><FaStar/><FaStar/><FaStar/><FaStar/><FaStar/></p>
                <h6>Toaster</h6>
                <p>$400</p>
                </div>
                </div>
            </div>
        </div>

    );
}
export default Product;