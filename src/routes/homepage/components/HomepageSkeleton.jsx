import Skeleton from "react-loading-skeleton";

export default function HomepageSkeleton() {
  return (
    <div className="relative mb-20 grid h-72 w-full gap-8 lg:h-96 lg:grid-cols-2">
      <Skeleton className="h-72 lg:h-full" />
      <div className="relative p-6">
        <div className="">
          <Skeleton className="h-6 w-3/4 bg-gray-300/20" />
          <Skeleton className="h-2 w-1/2 bg-gray-300/20" />
        </div>
        <Skeleton className="h-2 bg-gray-300/20" count={10} />

        <Skeleton className="absolute top-0 left-0 right-0 z-0 h-full" />
      </div>
    </div>
  );
}
