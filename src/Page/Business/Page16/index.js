import React, { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useEffect } from "react";
import Chicken2 from "../../../img/common/chicken2.png";

const Page16 = ({ goToPage6 }) => {
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
      <div className="w-full h-full bg-white overflow-x-auto animate-fadeInKu border">
        <table className="table-auto w-full border-collapse border text-center">
          <thead className="bg-gray-50 sticky top-0">
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
      <div className="w-full h-full overflow-x-auto bg-white animate-fadeInKu">
        <div className="flex gap-2 flex-col justify-center items-center">
          <div className="w-[80%] py-2 bg-yellow-300 rounded-full text-center">
            Nama
          </div>
          <div className="w-[80%] py-2 bg-yellow-300 rounded-full text-center">
            Nama Bank
          </div>
          <div className="w-[80%] py-2 bg-yellow-300 rounded-full text-center">
            No Rekening
          </div>
          <div className="w-[80%] py-2 bg-yellow-300 rounded-full text-center">
            Jumlah diamond yang ditarik
          </div>
          <div className="w-[80%] py-2 bg-yellow-300 rounded-full text-center">
            Jumlah rupiah yang ditarik
          </div>
          <div className="w-[80%] py-2 bg-red-600 rounded-full text-center">
            <span className="text-white">Tarik</span>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full h-screen overflow-hidden bg-farmBarn bg-cover mx-auto lg:max-w-6xl lg:h-[70%]">
      <div className="w-full h-full mx-auto">
        <div className="flex w-full h-full relative">
          {/* BACK */}
          <div className="absolute right-2 top-2">
            <div
              className="w-40 h-10 bg-[#329bd1] rounded-full items-center flex active:bg-[#51a9d5]"
              onClick={goToPage6}
            >
              <div className="w-full text-center ">
                <span className="font-bold  text-sm text-white tracking-widest">
                  Back
                </span>
              </div>
            </div>
          </div>
          {/* KIRI */}
          <div className="w-[30%] h-full px-4 animate-fadeInKu flex items-center py-3">
            <div className="mx-auto w-full h-[100%] flex flex-col items-center justify-center bg-white rounded-lg px-1">
              <img
                src={Chicken2}
                alt="imag"
                className="w-28 h-28 border border-indigo-600 rounded-full -mt-10"
              />
              <span className="uppercase my-1 tracking-widest">
                {dataUserActive.username}
              </span>
              <span className="text-sm bg-gradient-to-r from-green-400 to-blue-500 px-4 rounded-xl text-white">
                {dataUserActive.user_ref}
              </span>
              <div className="mt-5 w-full h-20 ">
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
              </div>
            </div>
          </div>
          {/* KANAN */}
          <div className="w-[70%] h-full ">
            <div className="w-full h-full px-10 flex flex-col justify-center items-center ">
              {/* ATAS */}
              <div className="flex justify-around  w-full mt-5 bg-white rounded-t-xl">
                <div
                  className={`${
                    aktMembPanel
                      ? "border-x-[1px] border-t-[1px] border-black rounded-t-xl w-full h-full py-3 text-center"
                      : "w-full h-full py-3 text-center border-b-[1px] border-black"
                  }`}
                >
                  <span
                    className="font-bold text-slate-900 text-xl cursor-pointer"
                    onClick={openAktMembPanel}
                  >
                    Aktivitas member
                  </span>
                </div>
                <div
                  className={`${
                    penKomPanel
                      ? "border-x-[1px] border-t-[1px] border-black rounded-t-xl w-full h-full py-3 text-center"
                      : "w-full h-full py-3 text-center border-b-[1px] border-black"
                  }`}
                >
                  <span
                    className="text-slate-900 text-xl cursor-pointer"
                    onClick={openPenKomPanel}
                  >
                    Penarikan Komisi
                  </span>
                </div>
              </div>
              {/* BAWAH */}
              <div className="w-full h-[55%] bg-white pt-7">
                {aktMembPanel ? (
                  <AktivasiMemberPanel />
                ) : (
                  <PenarikanKomisiPanel />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page16;