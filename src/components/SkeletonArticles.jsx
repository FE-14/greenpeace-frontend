import Skeleton from "react-loading-skeleton";
import classNames from "classnames";

export default function SkeletonArticles() {
  return [...Array(5)].map((_, index) => (
    <article
      className="my-8 flex w-10/12 flex-col gap-4 px-6 lg:flex-row lg:items-center lg:justify-center"
      // eslint-disable-next-line react/no-array-index-key
      key={index}
    >
      <div
        className={classNames(
          "mt-4 h-64 bg-cover object-cover shadow-lg sm:mt-6 sm:object-cover sm:object-center lg:max-h-[400px] lg:min-h-[400px] lg:min-w-[600px] lg:max-w-[600px]",
          {
            "lg:order-2": index % 2 === 0,
          }
        )}
      >
        <Skeleton className="h-full w-full" />
      </div>
      <div className="flex w-full flex-col justify-between gap-4 lg:w-[40%] lg:p-4">
        <div className="flex flex-col gap-2">
          <h2 className="font-montserrat text-xl font-bold text-submarine-gp-500 sm:text-lg md:text-2xl lg:text-3xl">
            <Skeleton className="h-full w-full" />
          </h2>

          <div className="flex flex-col gap-1">
            <h3 className="font-source-sans-pro text-sm font-semibold text-black-gp-100 lg:text-base">
              <Skeleton className="h-full w-full" />
            </h3>
            <h6 className="text-xs text-black-gp-100/60">
              <Skeleton className="h-full w-full" />
            </h6>
          </div>
        </div>
        <div className="flex flex-wrap items-center gap-2">
          {[1, 2].map((tag) => (
            <span
              className="w-max p-2 text-xs text-green-gp-600"
              key={`${tag}`}
            >
              <Skeleton className="h-6 w-12" />
            </span>
          ))}
        </div>
        <p className="font-source-sans-pro text-base font-medium sm:mt-5">
          <Skeleton className="h-full w-full" count={3} />
        </p>
        <Skeleton className="h-full w-1/2" />
      </div>
    </article>
  ));
}
