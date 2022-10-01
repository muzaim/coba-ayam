import React, { useContext } from "react";
import Shop from "../../../img/common/shop.png";
import Barn from "../../../img/common/barn.png";
import ArrowDown from "../../../img/usage/down.png";
import { UserContext } from "../../UserContext";

import Header from "../../../Component/Diatom/Header";

const Page6 = ({ Action1, Action2, Action3, Action4 }) => {
  const { value, setValue } = useContext(UserContext);

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
          <Header Diamond={true} harta={value} setHarta={setValue} />
        </div>
        {/* HEADER END */}
        {/* CONTENT */}
        <div className="relative h-[50%] ">
          {/* KE Warung */}
          <div
            className="top-[8rem] left-[12.5rem] absolute group animate-bounce"
            onClick={goToPage13}
          >
            <div className="flex flex-col justify-center items-center">
              <span className="text-2xl text-white tracking-wider font-comic">
                Warung
              </span>
              <img
                src={ArrowDown}
                alt=""
                className="w-10 group-active:opacity-80"
              />
            </div>
          </div>
          {/* KE BISNIS */}
          <div
            className="top-[0rem] left-[14rem] absolute group animate-bounce"
            onClick={goToPage15}
          >
            <div className="flex flex-col justify-center items-center">
              <span className="text-2xl text-white tracking-wider font-comic">
                Bisnis
              </span>
              <img
                src={ArrowDown}
                alt=""
                className="w-10 group-active:opacity-80"
              />
            </div>
          </div>
          {/* KE KANDANGKU */}
          <div
            className="top-[.5rem] right-[16rem] absolute group animate-bounce"
            onClick={goToPage7}
          >
            <div className="flex flex-col justify-center items-center">
              <span className="text-2xl text-white tracking-wider font-comic">
                Kandangku
              </span>
              <img
                src={ArrowDown}
                alt=""
                className="w-10 group-active:opacity-80"
              />
            </div>
          </div>
          {/* KE TOP UP */}
          <div
            className="top-[4rem] right-[8rem] absolute group animate-bounce"
            onClick={goToPage15}
          >
            <div className="flex flex-col justify-center items-center">
              <span className="text-2xl text-white tracking-wider font-comic">
                Top Up
              </span>
              <img
                src={ArrowDown}
                alt=""
                className="w-10 group-active:opacity-80"
              />
            </div>
          </div>
          {/* KE RUMAH*/}
          <div
            className="top-[6rem] right-[15.5rem] absolute group animate-bounce"
            onClick={goToPage13}
          >
            <div className="flex flex-col justify-center items-center">
              <span className="text-2xl text-white tracking-wider font-comic">
                Rumah
              </span>
              <img
                src={ArrowDown}
                alt=""
                className="w-10 group-active:opacity-80"
              />
            </div>
          </div>
        </div>
        {/* CONTENT END*/}
        {/* FOOTER */}
        <div class="h-[10%]">
          <div class="w-[25%] flex flex-col relative gap-2 py-3 -mt-10">
            <div className="w-44 py-2 bg-[#5e17eb] text-center rounded-full active:bg-[#ffffff] group">
              <span className="text-white font-semibold group-active:text-[#5e17eb] ">
                Daging 100 Kg
              </span>
            </div>
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
