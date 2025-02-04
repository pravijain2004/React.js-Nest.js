import React from "react";
import {Routes, Route ,BrowserRouter} from "react-router-dom";
import Login from "./Component/Login"
import Register from "./Component/Register";
import Forgot from "./Component/Forgot_Password";
import Navbar from "./Component/Navbar";

export default function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/"element={<Login />}></Route>
      <Route path="/register"element={<Register />}></Route>
      <Route path="/reset-password"element={<Forgot />}></Route>
      <Route path="/navbar"element = {<Navbar />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}