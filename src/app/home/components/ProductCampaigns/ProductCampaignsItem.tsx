import { Campaign } from "@/services/campaigns";
import Link from "next/link";

type ProductCampaignItemsProps = {
  campaign: Campaign;
};

const ProductCampaignItemContent = ({ image_url }: { image_url: string }) => {
  return (
    <div className="group h-[250px] rounded-xl overflow-hidden cursor-pointer shadow-default">
      <div className="h-full">
        <img
          src={image_url}
          alt="Promotion"
          className="object-contain lg:object-cover w-full h-full transition-transform group-hover:scale-105"
        />
      </div>
    </div>
  );
};

const ProductCampaignItem = ({ campaign }: ProductCampaignItemsProps) => {
  if (campaign.redirect_url) {
    return (
      <Link href={campaign.redirect_url}>
        <ProductCampaignItemContent image_url={campaign.image_url} />
      </Link>
    );
  }

  return <ProductCampaignItemContent image_url={campaign.image_url} />;
};

export default ProductCampaignItem;
