import React from "react";
import {Routes, Route ,BrowserRouter} from "react-router-dom";
import Login from "./Component/Login"
import Register from "./Component/Register";
import Forgot from "./Component/Forgot_Password";

export default function App(){
  return(
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<Login />}></Route>
      <Route path="/register" exact element={<Register />}></Route>
      <Route path="/reset-password" exact element={<Forgot />}></Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}