import React, { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";
import Header from "../../../Component/Diatom/Header";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const Copy = <FontAwesomeIcon icon={faClipboard} />;

const Page16 = ({ goToPage6, goToMenu }) => {
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

  const AktivasiMemberPanel = () => {
    return (
      <div className="w-full h-[115%]  overflow-x-auto animate-fadeInKu -mt-8 bg-transparent">
        <table className="table-auto w-full border-collapse border text-center text-black">
          <thead className="bg-slate-700 sticky top-0 text-white">
            <tr className="">
              <th className="w-[40%] py-3">User</th>
              <th className="w-[20%] ">Level</th>
              <th className="w-[40%]">Komisi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="w-[40%] border border-slate-300 py-2">dsadsa</td>
              <td className="w-[20%] border border-slate-300 py-2">L1</td>
              <td className="w-[40%] border border-slate-300 py-2">135.000</td>
            </tr>
            <tr>
              <td className="w-[40%] border border-slate-300 py-2">dsadsa</td>
              <td className="w-[20%] border border-slate-300 py-2">L1</td>
              <td className="w-[40%] border border-slate-300 py-2">135.000</td>
            </tr>
            <tr>
              <td className="w-[40%] border border-slate-300 py-2">dsadsa</td>
              <td className="w-[20%] border border-slate-300 py-2">L1</td>
              <td className="w-[40%] border border-slate-300 py-2">135.000</td>
            </tr>
            <tr>
              <td className="w-[40%] border border-slate-300 py-2">dsadsa</td>
              <td className="w-[20%] border border-slate-300 py-2">L1</td>
              <td className="w-[40%] border border-slate-300 py-2">135.000</td>
            </tr>
            <tr>
              <td className="w-[40%] border border-slate-300 py-2">dsadsa</td>
              <td className="w-[20%] border border-slate-300 py-2">L1</td>
              <td className="w-[40%] border border-slate-300 py-2">135.000</td>
            </tr>
            <tr>
              <td className="w-[40%] border border-slate-300 py-2">dsadsa</td>
              <td className="w-[20%] border border-slate-300 py-2">L1</td>
              <td className="w-[40%] border border-slate-300 py-2">135.000</td>
            </tr>
            <tr>
              <td className="w-[40%] border border-slate-300 py-2">dsadsa</td>
              <td className="w-[20%] border border-slate-300 py-2">L1</td>
              <td className="w-[40%] border border-slate-300 py-2">135.000</td>
            </tr>
          </tbody>
        </table>
        {/* <table class="text-left w-full">
          <thead class="bg-black flex text-white w-full">
            <tr class="flex w-full mb-4">
              <th class=" w-1/4">One</th>
              <th class=" w-1/4">Two</th>
              <th class=" w-1/4">Three</th>
              <th class=" w-1/4">Four</th>
            </tr>
          </thead>
          <tbody class="bg-grey-light flex flex-col items-center justify-between  w-full">
            <tr class="flex w-full mb-4">
              <td class="p-4 w-1/4">Dogs</td>
              <td class="p-4 w-1/4">Cats</td>
              <td class="p-4 w-1/4">Birds</td>
              <td class="p-4 w-1/4">Fish</td>
            </tr>
            <tr class="flex w-full mb-4">
              <td class="p-4 w-1/4">Dogs</td>
              <td class="p-4 w-1/4">Cats</td>
              <td class="p-4 w-1/4">Birds</td>
              <td class="p-4 w-1/4">Fish</td>
            </tr>
            <tr class="flex w-full mb-4">
              <td class="p-4 w-1/4">Dogs</td>
              <td class="p-4 w-1/4">Cats</td>
              <td class="p-4 w-1/4">Birds</td>
              <td class="p-4 w-1/4">Fish</td>
            </tr>
            <tr class="flex w-full mb-4">
              <td class="p-4 w-1/4">Dogs</td>
              <td class="p-4 w-1/4">Cats</td>
              <td class="p-4 w-1/4">Birds</td>
              <td class="p-4 w-1/4">Fish</td>
            </tr>
            <tr class="flex w-full mb-4">
              <td class="p-4 w-1/4">Dogs</td>
              <td class="p-4 w-1/4">Cats</td>
              <td class="p-4 w-1/4">Birds</td>
              <td class="p-4 w-1/4">Fish</td>
            </tr>
          </tbody>
        </table> */}
      </div>
    );
  };

  const PenarikanKomisiPanel = () => {
    return (
      <div className="w-full h-[115%] overflow-x-auto bg-transparent animate-fadeInKu -mt-8">
        <div className="flex gap-2 flex-col justify-center items-center ">
          <div className="w-[80%] py-2 bg-white rounded-full text-center">
            <span className="text-black">Nama</span>
          </div>
          <div className="w-[80%] py-2 bg-white rounded-full text-center">
            <span className="text-black">Nama Bank</span>
          </div>
          <div className="w-[80%] py-2 bg-white rounded-full text-center">
            <span className="text-black">No Rekening</span>
          </div>
          <div className="w-[80%] py-2 bg-white rounded-full text-center">
            <span className="text-black">Jumlah diamond yang ditarik</span>
          </div>
          <div className="w-[80%] py-2 bg-white rounded-full text-center">
            <span className="text-black">Jumlah rupiah yang ditarik</span>
          </div>
          <div className="w-[80%] py-2 bg-slate-500 rounded-full text-center tracking-widest">
            <span
              className="text-white
             font-bold"
            >
              Tarik
            </span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-screen overflow-hidden  mx-auto lg:max-w-6xl lg:h-[70%] z-30 text-white ">
      <div className="w-full h-full bg-city bg-cover bg-center  before:opacity-10 ">
        <div className="w-[90%] h-full mx-auto">
          {/* HEADER */}
          <div className="h-[15%]">
            <Header BackButton={true} Action2={goToPage6} />
          </div>
          {/* HEADER END */}
          {/* CONTENT */}
          <div className="w-full flex h-[80%] ">
            {/* kiri */}
            <div className="w-[30%] h-full px-4 animate-fadeInKu flex items-center py-3 ">
              <div className="mx-auto w-full h-[100%] flex flex-col items-center justify-center bg-transparent border rounded-lg px-1 ">
                <img
                  src={dataUserActive.avatar}
                  alt=""
                  className="w-28 h-28   rounded-full -mt-10 p-2"
                  loading="lazy"
                />
                <span className="uppercase my-1 tracking-widest text-black font-semibold">
                  {dataUserActive.username}
                </span>
                <div
                  className="flex bg-gradient-to-r from-green-400 to-blue-500 px-8 p-1 m-1 rounded-xl gap-3 items-center"
                  onClick={() => {
                    navigator.clipboard.writeText(dataUserActive.user_ref);
                    MySwal.fire({
                      position: "center",
                      icon: "success",
                      text: "Referal code berhasil dicopy!",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                  }}
                >
                  <span className="text-sm  text-white">
                    {dataUserActive.user_ref}
                  </span>
                  {/* <span className="text-white">{Copy}</span> */}
                </div>
                {/* <div className="mt-5 w-full h-20 ">
                <div className="flex justify-between px-2 w-full border-b-2 ">
                  <span className="font-semibold">Diamond</span>
                  <span className="font-light">{dataUserWallet.diamon}</span>
                </div>
                <div className="flex justify-between px-2 w-full border-b-2 ">
                  <span className="font-semibold">Pakan</span>
                  <span className="font-light">{dataUserWallet.pakan}</span>
                </div>
                <div className="flex justify-between px-2 w-full border-b-2 ">
                  <span className="font-semibold">Telur</span>
                  <span className="font-light">{telur}</span>
                </div>
                <div className="flex justify-between px-2 w-full border-b-2 ">
                  <span className="font-semibold">Susu</span>
                  <span className="font-light">{susu}</span>
                </div>
                <div className="flex justify-between px-2 w-full">
                  <span className="font-semibold">Daging</span>
                  <span className="font-light">{daging}</span>
                </div>
              </div> */}
              </div>
            </div>
            {/* kanan */}
            <div className="w-full h-full px-5 flex flex-col justify-center items-center py-3 ">
              <div className="flex justify-around  w-full h-full  bg-transparent rounded-xl  bg-white">
                <div
                  className={`${
                    aktMembPanel
                      ? "border-x-[1px] border-t-[1px] border-black rounded-t-xl w-full h-[60%]  py-3 text-center"
                      : "w-full h-[60%]  py-3 text-center border-b-[1px] border-black"
                  }`}
                >
                  <span
                    className={`${
                      aktMembPanel
                        ? "font-bold text-slate-900 text-xl cursor-pointer"
                        : "text-slate-900 text-xl cursor-pointer"
                    }`}
                    onClick={openAktMembPanel}
                  >
                    Aktivitas member
                  </span>
                </div>
                <div
                  className={`${
                    penKomPanel
                      ? "border-x-[1px] border-t-[1px] border-black rounded-t-xl w-full  h-[60%]   py-3 text-center"
                      : "w-full  h-[60%] py-3 text-center border-b-[1px] border-black"
                  }`}
                >
                  <span
                    className={`${
                      penKomPanel
                        ? "font-bold text-slate-900 text-xl cursor-pointer"
                        : "text-slate-900 text-xl cursor-pointer"
                    }`}
                    onClick={openPenKomPanel}
                  >
                    Penarikan Komisi
                  </span>
                </div>
              </div>

              <div className="w-full h-[70%]  pt-3 bg-transparent rounded-xl">
                {aktMembPanel ? (
                  <AktivasiMemberPanel />
                ) : (
                  <PenarikanKomisiPanel />
                )}
              </div>
            </div>
          </div>
          {/* KANAN */}
        </div>
      </div>
    </div>
  );
};

export default Page16;
