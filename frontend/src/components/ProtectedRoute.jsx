// ProtectedRoute.js
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  // Check if token exists (this is where you'd check if the user is authenticated)
  const token = localStorage.getItem("token");

  // If no token, redirect to login page
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // If token exists, render the protected component (e.g., Home)
  return children;
};

export default ProtectedRoute;
