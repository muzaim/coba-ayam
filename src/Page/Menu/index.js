import React, { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Tama from "../../img/common/tamako.png";
import { UserContext } from "./../UserContext";

const Menu = ({ Action1, Action2 }) => {
  const { setUserToken } = useContext(UserContext);

  const [loading, setLoading] = useState(true);
  const [loginForm, setLoginForm] = useState(false);

  const openLoginForm = () => {
    setLoginForm((current) => !current);
  };

  const LoadingBar = () => {
    return (
      <div class="w-72  bg-gray-200 h-7 rounded-xl overflow-hidden block mx-auto mt-12 ">
        <div
          class=" bg-indigo-600 h-7 rounded-xl animate-running"
          style={{ width: `100%` }}
        ></div>
      </div>
    );
  };

  const goToPage2 = () => {
    Action1();
  };
  const goToPage6 = () => {
    Action2();
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await axios.post(`${process.env.REACT_APP_BASE_URL}/login`, {
        username: "miarta2",
        password: "123123",
      });
      let data = res.data;
      setUserToken(data.token);

      if (data.status === 200) {
        goToPage6();
      } else {
        goToPage6();
      }
    } catch (error) {
      goToPage6();
    }
  };

  const Display = () => {
    return (
      <div className="grid gap-2 mt-44 ">
        <div className="block mx-auto py-4 px-16  rounded-3xl uppercase tracking-[0.15rem] font-extrabold text-white font-openSans active:bg-[#ffffff] group">
          <img src={Tama} alt="" className="w-[26rem]" />
        </div>
        <div
          className="block mx-auto py-4 px-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl uppercase tracking-[0.15rem] font-extrabold text-white font-openSans active:bg-[#ffffff] group"
          onClick={openLoginForm}
        >
          <span className="group-active:text-[#5e17eb] ">Masuk</span>
        </div>
        <div className="block mx-auto py-2 px-16 rounded-3xl uppercase tracking-[0.15rem] font-extrabold text-white font-openSans active:bg-[#ffffff] group">
          <span className="group-active:text-[#5e17eb] uppercase">
            Belum punya akun? buat akun
          </span>
        </div>
      </div>
    );
  };

  const LoginForm = () => {
    return (
      <div className="w-full h-full  flex items-center">
        <div className="w-[40%] h-52 mx-auto">
          <form
            action=""
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              name="username"
              className="h-10 rounded-lg px-3 outline-pink-500 outline-offset-5 outline-5"
            />
            <input
              type="password"
              name="password"
              className="h-10 rounded-lg px-3 outline-pink-500 outline-offset-5 outline-5"
            />
            <div className="block mx-auto h-16 w-44 bg-gradient-to-r from-green-400 to-blue-500 rounded-full uppercase tracking-[0.15rem] font-extrabold text-white font-openSans active:bg-[#ffffff] group">
              <button
                className="group-active:text-[#5e17eb]  w-full h-full items-center"
                type="submit"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1);
  }, []);

  return (
    <div className="w-full h-full overflow-hidden bg-farmBarn bg-cover mx-auto lg:max-w-6xl lg:h-[70%] ">
      <div className="h-full">
        <div className="flex h-full items-end justify-center pb-5 ">
          {loginForm ? <LoginForm /> : <Display />}
          {/* <LoginForm /> */}
          {/* {loading ? <LoadingBar /> : <Display />} */}
        </div>
      </div>
    </div>
  );
};

export default Menu;
