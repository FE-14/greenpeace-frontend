import { FaCircle } from "react-icons/fa";
import { HiOutlineChevronDown, HiOutlineMinus } from "react-icons/hi";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";

export default function AccordionItem({
  title,
  year,
  victories,
  active,
  onToggle,
}) {
  return (
    <div className="flex w-full gap-5">
      <i className="flex flex-col items-center justify-center gap-2 text-submarine-gp-600">
        <FaCircle className="h-6 max-h-6 w-6 max-w-[24px] text-current" />
        <HiOutlineMinus className="rotate h-full w-[2px] bg-current opacity-40" />
      </i>
      <div
        className={classNames("flex w-full flex-col", {
          "gap-2": active,
          "gap-0": !active,
        })}
      >
        <button
          type="button"
          className="flex w-full items-center justify-between gap-2 bg-green-gp-50 p-4 shadow-lg xs:gap-8 lg:gap-12 lg:p-8"
          onClick={onToggle}
        >
          <div className="flex flex-col items-center gap-2 font-montserrat text-submarine-gp-500 hover:brightness-125 xs:flex-row xs:gap-8">
            <h1 className="text-lg font-bold lg:text-xl xl:text-2xl">{year}</h1>
            <h2 className="font-semibold lg:text-lg xl:text-xl">{title}</h2>
          </div>
          <HiOutlineChevronDown className="h-6 w-full text-submarine-gp-600 xs:w-1/2 sm:w-6 xl:h-8 xl:w-8" />
        </button>

        <AnimatePresence mode="sync">
          {active && (
            <motion.ul
              className={classNames(
                "flex w-full list-inside list-decimal flex-col gap-1 bg-green-gp-50 font-source-sans-pro shadow-md"
              )}
              variants={{
                open: {
                  opacity: 1,
                  height: "auto",
                  overflow: "visible",
                  display: "flex",
                },
                collapse: {
                  opacity: 0,
                  height: 0,

                  overflow: "hidden",
                },
              }}
              transition={{
                type: "tween",
                duration: 0.3,
              }}
              initial="collapse"
              animate="open"
              exit="collapse"
            >
              {victories.map((item) => (
                <li key={item} className="px-4 py-2 lg:p-8 lg:py-4 lg:text-lg">
                  {item}
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
