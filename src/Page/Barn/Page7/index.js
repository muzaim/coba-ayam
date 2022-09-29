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
import "swiper/css";
import { UserContext } from "../../UserContext";

const Page7 = ({ Action1, Action2, Action3 }) => {
  const { value, setValue } = useContext(UserContext);

  const goToPage6 = () => {
    Action3();
  };

  const goToPage8 = (item) => {
    Action1(item);
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
    },
    {
      id: 2,
      name: "Sapi",
      skill: "Max penghasil susu 1.010 liter perhari",
      image: Cow2,
    },
    {
      id: 3,
      name: "Domba",
      skill: "Max 25 Kg daging perhari",
      image: Domba,
    },
    {
      id: 4,
      name: "Babi",
      skill: "Max 25 Kg daging perhari",
      image: Babi,
    },
    {
      id: 5,
      name: "Kuda",
      skill: "Max 25 Kg daging perhari",
      image: Kuda,
    },
    {
      id: 6,
      name: "Ayam Kecil",
      skill: "Max 25 Kg daging perhari",
      image: AyamKecil,
    },
    {
      id: 7,
      name: "Kelinci",
      skill: "Max 25 Kg daging perhari",
      image: Kelinci,
    },
    {
      id: 8,
      name: "Keledai",
      skill: "Max 25 Kg daging perhari",
      image: Keledai,
    },
    {
      id: 9,
      name: "Kerbau",
      skill: "Max 25 Kg daging perhari",
      image: Kerbau,
    },
  ];

  // const checkNumber = (number) => {
  //   if (number > Hewan.length - 1) {
  //     return 0;
  //   }
  //   if (number < 0) {
  //     return Hewan.length - 1;
  //   }
  //   return number;
  // };

  // const nextHewan = () => {
  //   setIndex((index) => {
  //     let newIndex = index + 1;
  //     return checkNumber(newIndex);
  //   });
  // };

  // const previousHewan = () => {
  //   setIndex((index) => {
  //     let newIndex = index - 1;
  //     return checkNumber(newIndex);
  //   });
  // };

  return (
    <div className="w-full h-screen overflow-hidden bg-barn bg-cover mx-auto lg:max-w-6xl lg:h-[70%]">
      <div className="w-[90%] h-full mx-auto">
        {/* HEADER */}
        <div class="h-[15%]">
          <Header
            Diamond={true}
            Egg={true}
            Pouch={true}
            QuestBook={true}
            Action1={goToPage6}
            harta={value}
            setHarta={setValue}
          />
        </div>
        {/* HEADER END */}
        {/* CONTENT */}
        <div class="w-full h-[65%]">
          <div class="w-full h-full justify-center flex items-start">
            <div className="w-full h-full flex flex-col">
              <div className="w-full h-10 flex justify-center items-center lg:h-20 ">
                <span className="text-white text-xl tracking-widest font-bold uppercase">
                  ternakku
                </span>
              </div>
              <div className="w-full h-full flex justify-center items-center">
                {/* LEFT ARROW */}
                {/* <div
                  className="flex h-full w-14  justify-end items-center"
                  onClick={previousHewan}
                >
                  <img
                    src={LeftArrow}
                    alt=""
                    className="w-16 h-16 lg:w-24 lg:h-24"
                  />
                </div> */}
                {/* TENGAH */}
                <div className="flex w-full h-full overflow-hidden">
                  <Swiper spaceBetween={50} slidesPerView={3}>
                    {Hewan.map((item) => {
                      return (
                        <SwiperSlide>
                          <div
                            key={item.id}
                            className="flex h-full w-full justify-center items-center bg-papan1 bg-[length:200px_160px] bg-center bg-no-repeat cursor-pointer"
                            onClick={() => goToPage8(item)}
                          >
                            <div className="w-[80%] h-[80%] ">
                              <div className="flex flex-col items-center my-3">
                                <span className="text-sm mt-1 uppercase">
                                  {item.name} - GRATIS
                                </span>
                                <img
                                  src={item.image}
                                  alt=""
                                  className="w-[5rem] h-[5rem]  lg:w-60 lg:h-64"
                                />
                                <div class="w-32 bg-gray-200 h-5 rounded-full overflow-hidden lg:w-72 lg:h-10 mt-2">
                                  <div
                                    class="bg-[#7fa65a] h-5 rounded-full lg:h-10"
                                    style={{ width: "27%" }}
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
                {/* RIGT ARROW */}
                {/* <div
                  className="flex h-full w-14  justify-start items-center"
                  onClick={nextHewan}
                >
                  <img
                    src={RightArrow}
                    alt=""
                    className="w-16 h-16 lg:w-24 lg:h-24"
                  />
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* CONTENT END*/}
        {/* FOOTER */}
        <div class="h-[20%]">
          <div className="grid grid-cols-3 gap-3">
            <div className="">
              <div
                className="w-full h-full bg-white rounded-full py-3 text-center active:bg-[#782443] group"
                onClick={() => {
                  setValue((prevState) => ({
                    ...prevState,
                    [value.diamond]: (value.diamond += 13),
                    [value.egg]: (value.egg += 20),
                    [value.milk]: (value.milk += 5),
                  }));
                }}
              >
                <span className="font-semibold capitalize text-lg tracking-wider text-[#782443] group-active:text-white">
                  Coba tambah diamond
                </span>
              </div>
            </div>

            <div
              className="w-full h-full bg-white rounded-full py-3 text-center active:bg-[#782443] group"
              onClick={goToPage12}
            >
              <span className="font-semibold capitalize text-lg tracking-wider text-[#782443] group-active:text-white">
                Tambah ternak
              </span>
            </div>
            {/* <Button
              action={goToPage6}
              text={"tambah ternak"}
              textColor={"#782443"}
              bgColor={"#ffffff"}
              activeColor={"#5e17eb"}
            /> */}

            {/* <div
              className="w-full h-full bg-[#5e17eb] rounded-full py-3 text-center active:bg-[#ffffff] group"
              onClick={goToPage8}
            >
              <span className="font-semibold capitalize text-lg tracking-wider text-[#ffffff] group-active:text-[#5e17eb]">
                proses pangan
              </span>
            </div> */}
          </div>
        </div>
        {/* FOOTER END*/}
      </div>
    </div>
  );
};

export default Page7;
