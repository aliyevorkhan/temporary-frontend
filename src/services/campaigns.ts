import axiosInstance from "@/utils/http";
import { Store } from "./store";

export type Campaign = {
  created_at: string;
  end_date: string;
  id: number;
  image_file: string;
  image_url: string;
  is_active: boolean;
  redirect_url: string;
  start_date: string;
  title: string;
  updated_at: string;
  store: Store;
};

type CampaignFilters = {
  storeIds?: string[];
  page?: number;
  page_size?: number;
};

export const getCampaigns = (
  filters?: CampaignFilters
): Promise<Pagination<Campaign>> => {
  return new Promise(async (resolve, reject) => {
    try {
      let url = `/campaigns/campaign-manager/?`;

      if (filters) {
        const filterEntries = Object.entries(filters);

        filterEntries.forEach(([key, value], index) => {
          if (value) {
            if (key === "storeIds") {
              const storeIds = value as Array<string>;

              storeIds.forEach((storeId) => {
                url += `store=${storeId}&`;
              });

              return;
            }

            if (index === filterEntries.length - 1) {
              url += `${key}=${value}`;
            } else {
              url += `${key}=${value}&`;
            }
          }
        });
      }

      const response = await axiosInstance.get<Pagination<Campaign>>(url);

      return resolve(response.data);
    } catch (e) {
      return reject(e);
    }
  });
};
