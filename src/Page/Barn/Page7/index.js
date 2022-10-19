import React, { useContext } from "react";
import "./style.css";
import Chicken2 from "../../../img/common/chicken2.png";
import Babi from "../../../img/common/pig.png";
import Domba from "../../../img/common/domba.png";
import Cow2 from "../../../img/common/cow2.png";
import AyamKecil from "../../../img/common/ayamkecil.png";
import Kelinci from "../../../img/common/kelinci.png";
import Keledai from "../../../img/common/keledai.png";
import Kerbau from "../../../img/common/kerbau.png";
import Kuda from "../../../img/common/kuda.png";
import Header from "../../../Component/Diatom/Header";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from "swiper";
import "swiper/css";
import { UserContext } from "../../UserContext";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);

const Page7 = ({ Action1, Action2, Action3 }) => {
  const { value, setValue, setSelectedAnimalID } = useContext(UserContext);

  const goToPage6 = () => {
    Action3();
  };

  const goToPage8 = (item) => {
    setSelectedAnimalID(item.id);
    Action1();
  };

  const goToPage12 = () => {
    Action2();
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
      image: Domba,
      kenyang: 12,
    },
    {
      id: 4,
      name: "Babi",
      skill: "Max 25 Kg daging perhari",
      image: Babi,
      kenyang: 90,
    },
    {
      id: 5,
      name: "Kuda",
      skill: "Max 25 Kg daging perhari",
      image: Kuda,
      kenyang: 57,
    },
    {
      id: 6,
      name: "Ayam Kecil",
      skill: "Max 25 Kg daging perhari",
      image: AyamKecil,
      kenyang: 32,
    },
    {
      id: 7,
      name: "Kelinci",
      skill: "Max 25 Kg daging perhari",
      image: Kelinci,
      kenyang: 10,
    },
    {
      id: 8,
      name: "Keledai",
      skill: "Max 25 Kg daging perhari",
      image: Keledai,
      kenyang: 62,
    },
    {
      id: 9,
      name: "Kerbau",
      skill: "Max 25 Kg daging perhari",
      image: Kerbau,
      kenyang: 57,
    },
  ];

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
                <div className="flex w-full h-full overflow-hidden">
                  <Swiper
                    spaceBetween={50}
                    slidesPerView={3}
                    pagination={{
                      clickable: true,
                      dynamicBullets: true,
                    }}
                  >
                    {Hewan.map((item) => {
                      const { id, name, image, kenyang } = item;
                      return (
                        <SwiperSlide key={id}>
                          <div
                            key={id}
                            className="flex justify-center items-center bg-papan1 bg-[length:200px_160px] bg-center bg-no-repeat cursor-pointer mt-3"
                            onClick={() => goToPage8(item)}
                          >
                            <div className="w-[80%] h-[80%]">
                              <div className="flex flex-col items-center my-5">
                                <span className="text-sm  uppercase font-comic">
                                  {name} - GRATIS
                                </span>
                                <img
                                  src={image}
                                  alt=""
                                  className="w-[5rem] h-[5rem]  lg:w-60 lg:h-64"
                                />
                                <div className="w-32 bg-gray-200 h-3 rounded-full overflow-hidden lg:w-72 lg:h-10 mt-3">
                                  <div
                                    className="bg-[#7fa65a] h-3 rounded-full lg:h-10"
                                    style={{ width: `${kenyang}%` }}
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
              className="w-full h-full bg-white rounded-full py-3 text-center active:bg-[#782443] group"
              onClick={goToPage12}
            >
              <span className="font-semibold capitalize text-lg tracking-wider text-[#782443] group-active:text-white">
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
