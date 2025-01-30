import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Devs from "./components/Devs";
import Footer from "./components/Footer";
import Box from "./components/Box";

const App = () => {
  return (
    <div>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="about">
          <Box />
          <About />
        </div>

        <div id="devs">
          <Devs />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
