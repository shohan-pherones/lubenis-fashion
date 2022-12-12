import { Link } from "react-router-dom";
import { currencyFormatter } from "../utilities/currencyFormatter";

const ProductCard = ({ product }) => {
  return (
    <Link
      to={`/product/${product.id}`}
      className="h-full w-full flex flex-col gap-5"
    >
      <img
        src={product.img1}
        alt={product.title}
        className="w-full h-full object-cover"
      />
      <div>
        <h3 className="text-xl uppercase">{product.title}</h3>
        <p className="text-xl text-rose-500">
          {currencyFormatter(product.price)}
        </p>
      </div>
    </Link>
  );
};

export default ProductCard;
