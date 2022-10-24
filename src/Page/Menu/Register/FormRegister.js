import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import axios from "axios";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const eye = <FontAwesomeIcon icon={faEye} />;
const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;

const FormRegister = ({ goToMenu }) => {
  const [dataRegister, setDataRegister] = useState({
    username: "",
    phone: "",
    user_ref: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  const [wrongPassword, setWrongPassword] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);
  const [passwordConfirmShow, setPasswordConfirmShown] = useState(false);

  const changeHandler = (e) => {
    setDataRegister({ ...dataRegister, [e.target.name]: e.target.value });
  };

  const EnterHandler = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    }
  };

  const togglePasswordVisiblity = (e) => {
    e.preventDefault();
    setPasswordShown(passwordShown ? false : true);
  };

  const togglePasswordConfirmVisiblity = (e) => {
    e.preventDefault();
    setPasswordConfirmShown(passwordConfirmShow ? false : true);
  };

  // LOGIN
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", dataRegister.username);
    formData.append("phone", dataRegister.phone);
    formData.append("user_ref", dataRegister.user_ref);
    formData.append("password", dataRegister.password);
    formData.append(
      "password_confirmation",
      dataRegister.password_confirmation
    );

    //if empty
    // if (dataRegister.username === "" || dataRegister.password === "") {
    //   setEmpty(true);
    //   setWrongPassword(false);
    //   return;
    // }

    // login
    try {
      await axios.post(`${process.env.REACT_APP_BASE_URL}/register`, formData);
      setDataRegister({
        username: "",
        phone: "",
        user_ref: "",
        email: "",
        password: "",
        password_confirmation: "",
      });
      MySwal.fire({
        position: "center",
        icon: "success",
        text: "Register Success!",
        showConfirmButton: false,
        timer: 1500,
      }).then(
        setTimeout(() => {
          goToMenu();
        }, 1650)
      );
    } catch (error) {
      MySwal.fire({
        position: "center",
        icon: "error",
        text: "Register Failed!",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <div className="w-full h-full overflow-hidden bg-farmBarn bg-cover mx-auto lg:max-w-6xl lg:h-[70%] ">
      <div className="h-full">
        <div className="flex h-full items-end justify-center pb-5 ">
          <div className="w-full h-full  flex items-center animate-fadeInKu">
            <div className="w-[60%] h-52 mx-auto -mt-10">
              <form
                action=""
                className="flex flex-col gap-4"
                onSubmit={handleSubmit}
              >
                <input
                  value={dataRegister.username}
                  name="username"
                  type="text"
                  placeholder="Username"
                  onChange={changeHandler}
                  className="h-10 rounded-lg px-3 outline-pink-500 outline-offset-5 outline-5"
                  onFocus={(e) => {
                    setWrongPassword(false);
                    setEmpty(false);
                  }}
                />
                <input
                  value={dataRegister.phone}
                  name="phone"
                  type="number"
                  placeholder="Phone"
                  onChange={changeHandler}
                  className="h-10 rounded-lg px-3 outline-pink-500 outline-offset-5 outline-5"
                  onFocus={(e) => {
                    setWrongPassword(false);
                    setEmpty(false);
                  }}
                />
                <div className="flex gap-2 w-full">
                  <div className="pass-wrapper bg-white rounded-lg w-[50%]">
                    <input
                      type={passwordShown ? "text" : "password"}
                      value={dataRegister.password}
                      onChange={changeHandler}
                      name="password"
                      placeholder="Password"
                      className="h-10 rounded-lg px-3 w-full  outline-pink-500 outline-offset-5 outline-5"
                      onKeyPress={(e) => EnterHandler(e)}
                    />
                    <i
                      className="text-[#00fcb6]"
                      onClick={togglePasswordVisiblity}
                    >
                      {passwordShown ? eyeSlash : eye}
                    </i>
                  </div>
                  <div className="pass-wrapper bg-white rounded-lg w-[50%]">
                    <input
                      type={passwordConfirmShow ? "text" : "password"}
                      value={dataRegister.password_confirmation}
                      onChange={changeHandler}
                      name="password_confirmation"
                      placeholder="Password confirm"
                      className="h-10 rounded-lg px-3 w-full  outline-pink-500 outline-offset-5 outline-5"
                      onKeyPress={(e) => EnterHandler(e)}
                    />
                    <i
                      className="text-[#00fcb6]"
                      onClick={togglePasswordConfirmVisiblity}
                    >
                      {passwordConfirmShow ? eyeSlash : eye}
                    </i>
                  </div>
                </div>
                <input
                  value={dataRegister.user_ref}
                  name="user_ref"
                  type="text"
                  onChange={changeHandler}
                  placeholder="Referal Code"
                  className="h-10 rounded-lg px-3 outline-pink-500 outline-offset-5 outline-5"
                  onFocus={(e) => {
                    setWrongPassword(false);
                    setEmpty(false);
                  }}
                  onKeyPress={(e) => EnterHandler(e)}
                />

                <div className="w-full h-full flex">
                  <div className="block mx-auto h-14 w-36 bg-gradient-to-r from-pink-400 to-red-500 rounded-full uppercase tracking-[0.15rem] font-extrabold text-white font-openSans active:bg-[#ffffff] group">
                    <button
                      className="group-active:text-[#5e17eb]  w-full h-full items-center tracking-widest"
                      type="submit"
                      onClick={goToMenu}
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
        </div>
      </div>
    </div>
  );
};
export default FormRegister;
