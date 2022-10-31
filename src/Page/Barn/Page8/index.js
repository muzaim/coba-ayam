import React, { useContext, useEffect, useState } from "react";
import Pouch from "../../../img/common/pouch.png";
import Header from "../../../Component/Diatom/Header";
import { UserContext } from "../../UserContext";
import axios from "axios";
import Cookies from "js-cookie";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const Page8 = ({
  goToPage7,
  getUserInfo,
  playNegativeSound,
  playPop1,
  playSuccessSound,
  playSelectSound,
  playGoBackSound,
}) => {
  const { value, setValue, selectedAnimalID } = useContext(UserContext);
  const [hewan, setHewan] = useState([]);
  const [pakanDipilih, setPakanDipilih] = useState({
    id: "",
    ternakId: "",
    pakan: "",
    benefit: "",
    text: "",
  });
  const [pakanTernak, setPakanTernak] = useState([]);

  const tanyaBuyPakan = () => {
    playPop1();
    if (!pakanDipilih.pakan) {
      MySwal.fire({
        position: "center",
        icon: "error",
        text: "Pilih pakan terlebih dahulu!",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }
    MySwal.fire({
      title: "Beri Pakan",
      position: "center",
      text: `Apakah kamu ingin memberi ${numberWithCommas(
        pakanDipilih.pakan
      )} Kg Pakan?`,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      confirmButtonText: "Ya",
      cancelButtonText: "Tidak",
      cancelButtonColor: "#d33",
    }).then((result) => {
      if (result.isConfirmed) {
        buyPakan();
      }
    });
  };

  function numberWithCommas(num) {
    let newNum = parseInt(num);
    return newNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const tangkapPakanDipilih = (e) => {
    playSelectSound();
    setPakanDipilih({
      id: e.currentTarget.getAttribute("data-id"),
      ternakId: e.currentTarget.getAttribute("data-ternak-id"),
      pakan: e.currentTarget.getAttribute("data-pakan"),
      benefit: e.currentTarget.getAttribute("data-benefit"),
      text: e.currentTarget.getAttribute("data-text"),
    });
  };

  const getPakanTernak = async () => {
    try {
      let dataTernak = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/get-pakan-ternak/${selectedAnimalID.ternak_id}`
      );
      let res = dataTernak.data.data;
      setPakanTernak(res.pakan);
      setHewan(res.ternak);
    } catch (error) {
      console.log(error.response.data.message);
    }
  };

  const buyPakan = async () => {
    const userCookie = Cookies.get("user");
    const pakanId = pakanDipilih.id;
    const ternakId = selectedAnimalID.id;
    try {
      let hit = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/beri-pakan`,
        {
          token: userCookie,
          pakan_id: pakanId,
          user_ternak_id: ternakId,
        }
      );
      let res = hit.data.message;
      playSuccessSound();
      MySwal.fire({
        position: "center",
        icon: "success",
        text: res,
        showConfirmButton: false,
        timer: 1500,
      }).then(
        setTimeout(() => {
          getUserInfo();
          goToPage7();
        }, 1700)
      );
    } catch (error) {
      playNegativeSound();
      MySwal.fire({
        position: "center",
        icon: "error",
        text: error.response.data.message,
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  useEffect(() => {
    getPakanTernak();
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
              <div className="w-full h-10 flex justify-center items-center lg:h-20 mb-2">
                <span className="text-white text-xl tracking-widest font-bold uppercase">
                  beri pakan ternakku!
                </span>
              </div>
              <div className="w-full h-full flex justify-center items-center ">
                <div className="flex h-full w-full bg-papan2 bg-contain bg-no-repeat bg-center justify-center items-center ">
                  <div className="flex flex-col  h-full w-[70%] items-center">
                    <span className="mt-2 text-white text-md"></span>
                    <img
                      src={hewan.avatar}
                      alt=""
                      className="w-20 h-24 mt-12 lg:w-60 lg:h-64 animate-bounce"
                    />
                    <p className="mt-2 text-center text-md font-semibold ">
                      {/* {pakanDipilih.pakan}Kg Pangan */}
                      {pakanDipilih.pakan
                        ? `${pakanDipilih.pakan} Kg Pangan`
                        : `Pilih pakan untuk melihat benefit!`}
                    </p>
                    <p className="text-center text-sm font-semibold">
                      {/* Menghasilkan {pakanDipilih.benefit} telur per hari */}
                      {pakanDipilih.text ? pakanDipilih.text : null}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col h-full w-full items-center ">
                  <div className="">
                    <div className="w-full h-[70%] grid grid-cols-2 gap-2 py-5 ">
                      {pakanTernak.map((item) => {
                        const { id, ternak_id, pakan, benefit, text } = item;
                        return (
                          <button
                            className="w-40  py-2 bg-[#f0ecd8]  rounded-full items-center flex justify-center border-transparent focus:outline-none focus:ring-[#E29A6C] focus:bg-white focus:ring-2 "
                            type="button"
                            key={id}
                            data-id={id}
                            data-ternak-id={ternak_id}
                            data-pakan={pakan}
                            data-benefit={benefit}
                            data-text={text}
                            onClick={tangkapPakanDipilih}
                          >
                            <img src={Pouch} alt="" className="w-7" />
                            <span className="font-semibold  text-sm text-[#782443]">
                              {numberWithCommas(pakan)} Kg
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
                          onClick={() => {
                            playGoBackSound();
                            goToPage7();
                          }}
                        >
                          Batal
                        </button>
                      </div>
                      <div className="block mx-auto w-40 h-10 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full uppercase tracking-[0.15rem] font-extrabold text-white font-openSans active:bg-gradient-to-r active:from-blue-500 active:to-cyan-500 group">
                        <button
                          className=" w-full h-full items-center tracking-widest"
                          type="button"
                          onClick={tanyaBuyPakan}
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
