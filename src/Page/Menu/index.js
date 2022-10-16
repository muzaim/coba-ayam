import React, { useContext, useRef } from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import Tama from "../../img/common/tamako.png";
import { UserContext } from "./../UserContext";
import "./style.css";
import Cookies from "js-cookie";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

const Menu = ({ Action1, Action2 }) => {
  const {
    isAuth,
    setUserLogin,
    userLogin,
    setValue,
    value,
    setIsAuth,
    setUserToken,
  } = useContext(UserContext);

  const dataLogin = useRef(null);
  const [loading, setLoading] = useState(true);
  const [loginForm, setLoginForm] = useState(false);
  const [registerForm, setRegisterForm] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);

  const openLoginForm = () => {
    setLoginForm((current) => !current);
    setWrongPassword(false);
    setEmpty(false);
    setRegisterForm(false);
  };
  const openRegisterForm = () => {
    setRegisterForm((current) => !current);
    setLoginForm(false);
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

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  // LOGIN
  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = dataLogin.current;
    const formData = new FormData();
    formData.append("username", form["username"].value);
    formData.append("password", form["password"].value);

    // if empty
    if (
      dataLogin.current.username.value === "" ||
      dataLogin.current.password.value === ""
    ) {
      setEmpty(true);
      setWrongPassword(false);
      return;
    }

    // login
    try {
      let res = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/login`,
        formData
      );
      let data = res.data;

      Cookies.set("user", data.token, { expires: 1 });

      // is tutorial
      try {
        let userInfo = await axios.get(
          `${process.env.REACT_APP_BASE_URL}/user-info`,
          {
            params: {
              token: data.token,
            },
          }
        );
        let dataUser = userInfo.data.Data;
        setValue(dataUser.user_wallet);
        setUserLogin(dataUser.user_active);

        // navigate
        // angka 2 belum tutor
        // selain 2 sudah tutor
        // console.log(dataUser.user_active.active_tutor);
        if (dataUser.user_active.active_tutor === "0") {
          goToPage6();
          // goToPage2();
        } else {
          goToPage6();
        }
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      setWrongPassword(true);
    }
  };

  const Display = () => {
    return (
      <div className="grid gap-2 mt-44 ">
        <div className="block mx-auto py-4 px-16  rounded-3xl uppercase tracking-[0.15rem] font-extrabold text-white font-openSans ">
          <img src={Tama} alt="" className="w-[26rem]" />
        </div>
        <div
          className="block mx-auto py-4 px-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-3xl uppercase tracking-[0.15rem] font-extrabold text-white font-openSans active:bg-[#ffffff] group"
          onClick={openLoginForm}
        >
          <span className="group-active:text-[#5e17eb] ">Masuk</span>
        </div>
        <div
          className="block mx-auto py-2 px-16 rounded-3xl uppercase tracking-[0.15rem] font-extrabold text-white font-openSans group"
          onClick={openRegisterForm}
        >
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
            ref={dataLogin}
          >
            {wrongPassword ? (
              <span className="text-center text-red-600 text-lg font-semibold">
                Username atau password salah!
              </span>
            ) : null}
            {empty ? (
              <span className="text-center text-red-600 text-lg font-semibold">
                Masukkan username & password!
              </span>
            ) : null}
            <input
              ref={dataLogin.username}
              name="username"
              type="text"
              placeholder="Username"
              className="h-10 rounded-lg px-3 outline-pink-500 outline-offset-5 outline-5"
              onFocus={(e) => {
                setWrongPassword(false);
                setEmpty(false);
              }}
            />
            <div className="pass-wrapper bg-white rounded-lg">
              <input
                ref={dataLogin.password}
                name="password"
                type="password"
                placeholder="Password"
                className="h-10 rounded-lg px-3 w-full  outline-pink-500 outline-offset-5 outline-5"
                onKeyPress={(e) => EnterHandler(e)}
              />
              {/* <i className="text-[#00fcb6]" onClick={togglePasswordVisiblity}>
                {eye}
              </i> */}
            </div>
            <div className="w-full h-full flex">
              <div className="block mx-auto h-14 w-36 bg-gradient-to-r from-pink-400 to-red-500 rounded-full uppercase tracking-[0.15rem] font-extrabold text-white font-openSans active:bg-[#ffffff] group">
                <button
                  className="group-active:text-[#5e17eb]  w-full h-full items-center tracking-widest"
                  type="submit"
                  onClick={openLoginForm}
                >
                  Back
                </button>
              </div>
              <div className="block mx-auto h-14 w-36 bg-gradient-to-r from-green-400 to-blue-500 rounded-full uppercase tracking-[0.15rem] font-extrabold text-white font-openSans active:bg-[#ffffff] group">
                <button
                  className="group-active:text-[#5e17eb]  w-full h-full items-center tracking-widest"
                  type="submit"
                >
                  Login
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const EnterHandler = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  useEffect(() => {});

  const RegisterForm = () => {
    return (
      <div className="w-full h-full  flex items-center">
        <div className="w-[40%] h-52 mx-auto">
          <form
            action=""
            className="flex flex-col gap-4"
            onSubmit={handleSubmit}
            ref={dataLogin}
          >
            {wrongPassword ? (
              <span className="text-center text-red-600 text-lg font-semibold">
                Username atau password salah!
              </span>
            ) : null}
            {empty ? (
              <span className="text-center text-red-600 text-lg font-semibold">
                Masukkan username & password!
              </span>
            ) : null}
            <input
              ref={dataLogin.username}
              name="username"
              type="text"
              placeholder="Username"
              className="h-10 rounded-lg px-3 outline-pink-500 outline-offset-5 outline-5"
              onFocus={(e) => {
                setWrongPassword(false);
                setEmpty(false);
              }}
            />
            <input
              ref={dataLogin.username}
              name="username"
              type="email"
              placeholder="Email"
              className="h-10 rounded-lg px-3 outline-pink-500 outline-offset-5 outline-5"
              onFocus={(e) => {
                setWrongPassword(false);
                setEmpty(false);
              }}
            />
            <div className="pass-wrapper bg-white rounded-lg">
              <input
                ref={dataLogin.password}
                name="password"
                type="password"
                placeholder="Password"
                className="h-10 rounded-lg px-3 w-full  outline-pink-500 outline-offset-5 outline-5"
              />
              {/* <i className="text-[#00fcb6]" onClick={togglePasswordVisiblity}>
                {eye}
              </i> */}
            </div>
            <div className="w-full h-full flex">
              <div className="block mx-auto h-14 w-36 bg-gradient-to-r from-pink-400 to-red-500 rounded-full uppercase tracking-[0.15rem] font-extrabold text-white font-openSans active:bg-[#ffffff] group">
                <button
                  className="group-active:text-[#5e17eb]  w-full h-full items-center tracking-widest"
                  type="submit"
                  onClick={openRegisterForm}
                >
                  Back
                </button>
              </div>
              <div className="block mx-auto h-14 w-36 bg-gradient-to-r from-green-400 to-blue-500 rounded-full uppercase tracking-[0.15rem] font-extrabold text-white font-openSans active:bg-[#ffffff] group">
                <button
                  className="group-active:text-[#5e17eb]  w-full h-full items-center tracking-widest"
                  type="submit"
                >
                  Submit
                </button>
              </div>
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
          {/* {loginForm ? <LoginForm /> : <Display />} */}
          {/* <LoginForm /> */}
          {/* {loading ? <LoadingBar /> : <Display />} */}
          {(loading && <LoadingBar />) ||
            (loginForm && <LoginForm />) ||
            (registerForm && <RegisterForm />) || <Display />}
        </div>
      </div>
    </div>
  );
};

export default Menu;
