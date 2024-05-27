import React from "react";
import logo from "../assets/logo.webp";

function About() {
  return (
    <section className="py-20 w-full">
      <div className="container flex flex-col justify-center items-center">
        <h1 className="text-[#EF1] relative top-28 text-8xl font-normal font-JackCon">
          HE IS REAL{" "}
        </h1>

        <img src={logo} alt="" className="relative top-32 lg:w-[30rem]" />
        <div className="w-full  px-4 pt-11 pb-10 bg-sky-400 rounded-3xl border-4 relative z-10 border-white justify-center items-center inline-flex">
          <div className=" text-neutral-800 text-xl font-medium  leading-loose tracking-wide">
            A new TikTok trend has emerged and has since went viral all over
            social media making its way towards the #1 most searched Russian
            meme. You can find our Smurf on LSD from Twitter and telegram all
            the way to Facebook, Reddit, and 4chan.
            <br />
            <br />
            You don’t have to like it but he IS indeed REAL.
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
