import React, { useState, useContext } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import Header from "../../../Component/Diatom/Header";
import { UserContext } from "../../UserContext";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const Copy = <FontAwesomeIcon icon={faClipboard} />;

const Page17 = ({
  goToPage6,
  goToMenu,
  playSuccessSound,
  playSelectSound,
  playPop1,
  playPaperFlipSound,
}) => {
  const { value, setValue, setSelectedAnimalID } = useContext(UserContext);
  const [aktMembPanel, setAktMembPanel] = useState(true);
  const [penKomPanel, setPenKomPanel] = useState(false);
  const [dataUserWallet, setDataUserWallet] = useState([]);
  const [dataUserActive, setDataUserActive] = useState([]);
  const [telur, setTelur] = useState(null);
  const [daging, setDaging] = useState(null);
  const [susu, setSusu] = useState(null);

  const openAktMembPanel = () => {
    setAktMembPanel(!aktMembPanel);
    setPenKomPanel(false);
  };

  const openPenKomPanel = () => {
    setPenKomPanel(!penKomPanel);
    setAktMembPanel(false);
  };
  useEffect(() => {
    console.log(`masuk`);
  });

  const getUserInfo = async () => {
    const userCookie = Cookies.get("user");
    if (!userCookie) {
      MySwal.fire({
        position: "center",
        icon: "warning",
        text: "Sesi login kamu telah habis!",
        showConfirmButton: false,
        timer: 1500,
      });
      goToMenu();
    }
    if (!userCookie) {
      MySwal.fire({
        position: "center",
        icon: "warning",
        text: "Sesi login kamu telah habis!",
        showConfirmButton: false,
        timer: 1500,
      });
      goToMenu();
    }
    try {
      let userInfo = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/user-info`,
        {
          params: {
            token: userCookie,
          },
        }
      );
      let res = userInfo.data.Data;
      setDataUserActive(res.user_active);
      setDataUserWallet(res.user_wallet);
      setDaging(res.user_wallet.hasil_ternak[3].qty);
      setSusu(res.user_wallet.hasil_ternak[2].qty);
      setTelur(res.user_wallet.hasil_ternak[1].qty);
    } catch (error) {
      console.log(`dari ketika getUsrInfo `, error);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden  mx-auto lg:max-w-6xl lg:h-[70%] z-30 text-white ">
      <div className="w-full h-full bg-city bg-cover bg-center  before:opacity-10 ">
        <div className="w-[90%] h-full mx-auto">
          {/* HEADER */}
          <div className="h-[15%]">
            <Header
              Diamond={true}
              BackButton={true}
              Action2={goToPage6}
              harta={value}
              setHarta={setValue}
            />
          </div>
          {/* HEADER END */}
          {/* CONTENT */}
          <div className="w-full flex h-[80%] ">
            {/* kiri */}
            <div className="w-[30%] h-full px-4 animate-fadeInKu flex items-center py-3 "></div>
            {/* kanan */}
            <div className="w-full h-full px-5 flex flex-col justify-center items-center py-3 ">
              <div className="flex justify-around  w-full h-full  bg-transparent rounded-xl  bg-white">
                <h1>Hello from withdral page!</h1>
              </div>
            </div>
          </div>
          {/* KANAN */}
        </div>
      </div>
    </div>
  );
};

export default Page17;
