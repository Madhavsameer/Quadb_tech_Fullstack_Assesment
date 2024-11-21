import React from 'react';
import { HiArrowRight } from 'react-icons/hi';
import bannerimg1 from '../assets/bannerimg1.jpg';
import bedroomimg from '../assets/bedroomimg.jpg';
import kitchenimg from '../assets/kitchenimg.jpg';
import './Banner.css';

function Banner() {
  return (
    <div className='banner-container'>

      
      <div className='banner-columns'>
        <div
          className='banner-col1'
          style={{ backgroundImage: `url(${bannerimg1})` }}>
          <h3>Living Room</h3>
          <a>Shop now<HiArrowRight /></a>
        </div>
        <div className='banner-col2'>
          <div
            className='col2-row1'
            style={{ backgroundImage: `url(${bedroomimg})` }}
          >
            <h3>Bedroom</h3>
            <a>Shop now<HiArrowRight /></a>
          </div>
          <div
            className='col2-row2'
            style={{ backgroundImage: `url(${kitchenimg})` }}
          >
            <h3>Kitchen</h3>
            <a>Shop now<HiArrowRight /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
