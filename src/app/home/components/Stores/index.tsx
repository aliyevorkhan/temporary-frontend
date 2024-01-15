"use client";

import Carousel from "@/components/carousel";
import { getStores } from "@/services/store";
import { useQuery } from "react-query";
import { SwiperSlide } from "swiper/react";
import StoreItem from "./StoreItem";
import StoreItemSkeleton from "./StoreItemSkeleton";

const breakpoints = {
  "1536": {
    slidesPerView: 10,
    spaceBetween: 5,
  },
  "1280": {
    slidesPerView: 10,
    spaceBetween: 5,
  },
  "1024": {
    slidesPerView: 10,
    spaceBetween: 5,
  },
  "768": {
    slidesPerView: 3,
    spaceBetween: 5,
  },
  "520": {
    slidesPerView: 2,
    spaceBetween: 12,
  },
  "0": {
    slidesPerView: 2,
  },
};

const Stores = () => {
  const { isLoading, data } = useQuery("getStores", () => {
    return getStores();
  });

  return (
    <div className="py-10">
      {isLoading ? (
        <div className="flex gap-[44px]">
          {Array.from({ length: 11 }).map((_, index) => {
            return <StoreItemSkeleton key={index} />;
          })}
        </div>
      ) : (
        <Carousel breakpoints={breakpoints} draggable>
          {data?.results.map((store) => {
            return (
              <SwiperSlide key={store.id}>
                <StoreItem store={store} />
              </SwiperSlide>
            );
          })}
        </Carousel>
      )}
    </div>
  );
};

export default Stores;
