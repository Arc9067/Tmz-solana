import React from "react";
import image1 from "../assets/image1.svg";
import image2 from "../assets/image2.svg";
import image3 from "../assets/image3.svg";
import image4 from "../assets/image4.svg";

function Tokenomics() {
  return (
    <section className="py-20 w-full">
      <div className="container flex justify-center items-center flex-col">
        <h1 className="text-white text-6xl font-normal font-Jack">
          tokenomics
        </h1>
        <p className="text-yellow-300 text-2xl font-normal font-Jack mt-12">
          Total Supply : 100,000,000.
        </p>
        <p className="text-center text-white text-xl font-semibold font-['Jost'] mt-6">
          Contract: 0xxxxxxxxxxxxxxx................
        </p>
        <div className="mt-12 px-8 py-2 bg-neutral-800 rounded-3xl border-4 border-sky-500 flex-col justify-start items-center gap-2.5 inline-flex">
          <div className=" justify-between items-start flex flex-col gap-10 md:flex-row font-Jack">
            <div className="justify-center items-center gap-3 flex">
              <div className="text-white text-2xl font-normal font-['Jack's Candlestick'] leading-loose">
                Tax
              </div>
              <div className="justify-start items-center gap-3 flex">
                <div className="text-white text-3xl font-semibold font-['Jost'] leading-10">
                  0/0
                </div>
              </div>
            </div>
            <div className="justify-center items-center gap-3 flex">
              <div className="text-white text-2xl font-normal font-['Jack's Candlestick'] leading-loose">
                Max Txn
              </div>
              <div className="justify-start items-center gap-3 flex">
                <div className="text-white text-3xl font-semibold font-['Jost'] leading-10">
                  2%
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-3 gap-8 mt-40 items-stretch justify-stretch">
          <img src={image1} alt="" className="lg:col-span-3" />
          <img src={image2} alt="" className="w-full lg:w-fit" />
          <img src={image3} alt="" className="w-full lg:w-fit" />
          <img src={image4} alt="" className="w-full lg:w-fit" />
        </div>
      </div>
    </section>
  );
}

export default Tokenomics;
