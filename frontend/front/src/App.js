import React from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import Login from "./Component/Login";
import Register from "./Component/Register";
import Forgot from "./Component/Forgot_Password";
import Navbar from "./Component/Navbar";
import Dashboard from "./Component/Dashboard";


export default function App() {
  return (
    <BrowserRouter>
    

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/reset-password" element={<Forgot />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}