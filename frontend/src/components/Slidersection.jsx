import React from 'react';
import sliderimage1 from '../assets/sliderimage1.jpg';
import './Slider.css';

function Slider() {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={sliderimage1} 
              className="d-block w-100"
              alt="hello"/>
          </div>
          <div className="carousel-item">
            <img
              src={sliderimage1}
              className="d-block w-100"
              alt="Slide hello"
            />
          </div>
          <div className="carousel-item">
            <img
              src={sliderimage1}
              className="d-block w-100"
              alt="Slide 3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      
      <div className="container">
        <div className="columns">
          <div className="col1">
            <h2>Simply Unique<span>/</span></h2>
            <h2>Simply Better<span>.</span></h2>
          </div>
          <div className="col2">
            <p><span>3legent</span> is a gift and decorations stores based in HCMC,Vietnam.Est since 2019 </p>
            <p>Vietnam.Est since 2019</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;

