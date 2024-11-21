


import "../App.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { registerUser } from "../api.js";  // Import the register function
import { useEffect } from "react";


const Signup = () => {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted", userData);

    try {
      const response = await registerUser(userData);  // Call the registerUser function from authService
   
      localStorage.setItem("token", response.token);
      navigate("/home");  // Redirect to login on success
    } catch (error) {
      console.log("Registration failed:", error.message);  // Handle errors
    }
  };




  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/home");  // Redirect to home if user is already logged in
    }
  }, [navigate]);



  return (
    <div className="flex flex-row bg-[#fff]">
      <section className="poppins bg-[#F3F5F7] login-bg-image font-semibold w-1/2 h-dvh text-center">
        <h1 className="p-8 text-xl">
          3legant
          <span className="text-[#6C7275]">.</span>
        </h1>
      </section>
      <section className="w-1/2 h-dvh text-center flex items-center">
        <form className="w-3/4 p-8 text-left" onSubmit={handleFormSubmit}>
          <div>
            <h1 className="poppins text-4xl h-22 text-left font-medium p-2 pb-3">
              Sign up
            </h1>
            <Link to="/login">
              <h2 className="text-left text-[#6C7275] bg-[#fff]">
                Already have an account?{" "}
                <span className="text-[#38CB89] font-semibold"> Sign In</span>
              </h2>
            </Link>
          </div>
          <div className="flex flex-col items-left justify-center pl-0 p-8">
            <input
              type="text"
              placeholder="Your Name"
              className="p-2 border-b mb-8 w-full border-[#E8ECEF] focus:outline-none"
              value={userData.name}
              onChange={(e) =>
                setUserData({ ...userData, name: e.target.value })
              }
            />
            <input
              type="text"
              placeholder="Username"
              className="p-2 border-b mb-8 w-full border-[#E8ECEF] focus:outline-none"
              value={userData.username}
              onChange={(e) =>
                setUserData({ ...userData, username: e.target.value })
              }
            />
            <input
              type="email"
              placeholder="Email address"
              className="p-2 border-b mb-8 w-full border-[#E8ECEF] focus:outline-none"
              value={userData.email}
              onChange={(e) =>
                setUserData({ ...userData, email: e.target.value })
              }
            />
            <input
              type="password"
              placeholder="Password"
              className="p-2 border-b mb-8 w-full border-[#E8ECEF] focus:outline-none"
              value={userData.password}
              onChange={(e) =>
                setUserData({ ...userData, password: e.target.value })
              }
            />
            <div className="flex flex-row">
              <input type="checkbox" className="w-8" />
              <label className="text-[#6C7275] ml-4 text-l">
                I agree with <span className="text-black">Privacy Policy</span>{" "}
                and <span className="text-black">Terms of use</span>
              </label>
            </div>

            <button className="w-full p-3 mt-4 bg-black text-white rounded">
              Sign Up
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default Signup;
