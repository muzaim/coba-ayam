import React from "react";
import Farmer2 from "../../../img/common/farmer2.png";
import Panel1 from "./Panel1";

const Page13 = () => {
  return (
    <div className="w-full h-screen overflow-hidden bg-page2 bg-cover lg:max-w-6xl mx-auto">
      <div className="w-[90%] h-full mx-auto relative">
        <div class="h-16"></div>
        <div class="flex">
          <div class="w-fit h-screen">
            <div className="flex justify-center">
              <img src={Farmer2} alt="" className="w-[12rem] mt-[2.5rem]" />
            </div>
          </div>
          <div class="w-1/2 h-screen ">
            <Panel1 />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page13;
