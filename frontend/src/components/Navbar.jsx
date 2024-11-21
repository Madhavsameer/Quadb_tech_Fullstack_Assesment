import "./Navbar.css";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoBagHandleOutline } from "react-icons/io5";
import { IoMdContact } from "react-icons/io";
import  { useState } from "react";
import { useNavigate } from "react-router-dom";
function Navigation() {

  
    const navigate = useNavigate();


  const [items, setItems] = useState([
    { id: 1, name: "Tray Table", color: "Black", price: 19.19, quantity: 2, imgUrl: "./traytabler.png" },
    { id: 2, name: "Tray Table", color: "Red", price: 19.19, quantity: 2, imgUrl: "./traytableb.png" },
    { id: 3, name: "Table lamp", color: "gold", price: 39.0, quantity: 2, imgUrl: "./lamp.png" },
  ]);

  const handleQuantityChange = (id, newQuantity) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const total = subtotal + 135; // Assuming $135 is shipping/taxes



const [isCartVis, setIsCartVis]=useState(false)





  return (
<>



 {isCartVis && <div className="cart">

    
      <div className="cart-header">
  <h2>Cart</h2>

  <button  onClick={()=>
    setIsCartVis(!isCartVis)
  } className="close-btn">&times;</button>

</div>
<div className="cart-items">
  {items.map((item) => (
    <div key={item.id} className="cart-item">
      <img src={item.imgUrl} alt={item.name} className="item-image" />
      <div className="item-details">
        <h4>{item.name}</h4>
        <p>Color: {item.color}</p>
        <p>${item.price.toFixed(2)}</p>
      </div>
      <div className="item-quantity">
        <button
          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
          disabled={item.quantity === 1}
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
      </div>
      <button className="remove-btn" onClick={() => handleRemoveItem(item.id)}>
        &times;
      </button>
    </div>
  ))}
</div>
<div className="cart-bottom">
  <p>Subtotal: ${subtotal.toFixed(2)}</p>
  <h3>Total: ${total.toFixed(2)}</h3>

  <Link to={"/checkout"}>
  <button className="checkout-btn">Checkout</button>
  </Link>


<Link  to={"/cart"}>
      <button className="view-cart-btn">View Cart</button>
</Link>

</div>
</div>
}




{isCartVis && <div className="overlay">

</div>


}
    <nav className="navbar navbar-expand-lg navbar-light bg-light">






      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          3legant.
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="flex items-center justify-center">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/shop">
                Shop
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/products">
                Product
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-icons flex flex-row">
          <CiSearch style={{ fontSize: "20px", marginRight: "10px" }} />

        

          <IoBagHandleOutline onClick={ ()=>

              setIsCartVis(!isCartVis)

          }
            style={{ fontSize: "20px", marginRight: "10px" }}
            />
          

          <IoMdContact
        style={{ fontSize: "20px", marginRight: "50px" }}
        onClick={() => navigate("/signup")} // Replace "/contact" with your desired route
      />
        </div>
      </div>
    </nav>

    </>
  );
}

export default Navigation;
