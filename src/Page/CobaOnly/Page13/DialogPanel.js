import React, { useState } from "react";

import Next from "../../../img/usage/play.png";
import Typewriter from "typewriter-effect";

const DialogPanel = ({ DialogNya, nextDialog, skip }) => {
  const [nextButton, setNextButton] = useState(false);

  const { text } = DialogNya;
  return (
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
                .typeString(`${text}`)
                .start()
                .pauseFor(300)
                .callFunction(() => {
                  setNextButton(true);
                });
            }}
          />
        </h1>

        <div className="flex justify-end h-6" onClick={nextDialog}>
          {nextButton ? (
            <img src={Next} alt="" className="w-6 animate-pulse" />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default DialogPanel;
