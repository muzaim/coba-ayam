import React, { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";

import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
const MySwal = withReactContent(Swal);

const Copy = <FontAwesomeIcon icon={faClipboard} />;
const userCookie = Cookies.get("user");

let addBankPanel = {
  html: `
  <form>
  <div class="flex justify-between mb-6">
  <label for="bank_code" class="block mb-2 text-sm font-medium text-gray-900 ">Bank : </label>
  <select id="bank_code" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
    <option value="1">BRI</option>
    <option value="2">Mandiri</option>
    <option value="3">BNI</option>
    <option value="4">BANK DANAMON</option>
    <option value="5">BANK PERMATA</option>
    <option value="6">BCA</option>
    <option value="7">MAYBANK INDONESIA</option>
    <option value="8">BANK PANIN</option>
    <option value="9">CIMB NIAGA</option>
    <option value="10">BANK UOB</option>
    <option value="11">BANK OCBC NISP</option>
    <option value="12">CITIBANK</option>
    <option value="13">BANK BUKOPIN</option>
  </select>
  
  </div>
  <div class="flex justify-between mb-6">
    <label for="account_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Account Name : </label>
    <input type="text" id="account_name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
  </div>
  <div class="flex justify-between mb-6">
    <label for="account_number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Account Number : </label>
    <input type="text" id="account_number" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
  </div>
  <div class="flex justify-between mb-2">
    <label for="bank_city" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Bank City : </label>
    <input type="text" id="bank_city" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
  </div>
  
  </form>
  `,
  title: "Add New Bank",
  inputAttributes: {
    autocapitalize: "off",
  },
  showCancelButton: true,
  confirmButtonText: "Submit",
  showLoaderOnConfirm: true,
  preConfirm: () => {
    return fetch(`${process.env.REACT_APP_BASE_URL}/user-bank-post`, {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: userCookie,
        bank_id: document.getElementById("bank_code").value,
        account_name: document.getElementById("account_name").value,
        account_number: document.getElementById("account_number").value,
        bank_city: document.getElementById("bank_city").value,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return MySwal.fire({
          type: "success",
          title: "Bank berhasil ditambahkan!",
          icon: "success",
        });
      })
      .catch((error) => {
        // Swal.showValidationMessage(`Request failed: ${error}`);
        Swal.showValidationMessage(`Data tidak boleh kosong!`);
        // console.log(error);
      });
  },
  allowOutsideClick: () => !Swal.isLoading(),
};

const Page16 = ({
  goToPage6,
  goToMenu,
  playSuccessSound,
  playSelectSound,
  playPop1,
  playPaperFlipSound,
}) => {
  const [transactionLog, settransactionLog] = useState(true);
  const [withdrawalPanel, setwithdrawalPanel] = useState(false);
  const [dataUserWallet, setDataUserWallet] = useState([]);
  const [dataUserActive, setDataUserActive] = useState([]);
  const [telur, setTelur] = useState(null);
  const [daging, setDaging] = useState(null);
  const [susu, setSusu] = useState(null);
  const [inquiryData, setInquiryData] = useState([]);
  const [userBankData, setUserBankData] = useState([]);
  var myTrackingContent = userBankData
    .map(function (item) {
      return (
        "<div class='col-md-2'><strong><span>" +
        item.tracking_status +
        "</span> </strong></div>"
      );
    })
    .join("");
  const opentransactionLog = () => {
    settransactionLog(!transactionLog);
    setwithdrawalPanel(false);
  };
  let takeWithdrawalPanel = {
    // html: `
    // <form>
    // <div class="flex justify-between mb-6">
    // <label for="bank_code" class="block mb-2 text-sm font-medium text-gray-900 ">Bank : </label>
    // <select id="bank_code" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2.5  dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500">
    //   <option value="1">BRI</option>
    //   <option value="2">Mandiri</option>
    //   <option value="3">BNI</option>
    //   <option value="4">BANK DANAMON</option>
    //   <option value="5">BANK PERMATA</option>
    //   <option value="6">BCA</option>
    //   <option value="7">MAYBANK INDONESIA</option>
    //   <option value="8">BANK PANIN</option>
    //   <option value="9">CIMB NIAGA</option>
    //   <option value="10">BANK UOB</option>
    //   <option value="11">BANK OCBC NISP</option>
    //   <option value="12">CITIBANK</option>
    //   <option value="13">BANK BUKOPIN</option>
    // </select>

    // </div>
    // <div class="flex justify-between mb-6">
    //   <label for="account_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Diamond : </label>
    //   <input type="text" id="account_name" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-72 p-2.5  dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" required>
    // </div>

    // </form>
    // `,
    title: "Test Dialog",
    icon: "info",
    // content: fetch("http://some.url"),
  };

  const openwithdrawalPanel = () => {
    setwithdrawalPanel(!withdrawalPanel);
    settransactionLog(false);
  };

  const getUserBank = async () => {
    const userCookie = Cookies.get("user");
    try {
      let userInfo = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/user-bank-get`,
        {
          params: {
            token: userCookie,
          },
        }
      );
      let res = userInfo.data.data;
      setUserBankData(res);
    } catch (error) {
      console.log(`dari ketika getUsrInfo `, error);
    }
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

  const getInquiryData = async () => {
    const userCookie = Cookies.get("user");
    try {
      let userInfo = await axios.get(
        `${process.env.REACT_APP_BASE_URL}/trx-inquiry`,
        {
          params: {
            token: userCookie,
          },
        }
      );
      let res = userInfo.data.data;
      console.log(res);
    } catch (error) {
      console.log(`dari ketika getUsrInfo `, error);
    }
  };

  useEffect(() => {
    getUserInfo();
    getInquiryData();
    getUserBank();
  }, []);

  const TransactionLogPanel = () => {
    return (
      <div className="w-full h-[115%]  overflow-x-auto animate-fadeInKu -mt-8 bg-transparent">
        <table className="table-auto w-full border-collapse border text-center ">
          <thead className="bg-slate-600 sticky top-0 text-white">
            <tr className="">
              <th className="w-[40%] py-3">User</th>
              <th className="w-[20%] ">Level</th>
              <th className="w-[40%]">Komisi</th>
            </tr>
          </thead>
          <tbody className="text-white">
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
          <thead class="bg-white flex text-white w-full">
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

  const addNewBank = () => {
    const panggilSwal = async () => {
      await MySwal.fire(addBankPanel);
    };
    panggilSwal();
  };

  const takeWithdrawal = () => {
    const panggilSwal = async () => {
      await MySwal.fire(takeWithdrawalPanel);
    };
    panggilSwal();
  };
  const WithdrawalPanel = () => {
    return (
      <div className="w-full h-[115%] overflow-x-auto bg-transparent animate-fadeInKu -mt-8">
        <div className="flex gap-2 flex-col justify-center items-center ">
          <div className="flex w-full px-6 justify-between">
            <h1>Bank : </h1>
            <div className="flex gap-2">
              <button
                className="px-5 py-1 bg-sky-600 rounded-lg"
                onClick={() => takeWithdrawal()}
              >
                Withdrawal
              </button>
              <button
                className="px-5 py-1 bg-green-600 rounded-lg"
                onClick={() => addNewBank()}
              >
                + Add
              </button>
            </div>
          </div>

          <table className="table-auto w-full border-collapse border text-center  ">
            <thead className="bg-slate-600 sticky top-0 text-white">
              <tr className="">
                <th className="w-[30%] py-3">Bank Name</th>
                <th className="w-[30%] ">Account Name</th>
                <th className="w-[40%]">Account Number</th>
              </tr>
            </thead>
            <tbody className="text-white">
              {userBankData.map((item) => {
                return (
                  <tr key={item.id}>
                    <td className="w-[30%] border border-slate-300 py-2">
                      {item.bank_name}
                    </td>
                    <td className="w-[30%] border border-slate-300 py-2">
                      {item.account_name}
                    </td>
                    <td className="w-[40%] border border-slate-300 py-2">
                      {item.account_number}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
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
            {/* <Header BackButton={true} Action2={goToPage6} /> */}
            <div className="flex w-full h-full py-1 justify-end items-center z-10 ">
              <div className="flex gap-2">
                <div
                  className="w-32 h-10 bg-gradient-to-r from-cyan-300 to-blue-700 rounded-full items-center flex active:bg-gradient-to-r active:from-blue-700 active:to-cyan-300"
                  onClick={() => {
                    playPaperFlipSound();
                    goToPage6();
                  }}
                >
                  <div className="w-full text-center ">
                    <span className="font-bold  text-sm text-white tracking-widest">
                      Back
                    </span>
                  </div>
                </div>
              </div>
            </div>
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
                  className="w-28 h-28  rounded-full -mt-10  border-2 border-cyan-500 object-cover"
                  loading="lazy"
                />
                <span className="uppercase my-1 tracking-widest text-white px-2 font-semibold">
                  {dataUserActive.username}
                </span>
                <div
                  className="flex bg-gradient-to-r from-green-400 to-blue-500 px-8 p-1 m-1 rounded-xl gap-3 items-center"
                  onClick={() => {
                    navigator.clipboard.writeText(dataUserActive.user_ref);
                    playSuccessSound();
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
                    transactionLog
                      ? "border-x-[1px] border-t-[1px] border-white rounded-t-xl w-full h-[60%]  py-3 text-center"
                      : "w-full h-[60%]  py-3 text-center border-b-[1px] border-white"
                  }`}
                >
                  <span
                    className={`${
                      transactionLog
                        ? "font-bold text-white text-xl cursor-pointer"
                        : "text-white text-xl cursor-pointer"
                    }`}
                    onClick={() => {
                      playSelectSound();
                      opentransactionLog();
                    }}
                  >
                    Transaction Log
                  </span>
                </div>
                <div
                  className={`${
                    withdrawalPanel
                      ? "border-x-[1px] border-t-[1px] border-white rounded-t-xl w-full  h-[60%]   py-3 text-center"
                      : "w-full  h-[60%] py-3 text-center border-b-[1px] border-white"
                  }`}
                >
                  <span
                    className={`${
                      withdrawalPanel
                        ? "font-bold text-white text-xl cursor-pointer"
                        : "text-white text-xl cursor-pointer"
                    }`}
                    onClick={() => {
                      playSelectSound();
                      openwithdrawalPanel();
                    }}
                  >
                    Withdrawal
                  </span>
                </div>
              </div>

              <div className="w-full h-[70%]  pt-3 bg-transparent rounded-xl">
                {transactionLog ? <TransactionLogPanel /> : <WithdrawalPanel />}
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
