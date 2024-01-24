"use client";

import Container from "@/components/container";
import { getProducts } from "@/services/products";
import { useState } from "react";
import { useQuery } from "react-query";
import Filters from "./filter";
import Pagination from "@/components/pagination";
import ProductsGrid from "./product-grid";
import useSearchParams from "@/hooks/useSearchParams";
import ProductsOrder from "./order";
import useResponsive from "@/hooks/useResponsive";
import MobileFilter from "./mobile-filter";

const Products = () => {
  const [pageSize] = useState(16);
  const { searchParams, updateQueryString } = useSearchParams();
  const { isMobile } = useResponsive();

  const search = searchParams.get("search");
  const page = searchParams.get("page");
  const brands = searchParams.get("brands")?.split(",");
  const order = searchParams.get("order");

  const { data } = useQuery({
    queryKey: ["getProducts", page, search, pageSize, brands, order],
    queryFn: () => {
      return getProducts({
        page: page ? Number(page) : 1,
        page_size: pageSize,
        search: search as string,
        stores: brands?.filter((brand) => brand !== ""),
        ordering: order as string,
      });
    },
  });

  const products = data?.results;

  return (
    <Container>
      <div className="flex py-8 lg:py-20 gap-10 flex-col lg:flex-row">
        <div className="sticky flex-shrink-0 hidden h-full lg:block w-80 lg:w-[290px] top-16">
          <Filters />
        </div>

        {isMobile && <MobileFilter />}

        <div className="w-full">
          {search && (
            <div className="pb-4">
              <h1 className="text-3xl font-thin">
                {search} axtarışı üçün {data?.count} nəticə
              </h1>
            </div>
          )}
          <ProductsOrder />
          {products && <ProductsGrid products={products} />}

          {products?.length === 0 && (
            <div>
              <h1 className="text-xl font-normal">
                Axtardığınız məhsul tapılmadı
              </h1>
            </div>
          )}

          {products && products.length > 0 && (
            <Pagination
              pageSize={pageSize}
              selectedPage={page ? Number(page) : 1}
              total={data?.count}
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

export default Products;
