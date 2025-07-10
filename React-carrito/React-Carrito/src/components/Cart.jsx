import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart, totalPrice } =
    useContext(CartContext);

  if (cart.length === 0) {
    return (
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow mt-6 text-center text-gray-500 dark:text-gray-400">
        El carrito está vacío.
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 p-4 rounded shadow mt-6">
      <h2 className="text-xl font-bold mb-4">Tu Carrito</h2>
      <ul className="divide-y divide-gray-200 dark:divide-gray-700">
        {cart.map(({ id, name, price, quantity }) => (
          <li key={id} className="flex justify-between items-center py-2">
            <div>
              <p className="font-medium">{name}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                ${price} x {quantity} = ${price * quantity}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => updateQuantity(id, quantity - 1)}
                className="px-2 py-1 bg-gray-300 dark:bg-gray-700 rounded hover:bg-gray-400 dark:hover:bg-gray-600"
                disabled={quantity <= 1}
              >
                -
              </button>
              <span>{quantity}</span>
              <button
                onClick={() => updateQuantity(id, quantity + 1)}
                className="px-2 py-1 bg-gray-300 dark:bg-gray-700 rounded hover:bg-gray-400 dark:hover:bg-gray-600"
              >
                +
              </button>
              <button
                onClick={() => removeFromCart(id)}
                className="ml-4 px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Eliminar
              </button>
            </div>
          </li>
        ))}
      </ul>
      <div className="mt-4 font-bold text-right">Total: ${totalPrice}</div>
    </div>
  );
};

export default Cart;
