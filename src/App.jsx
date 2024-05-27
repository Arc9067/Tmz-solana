import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Mics from "./Components/Mics";
import Tokenomics from "./Components/Tokenomics";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="min-h-screen w-full relative bg-red-700 text-white font-Jost">
      <Header />
      <Hero />
      {/* <About /> */}
      <Mics />
      {/* <Tokenomics /> */}
      <Footer />
    </div>
  );
}

export default App;
