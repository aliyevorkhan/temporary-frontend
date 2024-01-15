import { Campaign } from "@/services/campaigns";

type Props = {
  campaign: Campaign;
};

const CampaignCard = ({ campaign }: Props) => {
  const { redirect_url } = campaign;

  const handleCampaignClick = () => {
    window.open(redirect_url, "_blank");
  };

  return (
    <div onClick={handleCampaignClick}>
      <div className="relative group cursor-pointer rounded-md overflow-hidden h-[200px]">
        <div className="h-full">
          <img
            src={campaign.image_file}
            alt={campaign.title}
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
            <span className="text-white text-md">{campaign.store.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CampaignCard;
