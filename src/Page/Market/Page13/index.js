import React, { useState, useContext } from "react";
import Chef1 from "../../../img/common/chef1.png";
import Jualan from "../../../img/common/jualan.png";
import Play from "../../../img/usage/play.png";
import Header from "../../../Component/Diatom/Header";
import { UserContext } from "../../UserContext";

const Page13 = ({ Action1, Action2 }) => {
  const { value, setValue } = useContext(UserContext);
  const [index, setIndex] = useState(0);
  const [backDialog, setBackDialog] = useState(false);

  const goToPage6 = () => {
    Action2();
  };

  const Dialog = [
    {
      id: 1,
      text: "Kamu ingin jual 100 telur?",
    },
    {
      id: 2,
      text: "Kamu ingin jual 200 daging?",
    },
    {
      id: 3,
      text: "Kamu ingin jual 300 susu?",
    },
    {
      id: 4,
      text: "Kamu ingin jual 400 bulu domba?",
    },
    {
      id: 5,
      text: "Kamu ingin jual 500 daging?",
    },
  ];

  const checkNumber = (number) => {
    if (number > Dialog.length - 1) {
      return 0;
    }
    if (number < 0) {
      return Dialog.length - 1;
    }
    return number;
  };

  const nextDialog = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const openBackDialog = () => {
    setBackDialog((current) => !current);
  };

  return (
    <div className="w-full h-screen overflow-hidden bg-caffe bg-cover mx-auto lg:max-w-6xl lg:h-[70%]">
      <div className="w-full h-full mx-auto">
        {/* HEADER */}
        <div class="w-[90%] h-[15%] mx-auto">
          <Header
            Diamond={true}
            Egg={true}
            Meat={true}
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
              {/* BACK DIALOG */}
              {backDialog ? (
                <div className="absolute z-20 right-[16rem] top-5">
                  <div className="w-[22rem] h-36 p-5 bg-[#782443] rounded-xl ml-5 ring-offset-2 ring-4 ring-[#782443] flex items-center">
                    <div className="w-full h-32 text-center items-center grid  mx-auto ">
                      <span className="text-white font-semibold text-justify text-base font-openSans">
                        Yahh sayang sekali toko anda ditutup, padahal banyak
                        orderan daging susu dan telur. Ayo berikan makan hewan
                        kamu lagi!
                      </span>
                      <div className="flex justify-end h-6">
                        <img
                          src={Play}
                          alt=""
                          className="w-6 animate-pulse"
                          onClick={goToPage6}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
              {/* GEROBAK */}
              <div className="absolute z-10 -top-12">
                <img src={Jualan} alt="" className="" />
              </div>
              {/* BUTTON */}
              <div className="absolute right-3 z-20 top-[6.5rem]">
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
                        onClick={nextDialog}
                      >
                        <span className="uppercase text-xl text-white tracking-widest">
                          skip
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* DIALOG NPC */}
              {backDialog ? null : (
                <div className="absolute z-10 right-[12rem] top-2">
                  <div className="w-48 h-24 p-3 bg-[#782443] rounded-xl ml-5 ring-offset-2 ring-4 ring-[#782443] ">
                    <div className="w-32 h-full text-center items-center flex mx-auto">
                      <span className="text-white">{Dialog[index].text}</span>
                    </div>
                  </div>
                </div>
              )}
              {/* BACK */}
              {backDialog ? null : (
                <div className="absolute z-10 -bottom-[18.6rem] left-20">
                  <div
                    className="w-40 h-10 bg-[#329bd1] rounded-full items-center flex active:bg-[#51a9d5]"
                    onClick={openBackDialog}
                  >
                    <div className="w-full text-center ">
                      <span className="font-bold  text-sm text-white tracking-widest">
                        Tutup Toko
                      </span>
                    </div>
                  </div>
                </div>
              )}
              {/* NPC */}
              <div className="w-full h-full bg-green-300 top-[6.5rem] relative">
                <div className="absolute">
                  <img src={Chef1} alt="" className="w-24 bg-white" />
                </div>
                <div className="absolute left-20">
                  <img src={Chef1} alt="" className="w-24 bg-red-300" />
                </div>
                <div className="absolute left-40">
                  <img src={Chef1} alt="" className="w-24 bg-purple-300" />
                </div>
                <div className="absolute left-60">
                  <img src={Chef1} alt="" className="w-24 bg-pink-300" />
                </div>
                <div className="absolute left-80">
                  <img src={Chef1} alt="" className="w-24 bg-yellow-300" />
                </div>
                <div className="absolute left-[31rem]">
                  <img src={Chef1} alt="" className="w-24 bg-slate-300" />
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
