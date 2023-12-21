import React from "react";
import blackFriday from "../images/iconos/blackFriday.svg";
import xIcon from "../images/iconos/xIcon.svg";
import telegramIcon from "../images/iconos/telegramIcon.svg";
import discordIcon from "../images/iconos/discordIcon.svg";
import translateIcon from "../images/iconos/translate.svg";

const Content = () => {
  return (
    <section className="">
      <div className=" flex flex-col justify-center items-center gap-5 px-5 ">
        <img className="" src={blackFriday} alt="blackFriday Logo" />
      </div>
      <div className="flex flex-row-reverse relative ">
        <div className=" absolute -top-[80px] left-[25px]  bg-grayLight flex flex-col   justify-between items-center rounded-[50px] p-1 h-[120px]">
          <h1 className="text-gray-500 ">Eng</h1>
          <h1 className="text-gray-500 ">|</h1>
          <div className="bg-white  h-[60px] rounded-[50px]  flex justify-center items-center w-[50px] ">
            <img src={translateIcon} alt="Translate Icon" />
          </div>
        </div>
        <div className="w-[250px]    flex items-center gap-5 ">
          <p className="font-bold text-[13px]">
            The 1st Paper Anime <br /> Costume on Shopify
          </p>
          <div className="flex gap-5">
            <a href="#">
              <img className="w-[15px]" src={xIcon} alt="xIcon" />
            </a>
            <a href="#">
              <img className="w-[15px]" src={telegramIcon} alt="telegramIcon" />
            </a>
            <a href="#">
              <img className="w-[15px]" src={discordIcon} alt="discordIcon" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
