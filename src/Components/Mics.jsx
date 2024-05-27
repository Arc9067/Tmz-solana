import React from "react";
import person4 from "../assets/person3.png";
import person2 from "../assets/person1.png";
import person3 from "../assets/person2.png";
import image5 from "../assets/person4.png";
import image7 from "../assets/image7.svg";

function Mics() {
  return (
    <section className="py-24 bg-white">
      <div className="container">
        {/* <h1 className="text-sky-500 text-6xl font-normal font-JackCon max-w-[500px]">
          Online Cryptocurrency Fighting Platform
        </h1> */}

        <div className="w-full grid grid-cols-1 mt-16 gap-y-12 lg:grid-cols-2 justify-cente gap-x-6">
          <div className="px-8 py-10 bg-red-700 rounded-3xl border-4 border-black flex-col justify-center items-center gap-2.5 inline-flex">
            <img src={person2} alt="" />
          </div>
          <div className="px-8 py-10 bg-red-700 rounded-3xl border-4 border-black flex-col justify-center items-center gap-2.5 inline-flex">
            <img src={image5} alt="" />
          </div>
          <div className="px-8 py-10 bg-red-700 rounded-3xl border-4 border-black flex-col justify-center items-center gap-2.5 inline-flex">
            <img src={person4} alt="" />
          </div>
          <div className="px-8 py-10 bg-red-700 rounded-3xl border-4 border-black flex-col justify-center items-center gap-2.5 inline-flex">
            <img src={person3} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mics;
