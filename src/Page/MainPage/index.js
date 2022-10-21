import React, { useState, useContext, useEffect } from "react";
import {
  Menu,
  Page2,
  Page3,
  Page4,
  Page5,
  Page6,
  Page7,
  Page8,
  Page9,
  Page12,
  Page13,
  Page15,
  Page16,
} from "../index";
import FormLogin from "../Menu/Login/FormLogin";
import FormRegister from "../Menu/Register/FormRegister";
import { UserContext } from "./../UserContext";
import axios from "axios";
import Cookies from "js-cookie";

const MainPage = () => {
  const { setUserLogin, setValue } = useContext(UserContext);
  const [step, setStep] = useState("Menu");

  const goToMenu = () => {
    setStep("Menu");
  };

  const goToFormLogin = () => {
    setStep("FormLogin");
  };

  const goToFormRegister = () => {
    setStep("FormRegister");
  };

  const goToPage2 = () => {
    setStep("Page2");
  };

  const goToPage3 = () => {
    setStep("Page3");
  };

  const goToPage4 = () => {
    setStep("Page4");
  };

  const goToPage5 = () => {
    setStep("Page5");
  };

  const goToPage6 = () => {
    setStep("Page6");
  };

  const goToPage7 = () => {
    setStep("Page7");
  };

  const goToPage8 = () => {
    setStep("Page8");
  };

  const goToPage12 = () => {
    setStep("Page12");
  };

  const goToPage13 = () => {
    setStep("Page13");
  };

  const goToPage15 = () => {
    setStep("Page15");
  };
  const goToPage16 = () => {
    setStep("Page16");
  };
  const getUserInfo = async () => {
    const userCookie = Cookies.get("user");
    try {
      let userInfo = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/user-info`,
        {
          params: {
            token: userCookie,
          },
        }
      );
      let dataUser = userInfo.data.Data;
      await setValue(dataUser.user_wallet);
      await setUserLogin(dataUser.user_active);

      // console.log(`ini data user dari main page`, dataUser);
      // console.log(`info`, info);
      // console.log(`harta`, value);
    } catch (error) {
      console.log(error);
    }
  };

  const readCookie = () => {
    const userCookie = Cookies.get("user");
    if (userCookie) {
      setStep("Page6");
    } else {
      setStep("Menu");
    }
  };

  useEffect(() => {
    readCookie();
  }, []);

  switch (step) {
    case "Menu":
      return (
        <Menu
          goToFormLogin={goToFormLogin}
          goToFormRegister={goToFormRegister}
        />
      );
    case "FormLogin":
      return (
        <FormLogin
          goToPage2={goToPage2}
          goToPage6={goToPage6}
          goToMenu={goToMenu}
        />
      );
    case "FormRegister":
      return <FormRegister goToMenu={goToMenu} />;
    case "Page2":
      return <Page2 goToPage3={goToPage3} />;
    case "Page3":
      return <Page3 goToPage4={goToPage4} />;
    case "Page4":
      return <Page4 goToPage5={goToPage5} />;
    case "Page5":
      return <Page5 goToPage6={goToPage6} />;
    case "Page6":
      return (
        <Page6
          goToPage7={goToPage7}
          goToPage13={goToPage13}
          goToPage15={goToPage15}
          getUserInfo={getUserInfo}
          goToMenu={goToMenu}
          goToPage16={goToPage16}
        />
      );
    case "Page7":
      return (
        <Page7
          goToPage8={goToPage8}
          goToPage12={goToPage12}
          goToPage6={goToPage6}
        />
      );
    case "Page8":
      return <Page8 goToPage7={goToPage7} getUserInfo={getUserInfo} />;
    case "Page9":
      return (
        <Page9
          goToPage7={goToPage7}
          goToPage13={goToPage13}
          goToPage6={goToPage6}
        />
      );
    case "Page12":
      return (
        <Page12
          goToPage6={goToPage6}
          goToPage7={goToPage7}
          getUserInfo={getUserInfo}
        />
      );
    case "Page13":
      return <Page13 goToPage6={goToPage6} getUserInfo={getUserInfo} />;
    case "Page15":
      return <Page15 goToPage6={goToPage6} getUserInfo={getUserInfo} />;
    case "Page16":
      return <Page16 goToPage6={goToPage6} />;
    default:
      break;
  }

  return <div>MainPage</div>;
};

export default MainPage;
