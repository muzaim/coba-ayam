import React, { useState } from "react";
import Farmer2 from "../../../img/common/farmer2.png";
import Next from "../../../img/usage/play.png";
import Typewriter from "typewriter-effect";

const Page4 = ({ Action1 }) => {
  const [skipDialog, setSkipDalog] = useState(false);
  const [nextButton, setNextButton] = useState(false);

  const skip = () => {
    setSkipDalog((current) => !current);
  };

  const DialogComplete = () => {
    return (
      <div className="w-[30rem] min-h-[7rem] px-5 pb-5 pt-10 bg-[#782443] rounded-xl ml-5 ring-offset-2 ring-4 ring-[#782443] relative">
        <div className="absolute -top-5 left-10">
          <div className="w-40 py-2 bg-[#782443] ring-offset-2 ring-4 ring-[#782443] rounded-xl text-center">
            <span className="text-white font-semibold text-justify text-md font-openSans">
              Mr. Ducan
            </span>
          </div>
        </div>
        <div className="h-full grid gap-2 ">
          <h1 className="text-white font-semibold text-justify text-xl font-openSans">
            Hari ini semakin cerah, yuk mulai beternak lagi, dan dapatkan
            Diamond semakin banyak!
          </h1>
          <div className="flex justify-end h-6">
            <img
              src={Next}
              alt=""
              className="w-6 animate-pulse"
              onClick={goToPage5}
            />
          </div>
        </div>
      </div>
    );
  };

  const goToPage5 = () => {
    Action1();
  };

  return (
    <div className="w-full h-screen overflow-hidden bg-page2 bg-cover mx-auto lg:max-w-6xl lg:h-[70%]">
      <div className="w-[90%] h-full mx-auto relative">
        <div class="h-16"></div>
        <div class="flex">
          <div class="w-fit h-screen">
            <div className="flex justify-center">
              <img src={Farmer2} alt="" className="w-[12rem] mt-[2.5rem]" />
            </div>
          </div>
          <div class="w-1/2 h-screen ">
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
                      Mr. Ducan
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
                            "Hari ini semakin cerah, yuk mulai beternak lagi, dan dapatkan Diamond semakin banyak!"
                          )
                          .start()
                          .pauseFor(300)
                          .callFunction(() => {
                            setNextButton(true);
                          });
                      }}
                    />
                  </h1>

                  <div className="flex justify-end h-6" onClick={goToPage5}>
                    {nextButton ? (
                      <img src={Next} alt="" className="w-6 animate-pulse" />
                    ) : null}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page4;
