import axiosInstance from "@/utils/http";
import { Store } from "./store";

export type Product = {
  id: number;
  code: string;
  name: string;
  price: string;
  discounted_price: string;
  discount_rate: string;
  amount_of_discount: string;
  warranty: {
    additionalProp1: string;
    additionalProp2: string;
    additionalProp3: string;
  };
  installment: {
    additionalProp1: string;
    additionalProp2: string;
    additionalProp3: string;
  };
  image_file: string;
  image_url: string;
  redirect_url: string;
  created_at: string;
  updated_at: string;
  store: Store;
};

type ProductsFilters = {
  search?: string;
  page_size?: number;
  page?: number;
  stores?: string[];
  ordering?: string;
};

export const getProducts = async (
  filters?: ProductsFilters
): Promise<Pagination<Product>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let url = `/products/product-manager/?`;

      if (filters) {
        const filterEntries = Object.entries(filters);

        filterEntries.forEach(([key, value], index) => {
          if (value) {
            if (key === "stores") {
              const ids = value as string[];

              if (ids.length > 0) {
                ids.forEach((id, index) => {
                  if (index === ids.length - 1) {
                    url += `store=${id}`;
                  } else {
                    url += `store=${id}&`;
                  }
                });
              }
            } else if (key === "ordering") {
              if (value) {
                if (value === "asc") {
                  url += `&ordering=-price`;
                } else {
                  url += `&ordering=price`;
                }
              }
            } else {
              if (index === filterEntries.length - 1) {
                url += `${key}=${value}`;
              } else {
                url += `${key}=${value}&`;
              }
            }
          }
        });
      }

      const { data } = await axiosInstance.get<Pagination<Product>>(url);

      return resolve(data);
    } catch {
      return reject("something went wrong");
    }
  });
};
