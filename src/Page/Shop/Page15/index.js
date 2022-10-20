import React, { useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";
import TopUpDiamond from "./TopUpDiamondPanel";
import TopUpPakan from "./TopUpPakanPanel";

const Page15 = ({ goToPage6, getUserInfo }) => {
  const [diamondPanel, setDiamondPanel] = useState(true);
  const [pakanPanel, setPakanPanel] = useState(false);
  const [daftarHargaDiamond, setDaftarHargaDiamond] = useState([]);
  const [daftarHargaPakan, setDaftarHargaPakan] = useState([]);
  const [diamodDipilih, setDiamondDipilih] = useState("");
  const [pakanDipilih, setPakanDipilih] = useState("");
  const [dialog, setDialog] = useState({
    show: false,
    message: "",
  });

  const openDiamondPanel = () => {
    setDiamondPanel(true);
    setPakanPanel(false);
  };

  const openPakanPanel = () => {
    setPakanPanel(true);
    setDiamondPanel(false);
  };

  const tangkapDiamondDipilih = (e) => {
    console.log(e.currentTarget);
    setDiamondDipilih(e.currentTarget.getAttribute("data-id"));
  };

  const tangkapPakanDipilih = (e) => {
    setPakanDipilih(e.currentTarget.getAttribute("data-id"));
  };

  const getDaftarHargaDimond = async () => {
    const userCookie = Cookies.get("user");
    try {
      let userInfo = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/harga-diamon`,
        {
          params: {
            token: userCookie,
          },
        }
      );
      let res = userInfo.data.data;
      setDaftarHargaDiamond(res);
    } catch (error) {
      console.log(`dari ketika getUsrInfo `, error);
    }
  };

  const buyDiamond = async () => {
    const userCookie = Cookies.get("user");
    if (!diamodDipilih) {
      setDialog({
        show: true,
        message: "Pilih diamondnya dulu!",
      });
      return;
    }
    try {
      let beli = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/buy-diamon`,
        {
          token: userCookie,
          diamon_id: diamodDipilih,
        }
      );
      let res = beli.data.message;
      setDiamondDipilih("");
      setDialog({
        show: true,
        message: res,
      });
    } catch (error) {
      setDialog({
        show: true,
        message: error.response.data.message,
      });
    }
  };

  const getDaftarHargaPakan = async () => {
    const userCookie = Cookies.get("user");
    try {
      let userInfo = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/harga-pakan`,
        {
          params: {
            token: userCookie,
          },
        }
      );
      let res = userInfo.data.data;
      setDaftarHargaPakan(res);
    } catch (error) {
      console.log(`dari ketika getUsrInfo `, error);
    }
  };

  const buyPakan = async () => {
    const userCookie = Cookies.get("user");
    if (!pakanDipilih) {
      setDialog({
        show: true,
        message: "Pilih pakannya dulu",
      });
      return;
    }
    try {
      let beli = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/buy-pakan`,
        {
          token: userCookie,
          pakan_id: pakanDipilih,
        }
      );
      let res = beli.data.message;
      setPakanDipilih("");
      setDialog({
        show: true,
        message: res,
      });
    } catch (error) {
      setDialog({
        show: true,
        message: error.response.data.message,
      });
    }
  };

  function numberWithCommas(num) {
    let newNum = parseInt(num);
    return newNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const tutupAlert = () => {
    setDialog({
      show: false,
      message: "",
    });
    getUserInfo();
  };

  useEffect(() => {
    getDaftarHargaDimond();
    getDaftarHargaPakan();
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden bg-outFarm bg-cover mx-auto lg:max-w-6xl lg:h-[70%]">
      <div className="w-[90%] h-full mx-auto">
        {/* HEADER */}
        <div className="h-[15%]">
          {dialog.show ? (
            <div
              className="absolute top-10 w-80 h-20 bg-[#782443] rounded-xl ml-5 ring-offset-2 ring-4 ring-[#782443] left-52 z-50 animate-fadeInKu "
              onClick={tutupAlert}
            >
              <div className="w-full h-full px-16 text-center items-center flex animate-pulse">
                <span className="text-white text-xl">{dialog.message}!</span>
              </div>
            </div>
          ) : null}
        </div>
        {/* HEADER END */}
        {/* CONTENT */}
        <div className="w-full">
          <div className="flex justify-around  w-full -mt-3  rounded-t-xl mb-5">
            <div
              className={`${
                diamondPanel
                  ? "border-x-[1px] border-t-[1px] border-white  rounded-t-xl w-full h-full py-3 text-center"
                  : "w-full h-full py-3 text-center border-b-[1px] border-white"
              }`}
            >
              <span
                className={`${
                  diamondPanel
                    ? "text-white text-xl cursor-pointer font-bold"
                    : "text-white text-xl cursor-pointer"
                }`}
                onClick={openDiamondPanel}
              >
                Top Up Diamond
              </span>
            </div>
            <div
              className={`${
                pakanPanel
                  ? "border-x-[1px] border-t-[1px] border-white rounded-t-xl w-full h-full py-3 text-center"
                  : "w-full h-full py-3 text-center border-b-[1px] border-white"
              }`}
            >
              <span
                className={`${
                  pakanPanel
                    ? "text-white text-xl cursor-pointer font-bold"
                    : "text-white text-xl cursor-pointer"
                }`}
                onClick={openPakanPanel}
              >
                Top Up Pakan
              </span>
            </div>
          </div>
          {diamondPanel ? (
            <TopUpDiamond
              daftarHargaDiamond={daftarHargaDiamond}
              tangkapDiamondDipilih={tangkapDiamondDipilih}
              numberWithCommas={numberWithCommas}
            />
          ) : (
            <TopUpPakan
              daftarHargaPakan={daftarHargaPakan}
              tangkapPakanDipilih={tangkapPakanDipilih}
              numberWithCommas={numberWithCommas}
            />
          )}
        </div>
        {/* CONTENT END*/}
        {/* FOOTER */}
        <div className="grid grid-cols-2 mt-5">
          <div className=" px-10 flex justify-end">
            <button
              type="button"
              className="w-52 h-full bg-gradient-to-r from-pink-400 to-red-600 active:bg-gradient-to-r active:from-red-500 active:to-pink-500  rounded-full py-3 text-center "
              onClick={goToPage6}
            >
              <div className="font-semibold capitalize text-lg tracking-wider text-white">
                kembali
              </div>
            </button>
          </div>
          <div className=" px-10 flex justify-start">
            <button
              type="button"
              className="w-52 h-full bg-gradient-to-r from-cyan-400 to-blue-600 active:bg-gradient-to-r active:from-blue-500 active:to-cyan-500  rounded-full py-3 text-center"
              onClick={diamondPanel ? buyDiamond : buyPakan}
            >
              <div className="font-semibold capitalize text-lg tracking-wider text-white">
                Top Up
              </div>
            </button>
          </div>
        </div>
        {/* FOOTER END*/}
      </div>
    </div>
  );
};

export default Page15;
