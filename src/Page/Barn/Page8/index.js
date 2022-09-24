import React from "react";
import Chicken from "../../../img/common/chickenandhen.png";
import Pouch from "../../../img/common/pouch.png";
import Header from "../../../Component/Diatom/Header";

const Page8 = ({
  name = "Ayam Eropa",
  skill = "Max 1.020 telur perhari",
  image = Chicken,
  Action1,
  Action2,
  Action3,
}) => {
  const goToPage6 = () => {
    Action3();
  };
  
  const goToPage9 = () => {
    Action1();
  };

  const goToPage12 = () => {
    Action2();
  };

  return (
    <div className="w-full h-screen overflow-hidden bg-barn bg-cover mx-auto lg:max-w-6xl lg:h-[70%]">
      <div className="w-[90%] h-full mx-auto ">
        {/* HEADER */}
        <div class="h-[15%]">
          <Header
            Diamond={true}
            Egg={true}
            Pouch={true}
            QuestBook={true}
            Action1={goToPage6}
          />
        </div>
        {/* HEADER END */}
        {/* CONTENT */}
        <div class="w-full h-[65%]">
          <div class="w-full h-full justify-center flex items-start">
            <div className="w-full h-full flex flex-col">
              <div className="w-full h-10 flex justify-center items-center lg:h-20">
                <img src={Pouch} alt="" className="w-8 lg:w-16" />
                <div class="w-56 bg-gray-200 h-5 rounded-full overflow-hidden lg:w-72 lg:h-10">
                  <div
                    class="bg-[#7fa65a] h-5 rounded-full lg:h-10"
                    style={{ width: "27%" }}
                  ></div>
                </div>
              </div>

              <div className="w-full h-full flex justify-center items-center">
                <div className="flex h-full w-full justify-center items-center">
                  <img
                    src={image}
                    alt=""
                    className="w-32 h-36 lg:w-60 lg:h-64"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* CONTENT END*/}
        {/* FOOTER */}
        <div class="h-[20%]">
          <div className="grid grid-cols-3 gap-3">
            <div className=""></div>
            <div className="">
              <div
                className="w-full h-full bg-white rounded-full py-3 text-center active:bg-[#782443] group"
                onClick={goToPage12}
              >
                <span className="font-semibold capitalize text-lg tracking-wider text-[#782443] group-active:text-white">
                  Tambah ternak
                </span>
              </div>
            </div>
            <div
              className="w-full h-full bg-[#5e17eb] rounded-full py-3 text-center active:bg-[#ffffff] group"
              onClick={goToPage9}
            >
              <span className="font-semibold capitalize text-lg tracking-wider text-[#ffffff] group-active:text-[#5e17eb]">
                proses pangan
              </span>
            </div>
          </div>
        </div>
        {/* FOOTER END*/}
      </div>
    </div>
  );
};

export default Page8;
