import React, { useContext, useEffect } from "react";
import Diamond from "../../../img/common/diamond.png";
import Pouch from "../../../img/common/pouch.png";
import Header from "../../../Component/Diatom/Header";
import { UserContext } from "../../UserContext";
import axios from "axios";
import Cookies from "js-cookie";
import { useState } from "react";

const Page15 = ({ Action1, Action2, Action3 }) => {
  const { value } = useContext(UserContext);
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
    setDiamondPanel(!diamondPanel);
    setPakanPanel(false);
  };

  const openPakanPanel = () => {
    setPakanPanel(true);
    setDiamondPanel(!diamondPanel);
  };

  const tangkapDiamondDipilih = (e) => {
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
    try {
      let beli = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/buy-diamon`,
        {
          token: userCookie,
          diamon_id: diamodDipilih,
        }
      );
      let res = beli.data.message;
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
    try {
      let beli = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/buy-pakan`,
        {
          token: userCookie,
          pakan_id: pakanDipilih,
        }
      );
      let res = beli.data.message;
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
  function numberWithCommas(num) {
    let newNum = parseInt(num);
    return newNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const TopUpDiamond = () => {
    return (
      <>
        <div className="grid grid-rows-3 grid-cols-3 grid-flow-col gap-3 place-items-center">
          {daftarHargaDiamond.map((item) => {
            const { id, diamon, price } = item;
            return (
              <button
                className="w-52  py-2 bg-[#f6f3e4] rounded-full items-center flex justify-center focus:outline-none focus:ring-sky-400 focus:bg-sky-100 focus:ring-2 focus-visible:ring"
                key={id}
                data-id={id}
                onClick={(e) => tangkapDiamondDipilih(e)}
              >
                <img src={Diamond} alt="" className="w-7" />
                <span className="font-bold  text-sm text-sky-400">
                  {numberWithCommas(diamon)}
                </span>
                <span className="font-semibold mx-1">=</span>
                <span></span>
                <span className="font-semibold text-sm">
                  Rp {numberWithCommas(price)}
                </span>
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-2 mt-5">
          <div className=" px-10 flex justify-end">
            <button
              type="button"
              className="w-52 h-full bg-[#ff1616]  rounded-full py-3 text-center "
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
              className="w-52 h-full bg-[#329bd1] rounded-full py-3 text-center "
              onClick={buyDiamond}
            >
              <div className="font-semibold capitalize text-lg tracking-wider text-white">
                Top Up
              </div>
            </button>
          </div>
        </div>
      </>
    );
  };

  const TopUpPakan = () => {
    return (
      <>
        <div className="grid grid-rows-3 grid-cols-3 grid-flow-col gap-3 place-items-center">
          {daftarHargaPakan.map((item) => {
            const { id, pakan, diamon } = item;
            return (
              <button
                className="w-52  py-2 bg-[#f6f3e4] rounded-full items-center flex justify-center focus:outline-none focus:ring-sky-400 focus:bg-sky-100 focus:ring-2"
                key={id}
                data-id={id}
                onClick={(e) => tangkapPakanDipilih(e)}
              >
                <img src={Pouch} alt="" className="w-7" />
                <span className="font-semibold  text-sm text-[#782443]">
                  {numberWithCommas(pakan)} Kg
                </span>
                <span className="font-semibold mx-1">=</span>
                <img src={Diamond} alt="" className="w-7" />
                <span className="font-semibold text-sky-400">
                  {numberWithCommas(diamon)}
                </span>
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-2 mt-5">
          <div className=" px-10 flex justify-end">
            <button
              type="button"
              className="w-52 h-full bg-[#ff1616]  rounded-full py-3 text-center "
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
              className="w-52 h-full bg-[#329bd1] rounded-full py-3 text-center "
              onClick={buyPakan}
            >
              <div className="font-semibold capitalize text-lg tracking-wider text-white">
                Top Up
              </div>
            </button>
          </div>
        </div>
      </>
    );
  };

  useEffect(() => {
    getDaftarHargaDimond();
    getDaftarHargaPakan();
  }, []);
  const tutupAlert = () => {
    setDialog({
      show: false,
      message: "",
    });
    getUserInfo();
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
                className="font-bold text-white text-xl cursor-pointer"
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
                className="text-white text-xl cursor-pointer"
                onClick={openPakanPanel}
              >
                Top Up Pakan
              </span>
            </div>
          </div>
          {diamondPanel ? <TopUpDiamond /> : <TopUpPakan />}
        </div>
        {/* CONTENT END*/}
        {/* FOOTER */}

        {/* FOOTER END*/}
      </div>
    </div>
  );
};

export default Page15;
