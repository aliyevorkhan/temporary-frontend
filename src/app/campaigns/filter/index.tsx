import Select, { Option } from '@/components/select';
import { getCampaigns } from '@/services/campaigns';
import { capitalize } from '@/utils/strings';
import { useMemo } from 'react';
import { useQuery } from 'react-query';

type Props = {
  selectedStores: Option[];
  setSelectedStores: (options: Option[]) => void;
};

const CampaignsFilter = ({ selectedStores, setSelectedStores }: Props) => {
  const { data: campaignResponse, isLoading } = useQuery({
    queryKey: ['get-campaigns'],
    queryFn: () => getCampaigns(),
  });

  const options = useMemo(() => {
    if (campaignResponse) {
      const { results: campaigns } = campaignResponse;

      const stores = new Set(
        campaigns.map(
          (campaign) => `${campaign.store.id}-${campaign.store.name}`
        )
      );

      return Array.from(stores).map((store) => {
        const [id, label] = store.split('-');

        return {
          label: capitalize(label),
          value: id,
        };
      });
    }

    return [];
  }, [campaignResponse]);

  return (
    <div className="py-10">
      <Select
        isLoading={isLoading}
        isMulti
        classNames={{
          control: () => 'w-[350px]',
        }}
        defaultValue={selectedStores}
        options={options}
        onChange={(values) => {
          if ((values as Option[]).length === 0) {
            setSelectedStores([]);
            return;
          }

          setSelectedStores(values as Option[]);
        }}
      />
    </div>
  );
};

export default CampaignsFilter;
