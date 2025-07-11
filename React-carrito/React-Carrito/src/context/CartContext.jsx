import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        return JSON.parse(localStorage.getItem("cart")) || [];
    });

    useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
    setCart((prev) => {
        const existing = prev.find((item) => item.id === product.id);
        if (existing) {
        return prev.map((item) =>
            item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            );
        }
        return [...prev, { ...product, quantity: 1 }];
        });
    };

    const updateQuantity = (id, quantity) => {
        setCart((prev) =>
        prev.map((item) =>
            item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
        )
        );
    };

    const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    };

    const totalPrice = cart.reduce(
        (total, item) => total + item.price * item.quantity,
        0
    );

    return (
        <CartContext.Provider
        value={{ cart, addToCart, updateQuantity, removeFromCart, totalPrice }}
        >
        {children}
        </CartContext.Provider>
    );
};
