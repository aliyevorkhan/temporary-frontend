"use client";

import Carousel from "@/components/carousel";
import { getOffers } from "@/services/offers";
import Link from "next/link";
import { useQuery } from "react-query";
import { SwiperSlide } from "swiper/react";
import PreviewOfferItemCard from "./PreviewOfferItemCard";

const breakpoints = {
  "1024": {
    slidesPerView: 2,
    spaceBetween: 5,
  },
  "768": {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  "520": {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  "0": {
    slidesPerView: 1,
  },
};

const ProductOffers = () => {
  const { data: offers, error } = useQuery("getOffers", () => getOffers());

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between pb-3 relative border-b-2 before:contnet-[*] before:bg-orange-300 before:absolute before:w-[50px] before:h-[2px] z-[2] before:inline-block before:bottom-[-2px]">
        <h3 className="text-base lg:text-xl">Bu Günün Təklifləri</h3>

        <Link href="campaigns" className="text-base lg:text-xl cursor-pointer hover:underline">
          Bu Günün Təklifləri
        </Link>
      </div>

      <div className="relative">
        <Carousel breakpoints={breakpoints} scrollbar={{ draggable: true }}>
          {offers?.results?.slice(0, 9).map((offer) => {
            return (
              <SwiperSlide key={offer.id} className="py-1.5">
                <PreviewOfferItemCard offer={offer} endDate={offer.end_date} />
              </SwiperSlide>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default ProductOffers;
