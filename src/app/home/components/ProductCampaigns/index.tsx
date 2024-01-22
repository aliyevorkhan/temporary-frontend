"use client";

import { getCampaigns } from "@/services/campaigns";
import Link from "next/link";
import { useQuery } from "react-query";
import ProductCampaignItem from "./ProductCampaignsItem";
import useResponsive from "@/hooks/useResponsive";
import Carousel from "@/components/carousel";
import { SwiperSlide } from "swiper/react";

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
    spaceBetween: 10,
    slidesPerView: 1,
  },
};

const ProductCampaigns = () => {
  const { isMobile, isDesktop, isTablet } = useResponsive();
  const { data } = useQuery("productCampaigns", () => {
    return getCampaigns();
  });

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between pb-3 relative border-b-2 before:contnet-[*] before:bg-orange-300 before:absolute before:w-[50px] before:h-[2px] z-[2] before:inline-block before:bottom-[-2px]">
        <h3 className="text-base lg:text-xl">Kampaniyalar</h3>

        <Link
          href="campaigns"
          className="text-base lg:text-xl cursor-pointer hover:underline"
        >
          Bütün Kampaniyalar
        </Link>
      </div>

      {(isDesktop || isTablet) && (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 min-h-[632px] h-[632px] max-h-[632px] grid-rows-3">
          {data?.results.slice(0, 9).map((item) => (
            <ProductCampaignItem key={item.id} campaign={item} />
          ))}
        </div>
      )}

      {isMobile && (
        <Carousel breakpoints={breakpoints} scrollbar={{ draggable: true }}>
          {data?.results?.slice(0, 9).map((offer) => {
            return (
              <SwiperSlide key={offer.id} className="py-1.5 px-1.5">
                <ProductCampaignItem key={offer.id} campaign={offer} />
              </SwiperSlide>
            );
          })}
        </Carousel>
      )}
    </div>
  );
};

export default ProductCampaigns;
