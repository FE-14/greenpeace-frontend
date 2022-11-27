import { FaCircle } from "react-icons/fa";
import { HiOutlineChevronDown, HiOutlineMinus } from "react-icons/hi";

export default function AccordionItem({ title, year, victories }) {
  console.log({ title, year, victories });
  return (
    <div className="gap flex w-full gap-5">
      <i className="flex flex-col items-center justify-center gap-2 text-submarine-gp-600">
        <FaCircle className="h-6 w-6 text-current" />
        <HiOutlineMinus className="rotate h-full w-[2px] bg-current opacity-40" />
      </i>
      <button
        type="button"
        className="flex w-full items-center justify-between gap-2 bg-green-gp-50 p-4 xs:gap-8 lg:gap-12 lg:p-8"
      >
        <div className="flex flex-col items-center gap-2 font-montserrat text-submarine-gp-500 hover:brightness-125 xs:flex-row xs:gap-8">
          <h1 className="text-lg font-bold lg:text-xl xl:text-2xl">2018</h1>
          <h2 className="font-semibold lg:text-lg xl:text-xl">
            Pembangunan PLTU dan Perizinan Kelapa Sawit
          </h2>
        </div>
        <HiOutlineChevronDown className="h-6 w-full text-submarine-gp-600 xs:w-1/2 sm:w-6 xl:h-8 xl:w-8" />
      </button>
    </div>
  );
}
