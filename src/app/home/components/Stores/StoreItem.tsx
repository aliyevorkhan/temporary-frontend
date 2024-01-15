import { Store } from "@/services/store";

type StoreItemProps = {
  store: Store;
};

const StoreItem = ({ store }: StoreItemProps) => {
  return (
    <div className="h-[60px] w-[60px] rounded-full overflow-hidden border border-transparent">
      <img src={store.logo} className="h-full w-full object-cover" />
    </div>
  );
};

export default StoreItem;
