import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState, useContext } from "react";
import { UserContext } from "../../UserContext";
import axios from "axios";
import Cookies from "js-cookie";
const eye = <FontAwesomeIcon icon={faEye} />;
const eyeSlash = <FontAwesomeIcon icon={faEyeSlash} />;

const FormLogin = ({ Action1, Action2, Action3 }) => {
  const { setUserLogin, setValue } = useContext(UserContext);
  const [dataLogin, setDataLogin] = useState({
    username: "",
    password: "",
  });
  const [wrongPassword, setWrongPassword] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [passwordShown, setPasswordShown] = useState(false);

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
    setDataLogin({ ...dataLogin, [e.target.name]: e.target.value });
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

  // LOGIN
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", dataLogin.username);
    formData.append("password", dataLogin.password);

    //if empty
    if (dataLogin.username === "" || dataLogin.password === "") {
      setEmpty(true);
      setWrongPassword(false);
      setDataLogin({
        username: "",
        password: "",
      });
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
        setUserLogin(dataUser.user_active);
        setValue(dataUser.user_wallet);
        // navigate
        // angka 2 belum tutor
        // selain 2 sudah tutor
        // console.log(dataUser.user_active.active_tutor);
        if (dataUser.user_active.active_tutor === "0") {
          // goToPage6();
          goToPage6();
        } else {
          goToPage2();
        }
      } catch (error) {
        console.log(error);
      }
    } catch (error) {
      setWrongPassword(true);
      setDataLogin({
        username: "",
        password: "",
      });
    }
  };

  return (
    <div className="w-full h-full overflow-hidden bg-farmBarn bg-cover mx-auto lg:max-w-6xl lg:h-[70%] fixed">
      <div className="h-full">
        <div className="flex h-full items-end justify-center pb-5 ">
          <div className="w-full h-full  flex items-center animate-fadeInKu">
            <div className="w-[40%] h-52 mx-auto">
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
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
                  name="username"
                  type="text"
                  value={dataLogin.username}
                  onChange={changeHandler}
                  placeholder="Username"
                  className="h-10 rounded-lg px-3 outline-pink-500 outline-offset-5 outline-5"
                  onFocus={(e) => {
                    setWrongPassword(false);
                    setEmpty(false);
                  }}
                />
                <div className="pass-wrapper bg-white rounded-lg">
                  <input
                    type={passwordShown ? "text" : "password"}
                    onChange={changeHandler}
                    value={dataLogin.password}
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
                <div className="w-full h-full flex">
                  <div className="block mx-auto h-14 w-36 bg-gradient-to-r from-pink-400 to-red-500 rounded-full uppercase tracking-[0.15rem] font-extrabold text-white font-openSans active:bg-[#ffffff] group">
                    <button
                      className="group-active:text-[#5e17eb]  w-full h-full items-center tracking-widest"
                      type="button"
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
                      Login
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};
export default FormLogin;
