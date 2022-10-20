import React, { useContext, useEffect, useState } from "react";
import Chicken2 from "../../../img/common/chicken2.png";
import Babi from "../../../img/common/pig.png";
import Domba from "../../../img/common/domba.png";
import Cow2 from "../../../img/common/cow2.png";
import AyamKecil from "../../../img/common/ayamkecil.png";
import Kelinci from "../../../img/common/kelinci.png";
import Keledai from "../../../img/common/keledai.png";
import Pouch from "../../../img/common/pouch.png";
import Kerbau from "../../../img/common/kerbau.png";
import Kuda from "../../../img/common/kuda.png";
import Header from "../../../Component/Diatom/Header";
import { UserContext } from "../../UserContext";
import axios from "axios";
import Cookies from "js-cookie";

const Page8 = ({ goToPage7, getUserInfo }) => {
  const { value, setValue, selectedAnimalID } = useContext(UserContext);
  const [hewan, setHewan] = useState([]);
  const [pakanDipilih, setPakanDipilih] = useState("");
  const [dialog, setDialog] = useState({
    show: false,
    message: "",
  });

  const tangkapPakanDipilih = (e) => {
    console.log(e.currentTarget.getAttribute("data-id"));
    setPakanDipilih(e.currentTarget.getAttribute("data-id"));
  };

  const Pakan = [
    {
      id: 1,
      ukuran: 10,
    },
    {
      id: 2,
      ukuran: 50,
    },
    {
      id: 3,
      ukuran: 100,
    },
    {
      id: 4,
      ukuran: 300,
    },
    {
      id: 5,
      ukuran: 500,
    },
    {
      id: 6,
      ukuran: 1000,
    },
  ];

  const Hewan = [
    {
      id: 1,
      name: "Ayam Eropa",
      skill: "Max 1.020 telur perhari",
      image: Chicken2,
    },
    {
      id: 2,
      name: "Sapi",
      skill: "Max penghasil susu 1.010 liter perhari",
      image: Cow2,
    },
    {
      id: 3,
      name: "Domba",
      skill: "Max 25 Kg daging perhari",
      image: Domba,
    },
    {
      id: 4,
      name: "Babi",
      skill: "Max 25 Kg daging perhari",
      image: Babi,
    },
    {
      id: 5,
      name: "Kuda",
      skill: "Max 25 Kg daging perhari",
      image: Kuda,
    },
    {
      id: 6,
      name: "Ayam Kecil",
      skill: "Max 25 Kg daging perhari",
      image: AyamKecil,
    },
    {
      id: 7,
      name: "Kelinci",
      skill: "Max 25 Kg daging perhari",
      image: Kelinci,
    },
    {
      id: 8,
      name: "Keledai",
      skill: "Max 25 Kg daging perhari",
      image: Keledai,
    },
    {
      id: 9,
      name: "Kerbau",
      skill: "Max 25 Kg daging perhari",
      image: Kerbau,
    },
  ];

  const cobaBeliPangan = async () => {
    const userCookie = Cookies.get("user");
    try {
      let hit = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/buy-pakan`,
        {
          token: userCookie,
          pakan_id: 1,
        }
      );
      let res = hit.data.message;
      setDialog({
        show: true,
        message: res,
      });
    } catch (error) {
      setDialog({
        show: true,
        message: error.response.data.message,
      });
    }
  };

  function numberWithCommas(num) {
    let newNum = parseInt(num);
    return newNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const tutupAlert = () => {
    setDialog({
      show: false,
      message: "",
    });
    getUserInfo();
  };

  const getHewan = () => {
    const data = Hewan.find((x) => x.id === selectedAnimalID);
    setHewan(data);
  };

  useEffect(() => {
    getHewan();
  }, []);

  return (
    <div className="w-full h-screen overflow-hidden bg-barn bg-cover mx-auto lg:max-w-6xl lg:h-[70%] ">
      <div className="w-[90%] h-full mx-auto ">
        {/* HEADER */}
        <div className="h-[15%] ">
          <Header
            Diamond={true}
            Pouch={true}
            harta={value}
            setHarta={setValue}
          />
        </div>

        {/* HEADER END */}
        {/* CONTENT */}
        <div className="w-full h-[75%] animate-fadeInKu">
          <div className="w-full h-full justify-center flex items-start">
            <div className="w-full h-full flex flex-col relative">
              {dialog.show ? (
                <div
                  className="absolute w-80 h-20 bg-[#782443] rounded-xl ml-5 ring-offset-2 ring-4 ring-[#782443] left-52 z-50 animate-fadeInKu "
                  onClick={tutupAlert}
                >
                  <div className="w-full h-full px-16 text-center items-center flex animate-pulse">
                    <span className="text-white text-xl">
                      {dialog.message}!
                    </span>
                  </div>
                </div>
              ) : null}
              <div className="w-full h-10 flex justify-center items-center lg:h-20 mb-2">
                <span className="text-white text-xl tracking-widest font-bold uppercase">
                  beri pakan ternakku!
                </span>
              </div>
              <div className="w-full h-full flex justify-center items-center ">
                <div className="flex h-full w-full bg-papan2 bg-contain bg-no-repeat bg-center justify-center items-center ">
                  <div className="flex flex-col  h-full w-[60%] items-center ">
                    <span className="mt-2 text-white text-md">
                      {hewan.name} - 30 Hari
                    </span>
                    <img
                      src={hewan.image}
                      alt=""
                      className="w-20 h-24 mt-5 lg:w-60 lg:h-64"
                    />
                    <p className="mt-4 text-center text-md font-semibold ">
                      10Kg Pangan
                    </p>
                    <p className="text-center text-sm font-semibold ">
                      Menghasilkan 101 telur per hari
                    </p>
                  </div>
                </div>
                <div className="flex flex-col h-full w-full items-center ">
                  <div className="">
                    <div className="w-full h-[70%] grid grid-cols-2 gap-2 py-5">
                      {Pakan.map((item) => {
                        const { id, ukuran } = item;
                        return (
                          <button
                            className="w-40  py-2 bg-[#f0ecd8]  rounded-full items-center flex justify-center border-transparent focus:outline-none focus:ring-[#E29A6C] focus:bg-white focus:ring-2"
                            type="button"
                            key={id}
                            data-id={id}
                            onClick={tangkapPakanDipilih}
                          >
                            <img src={Pouch} alt="" className="w-7" />
                            <span className="font-semibold  text-sm text-[#782443]">
                              {numberWithCommas(ukuran)} Kg
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>
                  <div className="w-full h-full ">
                    <div className="h-full flex justify-center items-center gap-2">
                      <div className="block mx-auto w-40 h-10 bg-gradient-to-r from-pink-400 to-red-600 rounded-full uppercase tracking-[0.15rem] font-extrabold text-white font-openSans active:bg-gradient-to-r active:from-red-500 active:to-pink-500 group">
                        <button
                          className="w-full h-full items-center tracking-widest"
                          type="button"
                          onClick={goToPage7}
                        >
                          Batal
                        </button>
                      </div>
                      <div className="block mx-auto w-40 h-10 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full uppercase tracking-[0.15rem] font-extrabold text-white font-openSans active:bg-gradient-to-r active:from-blue-500 active:to-cyan-500 group">
                        <button
                          className=" w-full h-full items-center tracking-widest"
                          type="button"
                          onClick={cobaBeliPangan}
                        >
                          Beri Pangan
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page8;
