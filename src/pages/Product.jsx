import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { currencyFormatter } from "../utilities/currencyFormatter";

const data = {
  id: 1,
  title: "Dotline swiss black top with coat",
  img1: "https://images.pexels.com/photos/11311402/pexels-photo-11311402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  img2: "https://images.pexels.com/photos/413959/pexels-photo-413959.jpeg?auto=compress&cs=tinysrgb&w=1600",
  price: 20,
  desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto culpa quia, provident voluptatibus rem nam nostrum beatae accusamus est excepturi itaque asperiores omnis doloribus explicabo. Molestiae dignissimos quis maiores repellendus!",
  isNew: true,
  isFeatured: true,
};

const Product = () => {
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [mainImg, setMainImg] = useState("img1");

  return (
    <div className="product container mx-auto py-20 h-screen">
      <button onClick={() => navigate(-1)} className="mb-10 uppercase">
        Go back
      </button>
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
            to="/cart"
            className="uppercase text-2xl font-medium text-cyan-500"
          >
            Add to cart
          </Link>
          <div className="mt-5">
            <span className="uppercase text-2xl font-medium">Descriptions</span>
            <p className="uppercase mt-5 text-gray-500">{data.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
