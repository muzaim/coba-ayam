import React, { useContext, useEffect } from "react";
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
import { UserContext } from "../../UserContext";
import { useState } from "react";

const Page8 = ({ image = Chicken2, Action1 }) => {
  const { value, setValue, selectedAnimalID } = useContext(UserContext);
  const [hewan, setHewan] = useState([]);

  const goToPage7 = () => {
    Action1();
  };

  const Pakan = [
    {
      id: 1,
      ukuran: 10,
    },
    {
      id: 2,
      ukuran: 50,
    },
    {
      id: 3,
      ukuran: 100,
    },
    {
      id: 4,
      ukuran: 300,
    },
    {
      id: 5,
      ukuran: 500,
    },
    {
      id: 6,
      ukuran: 1000,
    },
  ];

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
  const getHewan = () => {
    const data = Hewan.find((x) => x.id === selectedAnimalID);
    setHewan(data);
  };
  useEffect(() => {
    getHewan();
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden bg-barn bg-cover mx-auto lg:max-w-6xl lg:h-[70%]">
      <div className="w-[90%] h-full mx-auto ">
        {/* HEADER */}
        <div class="h-[15%] ">
          <Header Pouch={true} harta={value} setHarta={setValue} />
        </div>

        {/* HEADER END */}
        {/* CONTENT */}
        <div class="w-full h-[75%]">
          <div class="w-full h-full justify-center flex items-start">
            <div className="w-full h-full flex flex-col">
              <div className="w-full h-10 flex justify-center items-center lg:h-20 mb-2">
                <span className="text-white text-xl tracking-widest font-bold uppercase">
                  beri pakan ternakku!
                </span>
              </div>
              <div className="w-full h-full flex justify-center items-center ">
                <div className="flex h-full w-full bg-papan2 bg-contain bg-no-repeat bg-center justify-center items-center ">
                  <div className="flex flex-col  h-full w-[60%] items-center ">
                    <span className="mt-2 text-white text-md">
                      {hewan.name} - 30 Hari
                    </span>
                    <img
                      src={hewan.image}
                      alt=""
                      className="w-20 h-24 mt-5 lg:w-60 lg:h-64"
                    />
                    <p className="mt-4 text-center text-md font-semibold ">
                      10Kg Pangan
                    </p>
                    <p className="text-center text-md font-semibold ">
                      Menghasilkan 101 telur per hari
                    </p>
                  </div>
                </div>
                <div className="flex flex-col h-full w-full items-center ">
                  <div className="">
                    <div className="w-full h-[70%] grid grid-cols-2 gap-2 py-5">
                      {Pakan.map((item) => {
                        return (
                          <div
                            key={item.id}
                            className="w-36 h-10 bg-[#30D5C8] rounded-full  flex items-center"
                          >
                            <div className="w-full text-center">
                              <span className="text-md text-white">
                                {item.ukuran} Kg
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <div className="w-full h-full ">
                    <div className="h-full flex justify-center items-center gap-2">
                      <div
                        className="w-40 h-10 bg-green-400 rounded-full  flex items-center"
                        onClick={goToPage7}
                      >
                        <div className="w-full text-center">
                          <span className="font-bold  text-sm text-white tracking-widest uppercase">
                            batal
                          </span>
                        </div>
                      </div>
                      <div className="w-40 h-10 bg-purple-400 rounded-full  flex items-center ">
                        <div className="w-full text-center">
                          <span className="font-bold  text-sm text-white tracking-widest uppercase">
                            beri pangan
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page8;
