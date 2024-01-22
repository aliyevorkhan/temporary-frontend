import { Campaign } from "@/services/campaigns";
import Link from "next/link";

type ProductCampaignItemsProps = {
  campaign: Campaign;
};

const ProductCampaignItemContent = ({
  image_url,
  name,
}: {
  image_url: string;
  name: string;
}) => {
  return (
    <div className="relative group cursor-pointer rounded-md overflow-hidden h-[200px]">
      <div className="h-full">
        <img
          src={image_url}
          alt={name}
          className="object-cover w-full h-full"
        />
      </div>

      <div
        className="absolute top-0 left-0 from-white to-black opacity-0 to-80% transition-all h-full w-full group-hover:opacity-100 p-3"
        style={{
          background: "linear-gradient(180deg, transparent 0%, #000 82.97%)",
        }}
      >
        <div className="flex items-end justify-end h-full">
          <span className="text-white text-md">{name}</span>
        </div>
      </div>
    </div>
  );
};

const ProductCampaignItem = ({ campaign }: ProductCampaignItemsProps) => {
  if (campaign.redirect_url) {
    return (
      <Link href={campaign.redirect_url}>
        <ProductCampaignItemContent
          image_url={campaign.image_url}
          name={campaign.store.name}
        />
      </Link>
    );
  }

  return (
    <ProductCampaignItemContent
      image_url={campaign.image_url}
      name={campaign.store.name}
    />
  );
};

export default ProductCampaignItem;
