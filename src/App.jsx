import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import Login from "./login";
import Signin from "./signin";
import Dishes from "./dishes";
import SinglePage from "./singlepage";
import Cart from "./cart";
import {BrowserRouter,Routes,Route} from "react-router-dom"
import View from "./viewprofile";



function App() {
  return (
    <BrowserRouter>
<Routes>
  <Route path="/signin" element={<Signin/>}></Route>
   <Route path="/" element={<Home/>}></Route> 
  <Route path="/login" element={<Login/>}></Route>
  <Route path="/dish" element={<Dishes/>}></Route>
  <Route path="/cart" element={<Cart/>}></Route>
  <Route path="/view" element={<View/>}></Route>
  <Route path="/singlepage/:id" element={<SinglePage/>}></Route>
</Routes>
</BrowserRouter>
  );
}

export default App;
