import { Link } from "react-router-dom";
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

const Cart = () => {
  return (
    <div className="cart container mx-auto py-20 flex gap-10 min-h-screen">
      <div className="left flex-[2] flex flex-col gap-10">
        <span className="uppercase text-4xl font-medium">
          Products in your cart
        </span>
        <div className="added-products flex flex-col gap-5">
          <div className="added-product grid grid-cols-5 gap-5">
            <div className="left">
              <img
                src={data.img1}
                alt={data.title}
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="mid col-span-3 flex flex-col uppercase text-gray-500">
              <h3 className="text-xl text-gray-700">{data.title}</h3>
              <span>Unit price. {currencyFormatter(data.price)}</span>
              <span>Qty. 2</span>
            </div>
            <div className="right">
              <button className="uppercase border-b border-gray-700">
                Remove
              </button>
            </div>
          </div>
          <div className="added-product grid grid-cols-5 gap-5">
            <div className="left">
              <img
                src={data.img1}
                alt={data.title}
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="mid col-span-3 flex flex-col uppercase text-gray-500">
              <h3 className="text-xl text-gray-700">{data.title}</h3>
              <span>Unit price. {currencyFormatter(data.price)}</span>
              <span>Qty. 2</span>
            </div>
            <div className="right">
              <button className="uppercase border-b border-gray-700">
                Remove
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="right flex-1 flex flex-col gap-5">
        <div className="top flex justify-between w-full uppercase text-2xl font-medium">
          <span>Subtotal</span>
          <span className="text-rose-500">{currencyFormatter(data.price)}</span>
        </div>
        <div className="mid text-center">
          <Link
            to="/checkout"
            className="uppercase text-2xl font-medium bg-gray-700 w-full inline-block text-gray-50 py-2"
          >
            Checkout
          </Link>
          <span className="text-left inline-block mt-2 text-gray-500">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
            tempore?
          </span>
        </div>
        <div className="bottom flex justify-between">
          <button className="uppercase font-medium">Clear cart</button>
          <button className="uppercase font-medium text-cyan-500">
            Continue shopping
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
