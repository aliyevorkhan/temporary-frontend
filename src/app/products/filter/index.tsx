import Select, { Option } from "@/components/select";
import useSearchParams from "@/hooks/useSearchParams";
import { getStores } from "@/services/store";
import { capitalize } from "@/utils/strings";
import { useMemo } from "react";
import { useQuery } from "react-query";

const Filters = () => {
  const { updateQueryString, deleteQueryString } = useSearchParams();

  const { data: storesResponse } = useQuery({
    queryKey: ["get-stores"],
    queryFn: () => getStores(),
  });

  const options = useMemo(() => {
    if (storesResponse) {
      const { results: stores } = storesResponse;

      console.log({ stores });

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
    <div className="flex flex-col w-full">
      <Select
        options={options}
        onChange={(values) => {
          handleBrandChange(values as unknown as Array<Option>);
        }}
      />
    </div>
  );
};

export default Filters;
