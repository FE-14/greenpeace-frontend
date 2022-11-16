import { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { HiOutlineSearch } from "react-icons/hi";
import { Link, useSearchParams } from "react-router-dom";
import classNames from "classnames";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

import { articleHero } from "../assets";

export default function Articles() {
  const [searchParams] = useSearchParams();
  const selectedCategory = useMemo(() => {
    const categoryParamsValue = searchParams.get("category");
    return categoryParamsValue || "Semua";
  }, [searchParams.get("category")]);

  const [hoveredCategory, setHoveredCategory] = useState(null);
  const articlesCategory = ["Semua", "Krisis Iklim", "Hutan", "Polusi"];

  return (
    <>
      <Helmet>
        <title>Articles | Greenpeace Indonesia</title>
      </Helmet>

      <figure className="relative bg-green-gp-800/80">
        <img
          src={articleHero}
          alt="Homepage Hero"
          className="-z-50 max-h-[576px] min-h-[286px] w-full bg-contain bg-no-repeat object-cover"
        />
        <div className="absolute top-[25%] left-8 font-montserrat sm:top-[40%] sm:left-10 md:left-20 lg:top-[30%] lg:left-32 xl:left-44 2xl:left-52">
          <h1 className="my-1 text-lg font-bold text-green-500 sm:text-2xl md:text-4xl lg:my-4 lg:text-5xl">
            Artikel
          </h1>
          <h1 className="my-1 w-3/4 text-xs font-bold text-white sm:text-xl md:w-[60%] lg:my-4 lg:text-3xl">
            Kumpulan artikel dan informasi terkait kondisi bumi Indonesia
            dibawah ancaman krisis iklim.
          </h1>
          <p className="w-10/12 text-[10px] font-normal text-white/90 sm:text-xs md:w-[65%] md:text-sm lg:text-lg">
            Langkah pertama dengan memahami bagaimana krisis iklim telah
            berdampak pada kehidupan kita di masa lalu, sekarang, dan masa
            depan. Tetap up to date pada berita terbaru mengenai kemajuan krisis
            iklim, yang menjadi semakin berbahaya tepat di depan mata Anda.
          </p>
        </div>
      </figure>
      <section className="basic-padding my-12 flex flex-col items-center justify-center gap-10">
        <SearchArticleBar />
        <div
          className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-10"
          onMouseLeave={() => setHoveredCategory(null)}
        >
          <LayoutGroup>
            {articlesCategory.map((category) => (
              <ButtonCategory
                category={category}
                isCategoryOnHover={hoveredCategory === category}
                setHoveredCategory={setHoveredCategory}
                isSelected={selectedCategory === category}
                key={category}
              />
            ))}
          </LayoutGroup>
        </div>
      </section>
    </>
  );
}

function SearchArticleBar() {
  return (
    <form
      className="flex w-full items-center justify-center gap-2 bg-white p-2 shadow-shadow-card-with-illustration focus-within:outline focus-within:outline-1 focus-within:outline-green-200 md:p-4 lg:w-3/4 xl:w-3/5"
      id="search-article-form"
    >
      <label
        htmlFor="search-article-title"
        className="flex w-[90%] items-center gap-3 text-black-gp-100 md:gap-4"
      >
        <HiOutlineSearch className="h-6 w-6 text-current" />
        <input
          type="search"
          name="search-article-title"
          id="search-article-title"
          className="w-full appearance-none bg-transparent p-2 text-current focus:outline-none lg:text-lg"
          placeholder="Telusuri judul ..."
        />
      </label>
    </form>
  );
}

function ButtonCategory({
  category,
  isSelected,
  isCategoryOnHover,
  setHoveredCategory,
}) {
  return (
    <Link to={`?category=${category}`} className="relative">
      <button
        type="button"
        className={classNames(
          "bg flex w-full justify-center px-3 py-1 text-lg sm:px-4 md:py-2 lg:px-8 2xl:px-9",
          {
            " text-green-gp-100": isSelected,
            " bg-green-gp-100/60 text-submarine-gp-500": !isSelected,
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
