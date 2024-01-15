"use client";

import Container from "@/components/container";
import { Option } from "@/components/select";
import { getCampaigns } from "@/services/campaigns";
import { useState } from "react";
import { useQuery } from "react-query";
import CampaignsFilter from "./filter";
import CampaignsList from "./list";
import CampaignCardSkeleton from "./list/campaign-card-skeleton";
import Pagination from "@/components/pagination";
import useSearchParams from "@/hooks/useSearchParams";

const Campaigns = () => {
  const { searchParams, updateQueryString } = useSearchParams();
  const page = searchParams.get("page");
  const [selectedStores, setSelectedStores] = useState<Option[]>([]);

  const [pageSize] = useState(9);

  const { data, isLoading, error } = useQuery({
    queryKey: ["get-campaigns", selectedStores, page, pageSize],
    queryFn: () =>
      getCampaigns({
        storeIds: selectedStores.map((option) => option.value),
        page: page ? parseInt(page) : 1,
        page_size: pageSize,
      }),
  });

  return (
    <Container>
      <CampaignsFilter
        setSelectedStores={(options) => {
          setSelectedStores(options);
        }}
        selectedStores={selectedStores}
      />
      {data && <CampaignsList campaingsResponse={data} />}
      {isLoading && (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <CampaignCardSkeleton />
          <CampaignCardSkeleton />
          <CampaignCardSkeleton />
          <CampaignCardSkeleton />
          <CampaignCardSkeleton />
          <CampaignCardSkeleton />
          <CampaignCardSkeleton />
          <CampaignCardSkeleton />
          <CampaignCardSkeleton />
        </div>
      )}
      {data && data.count >= pageSize && (
        <Pagination
          selectedPage={parseInt(page || "1")}
          total={data.count}
          pageSize={pageSize}
          onNext={() => {
            updateQueryString("page", page ? String(parseInt(page) + 1) : "2");
          }}
          onPrev={() => {
            if (page && parseInt(page) > 1) {
              updateQueryString("page", String(parseInt(page) - 1));
            }
          }}
          onClick={(page) => {
            updateQueryString("page", String(page));
          }}
        />
      )}
    </Container>
  );
};

export default Campaigns;
