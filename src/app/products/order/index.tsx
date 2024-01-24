import useSearchParams from "@/hooks/useSearchParams";

const ProductsOrder = () => {
  const { searchParams, updateQueryString, deleteQueryString } =
    useSearchParams();

  const order = searchParams.get("order");

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;

    console.log({ value });

    if (value === "") {
      deleteQueryString("order");
    } else {
      updateQueryString("order", value);
    }
  };

  return (
    <select onChange={handleChange}>
      <option value="asc">Ən yüksək qiymət</option>
      <option value="desc">Ən aşağı qiymət</option>
    </select>
  );
};

export default ProductsOrder;
