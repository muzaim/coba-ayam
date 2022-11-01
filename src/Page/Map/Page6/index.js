import React, { useContext, useEffect, useState } from "react";
import EggImg from "../../../img/common/egg.png";
import MeatImg from "../../../img/common/meat.png";
import MilkImg from "../../../img/common/milk.png";
import ArrowDown from "../../../img/usage/down.png";
import { UserContext } from "../../UserContext";
import axios from "axios";
import Cookies from "js-cookie";
import Header from "../../../Component/Diatom/Header";
import useSound from "use-sound";
import buddy from "../../../music/buddy.mp3";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const Page6 = ({
  goToPage7,
  goToPage13,
  goToPage15,
  getUserInfo,
  goToMenu,
  goToPage16,
  playPop1,
  playWarningSound,
  playGoBackSound,
}) => {
  const { value, setValue } = useContext(UserContext);
  const [telur, setTelur] = useState(null);
  const [daging, setDaging] = useState(null);
  const [susu, setSusu] = useState(null);
  const [play] = useSound(buddy);

  const getUserInfo2 = async () => {
    const userCookie = Cookies.get("user");

    try {
      let userInfo = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/user-info`,
        {
          params: {
            token: userCookie,
          },
        }
      );
      let dataUser = userInfo.data.Data;
      setDaging(dataUser.user_wallet.hasil_ternak[3].qty);
      setSusu(dataUser.user_wallet.hasil_ternak[2].qty);
      setTelur(dataUser.user_wallet.hasil_ternak[1].qty);
    } catch (error) {
      console.log(`dari ketika getUsrInfo `, error);
    }
  };

  const BaruBalik = () => {
    console.log(`1`);
    MySwal.fire({
      title: "Welcome back!",
      position: "center",
      text: `Kamu baru saja kembali, ayo beri makan ternakmu!`,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Oke",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(`aku iya`);
        play();
        console.log(`dsada`);
      }
    });
  };

  useEffect(() => {
    getUserInfo();
    getUserInfo2();
    // BaruBalik();
    // play();
  }, []);
  // useEffect(() => {
  //   BaruBalik();
  // }, []);
  return (
    <div className="w-full h-screen overflow-hidden bg-farmCultivature bg-cover mx-auto lg:max-w-6xl lg:h-[70%]">
      <div className="w-[90%] h-full mx-auto ">
        {/* HEADER */}
        <div className="h-[15%]">
          <Header
            Diamond={true}
            LogOut={true}
            ActionLogout={goToMenu}
            harta={value}
            setHarta={setValue}
          />
        </div>
        {/* HEADER END */}
        {/* CONTENT */}
        <div className="relative h-[50%] ">
          {/* TES MUSIC */}
          <BaruBalik />
          {/* TES MUSIC */}

          {/* KE Warung */}
          <div
            className="top-[8rem] left-[12.5rem] absolute group animate-bounce"
            onClick={() => {
              playPop1();
              goToPage13();
            }}
          >
            <div className="flex flex-col justify-center items-center">
              <span className="text-xl text-white tracking-wider font-custom1">
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
            onClick={() => {
              playPop1();
              goToPage16();
            }}
          >
            <div className="flex flex-col justify-center items-center">
              <span className="text-xl text-white tracking-wider font-custom1">
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
            onClick={() => {
              playPop1();
              goToPage7();
            }}
          >
            <div className="flex flex-col justify-center items-center">
              <span className="text-xl text-white tracking-wider font-custom1">
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
            onClick={() => {
              playPop1();
              goToPage15();
            }}
          >
            <div className="flex flex-col justify-center items-center">
              <span className="text-xl text-white tracking-wider font-custom1">
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
          {/* <div
            className="top-[6rem] right-[15.5rem] absolute group animate-bounce"
            onClick={goToPage13}
          >
            <div className="flex flex-col justify-center items-center">
              <span className="text-xl text-white tracking-wider font-custom1">
                Rumah
              </span>
              <img
                src={ArrowDown}
                alt=""
                className="w-10 group-active:opacity-80"
              />
            </div>
          </div> */}
        </div>
        {/* CONTENT END*/}
        {/* FOOTER */}
        <div className="h-[10%]">
          <div className="w-[25%] flex flex-col relative gap-2 py-3 -mt-10">
            <div className="w-40 h-10 bg-blue-600 rounded-full items-center flex justify-center gap-1">
              <div className="flex items-center justify-center ">
                <img src={MeatImg} alt="" className="w-8" />
              </div>
              <span className="font-bold  text-sm text-white">{daging} Kg</span>
            </div>

            <div className="w-40 h-10 bg-blue-600 rounded-full items-center flex justify-center gap-1">
              <div className="flex items-center justify-center ">
                <img src={MilkImg} alt="" className="w-8" />
              </div>

              <span className="font-bold  text-sm text-white">
                {susu} Liter
              </span>
            </div>

            <div className="w-40 h-10 bg-blue-600 rounded-full items-center flex justify-center gap-1">
              <div className="flex items-center justify-center ">
                <img src={EggImg} alt="" className="w-8" />
              </div>
              <span className="font-bold  text-sm text-white">
                {telur} Butir
              </span>
            </div>

            <Header harta={value} setHarta={setValue} />
          </div>
        </div>
        {/* FOOTER END*/}
      </div>
    </div>
  );
};

export default Page6;
