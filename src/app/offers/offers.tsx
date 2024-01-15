"use client";

import Container from "@/components/container";
import { Option } from "@/components/select";
import useSearchParams from "@/hooks/useSearchParams";
import { getOffers } from "@/services/offers";
import { useState } from "react";
import { useQuery } from "react-query";
import OffersFilter from "./filter";
import OffersList from "./list";
import OfferCardSkeleton from "./list/offer-card-skeleton";
import Pagination from "@/components/pagination";

const Offers = () => {
  const { searchParams, updateQueryString } = useSearchParams();
  const page = searchParams.get("page");
  const [selectedStores, setSelectedStores] = useState<Option[]>([]);

  const [pageSize] = useState(8);

  const { data, isLoading } = useQuery({
    queryKey: ["get-offers", selectedStores, page, pageSize],
    queryFn: () =>
      getOffers({
        storeIds: selectedStores.map((store) => store.value),
        page: page ? parseInt(page) : 1,
        page_size: pageSize,
      }),
  });

  return (
    <Container>
      <OffersFilter
        selectedStores={selectedStores}
        setSelectedStores={(options) => {
          setSelectedStores(options);
        }}
      />
      {data && <OffersList offerResponse={data} />}

      {isLoading && (
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-4">
          <OfferCardSkeleton />
          <OfferCardSkeleton />
          <OfferCardSkeleton />
          <OfferCardSkeleton />
          <OfferCardSkeleton />
          <OfferCardSkeleton />
          <OfferCardSkeleton />
          <OfferCardSkeleton />
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

export default Offers;
