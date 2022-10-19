import React, { useContext } from "react";
import Diamond from "../../../img/common/diamond.png";
import Pouch from "../../../img/common/pouch.png";
import Header from "../../../Component/Diatom/Header";
import { UserContext } from "../../UserContext";
import axios from "axios";
import Cookies from "js-cookie";

const Page15 = ({ Action1, Action2, Action3 }) => {
  const { value } = useContext(UserContext);

  const Makanan = [
    {
      id: 1,
      value: "10",
      price: "100",
    },
    {
      id: 2,
      value: "50",
      price: "500",
    },
    {
      id: 3,
      value: "100",
      price: "1.000",
    },
    {
      id: 4,
      value: "300",
      price: "3.000",
    },
    {
      id: 5,
      value: "500",
      price: "5.000",
    },
    {
      id: 6,
      value: "1.000",
      price: "10.000",
    },
    {
      id: 7,
      value: "3.000",
      price: "10.000",
    },
    {
      id: 8,
      value: "5.000",
      price: "50.000",
    },
    {
      id: 9,
      value: "10.000",
      price: "100.000",
    },
  ];

  const goToPage6 = () => {
    Action1();
  };

  const goToPage13 = () => {
    Action2();
  };

  const getUserInfo = () => {
    Action3();
  };

  const cobaTopup = async (e) => {
    const userCookie = Cookies.get("user");
    e.preventDefault();
    try {
      let res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/buy-diamon`,
        {
          token: userCookie,
          diamon_id: 1,
        }
      );
      let data = res.data;
      getUserInfo();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full h-screen overflow-hidden bg-outFarm bg-cover mx-auto lg:max-w-6xl lg:h-[70%]">
      <div className="w-[90%] h-full mx-auto">
        {/* HEADER */}
        <div className="h-[15%]">
          {/* <Header
            Diamond={true}
            Egg={true}
            Pouch={true}
            QuestBook={true}
            Action1={goToPage6}
            harta={value}
            setHarta={setValue}
          /> */}
        </div>
        {/* HEADER END */}
        {/* CONTENT */}
        <div className="w-full">
          <div className="col-span-2 h-12 text-center flex justify-center">
            <span className="text-white text-xl tracking-widest font-bold uppercase">
              beri pakan ternakku!
            </span>
          </div>
          <div className="grid grid-rows-3 grid-cols-3 grid-flow-col gap-3 ">
            {Makanan.map((item) => {
              return (
                <div
                  className=" flex items-center justify-center"
                  key={item.id}
                >
                  <div className="w-52  py-2 bg-[#f6f3e4] rounded-full items-center flex justify-center active:bg-[#b6def2]">
                    <img src={Pouch} alt="" className="w-7" />
                    <span className="font-bold  text-sm text-[#782443]">
                      {item.value} Kg
                    </span>
                    <span className="font-semibold mx-1">=</span>
                    <img src={Diamond} alt="" className="w-7" />
                    <span className="font-semibold">{item.price}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* CONTENT END*/}
        {/* FOOTER */}
        <div className="grid grid-cols-2 mt-5">
          <div className=" px-10 flex justify-end">
            <div
              className="w-52 h-full bg-[#329bd1] rounded-full py-3 text-center"
              onClick={goToPage6}
            >
              <div className="font-semibold capitalize text-lg tracking-wider text-white">
                kembali
              </div>
            </div>
          </div>
          <div className=" px-10 flex justify-start">
            <div
              className="w-52 h-full bg-[#ff1616] rounded-full py-3 text-center "
              onClick={cobaTopup}
            >
              <div className="font-semibold capitalize text-lg tracking-wider text-white">
                Coba Top Up
              </div>
            </div>
          </div>
        </div>
        {/* FOOTER END*/}
      </div>
    </div>
  );
};

export default Page15;
