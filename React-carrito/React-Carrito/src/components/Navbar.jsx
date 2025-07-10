import { useState, useRef, useEffect } from "react";
import Cart from "./Cart"; 
import { useContext } from "react";
import { CartContext } from "../context/CartContext";


const Navbar = () => {
  const [openCart, setOpenCart] = useState(false);
  const dropdownRef = useRef();

  const { cart } = useContext(CartContext);
const totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);

  // Cerrar el carrito si se hace clic afuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenCart(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400 px-6 py-3 flex justify-between items-center relative">
      <h1 className="text-xl font-bold">Mi Tienda</h1>

      <div className="relative" ref={dropdownRef}>
        <button
  onClick={() => setOpenCart(!openCart)}
  className="relative focus:outline-none"
>
  <span className="text-2xl">🛒</span>

  {totalItems > 0 && (
    <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full font-bold">
      {totalItems}
    </span>
  )}
</button>


{openCart && (
  <div className="absolute right-0 mt-2 w-[80vw] sm:w-[400px] z-50">
    <Cart />
  </div>
)}

      </div>
    </nav>
  );
};

export default Navbar;
