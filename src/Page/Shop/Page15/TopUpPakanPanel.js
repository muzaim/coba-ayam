import Diamond from "../../../img/common/diamond.png";
import Pouch from "../../../img/common/pouch.png";

const TopUpPakan = ({
  daftarHargaPakan,
  tangkapPakanDipilih,
  numberWithCommas,
}) => {
  return (
    <>
      <div className="grid grid-rows-3 grid-cols-3 grid-flow-col gap-3 place-items-center">
        {daftarHargaPakan.map((item) => {
          const { id, pakan, diamon } = item;
          return (
            <button
              className="w-52  py-2 bg-[#f0ecd8] rounded-full items-center flex justify-center border-transparent focus:outline-none focus:ring-[#E29A6C] focus:bg-white focus:ring-2"
              key={id}
              data-id={id}
              onClick={tangkapPakanDipilih}
            >
              <img src={Pouch} alt="" className="w-7" />
              <span className="font-semibold  text-sm text-[#782443]">
                {numberWithCommas(pakan)} Kg
              </span>
              <span className="font-semibold mx-1">=</span>
              <img src={Diamond} alt="" className="w-7" />
              <span className="font-semibold text-sky-400">
                {numberWithCommas(diamon)}
              </span>
            </button>
          );
        })}
      </div>
    </>
  );
};

export default TopUpPakan;
