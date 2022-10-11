import React from "react";
import DiamondImg from "../../../img/common/diamond.png";
import EggImg from "../../../img/common/egg.png";
import PouchImg from "../../../img/common/pouch.png";
import MeatImg from "../../../img/common/meat.png";
import MilkImg from "../../../img/common/milk.png";
import QuestBookImg from "../../../img/common/questbook.png";

const Header = ({
  Diamond,
  Egg,
  Pouch,
  Milk,
  Meat,
  PanganTersedia,
  QuestBook,
  BackButton,
  Action1,
  Action2,
  harta,
  setHarta,
}) => {
  const openPage6 = () => {
    Action1();
  };
  function numberWithCommas(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const DiamondDiv = () => {
    return (
      <div className="w-40 h-10 bg-[#f6f3e4] rounded-full items-center flex">
        <div className="w-20 flex items-center justify-center ">
          <img src={DiamondImg} alt="" className="w-10" />
        </div>
        <div className="w-full text-start ">
          <span className="font-bold  text-sm text-[#782443]">
            {numberWithCommas(harta.diamond)}
          </span>
        </div>
      </div>
    );
  };

  const EggDiv = () => {
    return (
      <div className="w-40 h-10 bg-[#f6f3e4] rounded-full items-center flex">
        <div className="w-20 flex items-center justify-center ">
          <img src={EggImg} alt="" className="w-8" />
        </div>
        <div className="w-full text-start ">
          <span className="font-bold  text-sm text-[#782443]">
            {numberWithCommas(harta.egg)} Butir
          </span>
        </div>
      </div>
    );
  };

  const PouchDiv = () => {
    return (
      <div className="w-40 h-10 bg-[#f6f3e4] rounded-full items-center flex">
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
      <div className="w-40 h-10 bg-[#f6f3e4] rounded-full items-center flex">
        <div className="w-20 flex items-center justify-center ">
          <img src={MilkImg} alt="" className="w-8" />
        </div>
        <div className="w-full text-start ">
          <span className="font-bold  text-sm text-[#782443]">
            {numberWithCommas(harta.milk)} Liter
          </span>
        </div>
      </div>
    );
  };

  const MeatDiv = () => {
    return (
      <div className="w-40 h-10 bg-[#f6f3e4] rounded-full items-center flex">
        <div className="w-20 flex items-center justify-center ">
          <img src={MeatImg} alt="" className="w-8" />
        </div>
        <div className="w-full text-start ">
          <span className="font-bold  text-sm text-[#782443]">
            {numberWithCommas(harta.meat)} Kilogram
          </span>
        </div>
      </div>
    );
  };
  const PanganTersediaDiv = () => {
    return (
      <div className="w-40 h-10 bg-[#f6f3e4] rounded-full  flex items-center ">
        <div className="w-full text-center">
          <span className="font-bold  text-sm text-[#782443]">
            Pangan Tersedia
          </span>
        </div>
      </div>
    );
  };

  const BackButtonDiv = () => {
    return (
      <div
        className="w-40 h-10 bg-[#329bd1] rounded-full items-center flex active:bg-[#51a9d5]"
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

          {/* PANGAN TERSEDIA */}
          {PanganTersedia ? <PanganTersediaDiv /> : null}
          {/* PANGAN TERSEDIA END*/}

          {/* QUEST BOOK */}
          {BackButton ? <BackButtonDiv /> : null}
          {/* QUEST BOOK END*/}
        </div>

        {/* QUEST BOOK */}
        {QuestBook ? <QuestBookDiv /> : null}
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
