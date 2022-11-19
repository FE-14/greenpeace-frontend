import { Link } from "react-router-dom";
import classNames from "classnames";
import { AnimatePresence, motion } from "framer-motion";

export default function ButtonCategory({
  category,
  isSelected,
  isCategoryOnHover,
  setHoveredCategory,
  isLoading,
}) {
  return (
    <Link to={`?category=${category}`} className="relative" preventScrollReset>
      <button
        type="button"
        disabled={isLoading}
        className={classNames(
          "bg flex w-full justify-center px-3 py-1 text-lg sm:px-4 md:py-2 lg:px-8 2xl:px-9",
          {
            " text-green-gp-100": isSelected,
            " bg-green-gp-100/60 text-submarine-gp-500": !isSelected,
            "cursor-not-allowed": isLoading,
            "cursor-pointer": !isLoading,
          }
        )}
        onMouseEnter={() => setHoveredCategory(category)}
      >
        {category}
      </button>
      {isSelected && (
        <AnimatePresence>
          <motion.div
            className="absolute inset-0 -z-10 bg-submarine-gp-500"
            exit={{
              opacity: 0,
              scale: 0,
            }}
            initial={{
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              transition: {
                duration: 0.2,
              },
            }}
          />
        </AnimatePresence>
      )}
      {isCategoryOnHover && (
        <AnimatePresence>
          <motion.div
            className="absolute inset-0 -z-10 bg-submarine-gp-500/30"
            layoutId="hover-hightlight"
            transition={{
              duration: 0.2,
            }}
          />
        </AnimatePresence>
      )}
    </Link>
  );
}
