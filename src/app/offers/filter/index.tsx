import Select, { Option } from "@/components/select";
import useSearchParams from "@/hooks/useSearchParams";
import { getOffers } from "@/services/offers";
import { getStores } from "@/services/store";
import { capitalize } from "@/utils/strings";
import { useMemo } from "react";
import { useQuery } from "react-query";


const OffersFilter = () => {
  const { updateQueryString, deleteQueryString } = useSearchParams();

  const { data: storesResponse, isLoading } = useQuery({
    queryKey: ["get-offers"],
    queryFn: () => getStores(),
  });

  const options = useMemo(() => {
    if (storesResponse) {
      const { results: stores } = storesResponse;

      const filteredStores = new Set(
        stores
          .filter((store) => store.is_active)
          .map((store) => `${store.id}-${store.name}`)
      );

      return Array.from(filteredStores).map((store) => {
        const [code, label] = store.split("-");

        return {
          label: capitalize(label),
          value: code,
        };
      });
    }

    return [];
  }, [storesResponse]);

  const handleBrandChange = (value: Array<Option>) => {
    const brands = value.map((option) => option.value).join(",");

    if (brands === "") {
      deleteQueryString("brands");
      return;
    }

    updateQueryString("brands", brands);
  };

  return (
    <div className="py-10">
      <Select
        instanceId="offers-filter"
        isLoading={isLoading}
        isMulti
        classNames={{
          control: () => "w-[350px]",
        }}
        options={options}
        onChange={(values) => {
          handleBrandChange(values as unknown as Array<Option>);
        }}
      />
    </div>
  );
};

export default OffersFilter;
