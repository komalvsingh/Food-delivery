import React from "react";
import Navbar from "./navbar";
import Head from "./header";
import About from "./about";
import Footer from "./footer";
import Contact from "./contact";
import Featured from "./featured";


function Home(){
  return(
    <>
    <Navbar/>
    <Head/>
    <Featured/>
    <About/>
    <Contact/>
    <Footer/>
    </>
  );
}

export default Home;