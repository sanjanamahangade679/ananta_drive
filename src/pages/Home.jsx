import React from "react";

import Hero from "../components/Hero.jsx";
import HostingPlans from "../components/HostingPlans.jsx";
import Pricing from "../components/Pricing.jsx";
import "../styles/Home.css";
import Navbar from "../components/Navbar.jsx";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <HostingPlans />
      <Pricing />
    </div>
  );
};

export default Home;
