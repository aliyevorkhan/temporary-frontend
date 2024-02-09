import { Product } from "@/services/products";
import Link from "next/link";

type SearchProductProps = {
  product: Product;
};

const SearchResult: React.FC<SearchProductProps> = ({ product }) => {
  const {
    name,
    image_file,
    image_url,
    redirect_url,
    discounted_price,
    price,
    amount_of_discount,
  } = product ?? {};

  return (
    <Link
      href={redirect_url}
      className="flex items-center justify-start w-full h-auto group"
    >
      <div className="relative flex flex-shrink-0 overflow-hidden rounded-md cursor-pointer w-14 h-14 me-4">
        <img
          src={image_file}
          alt={name || "Product Image"}
          className="object-cover w-full h-full bg-skin-thumbnail"
        />
      </div>
      <div className="flex flex-col w-full overflow-hidden">
        <h3 className="truncate text-skin-base text-15px  mb-1.5">{name}</h3>
        <div className="flex gap-1 items-end">
          {parseInt(amount_of_discount) > 0 ? (
            <>
              <span className="inline-block text-sm font-semibold sm:text-base lg:text-sm text-skin-primary">
                {discounted_price}
              </span>
              {price && (
                <del className="text-sm text-skin-base text-opacity-70">
                  {price}
                </del>
              )}
            </>
          ) : (
            <span className="inline-block text-sm font-semibold sm:text-base lg:text-sm text-skin-primary">
              {price}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default SearchResult;
