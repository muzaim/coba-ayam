import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";
import { UserContext } from "../../UserContext";
import axios from "axios";
import Cookies from "js-cookie";
const eye = <FontAwesomeIcon icon={faEye} />;
const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;

const FormRegister = ({ Action1, Action2, Action3 }) => {
  const { setUserLogin, setValue } = useContext(UserContext);
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
  const [registerSuccess, setRegisterSuccess] = useState(false);

  const goToPage2 = () => {
    Action1();
  };

  const goToPage6 = () => {
    Action2();
  };

  const goToMenu = () => {
    Action3();
  };

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
      setRegisterSuccess(true);
      setDataRegister({
        username: "",
        phone: "",
        user_ref: "",
        email: "",
        password: "",
        password_confirmation: "",
      });
    } catch (error) {
      setWrongPassword(true);
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
                {registerSuccess ? (
                  <span className="text-center text-green-600 text-lg font-semibold">
                    Akun berhasil dibuat!
                  </span>
                ) : null}
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
