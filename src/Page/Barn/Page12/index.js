import React, { useContext } from "react";
import Chicken2 from "../../../img/common/chicken2.png";
import Babi from "../../../img/common/pig.png";
import Domba from "../../../img/common/domba.png";
import Cow2 from "../../../img/common/cow2.png";
import AyamKecil from "../../../img/common/ayamkecil.png";
import Kelinci from "../../../img/common/kelinci.png";
import Keledai from "../../../img/common/keledai.png";
import Kerbau from "../../../img/common/kerbau.png";
import Kuda from "../../../img/common/kuda.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import "swiper/css";
import Header from "../../../Component/Diatom/Header";
import { UserContext } from "../../UserContext";
import axios from "axios";
import Cookies from "js-cookie";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useState } from "react";
import { useEffect } from "react";
SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const Page12 = ({ Action1, Action2 }) => {
  const { value, setValue } = useContext(UserContext);
  const [ternakTersedia, setTernakTersedia] = useState([]);

  const Hewan = [
    {
      id: 1,
      name: "Ayam",
      skill: "Max 25 Kg daging perhari",
      image: Chicken2,
      harga: 100,
      benefit: "101 - 5050 butir/hari",
      durasi: 30,
    },
    {
      id: 2,
      name: "Sapi",
      skill: "Max 10 Kg daging perhari",
      image: Cow2,
      harga: 600,
      benefit: "102 - 1020 liter susu/hari",
      durasi: 30,
    },
    {
      id: 3,
      name: "Domba",
      skill: "Max 10 Kg daging perhari",
      image: Domba,
      harga: 300,
      benefit: "102 - 1020 daging/hari",
      durasi: 5,
    },
  ];

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

  const goToPage6 = () => {
    Action1();
  };
  const goToPage7 = () => {
    Action2();
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
            Action1={goToPage7}
            Action2={goToPage6}
            harta={value}
            setHarta={setValue}
          />
        </div>
        {/* HEADER END */}
        {/* CONTENT */}
        <div className="w-full h-[75%] animate-fadeInKu">
          <div className="w-full h-full justify-center flex items-start">
            <div className="w-full h-full flex flex-col">
              <div className="w-full h-10 flex justify-center items-center lg:h-20 ">
                <span className="text-white text-xl tracking-[0.4em] font-bold uppercase">
                  beli ternak
                </span>
              </div>
              <div className="w-full h-full flex justify-center items-center -mt-8">
                {/* TENGAH */}
                <div className="flex w-full h-full">
                  <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    pagination={{
                      clickable: true,
                      dynamicBullets: true,
                    }}
                  >
                    {ternakTersedia.map((item) => {
                      const { name, avatar, duration, max_benefit, price } =
                        item;
                      return (
                        <SwiperSlide key={name}>
                          <div
                            className="flex h-full w-full bg-papan2 bg-[length:220px_200px] bg-no-repeat bg-center  justify-center items-center"
                            key={name}
                          >
                            <div className="flex flex-col h-full w-[70%] items-center">
                              <span className="mt-11 text-white text-sm">
                                {name} - {duration} hari
                              </span>
                              <img
                                src={avatar}
                                alt=""
                                className="w-20 h-20 mt-5 lg:w-60 lg:h-64"
                              />
                              <p className="mt-4 text-center text-[10px] font-semibold ">
                                Harga : {price} D
                              </p>
                              <p className="text-center text-[10px] font-semibold ">
                                Benefit : {max_benefit}
                              </p>
                              <div className="mt-2 w-28 py-2 bg-blue-600 text-center rounded-full">
                                <span className="tracking-[0.3em] uppercase text-white">
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
