import React from "react";
import ProductList from "./components/ProductList";
import ThemeButton from "./components/ThemeButton";
import Navbar from "./components/Navbar";

function App() {
  return (
    
    <main className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white p-6">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center">🛒 Carrito de Compras</h1>
        <Navbar/>
        <ThemeButton />
        <ProductList />

      </div>
    </main>
  );
}

export default App;

