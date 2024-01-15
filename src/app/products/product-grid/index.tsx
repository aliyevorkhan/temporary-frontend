import { Product } from "@/services/products";
import ProductCard from "./ProductGridCard";

type ProductsGridProps = {
  products: Product[];
};

const ProductsGrid = ({ products }: ProductsGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-2 lg:grid-cols-3">
      {products.map((product) => {
        return <ProductCard product={product} key={product.id} />;
      })}
    </div>
  );
};

export default ProductsGrid;
