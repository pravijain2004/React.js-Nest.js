import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Forgot from "./Component/Forgot_Password";
import Navbar from "./Component/Navbar";
import CategoryBar from "./Component/CategoryBar";  // Import CategoryBar
import Home from "./pages/Home"; // Add a Home component for the main page

export default function App() {
  return (
    <BrowserRouter>
      {/* Navbar (Includes CategoryBar inside) */}
      <Navbar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} /> {/* Show Home page when user visits "/" */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<Forgot />} />
      </Routes>
    </BrowserRouter>
  );
}
