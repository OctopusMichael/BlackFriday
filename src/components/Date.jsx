import React from "react";
import rectangleB from "../images/iconos/rectangleB.svg";
import reward from "../images/iconos/reward.svg";
import external from "../images/iconos/EXTERNAL.svg";
import externalB from "../images/iconos/EXTERNALBlack.svg";
import book from "../images/iconos/book.svg";

const Date = () => {
  return (
    <section className="bg-grayLight  w-[350px] mx-auto rounded-[45px] pb-3 flex flex-col gap-2 mt-[50px]">
      <div
        id="rectangleG"
        className="  flex flex-col justify-between  w-[350px] h-[300px] mx-auto py-5 px-10 relative"
      >
        <div>
          <div className="flex flex-col">
            <span className="text-greenS ">Start</span>
            <div className="flex gap-5 items-center justify-between ">
              <h1 className="flex gap-1 text-[24px] font-bold text-black">
                Nov 24 <span className="text-greenS  text-[10px]">2023</span>
              </h1>
              <div className="p-2 w-[100px] h-[50px]   border-2 border-black rounded-[50px] flex justify-center items-center">
                <h1>08.00 a.m</h1>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-greenS   ">End</span>
            <div className="flex gap-5 items-center justify-between">
              <h1 className="flex gap-1 text-[24px] font-bold text-black">
                Jan 24 <span className="text-greenS  text-[10px] ">2024</span>
              </h1>
              <div className="p-2 w-[100px] h-[50px]   border-2 border-black rounded-[50px] flex justify-center items-center">
                <h1>10.00 a.m</h1>
              </div>
            </div>
          </div>
        </div>

        <div className="  ">
          <h1 className="font-bold">Time-Zone - UTC</h1>
        </div>
        <img className="absolute bottom-0 right-0" src={rectangleB} alt="" />
      </div>
      <div className="bg-white w-[330px] h-[70px] mx-auto rounded-[25px] relative ">
        <div className=" flex py-5 gap-5 px-10">
          <img src={reward} alt="icon reward" />
          <h1 className="font-bold text-[20px]">FAQ</h1>
        </div>
        <div className="absolute -top-[0px] right-0 h-[35px] w-[35px] bg-[#ffc01d] rounded-full flex justify-center items-center ">
          <img className="w-[15px]" src={external} alt="external icon " />
        </div>
      </div>
      <div className="bg-white w-[330px] h-[140px] mx-auto rounded-[25px] px-10 py-5 flex flex-col justify-center items-start font-bold">
        <span>Total event Discount Pool</span>
        <h1 className="text-[40px]">$10.000+</h1>
      </div>
      <div className="bg-white w-[330px] h-[70px] mx-auto rounded-[25px] relative">
        <div className=" flex py-5 gap-5 px-10">
          <img src={book} alt="icon book" />
          <h1 className="font-bold text-[20px]">Discount Rules</h1>
        </div>
        <div className="absolute -top-[0px] right-0 h-[35px] w-[35px] bg-[#000000] rounded-full flex justify-center items-center ">
          <img className="w-[15px]" src={externalB} alt="external icon " />
        </div>
      </div>
    </section>
  );
};

export default Date;
