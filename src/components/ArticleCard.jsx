import classNames from "classnames";

import { formatPublishedDate } from "../libs";

import ReadMoreArticleLink from "./ReadMoreArticleLink";

export default function ArticleCard({
  title,
  authorName,
  id,
  imageUrl,
  postDate,
  postDescription,
  tags,
  index,
}) {
  return (
    <article className="my-8 flex flex-col gap-4 px-6 lg:flex-row lg:items-center lg:justify-center">
      <img
        src={imageUrl}
        alt="Article Cover"
        className={classNames(
          "mt-4 h-64 bg-cover object-cover shadow-lg sm:mt-6 sm:object-cover sm:object-center lg:max-h-[400px] lg:min-h-[400px] lg:min-w-[600px] lg:max-w-[600px]",
          {
            "lg:order-2": index % 2 === 0,
          }
        )}
      />
      <div className="flex flex-col justify-between gap-4 lg:w-[40%] lg:p-4">
        <div className="flex flex-col gap-2">
          <h2 className="font-montserrat text-xl font-bold text-submarine-gp-500 sm:text-lg md:text-2xl lg:text-3xl">
            {title}
          </h2>

          <div className="flex flex-col gap-1">
            <h3 className="font-source-sans-pro text-sm font-semibold text-black-gp-100 lg:text-base">
              {authorName}
            </h3>
            <h6 className="text-xs text-black-gp-100/60">
              {formatPublishedDate(postDate.split(" ")[0])}
            </h6>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {tags.map((tag) => (
            <span
              className="w-max bg-green-gp-600/10 p-2 text-xs text-green-gp-600"
              key={`${tag}-${id}`}
            >
              {tag}
            </span>
          ))}
        </div>
        <p className="font-source-sans-pro text-base font-medium sm:mt-5">
          {postDescription}
        </p>
        <ReadMoreArticleLink id={id} />
      </div>
    </article>
  );
}
