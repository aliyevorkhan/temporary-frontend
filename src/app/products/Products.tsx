"use client";

import Container from "@/components/container";
import { getProducts } from "@/services/products";
import { useState } from "react";
import { useQuery } from "react-query";
import Filters from "./filter";
import Pagination from "@/components/pagination";
import ProductsGrid from "./product-grid";
import useSearchParams from "@/hooks/useSearchParams";

const Products = () => {
  const [pageSize] = useState(8);
  const { searchParams, updateQueryString } = useSearchParams();

  const search = searchParams.get("search");
  const page = searchParams.get("page");
  const brands = searchParams.get("brands")?.split(",");

  console.log({ brands });

  const { data } = useQuery({
    queryKey: ["getProducts", page, search, pageSize, brands],
    queryFn: () => {
      if (search) {
        return getProducts({
          page: page ? Number(page) : 1,
          page_size: pageSize,
          search: search as string,
          stores: brands?.filter((brand) => brand !== ""),
        });
      }

      return getProducts({
        page: page ? Number(page) : 1,
        page_size: pageSize,
      });
    },
  });

  const products = data?.results;
  console.log({ data });

  return (
    <Container>
      <div className="flex py-16 lg:py-20 gap-10">
        <div className="sticky flex-shrink-0 hidden h-full lg:block w-80 lg:w-[290px] top-16">
          <Filters />
        </div>

        <div className="w-full">
          {search && (
            <div className="pb-4">
              <h1 className="text-3xl font-thin">
                {search} axtarışı üçün {data?.count} nəticə
              </h1>
            </div>
          )}
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
