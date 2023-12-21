import React from "react";
import Navbar from "./Navbar";
import mock from "../images/iconos/mock.png";

const Hero = () => {
  return (
    <section className="relative h-[450px]">
      <Navbar />
      <img
        className="absolute -top-[0px] right-1 -z-10"
        src={mock}
        alt="mockOne"
      />
      <button className="bg-violeta rounded-[50px] p-5  hover:bg-violet-400   text-white font-bold w-[240px] absolute z-10  bottom-[60px] left-[20px]  ">
        Shop now
      </button>
    </section>
  );
};

export default Hero;
