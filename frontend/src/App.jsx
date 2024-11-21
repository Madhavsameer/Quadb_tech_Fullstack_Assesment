import { Routes, Route } from "react-router-dom";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import ProductDetails from "./components/ProductDetails";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import loveseatsofa from "./assets/loveseatsofa.jpg";
import tablelamp from "./assets/tablelamp.jpg";
import beigelamp from "./assets/beigelamp.jpg";
import basket from "./assets/basket.jpg";
import kitchenimg from "./assets/kitchenimg.jpg";
import whitedrawer from "./assets/whitedrawer.jpg";
import whitepillow from "./assets/whitepillow.jpg";
import blacktable from "./assets/blacktable.jpg";
import cozysofa from "./assets/cozysofa.jpg";
import Products from "./pages/Products";
import Cart from "./components/Cart";
import ShoppingCart from "./pages/ShoppingCart";
import CheckOut from "./pages/CheckOut";
import OrderComplete from "./pages/OrderComplete";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const products = [
    {
      id: 1,
      name: "Loveseat Sofa",
      price: "$199",
      originalPrice: "$250",
      description: "A comfortable loveseat sofa.",
      measurements: "70x35x30 inches",
      sku: "LS123",
      category: "Furniture",
      image: loveseatsofa,
    },
    {
      id: 2,
      name: "Table Lamp",
      price: "$200",
      originalPrice: "$250",
      description: "A stylish table lamp.",
      measurements: "20x15x10 inches",
      sku: "TL234",
      category: "Lighting",
      image: tablelamp,
    },
    {
      id: 3,
      name: "Beige Table Lamp",
      price: "$220",
      originalPrice: "$270",
      description: "A beige table lamp.",
      measurements: "20x15x10 inches",
      sku: "BTL345",
      category: "Lighting",
      image: beigelamp,
    },
    {
      id: 4,
      name: "Basket",
      price: "$130",
      originalPrice: "$150",
      description: "A decorative basket.",
      measurements: "15x15x15 inches",
      sku: "BK456",
      category: "Decor",
      image: basket,
    },
    {
      id: 5,
      name: "Toaster",
      price: "$400",
      originalPrice: "$450",
      description: "A high-end toaster.",
      measurements: "15x10x10 inches",
      sku: "TS567",
      category: "Kitchen",
      image: kitchenimg,
    },
    {
      id: 6,
      name: "White Pillow",
      price: "$100",
      originalPrice: "$120",
      description: "A soft white pillow.",
      measurements: "20x20 inches",
      sku: "WP678",
      category: "Bedding",
      image: whitepillow,
    },
    {
      id: 7,
      name: "White Drawer",
      price: "$130",
      originalPrice: "$160",
      description: "A white drawer for storage.",
      measurements: "40x30x20 inches",
      sku: "WD789",
      category: "Furniture",
      image: whitedrawer,
    },
    {
      id: 8,
      name: "Cozy Sofa",
      price: "$460",
      originalPrice: "$500",
      description: "A cozy sofa.",
      measurements: "80x40x35 inches",
      sku: "CS890",
      category: "Furniture",
      image: cozysofa,
    },
    {
      id: 9,
      name: "Black Side Table",
      price: "$150",
      originalPrice: "$180",
      description: "A black side table.",
      measurements: "25x25x25 inches",
      sku: "BST901",
      category: "Furniture",
      image: blacktable,
    },
  ];

  return (
    <>
      <Routes>
        <Route path="/" element={<Login/>} />



        <Route path="/home" element={
          <ProtectedRoute>
            <Home />

          </ProtectedRoute>

        } />
        <Route path="/shop" element={
          <ProtectedRoute>
            <Shop products={products} />

          </ProtectedRoute>

        } />


        <Route
          path="/product/:id"
          element={
            <ProtectedRoute>
              <ProductDetails products={products} />
            </ProtectedRoute>
          }
        />

        <Route path="/products" element={
          <ProtectedRoute>
            <Products products={products} />
          </ProtectedRoute>
        }></Route>

        <Route path="/login" element={
          <Login />} />
        <Route path="/signup" element={<Signup />} />



        <Route path="/cart" element={
          <ProtectedRoute>
            <ShoppingCart />
          </ProtectedRoute>
        }></Route>


        <Route path="/checkout" element={
          <ProtectedRoute>
            <CheckOut />
          </ProtectedRoute>
        }></Route>


        <Route path="/completeorder" element={
          <ProtectedRoute>
            <OrderComplete />

          </ProtectedRoute>
        }></Route>



      </Routes>
    </>
  );
}

export default App;
