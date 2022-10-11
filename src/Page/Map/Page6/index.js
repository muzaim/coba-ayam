import React, { useContext } from "react";
import Shop from "../../../img/common/shop.png";
import Barn from "../../../img/common/barn.png";
import ArrowDown from "../../../img/usage/down.png";
import { UserContext } from "../../UserContext";
import axios from "axios";
import { useEffect } from "react";

import Header from "../../../Component/Diatom/Header";

const Page6 = ({ Action1, Action2, Action3, Action4 }) => {
  const { userToken, setUserLogin, value, setValue } = useContext(UserContext);

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

  const doLogin = async () => {
    try {
      let res = await axios.get(`${process.env.REACT_APP_BASE_URL}/user-info`, {
        params: { token: userToken },
      });
      let data = res.data;
      let info = data.Data.user_active;
      let harta = data.Data.user_wallet;
      setUserLogin(info);
      setValue((prevState) => ({
        ...prevState,
        [value.diamond]: (value.diamond = harta.diamon),
        [value.pakan]: (value.pakan = harta.pakan),
        [value.egg]: (value.egg = harta.hasil_ternak[1].qty),
        [value.milk]: (value.milk = harta.hasil_ternak[2].qty),
        [value.meat]: (value.meat = harta.hasil_ternak[3].qty),
      }));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    doLogin();
    console.log(`user token=`, userToken);
  }, []);

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
                Daging {value.meat} Kg
              </span>
            </div>
            <div className="w-44 py-2 bg-[#5e17eb] text-center rounded-full active:bg-[#ffffff] group">
              <span className="text-white font-semibold group-active:text-[#5e17eb] ">
                Susu {value.milk} Liter
              </span>
            </div>
            <div className="w-44 py-2 bg-[#5e17eb] text-center rounded-full active:bg-[#ffffff] group">
              <span className="text-white font-semibold group-active:text-[#5e17eb] ">
                Telur {value.egg} Butir
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
