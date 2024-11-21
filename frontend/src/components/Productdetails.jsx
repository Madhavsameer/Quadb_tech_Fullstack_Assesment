import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import TableImage from "../assets/dummy/table.png";
import TableImage1 from "../assets/dummy/table1.png";
import TableImage2 from "../assets/dummy/table2.png";
import TableImage3 from "../assets/dummy/table4.png";
import TableImage4 from "../assets/dummy/table5.png";
import TableImage5 from "../assets/dummy/table6.png";
import Navigation from "./Navbar";
import { useState } from "react";

function ProductDetails({ products }) {
  const [quantity, setQuantity] = useState(1);
  const dummyProducts = [
    {
      id: 1,
      imgArray: [
        TableImage,
        TableImage1,
        TableImage2,
        TableImage3,
        TableImage4,
        TableImage5,
      ],
      name: "Tray Table",
      desc: "Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.",
      price: 199,
      originalPrice: 399,
      Measurements: { Width: 45, Depth: 53, Height: 62 },
      sku: "117",
      Category: "Living Room",
      additional:
        "You can use the removable tray for serving. The design makes it easy to put the tray back after use since you place it directly on the table frame without having to fit it into any holes.",
    },
  ];

  const { id } = useParams();
  // const product =
  //   products.find((product) => product.id === parseInt(id)) || dummyProducts[0];
  const product = dummyProducts[0];
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);

  const toggleAccordion = () => {
    setIsAccordionOpen(!isAccordionOpen);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <Navigation />
      <div className="product-details flex flex-row poppins">
        <section className="w-1/2">
          <div className="product-images grid grid-cols-2 p-4 ml-8">
            {product.imgArray.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${product.name} ${index + 1}`}
                width={300}
              />
            ))}
          </div>
        </section>
        <section className="w-1/2">
          <div className="flex flex-row items-center gap-2">
            <p className="flex flex-row ml-2 text-xs">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
            </p>
            <p>11 Reviews</p>
          </div>
          <h2 className="text-3xl bg-transparent font-semibold text-left p-8 pl-0">
            {product.name}
          </h2>
          <p className="text-[#6C7275]"> {product.desc}</p>
          <div className="flex flex-row items-center ">
            <p className="text-3xl font-semibold p-2">${product.price}</p>
            {product.originalPrice && (
              <p className="text-2xl p-2">
                <s>${product.originalPrice}</s>
              </p>
            )}
          </div>
          {product.Measurements && (
            <p className="mb-4">
              <h3 className="text-[#6C7275] text-left bg-transparent mb-2">
                Measurements <br />
              </h3>
              <span className="text-xl font-medium">
                {product.Measurements.Height} x {product.Measurements.Width} x{" "}
                {product.Measurements.Depth}
              </span>
            </p>
          )}
          <div className="mb-4 flex flex-row gap-2">
            <div className="flex text-2xl flex-row gap-10 rounded bg-[#f5f5f5] w-fit p-2">
              <button className="font-extralight" onClick={decrementQuantity}>
                -
              </button>
              <h2 className=" text-medium">{quantity}</h2>
              <button className="font-extralight" onClick={incrementQuantity}>
                +
              </button>
            </div>
            <button className="inter flex flex-row font-semibold text-l gap-2 items-center justify-center w-80 rounded border-3">
              {" "}
              <svg
                width="23"
                height="18"
                viewBox="0 0 23 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M12.1924 3.91706C11.8055 4.28838 11.1945 4.28838 10.8076 3.91706L10.1152 3.2526C9.30477 2.47487 8.20994 2 7 2C4.51472 2 2.5 4.01472 2.5 6.5C2.5 8.88263 3.78979 10.8501 5.65176 12.4666C7.51532 14.0844 9.7434 15.1574 11.0746 15.7051C11.353 15.8196 11.647 15.8196 11.9254 15.7051C13.2566 15.1574 15.4847 14.0844 17.3482 12.4666C19.2102 10.85 20.5 8.88262 20.5 6.5C20.5 4.01472 18.4853 2 16 2C14.7901 2 13.6952 2.47487 12.8848 3.2526L12.1924 3.91706ZM11.5 1.80957C10.3321 0.688804 8.74649 0 7 0C3.41015 0 0.5 2.91015 0.5 6.5C0.5 12.8683 7.47034 16.385 10.3138 17.5547C11.0796 17.8697 11.9204 17.8697 12.6862 17.5547C15.5297 16.385 22.5 12.8682 22.5 6.5C22.5 2.91015 19.5899 0 16 0C14.2535 0 12.6679 0.688804 11.5 1.80957Z"
                  fill="#141718"
                />
              </svg>
              Wishlist
            </button>
          </div>
          <button className="w-3/5 p-3 mt-4 bg-black text-white rounded">
            Add to Cart
          </button>
          {product.sku && (
            <p className="mt-4 w-1/2 ">
              <span className="text-[#6C7275]">SKU:</span>
              <span className=" ml-32">{product.sku}</span>
            </p>
          )}
          {product.Category && (
            <p className="mb-4">
              <span className="text-[#6C7275]">Category: </span>
              <span className=" ml-20">{product.Category}</span>
            </p>
          )}
          <h1
            className="text-lg font-semibold flex items-center justify-between w-3/4 "
            onClick={toggleAccordion}
          >
            Additional Information
            <svg
              width="15"
              height="8"
              viewBox="0 0 15 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.27246 1L7.27246 7L13.2725 1"
                stroke="#141718"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </h1>
          <div className = "w-3/4 text-sm">
            <button className="text-[#6C7275] bg-transparent border-none">
              {isAccordionOpen ? "Hide" : "Show"} Details
            </button>
            {isAccordionOpen && product.additional && (
              <p>{product.additional}</p>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

export default ProductDetails;
