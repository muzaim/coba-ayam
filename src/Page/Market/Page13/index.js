import React, { useState, useContext } from "react";
import Chef1 from "../../../img/common/chef1.png";
import Jualan from "../../../img/common/jualan.png";
import Next from "../../../img/usage/play.png";
import Typewriter from "typewriter-effect";
import Header from "../../../Component/Diatom/Header";
import { UserContext } from "../../UserContext";

const Page13 = ({ Action1, Action2 }) => {
  const [skipDialog, setSkipDalog] = useState(false);
  const [nextButton, setNextButton] = useState(false);
  const { value, setValue } = useContext(UserContext);

  const goToPage6 = () => {
    Action2();
  };

  const goToPage14 = () => {
    Action1();
  };

  const skip = () => {
    setSkipDalog((current) => !current);
  };

  const DialogComplete = () => {
    return (
      <div className="w-[30rem] min-h-[7rem] px-5 pb-5 pt-10 bg-[#782443] rounded-xl ml-5 ring-offset-2 ring-4 ring-[#782443] relative">
        <div className="absolute -top-5 left-10">
          <div className="w-40 py-2 bg-[#782443] ring-offset-2 ring-4 ring-[#782443] rounded-xl text-center">
            <span className="text-white font-semibold text-justify text-md font-openSans">
              Mrs. Lisa
            </span>
          </div>
        </div>
        <div className="h-full grid gap-2 ">
          <h1 className="text-white font-semibold text-justify text-xl font-openSans">
            Kamu ingin membeli 100 butir telur dan 500 liter susu?
          </h1>
          <div className="flex justify-end h-6">
            <img
              src={Next}
              alt=""
              className="w-6 animate-pulse"
              onClick={goToPage14}
            />
          </div>
        </div>
      </div>
    );
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
              <div className="absolute z-10">
                <img src={Jualan} alt="" className="-mt-14" />
              </div>
              <div className="w-full h-full bg-white">
                <div className="">
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
