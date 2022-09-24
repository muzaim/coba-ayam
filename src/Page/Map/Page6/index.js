import React from "react";
import { useState } from "react";
import Shop from "../../../img/common/shop.png";
import Barn from "../../../img/common/barn.png";
import ArrowDown from "../../../img/usage/down.png";

import Header from "../../../Component/Diatom/Header";

const Page6 = ({ Action1, Action2, Action3, Action4 }) => {
  const goToPage5 = () => {
    Action1();
  };
  const goToPage7 = () => {
    Action2();
  };
  const goToPage13 = () => {
    Action3();
  };
  const goToPage15 = () => {
    Action4();
  };

  return (
    <div className="w-full h-screen overflow-hidden bg-farmCultivature bg-cover mx-auto lg:max-w-6xl lg:h-[70%]">
      <div className="w-[90%] h-full mx-auto ">
        {/* HEADER */}
        <div class="h-[15%]">
          <Header Diamond={true} />
        </div>
        {/* HEADER END */}
        {/* CONTENT */}
        <div className="relative h-[50%]">
          {/* KE BARN */}
          <div
            className="top-[3rem] right-[10rem] absolute group animate-bounce"
            onClick={goToPage7}
          >
            <img
              src={ArrowDown}
              alt=""
              className="w-16 group-active:opacity-80"
            />
          </div>
          {/* KE MARKET */}
          <div
            className="top-[1rem] right-[32rem] absolute group animate-bounce"
            onClick={goToPage15}
          >
            <img
              src={ArrowDown}
              alt=""
              className="w-16 group-active:opacity-80"
            />
          </div>
          {/* KE NPC MENU */}
          <div
            className="top-[10rem] right-[18rem] absolute group animate-bounce"
            onClick={goToPage5}
          >
            <img
              src={ArrowDown}
              alt=""
              className="w-16 group-active:opacity-80"
            />
          </div>
          {/* KE SHOP */}
          <div
            className="top-[5rem] right-[25rem] absolute group animate-bounce"
            onClick={goToPage13}
          >
            <img
              src={ArrowDown}
              alt=""
              className="w-16 group-active:opacity-80"
            />
          </div>
        </div>
        {/* CONTENT END*/}
        {/* FOOTER */}
        <div class="h-[10%]">
          <div class="flex flex-col relative gap-2 py-3">
            <div className="w-44 py-2 bg-[#5e17eb] text-center rounded-full active:bg-[#ffffff] group">
              <span className="text-white font-semibold group-active:text-[#5e17eb] ">
                Susu 100 Liter
              </span>
            </div>
            <div className="w-44 py-2 bg-[#5e17eb] text-center rounded-full active:bg-[#ffffff] group">
              <span className="text-white font-semibold group-active:text-[#5e17eb] ">
                Telur 365 Butir
              </span>
            </div>
          </div>
        </div>
        {/* FOOTER END*/}
      </div>
    </div>
  );
};

export default Page6;
