import React from "react";
import DiamondImg from "../../../img/common/diamond.png";
import EggImg from "../../../img/common/egg.png";
import PouchImg from "../../../img/common/pouch.png";
import MeatImg from "../../../img/common/meat.png";
import MilkImg from "../../../img/common/milk.png";
import QuestBookImg from "../../../img/common/questbook.png";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";

const Header = ({
  Diamond,
  Egg,
  Pouch,
  Milk,
  Meat,
  QuestBook,
  BackButton,
  LogOut,
  Action1,
  Action2,
  ActionLogout,
  harta,
}) => {
  const openPage6 = () => {
    Action1();
  };

  const goToMenu = () => {
    Cookies.remove("user");
    ActionLogout();
  };

  function numberWithCommas(num) {
    let newNum = parseInt(num);
    return newNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  const DiamondDiv = () => {
    return (
      <div className="w-40 h-10 bg-white rounded-full items-center flex">
        <div className="w-20 flex items-center justify-center ">
          <img src={DiamondImg} alt="" className="w-10" />
        </div>
        <div className="w-full text-start ">
          <span className="font-bold  text-sm text-[#782443]">
            {numberWithCommas(harta.diamon)}
          </span>
        </div>
      </div>
    );
  };

  const EggDiv = () => {
    return (
      <div className="w-40 h-10 bg-white rounded-full items-center flex">
        <div className="w-20 flex items-center justify-center ">
          <img src={EggImg} alt="" className="w-8" />
        </div>
        <div className="w-full text-start ">
          <span className="font-bold  text-sm text-[#782443]">
            {numberWithCommas(harta.hasil_ternak[1].qty)} Butir
          </span>
        </div>
      </div>
    );
  };

  const PouchDiv = () => {
    return (
      <div className="w-40 h-10 bg-white rounded-full items-center flex">
        <div className="w-20 flex items-center justify-center ">
          <img src={PouchImg} alt="" className="w-8" />
        </div>
        <div className="w-full text-start ">
          <span className="font-bold  text-sm text-[#782443]">
            {numberWithCommas(harta.pakan)} Kg
          </span>
        </div>
      </div>
    );
  };

  const MilkDiv = () => {
    return (
      <div className="w-40 h-10 bg-white rounded-full items-center flex">
        <div className="w-20 flex items-center justify-center ">
          <img src={MilkImg} alt="" className="w-8" />
        </div>
        <div className="w-full text-start ">
          <span className="font-bold  text-sm text-[#782443]">
            {numberWithCommas(harta.hasil_ternak[2].qty)} Liter
          </span>
        </div>
      </div>
    );
  };

  const MeatDiv = () => {
    return (
      <div className="w-40 h-10 bg-white rounded-full items-center flex">
        <div className="w-20 flex items-center justify-center ">
          <img src={MeatImg} alt="" className="w-8" />
        </div>
        <div className="w-full text-start ">
          <span className="font-bold  text-sm text-[#782443]">
            {numberWithCommas(harta.hasil_ternak[3].qty)} Kilogram
          </span>
        </div>
      </div>
    );
  };

  const BackButtonDiv = () => {
    return (
      <div
        className="w-40 h-10 bg-gradient-to-r from-pink-400 to-red-600 rounded-full items-center flex active:bg-gradient-to-r active:from-red-500 active:to-pink-500"
        onClick={Action2}
      >
        <div className="w-full text-center ">
          <span className="font-bold  text-sm text-white tracking-widest">
            Back
          </span>
        </div>
      </div>
    );
  };

  const QuestBookDiv = () => {
    return (
      <div className="" onClick={openPage6}>
        <img src={QuestBookImg} alt="" className="w-16" />
      </div>
    );
  };

  const LogOutDiv = () => {
    return (
      <div
        className="w-40 h-10 bg-white rounded-full items-center flex active:bg-[#51a9d5] overflow-hidden"
        onClick={goToMenu}
      >
        <div className="w-full h-full ">
          <div className="flex h-full justify-center gap-2 items-center group active:border-2 active:border-white rounded-full">
            <FontAwesomeIcon
              icon={faRightFromBracket}
              className="group-active:text-white text-[#51a9d5]"
            />
            <span className="font-bold  text-sm tracking-widest text-[#51a9d5] group-active:text-white">
              Logout
            </span>
          </div>
        </div>
      </div>
    );
  };

  const Tampilan = () => {
    return (
      <div className="flex h-full py-1 justify-between items-center z-10">
        <div className="flex gap-2">
          {/* DIAMOND */}
          {Diamond ? <DiamondDiv /> : null}
          {/* DIAMOND END*/}

          {/* EGG */}
          {Egg ? <EggDiv /> : null}
          {/* EGG END */}

          {/* POUCH */}
          {Pouch ? <PouchDiv /> : null}
          {/* POUCH END */}

          {/* Meat */}
          {Meat ? <MeatDiv /> : null}
          {/* Meat END */}

          {/* MILK */}
          {Milk ? <MilkDiv /> : null}
          {/* MILK END */}

          {/* QUEST BOOK */}
          {BackButton ? <BackButtonDiv /> : null}
          {/* QUEST BOOK END*/}
        </div>

        {/* QUEST BOOK */}
        {QuestBook ? <QuestBookDiv /> : null}
        {/* QUEST BOOK END*/}

        {/* QUEST BOOK */}
        {LogOut ? <LogOutDiv /> : null}
        {/* QUEST BOOK END*/}
      </div>
    );
  };

  return (
    <>
      <Tampilan />
    </>
  );
};

export default Header;
