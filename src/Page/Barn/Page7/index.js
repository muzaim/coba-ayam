import React, { useContext, useEffect } from "react";
import "./style.css";
import Chicken2 from "../../../img/common/chicken2.png";
import Rumah from "../../../img/common/rumah.png";
import Cow2 from "../../../img/common/cow2.png";
import Header from "../../../Component/Diatom/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import "swiper/css";
import { UserContext } from "../../UserContext";

import axios from "axios";
import Cookies from "js-cookie";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const Page7 = ({ goToPage8, goToPage12, goToPage6 }) => {
  const { value, setValue, setSelectedAnimalID } = useContext(UserContext);
  const [userTernak, setUserTernak] = useState([]);
  const [jumlahUserTernak, setJumlahUserTernak] = useState(1);

  const openPage8 = (item) => {
    setSelectedAnimalID(item.name);
    goToPage8();
  };

  const Hewan = [
    {
      id: 1,
      name: "Ayam Eropa",
      skill: "Max 1.020 telur perhari",
      image: Chicken2,
      kenyang: 27,
    },
    {
      id: 2,
      name: "Sapi",
      skill: "Max penghasil susu 1.010 liter perhari",
      image: Cow2,
      kenyang: 78,
    },
    {
      id: 3,
      name: "Domba",
      skill: "Max 25 Kg daging perhari",
      image: Cow2,
      kenyang: 12,
    },
    // {
    //   id: 4,
    //   name: "Babi",
    //   skill: "Max 25 Kg daging perhari",
    //   image: Domba,
    //   kenyang: 90,
    // },
    // {
    //   id: 5,
    //   name: "Kuda",
    //   skill: "Max 25 Kg daging perhari",
    //   image: Kuda,
    //   kenyang: 57,
    // },
    // {
    //   id: 6,
    //   name: "Ayam Kecil",
    //   skill: "Max 25 Kg daging perhari",
    //   image: AyamKecil,
    //   kenyang: 32,
    // },
    // {
    //   id: 7,
    //   name: "Kelinci",
    //   skill: "Max 25 Kg daging perhari",
    //   image: Kelinci,
    //   kenyang: 10,
    // },
    // {
    //   id: 8,
    //   name: "Keledai",
    //   skill: "Max 25 Kg daging perhari",
    //   image: Keledai,
    //   kenyang: 62,
    // },
    // {
    //   id: 9,
    //   name: "Kerbau",
    //   skill: "Max 25 Kg daging perhari",
    //   image: Kerbau,
    //   kenyang: 57,
    // },
  ];

  const getUserTernak = async () => {
    const userCookie = Cookies.get("user");
    try {
      let userInfo = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/user-ternak`,
        {
          params: {
            token: userCookie,
          },
        }
      );
      let dataUser = userInfo.data.Data;
      console.log(`jumalh user ternak`, dataUser.length);
      setUserTernak(dataUser);
      setJumlahUserTernak(dataUser.length);
      console.log(dataUser);

      // console.log(`ini data user dari main page`, dataUser);
      // console.log(`info`, info);
      // console.log(`harta`, harta);
    } catch (error) {
      console.log(`dari ketika getUsrInfo `, error);
    }
  };

  useEffect(() => {
    getUserTernak();
    console.log(jumlahUserTernak);
  }, []);
  return (
    <div className="w-full h-screen overflow-hidden bg-barn bg-cover mx-auto lg:max-w-6xl lg:h-[70%] ">
      <div className="w-[90%] h-full mx-auto">
        {/* HEADER */}
        <div className="h-[15%]">
          <Header
            Diamond={true}
            Egg={true}
            Meat={true}
            Milk={true}
            QuestBook={true}
            Action1={goToPage6}
            harta={value}
            setHarta={setValue}
          />
        </div>
        {/* HEADER END */}
        {/* CONTENT */}
        <div className="w-full h-[65%] animate-fadeInKu">
          <div className="w-full h-full justify-center flex items-start">
            <div className="w-full h-full flex flex-col ">
              <div className="w-full h-10 flex justify-center items-center lg:h-20">
                <span className="text-white text-xl tracking-widest font-bold uppercase">
                  ternakku
                </span>
              </div>
              <div className="w-full h-full flex justify-center items-center">
                {/* TENGAH */}
                {/* Jumlah user ternak =1*/}
                {jumlahUserTernak === 1 ? (
                  <div className="flex w-full h-full overflow-hidden">
                    <Swiper
                      spaceBetween={50}
                      slidesPerView={1}
                      pagination={{
                        clickable: true,
                        dynamicBullets: true,
                      }}
                    >
                      {userTernak.map((item) => {
                        const { id, name, avatar } = item;
                        const angka = Math.floor(Math.random() * 100) + 1;
                        return (
                          <SwiperSlide key={id}>
                            <div
                              key={id}
                              className="flex justify-center items-center bg-papan1 bg-[length:200px_160px] bg-center bg-no-repeat cursor-pointer mt-3"
                              onClick={() => openPage8(item)}
                            >
                              <div className="w-[80%] h-[80%]">
                                <div className="flex flex-col items-center my-5">
                                  <span className="text-sm  uppercase font-custom1 mb-2">
                                    {name}
                                  </span>
                                  <img
                                    src={avatar}
                                    alt=""
                                    className="w-[5rem] h-[5rem]  lg:w-60 lg:h-64"
                                  />
                                  <div className="w-32 bg-gray-200 h-3 rounded-full overflow-hidden lg:w-72 lg:h-10 mt-3">
                                    <div
                                      className="bg-[#7fa65a] h-3 rounded-full lg:h-10"
                                      style={{ width: `${angka}%` }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                ) : null}
                {/* Jumlah user ternak =2 */}
                {jumlahUserTernak === 2 ? (
                  <div className="flex w-full h-full overflow-hidden">
                    <Swiper
                      spaceBetween={50}
                      slidesPerView={2}
                      pagination={{
                        clickable: true,
                        dynamicBullets: true,
                      }}
                    >
                      {userTernak.map((item) => {
                        const { id, name, avatar } = item;
                        const angka = Math.floor(Math.random() * 100) + 1;
                        return (
                          <SwiperSlide key={id}>
                            <div
                              key={id}
                              className="flex justify-center items-center bg-papan1 bg-[length:200px_160px] bg-center bg-no-repeat cursor-pointer mt-3"
                              onClick={() => openPage8(item)}
                            >
                              <div className="w-[80%] h-[80%]">
                                <div className="flex flex-col items-center my-5">
                                  <span className="text-sm  uppercase font-custom1 mb-2">
                                    {name}
                                  </span>
                                  <img
                                    src={avatar}
                                    alt=""
                                    className="w-[5rem] h-[5rem]  lg:w-60 lg:h-64"
                                  />
                                  <div className="w-32 bg-gray-200 h-3 rounded-full overflow-hidden lg:w-72 lg:h-10 mt-3">
                                    <div
                                      className="bg-[#7fa65a] h-3 rounded-full lg:h-10"
                                      style={{ width: `${angka}%` }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                ) : null}
                {/* Jumlah user ternak =2 */}
                {jumlahUserTernak >= 3 ? (
                  <div className="flex w-full h-full overflow-hidden">
                    <Swiper
                      spaceBetween={50}
                      slidesPerView={3}
                      pagination={{
                        clickable: true,
                        dynamicBullets: true,
                      }}
                    >
                      {userTernak.map((item) => {
                        const { id, name, avatar } = item;
                        const angka = Math.floor(Math.random() * 100) + 1;
                        return (
                          <SwiperSlide key={id}>
                            <div
                              key={id}
                              className="flex justify-center items-center bg-papan1 bg-[length:200px_160px] bg-center bg-no-repeat cursor-pointer mt-3"
                              onClick={() => openPage8(item)}
                            >
                              <div className="w-[80%] h-[80%]">
                                <div className="flex flex-col items-center my-5">
                                  <span className="text-sm  uppercase font-custom1 mb-2">
                                    {name}
                                  </span>
                                  <img
                                    src={avatar}
                                    alt=""
                                    className="w-[5rem] h-[5rem]  lg:w-60 lg:h-64"
                                  />
                                  <div className="w-32 bg-gray-200 h-3 rounded-full overflow-hidden lg:w-72 lg:h-10 mt-3">
                                    <div
                                      className="bg-[#7fa65a] h-3 rounded-full lg:h-10"
                                      style={{ width: `${angka}%` }}
                                    ></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                    </Swiper>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        {/* CONTENT END*/}
        {/* FOOTER */}
        <div className="h-[20%] animate-fadeInKu">
          <div className="grid grid-cols-3 gap-3">
            <div className=""></div>

            <div
              className="w-full h-full bg-gradient-to-r from-cyan-300 to-blue-700 rounded-full py-3 text-center group active:bg-gradient-to-r active:from-blue-500 active:to-cyan-500 "
              onClick={goToPage12}
            >
              <span className="font-semibold capitalize text-lg tracking-wider  text-white">
                Tambah ternak
              </span>
            </div>
          </div>
        </div>
        {/* FOOTER END*/}
      </div>
    </div>
  );
};

export default Page7;
