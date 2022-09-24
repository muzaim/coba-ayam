import React from "react";
import Chicken2 from "../../../img/common/chicken2.png";
import Pig from "../../../img/common/pig.png";
import Domba from "../../../img/common/domba.png";
import Cow2 from "../../../img/common/cow2.png";
import RightArrow from "../../../img/usage/right-arrow.png";
import LeftArrow from "../../../img/usage/left-arrow.png";
import { useState } from "react";
import Header from "../../../Component/Diatom/Header";
import Button from "../../../Component/Atom/Button";

const Page7 = ({ Action1, Action2, Action3 }) => {
  const [index, setIndex] = useState(0);

  const goToPage6 = () => {
    Action3();
  };

  const goToPage8 = () => {
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
      skill: "Max 10 Kg daging perhari",
      image: Pig,
    },
  ];

  const checkNumber = (number) => {
    if (number > Hewan.length - 1) {
      return 0;
    }
    if (number < 0) {
      return Hewan.length - 1;
    }
    return number;
  };

  const nextHewan = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkNumber(newIndex);
    });
  };

  const previousHewan = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkNumber(newIndex);
    });
  };
  const { name, skill, image } = Hewan[index];

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
          />
        </div>
        {/* HEADER END */}
        {/* CONTENT */}
        <div class="w-full h-[65%]">
          <div class="w-full h-full justify-center flex items-start">
            <div className="w-full h-full flex flex-col">
              <div className="w-full h-10 flex justify-center items-center lg:h-20 ">
                <span className="text-white text-xl">
                  {name}, {skill}
                </span>
              </div>
              <div className="w-full h-full flex justify-center items-center">
                <div
                  className="flex h-full w-full justify-end items-center"
                  onClick={previousHewan}
                >
                  <img
                    src={LeftArrow}
                    alt=""
                    className="w-16 h-16 lg:w-24 lg:h-24"
                  />
                </div>
                <div className="flex h-full w-full justify-center items-center">
                  <img
                    src={image}
                    alt=""
                    className="w-32 h-36 lg:w-60 lg:h-64"
                  />
                </div>
                <div
                  className="flex h-full w-full justify-start items-center"
                  onClick={nextHewan}
                >
                  <img
                    src={RightArrow}
                    alt=""
                    className="w-16 h-16 lg:w-24 lg:h-24"
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

            {/* <div
              className="w-full h-full bg-white rounded-full py-3 text-center active:bg-[#782443] group"
              onClick={goToPage12}
            >
              <span className="font-semibold capitalize text-lg tracking-wider text-[#782443] group-active:text-white">
                Tambah ternak
              </span>
            </div> */}
            <Button
              action={goToPage6}
              text={"tambah ternak"}
              textColor={"#782443"}
              bgColor={"#ffffff"}
              activeColor={"#5e17eb"}
            />

            {/* <div
              className="w-full h-full bg-[#5e17eb] rounded-full py-3 text-center active:bg-[#ffffff] group"
              onClick={goToPage8}
            >
              <span className="font-semibold capitalize text-lg tracking-wider text-[#ffffff] group-active:text-[#5e17eb]">
                proses pangan
              </span>
            </div> */}
            <Button
              action={goToPage8}
              text={"proses pangan"}
              textColor={"#ffffff"}
              bgColor={"#5e17eb"}
              activeColor={"#ffffff"}
            />
          </div>
        </div>
        {/* FOOTER END*/}
      </div>
    </div>
  );
};

export default Page7;
