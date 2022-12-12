import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { currencyFormatter } from "../utilities/currencyFormatter";
import { useFetch } from "../hooks/useFetch";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/product/productSlice";

const Product = () => {
  const [quantity, setQuantity] = useState(1);
  const [mainImg, setMainImg] = useState("img1");

  const param = useParams();
  const { data, loading, error } = useFetch(`/products/${param.id}`);

  const dispatch = useDispatch();

  return (
    <div className="product container mx-auto py-20 h-screen">
      {loading ? (
        <span className="uppercase block col-span-full text-center">
          {error ? error : "Loading..."}
        </span>
      ) : (
        data.id && (
          <div className="product-wrapper grid grid-cols-7 w-full h-full gap-10">
            <div className="left col-span-1 flex flex-col gap-5">
              <img
                onClick={() => setMainImg("img1")}
                src={data.img1}
                alt={data.title}
                className="w-full aspect-square object-cover cursor-pointer"
              />
              <img
                onClick={() => setMainImg("img2")}
                src={data.img2}
                alt={data.title}
                className="w-full aspect-square object-cover cursor-pointer"
              />
            </div>
            <div className="mid col-span-3 overflow-hidden">
              <img
                src={data[mainImg]}
                alt={data.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="right col-span-3 flex flex-col gap-5">
              <h2 className="text-4xl uppercase font-semibold">{data.title}</h2>
              <div className="flex gap-10 items-center">
                <span className="text-4xl uppercase font-semibold text-rose-500">
                  {currencyFormatter(data.price)}
                </span>
                <span className="text-3xl flex items-center w-28">
                  <button
                    className="flex-[2] bg-gray-200"
                    onClick={() =>
                      setQuantity(quantity === 1 ? 1 : (prev) => prev - 1)
                    }
                  >
                    -
                  </button>
                  <span className="flex-[3] bg-gray-100 text-center select-none">
                    {quantity}
                  </span>
                  <button
                    className="flex-[2] bg-gray-200"
                    onClick={() => setQuantity((prev) => prev + 1)}
                  >
                    +
                  </button>
                </span>
              </div>
              <Link
                onClick={() => dispatch(addToCart({ ...data, quantity }))}
                to="/cart"
                className="uppercase text-2xl font-medium text-cyan-500"
              >
                Add to cart
              </Link>
              <div className="mt-5">
                <span className="uppercase text-2xl font-medium">
                  Descriptions
                </span>
                <ul className="uppercase mt-5 flex flex-col gap-1">
                  {data.desc.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default Product;
