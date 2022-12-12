import { Link } from "react-router-dom";
import { currencyFormatter } from "../utilities/currencyFormatter";
import { useDispatch, useSelector } from "react-redux";
import { removeItem, clearCart } from "../features/product/productSlice";

const Cart = () => {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch();

  const total = () => {
    const calcTotal = products.reduce(
      (acc, item) => (acc += item.quantity * item.price),
      0
    );
    const fixedTotal = +calcTotal.toFixed(2);
    const subtotal = currencyFormatter(fixedTotal);
    return subtotal;
  };

  return (
    <div className="cart container mx-auto py-20 flex gap-10 min-h-screen">
      <div className="left flex-[2] flex flex-col gap-10">
        <span className="uppercase text-4xl font-medium">
          {products.length === 0
            ? "Your cart is empty"
            : "Products in your cart"}
        </span>
        <div className="added-products flex flex-col gap-5">
          {products?.map((product) => (
            <div
              key={product.id}
              className="added-product grid grid-cols-5 gap-5"
            >
              <div className="left">
                <img
                  src={product.img1}
                  alt={product.title}
                  className="w-full aspect-square object-cover"
                />
              </div>
              <div className="mid col-span-3 flex flex-col uppercase text-gray-500">
                <h3 className="text-xl text-gray-700">{product.title}</h3>
                <span>Unit price. {currencyFormatter(product.price)}</span>
                <span>Qty. {product.quantity}</span>
              </div>
              <div className="right">
                <button
                  onClick={() => dispatch(removeItem(product.id))}
                  className="uppercase border-b border-gray-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {products.length > 0 && (
        <div className="right flex-1 flex flex-col gap-5">
          <div className="top flex justify-between w-full uppercase text-2xl font-medium">
            <span>Subtotal</span>
            <span className="text-rose-500">{total()}</span>
          </div>
          <div className="mid text-center">
            <Link
              to="/checkout"
              className="uppercase text-2xl font-medium bg-gray-700 w-full inline-block text-gray-50 py-2"
            >
              Checkout
            </Link>
            <span className="text-left inline-block mt-2 text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Explicabo, tempore?
            </span>
          </div>
          <div className="bottom flex justify-between">
            <button
              onClick={() => dispatch(clearCart())}
              className="uppercase font-medium"
            >
              Clear cart
            </button>
            <Link
              to="/products"
              className="uppercase font-medium text-cyan-500"
            >
              Continue shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
