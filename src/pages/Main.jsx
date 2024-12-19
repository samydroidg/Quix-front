import React from "react";
import { ToastContainer } from "react-toastify";
import "../css/Main.css";
import Navbar from "../components/navbar";
import MainBody from "../components/MainBody";
import MainFooter from '../components/MainFooter'

function Home() {
  
  return (
    <div className="home__main">
      <Navbar />

      
      
      <MainBody />
      <MainFooter />
      <ToastContainer />
    </div>
  );
}

export default Home;
