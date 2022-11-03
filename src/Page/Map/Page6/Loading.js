import React from "react";
import AnimalLoading from "../../../img/common/loading.gif";

const Loading = () => {
  return (
    <div className="w-full h-full z-40 overflow-hidden bg-yellow-300">
      <div className="w-full h-full z-40  bg-loading bg-cover relative">
        <div className="w-full h-28  bottom-0 absolute justify-center flex">
          <div className="flex flex-col h-full w-[80%] items-center justify-center ">
            <div className="flex justify-center items-center  w-full ">
              <img src={AnimalLoading} alt="" className="w-20" />
              <div className=" text-white mt-1 font-semibold tracking-widest">
                Beri makan ternakmu supaya gemuk!
              </div>
            </div>
            <div className="w-full  bg-white h-4 rounded-full overflow-hidden lg:w-72 lg:h-10 mb-3">
              <div
                className="bg-yellow-400 h-4 rounded-full lg:h-10 animate-running"
                style={{ width: `100%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
