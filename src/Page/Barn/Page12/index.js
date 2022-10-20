import React, { useContext, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import "swiper/css";
import Header from "../../../Component/Diatom/Header";
import { UserContext } from "../../UserContext";
import DiamondImg from "../../../img/common/diamond.png";
import axios from "axios";
import Cookies from "js-cookie";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const Page12 = ({ goToPage6, goToPage7, getUserInfo }) => {
  const { value, setValue } = useContext(UserContext);
  const [ternakTersedia, setTernakTersedia] = useState([]);
  const [dialog, setDialog] = useState({
    show: false,
    message: "",
  });

  const tutupAlert = () => {
    setDialog({
      show: false,
      message: "",
    });
    getUserInfo();
  };

  const buyTernak = async (e) => {
    const ternakDipilih = e.currentTarget.getAttribute("data-id");
    const userCookie = Cookies.get("user");
    try {
      let beli = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/buy-ternak`,
        {
          token: userCookie,
          ternak_id: ternakDipilih,
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

  const getTernak = async () => {
    try {
      let userInfo = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/get-ternak`
      );
      let dataUser = userInfo.data.data;
      setTernakTersedia(dataUser);

      console.log(ternakTersedia);
    } catch (error) {
      console.log(`dari ketika getUsrInfo `, error);
    }
  };

  useEffect(() => {
    getTernak();
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden bg-barn bg-cover mx-auto lg:max-w-6xl lg:h-[70%]">
      <div className="w-[90%] h-full mx-auto">
        {/* HEADER */}
        <div className="h-[15%]">
          <Header
            Diamond={true}
            BackButton={true}
            Action1={goToPage6}
            Action2={goToPage7}
            harta={value}
            setHarta={setValue}
          />
        </div>
        {/* HEADER END */}
        {/* CONTENT */}
        <div className="w-full h-[75%] animate-fadeInKu">
          <div className="w-full h-full justify-center flex items-start">
            <div className="w-full h-full flex flex-col relative">
              {dialog.show ? (
                <div
                  className="absolute w-80 h-20 bg-[#782443] rounded-xl ml-5 ring-offset-2 ring-4 ring-[#782443] left-52 z-50 animate-fadeInKu "
                  onClick={tutupAlert}
                >
                  <div className="w-full h-full px-16 text-center items-center flex animate-pulse">
                    <span className="text-white text-xl">
                      {dialog.message}!
                    </span>
                  </div>
                </div>
              ) : null}
              <div className="w-full h-10 flex justify-center items-center lg:h-20 ">
                <span className="text-white text-xl tracking-[0.4em] font-bold uppercase">
                  beli ternak
                </span>
              </div>
              <div className="w-full h-full flex justify-center items-center -mt-8">
                {/* TENGAH */}
                <div className="flex w-full h-full overflow-hidden">
                  <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    pagination={{
                      clickable: true,
                      dynamicBullets: true,
                    }}
                  >
                    {ternakTersedia.map((item) => {
                      const { id, name, avatar, duration, max_benefit, price } =
                        item;
                      return (
                        <SwiperSlide key={id}>
                          <div
                            className="flex h-full w-full bg-papan2 bg-[length:190px_170px] bg-no-repeat bg-center  justify-center items-center"
                            key={name}
                          >
                            <div className="flex flex-col h-full w-[70%] items-center">
                              <div className="flex mt-[3.75rem]">
                                <img src={DiamondImg} alt="" className="w-7" />
                                <span className="text-white font-bold">
                                  {price}
                                </span>
                              </div>
                              <img
                                src={avatar}
                                alt=""
                                className="w-16 h-16 my-2 lg:w-60 lg:h-64"
                              />
                              <p className="text-center text-sm font-bold ">
                                {name}
                              </p>
                              <p className="text-center text-[10px] ">
                                Duration : {duration} hari
                              </p>
                              <p className="text-center text-[10px]">
                                Benefit : {max_benefit}
                              </p>
                              <div
                                className=" w-28 py-2 bg-gradient-to-r from-cyan-400 to-blue-600 active:bg-gradient-to-r active:from-blue-500 active:to-cyan-500  text-center rounded-full"
                                data-id={id}
                                onClick={buyTernak}
                              >
                                <span className="font-bold  text-sm text-white tracking-widest capitalize">
                                  beli
                                </span>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      );
                    })}
                  </Swiper>
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

export default Page12;
