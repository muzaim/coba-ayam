import React from "react";
import Pig from "../../../img/common/pig.png";
import Domba from "../../../img/common/domba.png";
import Diamond from "../../../img/common/diamond.png";
import Header from "../../../Component/Diatom/Header";

const Page12 = ({ Action1, Action2 }) => {
  const Hewan = [
    {
      id: 1,
      name: "Domba",
      skill: "Max 25 Kg daging perhari",
      image: Domba,
    },
    {
      id: 2,
      name: "Babi",
      skill: "Max 10 Kg daging perhari",
      image: Pig,
    },
  ];
  const goToPage6 = () => {
    Action1();
  };
  const goToPage7 = () => {
    Action2();
  };

  return (
    <div className="w-full h-screen overflow-hidden bg-barn bg-cover mx-auto lg:max-w-6xl lg:h-[70%]">
      <div className="w-[90%] h-full mx-auto">
        {/* HEADER */}
        <div class="h-[15%]">
          <Header
            Diamond={true}
            BackButton={true}
            QuestBook={true}
            Action1={goToPage7}
            Action2={goToPage6}
          />
        </div>
        {/* HEADER END */}
        {/* CONTENT */}
        <div className="w-full h-[70%] ">
          <div className="w-full h-full ">
            <div className="w-full h-full grid grid-cols-2 items-center">
              {Hewan.map((item) => {
                return (
                  <div className=" ">
                    <div className="flex justify-center ">
                      <div className="bg-[#b6def2] flex flex-col py-7 rounded-2xl w-60">
                        <div className="flex justify-center">
                          <img src={item.image} alt="" className="w-32" />
                        </div>
                        <div className="flex justify-center">
                          <span>Max 1.020 liter perhari</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-center my-3">
                      <div className="w-52 h-10 bg-[#ff1616] rounded-2xl items-center flex">
                        <div className="w-full text-center flex justify-center">
                          <span className="font-bold  text-sm text-white tracking-widest mr-3">
                            Beli Sapi :
                          </span>
                          <img src={Diamond} alt="" className="w-5" />
                          <span className="font-bold  text-sm text-white tracking-widest">
                            920
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        {/* CONTENT END*/}
      </div>
    </div>
  );
};

export default Page12;
