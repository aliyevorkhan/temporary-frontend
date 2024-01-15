import axiosInstance from "@/utils/http";

export type Store = {
  address: string;
  code: string;
  created_at: string;
  email: string;
  id: number;
  is_active: boolean;
  logo: string;
  name: string;
  phone: string;
  updated_at: string;
  website: string;
};

export type StoreResponse = {
  count: number;
  next: string;
  previous: string;
  results: Store[];
};

export const getStores = async (): Promise<StoreResponse> => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axiosInstance.get<StoreResponse>(
        "/stores/store-manager/"
      );

      return resolve(response.data);
    } catch (e) {
      reject(e);
    }
  });
};
