import Select from "@/components/select";
import useSearchParams from "@/hooks/useSearchParams";

type Order = "asc" | "desc";

const ProductsOrder = () => {
  const { updateQueryString, deleteQueryString } = useSearchParams();

  const handleChange = (order: Order) => {
    if (!order) {
      deleteQueryString("order");
    } else {
      updateQueryString("order", order);
    }
  };

  return (
    <Select
      className="w-[300px]"
      isMulti={false}
      placeholder="Sıralama"
      options={[
        {
          value: "asc",
          label: "Ən yüksək qiymət",
        },
        {
          value: "desc",
          label: "Ən aşağı qiymət",
        },
      ]}
      onChange={(values) => {
        const value = (values as { value: Order }).value;

        handleChange(value);
      }}
    />
  );
};

export default ProductsOrder;
