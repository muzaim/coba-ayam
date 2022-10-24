import React, { useState, useContext, useEffect } from "react";
import Jualan from "../../../img/common/jualan.png";
import Header from "../../../Component/Diatom/Header";
import { UserContext } from "../../UserContext";
import axios from "axios";
import Cookies from "js-cookie";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const Page13 = ({ goToPage6, getUserInfo }) => {
  const { value, setValue } = useContext(UserContext);
  const [index, setIndex] = useState(0);
  const [market, setMarket] = useState([]);
  const [avaArray, setAvaArray] = useState([]);
  const [indexAvatar, setIndexAvatar] = useState(0);
  const [dialogArray, setDialogArray] = useState([]);

  const checkNumber = (number) => {
    if (number > avaArray.length - 1) {
      return 0;
    }
    if (number < 0) {
      return avaArray.length - 1;
    }
    return number;
  };

  const checkAvatarIndex = (number) => {
    if (number > avaArray.length - 6) {
      return 0;
    }
    if (number < 0) {
      return avaArray.length - 6;
    }
    return number;
  };

  const nextDialog = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
    setIndexAvatar((index) => {
      let newIndex = index + 1;
      return checkAvatarIndex(newIndex);
    });
  };

  const openBackDialog = () => {
    MySwal.fire({
      title: "Tutup Toko",
      position: "center",
      text: "Apakah kamu yakin menutup toko?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        goToPage6();
      }
    });
  };

  const getMarket = async () => {
    try {
      let marketData = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/request-market`
      );
      let res = marketData.data.data;

      // set Market
      setMarket((currentList) => [...currentList, res]);

      // set avatar
      for (let index = 0; index < res.length; index++) {
        setAvaArray((current) => [...current, res[index].avatar]);
      }

      // set Dialog
      for (let index2 = 0; index2 < res.length; index2++) {
        setDialogArray((current) => [...current, res[index2].text]);
      }
    } catch (error) {
      console.log(`dari ketika getUsrInfo `, error);
    }
  };

  const sellOnMarket = async () => {
    const userCookie = Cookies.get("user");
    try {
      let userInfo = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/market-sell`,
        {
          token: userCookie,
          market_id: index,
        }
      );
      let message = userInfo.data.message;
      let status = userInfo.data.status;

      if (status === 200) {
        MySwal.fire({
          position: "center",
          icon: "success",
          text: message,
          showConfirmButton: false,
          timer: 1500,
        });
        nextDialog();
      } else if (status === 401) {
        MySwal.fire({
          position: "center",
          icon: "error",
          text: message,
          showConfirmButton: false,
          timer: 1500,
        });
      }

      getUserInfo();
      return;
    } catch (error) {
      MySwal.fire({
        icon: "error",
        position: "center",
        text: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };
  useEffect(() => {
    getMarket();
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden bg-caffe bg-cover mx-auto lg:max-w-6xl lg:h-[70%]">
      <div className="w-full h-full mx-auto">
        {/* HEADER */}
        <div className="w-[90%] h-[15%] mx-auto">
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
        <div className="h-full flex ">
          <div className="w-full h-full z-10 ">
            <div className="relative">
              <div className="h-[15%]">{/* BACK DIALOG */}</div>

              {/* GEROBAK */}
              <div className="absolute z-10 -top-12">
                <img src={Jualan} alt="" className="" />
              </div>
              {/* BUTTON */}
              <div className="absolute right-3 z-20 top-[6.5rem]">
                <div className="w-48 h-32 my-auto">
                  <div className="w-full h-full flex   items-center align-middle">
                    <div className="w-full flex flex-col gap-2">
                      <div
                        className="w-full h-full py-2 bg-blue-500 rounded-full text-center"
                        onClick={sellOnMarket}
                      >
                        <span className="capitalize text-xl text-white tracking-widest">
                          jual
                        </span>
                      </div>
                      <div
                        className="w-full h-full py-2 bg-green-500 rounded-full text-center"
                        onClick={nextDialog}
                      >
                        <span className="capitalize text-xl text-white tracking-widest">
                          skip
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* DIALOG NPC */}

              <div className="absolute z-10 right-[12rem] top-2 animate-fadeInKu">
                <div className="w-48 h-24 p-3 bg-[#782443] rounded-xl ml-5 ring-offset-2 ring-4 ring-[#782443] ">
                  <div className="w-full h-full text-center items-center flex mx-auto">
                    <p className="text-white capitalize">
                      {dialogArray[index]}
                    </p>
                  </div>
                </div>
              </div>

              {/* BACK */}

              <div className="absolute z-10 -bottom-[18.6rem] left-20 ">
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

              {/* NPC */}
              <div className="w-full h-full bg-green-300 top-[7.8rem] relative animate-fadeInKu">
                <div className="absolute">
                  <img
                    src={avaArray[indexAvatar + 5]}
                    alt=""
                    className="w-24 "
                  />
                </div>
                <div className="absolute left-20">
                  <img
                    src={avaArray[indexAvatar + 4]}
                    alt=""
                    className="w-24 "
                  />
                </div>
                <div className="absolute left-40">
                  <img
                    src={avaArray[indexAvatar + 3]}
                    alt=""
                    className="w-24 "
                  />
                </div>
                <div className="absolute left-60">
                  <img
                    src={avaArray[indexAvatar + 2]}
                    alt=""
                    className="w-24 "
                  />
                </div>
                <div className="absolute left-80">
                  <img
                    src={avaArray[indexAvatar + 1]}
                    alt=""
                    className="w-24 "
                  />
                </div>
                <div className="absolute left-[31rem]">
                  <img src={avaArray[indexAvatar]} alt="" className="w-24 " />
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
