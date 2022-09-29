import React, { useState, useContext } from "react";
import Chef1 from "../../../img/common/chef1.png";
import Next from "../../../img/usage/play.png";
import Typewriter from "typewriter-effect";
import Header from "../../../Component/Diatom/Header";
import { UserContext } from "../../UserContext";

const Page14 = ({ Action1, Action2 }) => {
  const [skipDialog, setSkipDalog] = useState(false);
  const [nextButton, setNextButton] = useState(false);
  const { value, setValue } = useContext(UserContext);

  const goToPage6 = () => {
    Action2();
  };

  const goToPage15 = () => {
    Action1();
  };
  const skip = () => {
    setSkipDalog((current) => !current);
  };

  const DialogComplete = () => {
    return (
      <div className="w-[30rem] min-h-[7rem] px-5 pb-5 pt-10 bg-[#782443] rounded-xl ml-5 ring-offset-2 ring-4 ring-[#782443] relative">
        <div className="absolute -top-5 left-10">
          <div className="w-40 py-2 bg-[#782443] ring-offset-2 ring-4 ring-[#782443] rounded-xl text-center">
            <span className="text-white font-semibold text-justify text-md font-openSans">
              Mrs. Lisa
            </span>
          </div>
        </div>
        <div className="h-full grid gap-2 ">
          <h1 className="text-white font-semibold text-justify text-xl font-openSans">
            Yah.. Stok telur dan susu kamu habis. Kamu membutuhkn 12 butir telur
            dan 10.000 liter susu sapi segar, ayo mulai beternak dan berikan
            pangan hewan kamu!
          </h1>
          <div className="flex justify-end h-6">
            <img
              src={Next}
              alt=""
              className="w-6 animate-pulse"
              onClick={goToPage15}
            />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-screen overflow-hidden bg-caffe bg-cover mx-auto lg:max-w-6xl lg:h-[70%]">
      <div className="w-[90%] h-full mx-auto">
        {/* HEADER */}
        <div class="h-[15%]">
          <Header
            Diamond={true}
            Milk={true}
            Egg={true}
            QuestBook={true}
            Action1={goToPage6}
            harta={value}
            setHarta={setValue}
          />
        </div>
        {/* HEADER END */}
        {/* CONTENT */}
        <div class="h-[85%] flex">
          <div class="w-[35%]">
            <div className="w-full h-full items-end flex">
              <img src={Chef1} alt="" className="w-48" />
            </div>
          </div>
          <div class="w-full h-screen mt-10">
            {skipDialog ? (
              <DialogComplete />
            ) : (
              <div
                className="w-[30rem] min-h-[7rem] px-5 pb-5 pt-10 bg-[#782443] rounded-xl ml-5 ring-offset-2 ring-4 ring-[#782443] relative"
                onClick={skip}
              >
                <div className="absolute -top-5 left-10">
                  <div className="w-40 py-2 bg-[#782443] ring-offset-2 ring-4 ring-[#782443] rounded-xl text-center">
                    <span className="text-white font-semibold text-justify text-md font-openSans">
                      Mrs. Lisa
                    </span>
                  </div>
                </div>
                <div className="h-full grid gap-2 ">
                  <h1 className="text-white font-semibold text-justify text-xl font-openSans">
                    <Typewriter
                      options={{
                        delay: 30,
                        cursor: " ",
                      }}
                      onInit={(typewriter) => {
                        typewriter
                          .typeString(
                            "Yah.. Stok telur dan susu kamu habis. Kamu membutuhkn 12 butir telur dan 10.000 liter susu sapi segar, ayo mulai beternak dan berikan pangan hewan kamu!"
                          )
                          .start()
                          .pauseFor(300)
                          .callFunction(() => {
                            setNextButton(true);
                          });
                      }}
                    />
                  </h1>

                  <div className="flex justify-end h-6" onClick={goToPage15}>
                    {nextButton ? (
                      <img src={Next} alt="" className="w-6 animate-pulse" />
                    ) : null}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        {/* CONTENT END*/}
      </div>
    </div>
  );
};

export default Page14;
