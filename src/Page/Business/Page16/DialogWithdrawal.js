import React from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { Dialog } from "@headlessui/react";
import { useState } from "react";

const DialogWithdrawal = ({ isOpen, setIsOpen, userBankData }) => {
  const [dataPost, setDataPost] = useState({
    user_bank_id: 1,
    diamond: "",
  });
  function numberWithCommas(num) {
    let newNum = parseInt(num);
    return newNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const handleChange = (e) => {
    setDataPost({ ...dataPost, [e.target.name]: e.target.value });
    console.log(dataPost);
  };

  const sumbitHandler = async (e) => {
    e.preventDefault();
    const userCookie = Cookies.get("user");

    try {
      let beli = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/withdraw`,
        {
          token: userCookie,
          diamon: dataPost.diamond,
          user_bank_id: dataPost.user_bank_id,
        }
      );
      let res = beli.data.data;
      setDataPost("");
      console.log(res.url);

      // window.open(res.url, "_blank");
    } catch (error) {
      //   MySwal.fire({
      //     position: "center",
      //     icon: "error",
      //     text: error.response.data.message,
      //     showConfirmButton: false,
      //     timer: 1500,
      //   });
      console.log(error);
    }
  };
  return (
    <Dialog
      open={isOpen}
      onClose={() => setIsOpen(false)}
      className="relative z-50"
    >
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <Dialog.Panel className="w-full max-w-sm rounded bg-white">
              <div className="px-8 py-5">
                <Dialog.Title className="text-center">Withdrawal</Dialog.Title>
                <div className="mt-2">
                  <form class="w-full max-w-sm" onSubmit={sumbitHandler}>
                    <div class="md:flex md:items-center mb-6">
                      <div class="md:w-1/3">
                        <label
                          class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                          for="inline-full-name"
                        >
                          Send to
                        </label>
                      </div>
                      <div class="md:w-2/3">
                        <select
                          class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="user_bank_id"
                          onChange={handleChange}
                          //   value={dataPost.user_bank_id}
                          defaultValue={1}
                          name="user_bank_id"
                        >
                          {userBankData.map((item, idx) => {
                            return (
                              <option value={item.bank_id} key={idx}>
                                {item.bank_name} - {item.account_name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    <div class="md:flex md:items-center mb-2">
                      <div class="md:w-1/3">
                        <label
                          class="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                          for="inline-password"
                        >
                          Diamond
                        </label>
                      </div>
                      <div class="md:w-2/3">
                        <input
                          class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                          id="inline-password"
                          type="text"
                          onChange={handleChange}
                          value={dataPost.diamond}
                          name="diamond"
                        />
                      </div>
                      {dataPost.diamond ? (
                        <span className="">
                          Amount :{" "}
                          <span className="font-bold">
                            Rp.{numberWithCommas(dataPost.diamond * 100)}
                          </span>
                        </span>
                      ) : null}
                    </div>
                    <div class="md:flex md:items-center mb-6">
                      <div class="md:w-1/3"></div>
                    </div>
                    <div class="md:flex md:items-center">
                      <div class="md:w-1/3"></div>
                      <div class="md:w-2/3 flex items-center justify-center gap-2">
                        <button
                          class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded "
                          type="submit"
                        >
                          Submit
                        </button>
                        <button
                          class="shadow bg-gray-500 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded "
                          type="button"
                          onClick={() => setIsOpen(!isOpen)}
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default DialogWithdrawal;
