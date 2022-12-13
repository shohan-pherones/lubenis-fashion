import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { currencyFormatter } from "../utilities/currencyFormatter";

const Featured = () => {
  const [firstFeature, setFirstFeature] = useState(null);
  const [secondFeature, setSecondFeature] = useState(null);
  const { data } = useFetch("/products");

  useEffect(() => {
    const firstProduct = data.filter((product) => product.isFeatured).at(0);
    const secondProduct = data.filter((product) => product.isFeatured).at(1);
    setFirstFeature(firstProduct);
    setSecondFeature(secondProduct);
  }, [data]);

  return (
    <div className="featured container mx-auto py-20 flex flex-col gap-10">
      <div className="top flex justify-between gap-10">
        <p className="flex-[2] text-2xl">
          Personalizing your own style is what Lubenis Fashion is all about. Get
          access to the latest trends and designs, and match your garments with
          our growing selection of styles.
        </p>
        <h2 className="flex-1 text-7xl uppercase font-semibold">
          <span className="text-rose-500">Featured</span> picks
        </h2>
      </div>
      <div className="mid grid grid-cols-3 gap-10">
        {firstFeature && (
          <Link
            to={`/product/${firstFeature.id}`}
            className="col-span-2 flex flex-col gap-5 relative group"
          >
            <img
              src={firstFeature.img1}
              alt={firstFeature.title}
              className="w-full h-full object-cover group-hover:brightness-50 duration-500"
            />
            <span className="uppercase h-40 w-40 bg-black rounded-full absolute top-1/2 left-1/2 flex justify-center items-center text-4xl text-white -translate-x-[50%] opacity-0 group-hover:opacity-100 duration-500 z-[1]">
              View
            </span>
            <div>
              <h3 className="text-2xl uppercase">{firstFeature.title}</h3>
              <p className="text-2xl text-rose-500">
                {currencyFormatter(firstFeature.price)}
              </p>
            </div>
          </Link>
        )}
        {secondFeature && (
          <Link
            to={`/product/${secondFeature.id}`}
            className="h-full w-full flex flex-col gap-5 relative group"
          >
            <img
              src={secondFeature.img1}
              alt={secondFeature.title}
              className="w-full h-full object-cover group-hover:brightness-50 duration-500"
            />
            <span className="uppercase h-40 w-40 bg-black rounded-full absolute top-1/2 left-1/2 flex justify-center items-center text-4xl text-white -translate-x-[50%] opacity-0 group-hover:opacity-100 duration-500 z-[1]">
              View
            </span>
            <div>
              <h3 className="text-2xl uppercase">{secondFeature.title}</h3>
              <p className="text-2xl text-rose-500">
                {currencyFormatter(secondFeature.price)}
              </p>
            </div>
          </Link>
        )}
      </div>
      <div className="bottom grid grid-cols-5 gap-10">
        {firstFeature &&
          data
            ?.filter((product) => product.isFeatured)
            .filter((product) => product.id !== firstFeature.id)
            .filter((product) => product.id !== secondFeature.id)
            .map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                className="w-full flex flex-col gap-5 h-full relative group"
              >
                <img
                  src={product.img1}
                  alt={product.title}
                  className="w-full object-cover h-96 group-hover:brightness-50 duration-500"
                />
                <span className="uppercase h-24 w-24 border rounded-full absolute top-1/2 left-1/2 flex justify-center items-center text-xl text-white -translate-x-[50%] -translate-y-[50%] opacity-0 group-hover:opacity-100 duration-500 z-[1] hover:bg-white hover:text-black">
                  View
                </span>
                <div>
                  <h3 className="text-xl uppercase">{product.title}</h3>
                  <p className="text-xl text-rose-500">
                    {currencyFormatter(product.price)}
                  </p>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
};

export default Featured;
