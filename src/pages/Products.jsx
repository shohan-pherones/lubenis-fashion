import ProductCard from "../components/ProductCard";
import { useFetch } from "../hooks/useFetch";

const Products = () => {
  const { data, loading, error } = useFetch("/products");

  return (
    <div className="products container mx-auto py-20 grid grid-cols-5 gap-10">
      {loading ? (
        <span className="uppercase col-span-full text-center">
          {error ? error : "Loading..."}
        </span>
      ) : (
        data?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
};

export default Products;
