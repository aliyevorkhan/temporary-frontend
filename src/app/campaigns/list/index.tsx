import { Campaign } from "@/services/campaigns";
import CampaignCard from "./campaign-card";

type Props = {
  campaingsResponse: Pagination<Campaign>;
};

const CampaignsList = ({ campaingsResponse }: Props) => {
  const { results: campaigns } = campaingsResponse;

  return (
    <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 grid-rows-3">
      {campaigns.map((campaign) => (
        <CampaignCard campaign={campaign} key={campaign.id} />
      ))}
    </div>
  );
};

export default CampaignsList;
