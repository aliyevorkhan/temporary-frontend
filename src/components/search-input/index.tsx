"use client";

import useFreezeBodyScroll from "@/hooks/useFreezeBodyScroll";
import clsx from "clsx";
import { FormEvent, useState } from "react";
import Search from "./Search";
import { useQuery } from "react-query";
import { getProducts } from "@/services/products";
import SearchResultSkeleton from "./SearchResult/Skeleton";
import SearchResult from "./SearchResult";
import { AnimatePresence, motion } from "framer-motion";

const SearchInput = () => {
  const [isFocused, setFocused] = useState(false);
  const [value, setValue] = useState("");
  const layerClasses = clsx(
    "bg-layer left-0 h-screen fixed top-0 w-full z-[9998]",
    {
      visible: isFocused,
      hidden: !isFocused,
    }
  );

  const { data, isLoading } = useQuery({
    queryKey: [value],
    queryFn: () => {
      if (!value) return Promise.resolve(null);

      return getProducts({
        search: value,
        page: 1,
        page_size: 3,
      });
    },
  });

  useFreezeBodyScroll(isFocused);

  const handleChange = (e: FormEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const handleClear = () => {
    setValue("");
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (!value) return;

    window.location.href = `/products?search=${value}`;
  };

  const clear = () => {
    setValue("");
    setFocused(false);
  };

  return (
    <div className="relative w-full lg:w-[650px]">
      <AnimatePresence>
        {isFocused && (
          <motion.div
            layout
            className="h-screen w-screen top-0 left-0 fixed z-[9999] bg-layer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setFocused(false);
            }}
          />
        )}
      </AnimatePresence>
      <div className="relative z-[9999]">
        {/* TODO: Use react-hook-form */}
        <Search
          name="search"
          onChange={handleChange}
          onClear={handleClear}
          onSubmit={handleSubmit}
          onFocus={() => {
            setFocused(true);
          }}
          onKeyUp={(e) => {
            if (e.key === "Escape") {
              setFocused(false);
            }
          }}
          value={value}
        />
      </div>

      {isFocused && value && (
        <div className="w-full absolute top-[56px] start-0 py-2.5 bg-white z-[9999] rounded-md flex flex-col overflow-hidden shadow-dropDown">
          {isLoading ? (
            Array.from({ length: 5 }).map((_, id) => (
              <div
                key={id}
                className="py-2.5 ps-5 pe-10 scroll-snap-align-start border-b border-black/5"
              >
                <SearchResultSkeleton />
              </div>
            ))
          ) : data && data.results.length > 0 ? (
            data?.results.map((product) => (
              <div
                key={product.id}
                className="py-2.5 ps-5 pe-10 border-b border-black/5 scroll-snap-align-start transition-colors duration-200 hover:bg-skin-two hover:bg-gray-100"
                onClick={clear}
              >
                <SearchResult product={product} />
              </div>
            ))
          ) : (
            <div className="py-2.5 ps-5 pe-10 border-b border-black/5 scroll-snap-align-start">
              <p className="text-sm text-center text-heading">
                Axtardığınız məhsul tapılmadı
              </p>
            </div>
          )}

          <div>
            <div className="flex items-center justify-center py-2.5">
              <a
                href={`/products?search=${value}`}
                className="text-sm font-semibold text-center text-skin-primary hover:underline"
              >
                Bütün nəticələrə bax
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchInput;
