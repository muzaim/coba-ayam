import React, { useState, useContext, useEffect } from "react";
import Jualan from "../../../img/common/jualan.png";
import Header from "../../../Component/Diatom/Header";
import { UserContext } from "../../UserContext";
import axios from "axios";
import Cookies from "js-cookie";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const Page13 = ({
  goToPage6,
  getUserInfo,
  playPop1,
  playSelectSound,
  playGoBackSound,
  playSuccessSound,
  playNegativeSound,
  playPaperFlipSound,
}) => {
  const { value, setValue } = useContext(UserContext);
  const [index, setIndex] = useState(0);
  const [market, setMarket] = useState([]);
  const [avaArray, setAvaArray] = useState([]);
  const [indexAvatar, setIndexAvatar] = useState(0);
  const [dialogArray, setDialogArray] = useState([]);
  const [questionArray, setQuestionArray] = useState([]);

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
    playSelectSound();
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
    playPop1();
    MySwal.fire({
      icon: "question",
      position: "center",
      text: "Apakah kamu yakin menutup toko?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        playPaperFlipSound();
        goToPage6();
      } else {
        playGoBackSound();
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

      //set Question
      for (let index2 = 0; index2 < res.length; index2++) {
        setQuestionArray((current) => [...current, res[index2].alert]);
      }
    } catch (error) {
      console.log(`dari ketika getUsrInfo `, error);
    }
  };

  const tanyaJualMarket = () => {
    playPop1();
    MySwal.fire({
      icon: "question",
      position: "center",
      text: questionArray[index],
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        sellOnMarket();
      } else {
        playGoBackSound();
      }
    });
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
        playSuccessSound();
        MySwal.fire({
          position: "center",
          icon: "success",
          text: message,
          showConfirmButton: false,
          timer: 1500,
        }).then(
          setTimeout(() => {
            nextDialog();
          }, 1650)
        );
      } else if (status === 401) {
        playNegativeSound();
        MySwal.fire({
          position: "center",
          icon: "error",
          text: message,
          showConfirmButton: false,
          timer: 1500,
        }).then(
          setTimeout(() => {
            nextDialog();
          }, 1650)
        );
      }
      setTimeout(() => {
        getUserInfo();
      }, 1650);
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
        <div className="w-full h-full bg-white">
          <div className="flex justify-start w-full h-full">
            <img src={Jualan} alt="" className=" bg-green-300 mb-12" />
          </div>
        </div>
        {/* CONTENT END*/}
      </div>
    </div>
  );
};

export default Page13;
