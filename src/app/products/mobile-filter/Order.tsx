import Button from "@/components/form/button";
import Icon from "@/components/icons";
import Modal from "@/components/modal";
import useSearchParams from "@/hooks/useSearchParams";
import { useState } from "react";

type Order = "asc" | "desc";

const ProductMobileOrder = () => {
  const { searchParams, updateQueryString } = useSearchParams();
  const orderParam = searchParams.get("order");
  const [isOpen, setOpen] = useState(false);
  const [order, setOrder] = useState<Order | null>(orderParam as Order);

  const handleOrderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOrder(e.target.value as "asc" | "desc");
  };

  const handleClick = () => {
    if (order) {
      updateQueryString("order", order);
    }

    setOpen(false);
  };

  return (
    <>
      <button
        className="rounded-2xl flex gap-4 border border-[#C7CACF] items-center py-1.5 px-6"
        onClick={() => setOpen(true)}
      >
        <Icon name="order" />
        Sırala
      </button>

      <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
        <div className="px-5 py-4 flex flex-col gap-4">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-medium">Sıralama</h2>

            <button onClick={() => setOpen(false)}>
              <Icon name="close" className="h-4 w-4" />
            </button>
          </div>

          <div>
            <ul>
              <li className="text-lg">
                <label htmlFor="order-desc" className="flex gap-2">
                  <input
                    type="radio"
                    id="order-desc"
                    name="order"
                    onChange={handleOrderChange}
                    checked={order === "desc"}
                    value="desc"
                  />
                  <span>Ən aşağı qiymət</span>
                </label>
              </li>
              <li className="text-lg">
                <label htmlFor="order-asc" className="flex gap-2">
                  <input
                    type="radio"
                    id="order-asc"
                    name="order"
                    onChange={handleOrderChange}
                    checked={order === "asc"}
                    value="asc"
                  />
                  <span>Ən yüksək qiymət</span>
                </label>
              </li>
            </ul>
          </div>

          <div>
            <Button size="sm" className="w-full" onClick={handleClick}>
              <span>Sırala</span>
            </Button>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ProductMobileOrder;
