import React, { useState, useContext } from "react";
import Chef1 from "../../../img/common/chef1.png";
import Jualan from "../../../img/common/jualan.png";
import Header from "../../../Component/Diatom/Header";
import { UserContext } from "../../UserContext";

const Page13 = ({ Action1, Action2 }) => {
  const { value, setValue } = useContext(UserContext);

  const goToPage6 = () => {
    Action2();
  };

  return (
    <div className="w-full h-screen overflow-hidden bg-caffe bg-cover mx-auto lg:max-w-6xl lg:h-[70%]">
      <div className="w-full h-full mx-auto">
        {/* HEADER */}
        <div class="w-[90%] h-[15%] mx-auto">
          <Header
            Diamond={true}
            Egg={true}
            Pouch={true}
            Milk={true}
            Action1={goToPage6}
            harta={value}
            setHarta={setValue}
          />
        </div>
        {/* HEADER END */}
        {/* CONTENT */}
        <div class="h-full flex">
          <div className="w-full h-full z-10 ">
            <div className="relative">
              <div className="absolute z-10 -mt-[8rem]">
                <img src={Jualan} alt="" className="" />
              </div>
              <div className="absolute right-3 z-20">
                <div className="w-48 h-32 my-auto">
                  <div className="w-full h-full flex   items-center align-middle">
                    <div class="w-full flex flex-col gap-2">
                      <div className="w-full h-full py-2 bg-blue-500 rounded-full text-center">
                        <span className="uppercase text-xl text-white tracking-widest">
                          jual
                        </span>
                      </div>
                      <div
                        className="w-full h-full py-2 bg-green-500 rounded-full text-center"
                        onClick={goToPage6}
                      >
                        <span className="uppercase text-xl text-white tracking-widest">
                          skip
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute z-10 right-[19rem] -top-16">
                <div className="w-48 h-24 px-5 pb-5 bg-[#782443] rounded-xl ml-5 ring-offset-2 ring-4 ring-[#782443]">
                  <div className="w-full h-full text-center  ">
                    <span className="text-white">
                      Kamu mau pesan telur 100 Butir?
                    </span>
                  </div>
                </div>
              </div>
              <div className="absolute z-10 -bottom-[12rem] left-20">
                {" "}
                <div
                  className="w-40 h-10 bg-[#329bd1] rounded-full items-center flex active:bg-[#51a9d5]"
                  onClick={goToPage6}
                >
                  <div className="w-full text-center ">
                    <span className="font-bold  text-sm text-white tracking-widest">
                      Back
                    </span>
                  </div>
                </div>
              </div>
              <div className="w-full h-full bg-green-300 mt-20 relative">
                <div className="absolute">
                  <img src={Chef1} alt="" className="w-24" />
                </div>
                <div className="absolute left-20">
                  <img src={Chef1} alt="" className="w-24" />
                </div>
                <div className="absolute left-40">
                  <img src={Chef1} alt="" className="w-24" />
                </div>
                <div className="absolute left-60">
                  <img src={Chef1} alt="" className="w-24" />
                </div>
                <div className="absolute left-80">
                  <img src={Chef1} alt="" className="w-24" />
                </div>
                <div className="absolute left-[28rem]">
                  <img src={Chef1} alt="" className="w-24" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CONTENT END*/}
      </div>
    </div>
  );
};

export default Page13;
