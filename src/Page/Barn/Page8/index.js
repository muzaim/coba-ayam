import React, { useContext, useEffect } from "react";
import Chicken2 from "../../../img/common/chicken2.png";
import Pouch from "../../../img/common/pouch.png";
import Header from "../../../Component/Diatom/Header";
import { UserContext } from "../../UserContext";

const Page8 = ({ image = Chicken2, Action1, Action2, Action3 }) => {
  const { value, setValue } = useContext(UserContext);
  const goToPage6 = () => {
    Action3();
  };

  const goToPage7 = () => {
    Action1();
  };

  const goToPage12 = () => {
    Action2();
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

  useEffect(() => {
    console.log(Action1.item);
  });

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
                    <span className="mt-2 text-white text-lg">
                      Ayam - 30 Hari
                    </span>
                    <img
                      src={image}
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
                          <div className="w-36 h-10 bg-[#30D5C8] rounded-full  flex items-center">
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
