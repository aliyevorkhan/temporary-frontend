import Select from "@/components/select";
import { getProducts } from "@/services/products";
import { capitalize } from "@/utils/strings";
import { useMemo } from "react";
import { useQuery } from "react-query";

const Filters = () => {
  const { data: productsResponse } = useQuery({
    queryKey: ["get-products"],
    queryFn: () => getProducts(),
  });

  const options = useMemo(() => {
    if (productsResponse) {
      const { results: products } = productsResponse;

      const stores = new Set(
        products.map((product) => `${product.store.id}-${product.store.name}`)
      );

      return Array.from(stores).map((store) => {
        const [id, label] = store.split("-");

        return {
          label: capitalize(label),
          value: id,
        };
      });
    }

    return [];
  }, [productsResponse]);

  return (
    <div className="flex flex-col w-full">
      <Select options={options} />
    </div>
  );
};

export default Filters;
