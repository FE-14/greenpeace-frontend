import { HiOutlineArrowLeft, HiOutlineArrowRight } from "react-icons/hi";
import classNames from "classnames";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from "prop-types";

import { ReadMoreArticleLink } from "../../../components";

import ArticleDescriptionParagraph from "./ArticleDescriptionParagraph";

export default function HomepageArticles({
  title,
  authorName,
  id,
  imageUrl,
  postDate,
  postDescription,
  onSetCurrentArticleNumber,
  currentArticleNumber,
}) {
  const formatPublishedDate = (date) => {
    const publishedDate = new Date(date).toLocaleDateString("id-Id", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    return publishedDate;
  };

  return (
    <LayoutGroup>
      <AnimatePresence mode="popLayout">
        <article className="relative flex h-full flex-col gap-4 px-4 md:p-8 xl:relative xl:h-[600px] xl:flex-row  xl:items-center xl:gap-0 xl:px-16 2xl:px-28">
          <figure className="relative h-[336px] max-h-[336px] w-full md:h-[424px] md:max-h-[424px] xl:h-[600px] xl:max-h-[600px] xl:w-[80%]">
            <motion.img
              src={imageUrl}
              className="h-full max-h-full w-full bg-cover object-cover"
              alt={`${title} Cover`}
              loading="lazy"
              data-srcset={imageUrl}
              initial={{ y: 20, opacity: 0, scale: 0 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: -20, opacity: 0, scale: 0 }}
              transition={{ duration: 0.25 }}
            />
          </figure>
          <motion.div className="relative right-0 flex h-max flex-col gap-8 bg-white p-4 shadow-shadow-card-with-illustration md:p-8 xl:right-5 xl:w-[50%]">
            <div className="absolute -right-4 -bottom-4 top-0 left-0 -z-10 bg-green-full-artboard bg-cover bg-no-repeat object-cover shadow-shadow-card-with-illustration xl:-right-6 xl:-bottom-6" />

            <motion.div className="flex flex-col gap-10" layout>
              <motion.div
                className="flex flex-col gap-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="font-montserrat text-lg font-bold text-green-gp-500 sm:text-xl md:text-2xl 2xl:text-3xl 3xl:text-4xl">
                  {title}
                </h1>
                <div className="flex items-center gap-1 font-source-sans-pro text-xs font-bold text-black-gp-100 sm:text-sm md:text-base">
                  <h3>{authorName}</h3>
                  <h3>•</h3>
                  <h3>{formatPublishedDate(postDate.split(" ")[0])}</h3>
                </div>
              </motion.div>
              <motion.div
                className="flex flex-col gap-3 font-montserrat font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                {postDescription
                  .split(".")
                  .filter(Boolean)
                  .map((paragraph) => (
                    <ArticleDescriptionParagraph
                      key={paragraph}
                      paragraph={paragraph}
                    />
                  ))}
              </motion.div>

              <ReadMoreArticleLink id={id} />

              <div className="flex items-center gap-4">
                <button
                  type="button"
                  className={classNames("duration-150", {
                    "cursor-not-allowed opacity-20": currentArticleNumber === 1,
                    "cursor-pointer opacity-60 hover:opacity-100":
                      currentArticleNumber > 1,
                  })}
                  disabled={currentArticleNumber === 1}
                  onClick={() =>
                    onSetCurrentArticleNumber((prevValue) => prevValue - 1)
                  }
                >
                  <HiOutlineArrowLeft className="h-5 w-5" />
                </button>
                <h2>
                  <motion.span
                    className="font-bold text-green-gp-700"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {currentArticleNumber}
                  </motion.span>{" "}
                  / <span>5</span>
                </h2>
                <button
                  type="button"
                  className={classNames("duration-150", {
                    "cursor-not-allowed opacity-20": currentArticleNumber === 5,
                    "cursor-pointer opacity-60 hover:opacity-100":
                      currentArticleNumber < 5,
                  })}
                  disabled={currentArticleNumber === 5}
                  onClick={() =>
                    onSetCurrentArticleNumber((prevValue) => prevValue + 1)
                  }
                >
                  <HiOutlineArrowRight className="h-5 w-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        </article>
      </AnimatePresence>
    </LayoutGroup>
  );
}

HomepageArticles.propTypes = {
  title: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  postDate: PropTypes.string.isRequired,
  postDescription: PropTypes.string.isRequired,
  onSetCurrentArticleNumber: PropTypes.func.isRequired,
  currentArticleNumber: PropTypes.number.isRequired,
};
