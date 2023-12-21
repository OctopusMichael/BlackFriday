import React from "react";
import logo from "../images/iconos/logobop.svg";
import nov from "../images/iconos/nov.png";
import vectorFooter from "../images/iconos/vectorFooter.svg";

const Footer = () => {
  return (
    <footer className="mt-[50px]">
      <div className="flex gap-5 justify-between items-center px-10 py-5">
        <a href="#">
          <img src={logo} alt="icon logo" />
        </a>
        <img  className="w-[100px]" src={nov} alt="nov icon    " />
        <img  className="w-[50px]" src={vectorFooter} alt="icon vector footer" />
      </div>
    </footer>
  );
};

export default Footer;
