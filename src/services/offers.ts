import axiosInstance from "@/utils/http";
import { Store } from "./store";

export type Offer = {
  id: number;
  name: string;
  type: "daily_offer";
  description: string;
  image_url: string;
  image_file: string;
  end_date: string;
  price: string;
  amount_of_discount: string;
  discount_rate: number;
  installment: {
    price: number;
    period: number;
  };
  is_active: boolean;
  redirect_url: string;
  created_at: string;
  updated_at: string;
  store: Store;
};

type OffersFilters = {
  storeIds?: string[];
  page?: number;
  page_size?: number;
  ordering?: string;
};

export const getOffers = (
  filters?: OffersFilters
): Promise<Pagination<Offer>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let url = `/offers/offer-manager/?`;

      if (filters) {
        const filterEntries = Object.entries(filters);

        filterEntries.forEach(([key, value], index) => {
          if (value) {
            if (key === "storeIds") {
              const storeIds = value as Array<string>;

              storeIds.forEach((storeId, index) => {
                if (index === storeIds.length - 1) {
                  url += `store=${storeId}&`;
                } else {
                  url += `store=${storeId}&`;
                }
              });
            } else if (key === "ordering") {
              if (value) {
                if (value === "asc") {
                  url += `ordering=-end_date`;
                } else {
                  url += `ordering=end_date`;
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

      const response = await axiosInstance.get<Pagination<Offer>>(url);

      return resolve(response.data);
    } catch (e) {
      if (e instanceof Error) {
        return reject(e.message);
      }
    }
  });
};
