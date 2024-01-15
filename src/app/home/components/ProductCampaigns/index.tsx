"use client";

import { getCampaigns } from "@/services/campaigns";
import Link from "next/link";
import { useQuery } from "react-query";
import ProductCampaignItem from "./ProductCampaignsItem";

const ProductCampaigns = () => {
  const { data } = useQuery("productCampaigns", () => {
    return getCampaigns();
  });

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between pb-3 relative border-b-2 before:contnet-[*] before:bg-orange-300 before:absolute before:w-[50px] before:h-[2px] z-[2] before:inline-block before:bottom-[-2px]">
        <h3 className="text-base lg:text-xl">Kompaniyalar</h3>

        <Link href="campaigns" className="text-base lg:text-xl cursor-pointer hover:underline">
          Bütün Kampaniyalar
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
        {data?.results.slice(0, 9).map((item) => (
          <ProductCampaignItem key={item.id} campaign={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductCampaigns;
