import React from "react";
import Cards from "./Cards";
import FirstText from "./FirstText";
import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Foot from "./Foot";
import Information from "./Information";
const Home = () => {
  return (
    <>
      <FirstText />
      <About />
      <Cards />
      <Portfolio />
      <Information />
      <Contact />
      <Foot />
    </>
  );
};

export default Home;
