import {
  usePathname,
  useSearchParams as useNextSearchParams,
  useRouter,
} from "next/navigation";
import { useCallback } from "react";

const useSearchParams = () => {
  const pathname = usePathname();
  const searchParams = useNextSearchParams();
  const router = useRouter()

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const updateQueryString = useCallback(
    (name: string, value: string) => {
      router.push(pathname + "?" + createQueryString(name, value));
    },
    [searchParams]
  );

  return {
    pathname,
    searchParams,
    createQueryString,
    updateQueryString,
  };
};

export default useSearchParams;
