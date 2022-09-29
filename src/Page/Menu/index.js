import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Tama from "../../img/common/tamako.png";

const Menu = ({ Action1 }) => {
  const [loading, setLoading] = useState(true);

  const LoadingBar = () => {
    return (
      <div class="w-72  bg-gray-200 h-7 rounded-xl overflow-hidden block mx-auto mt-12 ">
        <div
          class=" bg-indigo-600 h-7 rounded-xl animate-running"
          style={{ width: `100%` }}
        ></div>
      </div>
    );
  };

  const goToPage2 = () => {
    Action1();
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4500);
  }, []);

  const Display = () => {
    return (
      <div className="grid gap-2 mt-44 ">
        <div
          className="block mx-auto py-4 px-16  rounded-3xl uppercase tracking-[0.15rem] font-extrabold text-white font-openSans active:bg-[#ffffff] group"
          onClick={goToPage2}
        >
          <img src={Tama} alt="" className="w-[26rem]" />
        </div>
        <div
          className="block mx-auto py-4 px-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl uppercase tracking-[0.15rem] font-extrabold text-white font-openSans active:bg-[#ffffff] group"
          onClick={goToPage2}
        >
          <span className="group-active:text-[#5e17eb] ">Masuk</span>
        </div>
        <div
          className="block mx-auto py-2 px-16 rounded-3xl uppercase tracking-[0.15rem] font-extrabold text-white font-openSans active:bg-[#ffffff] group"
          onClick={goToPage2}
        >
          <span className="group-active:text-[#5e17eb] uppercase">
            Belum punya akun? buat akun
          </span>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-full overflow-hidden bg-farmBarn bg-cover mx-auto lg:max-w-6xl lg:h-[70%] ">
      <div className="h-full">
        <div className="flex h-full items-end justify-center pb-5 ">
          {loading ? <LoadingBar /> : <Display />}
        </div>
      </div>
    </div>
  );
};

export default Menu;
