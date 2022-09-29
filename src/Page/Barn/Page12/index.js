import React, { useContext } from "react";
import Pig from "../../../img/common/pig.png";
import Domba from "../../../img/common/domba.png";
import Diamond from "../../../img/common/diamond.png";
import Header from "../../../Component/Diatom/Header";
import { UserContext } from "../../UserContext";

const Page12 = ({ Action1, Action2 }) => {
  const { value, setValue } = useContext(UserContext);

  const Hewan = [
    {
      id: 1,
      name: "Ayam",
      skill: "Max 25 Kg daging perhari",
      image: Domba,
      harga: 100,
      benefit: "101 - 5050 butir/hari",
      durasi: 30,
    },
    {
      id: 2,
      name: "Sapi",
      skill: "Max 10 Kg daging perhari",
      image: Pig,
      harga: 600,
      benefit: "102 - 1020 liter susu/hari",
      durasi: 30,
    },
    {
      id: 3,
      name: "Domba",
      skill: "Max 10 Kg daging perhari",
      image: Pig,
      harga: 300,
      benefit: "102 - 1020 daging/hari",
      durasi: 5,
    },
  ];
  const goToPage6 = () => {
    Action1();
  };
  const goToPage7 = () => {
    Action2();
  };
  const { name, skill, image } = Hewan;
  return (
    <div className="w-full h-screen overflow-hidden bg-barn bg-cover mx-auto lg:max-w-6xl lg:h-[70%]">
      <div className="w-[90%] h-full mx-auto">
        {/* HEADER */}
        <div class="h-[15%]">
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
        <div class="w-full h-[65%]">
          <div class="w-full h-full justify-center flex items-start">
            <div className="w-full h-full flex flex-col">
              <div className="w-full h-10 flex justify-center items-center lg:h-20 ">
                <span className="text-white text-xl tracking-[0.4em] font-bold uppercase">
                  beli ternak
                </span>
              </div>
              <div className="w-full h-full flex justify-center items-center">
                {/* TENGAH */}
                <div className="flex w-full h-full">
                  {Hewan.map((item) => {
                    const { name, image, harga, benefit, durasi } = item;
                    return (
                      <div className="flex h-full w-full bg-papan2 bg-[length:220px_200px] bg-no-repeat bg-center  justify-center items-center">
                        <div className="flex flex-col h-full w-[70%] items-center">
                          <span className="mt-7 text-white text-sm">
                            {name} - {durasi} hari
                          </span>
                          <img
                            src={image}
                            alt=""
                            className="w-20 h-20 mt-5 lg:w-60 lg:h-64"
                          />
                          <p className="mt-4 text-center text-[10px] font-semibold ">
                            Harga : {harga} D
                          </p>
                          <p className="text-center text-[10px] font-semibold ">
                            Benefit : {benefit}
                          </p>
                          <div className="mt-2 w-28 py-2 bg-blue-600 text-center rounded-full">
                            <span className="tracking-[0.3em] uppercase text-white">
                              beli
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
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
