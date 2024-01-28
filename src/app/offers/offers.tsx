"use client";

import Container from "@/components/container";
import useSearchParams from "@/hooks/useSearchParams";
import { getOffers } from "@/services/offers";
import { useState } from "react";
import { useQuery } from "react-query";
import OffersFilter from "./filter";
import OffersList from "./list";
import OfferCardSkeleton from "./list/offer-card-skeleton";
import Pagination from "@/components/pagination";
import useResponsive from "@/hooks/useResponsive";
import OffersOrder from "./order";

const Offers = () => {
  const { searchParams, updateQueryString } = useSearchParams();
  const page = searchParams.get("page");
  const order = searchParams.get("order");
  const brands = searchParams.get("brands")?.split(",");

  const { isDesktop } = useResponsive();

  const [pageSize] = useState(8);

  const { data, isLoading } = useQuery({
    queryKey: ["get-offers", brands, page, pageSize, order],
    queryFn: () =>
      getOffers({
        storeIds: brands?.filter((brand) => brand !== ""),
        page: page ? parseInt(page) : 1,
        page_size: pageSize,
        ordering: order as string,
      }),
  });

  const offers = data?.results;

  return (
    <Container>
      <div className="flex py-8 lg:py-20 gap-10 flex-col lg:flex-row">
        <div className="sticky flex-shrink-0 hidden h-full lg:block w-80 lg:w-[290px] top-16">
          <OffersFilter />
        </div>
        <div className="w-full">
          {isDesktop && (
            <div className="flex justify-between pt-[35px] pb-[40px]">
              <div />

              <OffersOrder />
            </div>
          )}
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

          {offers?.length === 0 && (
            <div>
              <h1 className="text-xl font-normal">
                Axtardığınız məhsul tapılmadı
              </h1>
            </div>
          )}

          {data && data.count >= pageSize && (
            <Pagination
              selectedPage={parseInt(page || "1")}
              total={data.count}
              pageSize={pageSize}
              onNext={() => {
                updateQueryString(
                  "page",
                  page ? String(parseInt(page) + 1) : "2"
                );
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
        </div>
      </div>
    </Container>
  );
};

export default Offers;
