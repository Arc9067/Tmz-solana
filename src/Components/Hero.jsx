import React from "react";
import logo from "../assets/logo.jpg";

function Hero() {
  return (
    <section className="pt-32 w-full pb-10">
      <div className="container grid lg:grid-cols-2 justify-center items-center gap-16">
        <img src={logo} alt="" className="" />
        <h1 className="font-JackCon leading-[22px]">
          <span className="text-black text-7xl font-normal font-['Jack's Candlestick'] ">
            TMZ SOLANA -
          </span>{" "}
          <span className="text-white text-7xl font-normal font-['Jack's Candlestick']">
            FOR ALL YOUR SOLANA GOSSIP AND NEWS{" "}
          </span>
        </h1>
      </div>
    </section>
  );
}

export default Hero;
