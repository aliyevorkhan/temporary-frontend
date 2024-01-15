const OfferCardSkeleton = () => {
  return (
    <div
      role="status"
      className="animate-pulse px-4 py-5 flex flex-col border border-[#e3e3e3]"
    >
      <div className="flex items-center justify-center w-full bg-gray-300 rounded dark:bg-gray-300 h-[160px]">
        <svg
          className="w-10 h-10 text-gray-200 dark:text-gray-200"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 18"
        >
          <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
        </svg>
      </div>

      <div className="w-full pt-4">
        <div className="flex-1 animate-pulse bg-gray-200  w-full rounded h-7" />
      </div>

      <div className="my-auto pt-2">
        <div className="flex flex-row gap-1">
          <div className="animate-pulse bg-gray-200 w-[70px] h-6 rounded" />
          <div className="animate-pulse bg-gray-200 w-8 h-6 rounded" />
        </div>

        <div className="flex justify-between items-center mt-[10px] mb-5">
          <div className="animate-pulse bg-gray-200 w-[90px] h-5 rounded" />
          <div className="animate-pulse w-[80px] bg-gray-200 rounded h-5"></div>
        </div>

        <div className="flex gap-1">
          <div className="w-10 h-5 bg-gray-200 animate-pulse rounded" />
          <div className="w-11 h-5 bg-gray-200 animate-pulse rounded" />
        </div>

        <div className="pt-4">
          <div className="h-12 w-full bg-gray-300 rounded animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default OfferCardSkeleton;
