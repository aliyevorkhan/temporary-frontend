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
      isMulti={false}
      placeholder="Sıralama"
      classes={{
        container: "w-[200px]",
      }}
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
