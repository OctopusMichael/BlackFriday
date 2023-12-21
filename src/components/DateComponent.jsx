import React from "react";

const DateComponent = () => {
  return (
    <section className="">
      <div className="bg-greenF flex flex-col justify-between  w-[350px] h-[300px] rounded-[50px] mx-auto relative py-5 px-10">
        <div className="absolute bg-white bottom-[0px] right-0 w-[200px] h-[25px]" />
        <div className="absolute bg-white bottom-[25px] right-0 w-[150px] h-[25px] rounded-tl-[50px]" />
        <div className="absolute bg-greenF bottom-0 left-[140px] w-[60px] h-[25px] rounded-br-[50px]" />
        <div className="absolute bg-white bottom-[50px] right-0 w-[150px] h-[25px] " />
        <div className="absolute bg-greenF bottom-[50px] right-0 w-[150px] h-[25px] rounded-br-[50px] " />
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
              <div className="p-2 w-[100px] h-[50px]   border-2 border-black rounded-[50px] justify-center items-center">
                <h1>10.00 a.m</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="  ">
          <h1 className="font-bold">Time-Zone - UTC</h1>
        </div>
      </div>
    </section>
  );
};

export default DateComponent;
