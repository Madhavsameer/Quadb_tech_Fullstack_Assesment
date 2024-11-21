import React from "react";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import shopimage from "../assets/shopimage.jpg";

import Newsletter from "../components/Newsletter";
import Footer from "../components/footer";
import NavBar from "../components/Navbar";

function Products({ products }) {
  return (
    <React.Fragment>
        <NavBar/>
      <div
        className="bg-cover poppins bg-center h-96 flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${shopimage})` }}
      >
        <div className="text-center">
          <h1 className="text-gray-500 text-l p-2 mb-2">
            <Link to={"/"}> Home </Link> &gt; <span className="text-black">Products</span>
          </h1>
          <h2 className="text-5xl mb-2 p-4 bg-transparent">Products Page</h2>
          <p className="text-black text-lg">
            Let's design the place you always imagined
          </p> 
        </div>
      </div>
      <div className="p-5">
        <div className="flex justify-center mb-5">
          <select className="p-2 text-lg mx-3">
            <option value="all">All Categories</option>
            <option value="Loveseat Sofa">Loveseat Sofa</option>
            <option value="Table Lamp">Table Lamp</option>
            <option value="Beige Table Lamp">Beige Table Lamp</option>
            <option value="Basket">Basket</option>
            <option value="Toaster">Toaster</option>
          </select>
          <select className="p-2 text-lg mx-3">
            <option value="all">All Prices</option>
            <option value="price1">$199</option>
            <option value="price2">$200</option>
            <option value="price3">$220</option>
            <option value="price4">$130</option>
            <option value="price5">$400</option>
          </select>
        </div>
        <div className="flex flex-wrap gap-5 justify-center">
          {products.map((product) => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              className="w-64 border p-4 bg-white relative"
            >
              <div
                className="h-48 bg-center bg-cover"
                style={{ backgroundImage: `url(${product.image})` }}
              >
                <h3 className="absolute top-2 left-2 px-2 py-1">NEW</h3>
                <p className="absolute top-2 right-2 bg-[#38CB89] text-white px-2 py-1">
                  -50%
                </p>
                <button className="absolute bottom-2 w-full  rounded-l left-1/2 transform -translate-x-1/2 bg-black text-white px-4 py-2">
                  Add To Cart
                </button>
              </div>
              <div className="text-center mt-4">
                <div className="flex justify-center mb-2">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h6 className="text-lg font-medium">{product.name}</h6>
                <p className="text-xl text-black">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
        <button className="mt-10 bg-black text-white py-2 px-4 rounded-full mx-auto block">
          Show More
        </button>
      </div>
      <Newsletter />
      <Footer />
    </React.Fragment>
  );
}

export default Products;
