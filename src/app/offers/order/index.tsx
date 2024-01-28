import Select from "@/components/select";
import useSearchParams from "@/hooks/useSearchParams";

type Order = "asc" | "desc";

const OffersOrder = () => {
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
          label: "Ən son təkliflər",
        },
        {
          value: "desc",
          label: "Ən köhnə təkliflər",
        },
      ]}
      onChange={(values) => {
        const value = (values as { value: Order }).value;

        handleChange(value);
      }}
    />
  );
};

export default OffersOrder;
