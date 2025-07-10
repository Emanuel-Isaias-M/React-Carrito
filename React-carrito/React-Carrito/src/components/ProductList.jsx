import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { products } from '../db/productos';

const ProductList = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Productos</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-gray-100 dark:bg-gray-700 rounded-lg shadow hover:shadow-lg transition-shadow flex flex-col items-center p-4"
            style={{ height: '380px' }} // altura fija para uniformidad
          >
            <div className="w-32 h-32 flex items-center justify-center mb-4 bg-white rounded">
              <img
                src={p.image}
                alt={p.name}
                className="max-w-full max-h-full object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-center text-gray-900 dark:text-gray-100 flex-grow">
              {p.name}
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">${p.price}</p>
            <button
              onClick={() => addToCart(p)}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
            >
              Agregar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
