import Skeleton from "react-loading-skeleton";

export default function DetailArticleSkeleton() {
  return (
    <article>
      <div id="detail-wrapper" className="my-6">
        <h1 id="blog-title" className="mb-6 h-8">
          <Skeleton className="h-full w-full" />
        </h1>
        <div id="blog-detail" className="mb-14">
          <p id="blog-author" className="w-1/3">
            <Skeleton className="h-full w-full" />
          </p>
          <p id="blog-postdate" className="w-[20%]">
            <Skeleton className="h-full w-full" />
          </p>
        </div>
        <p id="blog-desc" className="my-6 mb-16 font-source-sans-pro text-lg">
          <Skeleton className="h-full w-full" count={3} />
        </p>
        <div className="h-56 ">
          <Skeleton className="h-full w-full" />
        </div>
        <div
          id="blog-content"
          className="my-6 flex flex-col gap-8 font-source-sans-pro text-lg"
        >
          <Skeleton className="h-full w-full" count={7} />
        </div>

        <div
          className="my-20 flex flex-col gap-3 text-sm text-black-gp-secondary-black-100"
          id="blog-writer"
        >
          <h3 className="w-1/2">
            <Skeleton className="h-full w-full" />
          </h3>
          <h2 className="w-1/4">
            <Skeleton className="h-full w-full" />
          </h2>
          <div
            id="tags-wrapper"
            className="my-8 flex gap-6 font-source-sans-pro"
          >
            {[1, 2].map((number) => (
              <Skeleton className="h-12 w-24" key={number} />
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
