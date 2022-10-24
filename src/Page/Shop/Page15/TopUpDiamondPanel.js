import Diamond from "../../../img/common/diamond.png";

const TopUpDiamond = ({
  daftarHargaDiamond,
  tangkapDiamondDipilih,
  numberWithCommas,
}) => {
  return (
    <>
      <div className="grid grid-rows-3 grid-cols-3 grid-flow-col gap-3 place-items-center ">
        {daftarHargaDiamond.map((item) => {
          const { id, diamon, price } = item;
          return (
            <button
              type="button"
              className="w-52  py-2 bg-[#f0ecd8] rounded-full items-center flex justify-center border-transparent focus:outline-none focus:ring-sky-400 focus:bg-white focus:ring-2 "
              key={id}
              data-id={id}
              data-diamond={diamon}
              onClick={tangkapDiamondDipilih}
            >
              <img src={Diamond} alt="" className="w-7" />
              <span className="font-bold  text-sm text-sky-400">
                {numberWithCommas(diamon)}
              </span>
              <span className="font-semibold mx-1">=</span>
              <span></span>
              <span className="font-semibold text-sm">
                Rp {numberWithCommas(price)}
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default TopUpDiamond;
