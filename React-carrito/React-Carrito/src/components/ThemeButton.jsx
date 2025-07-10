import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeButton = () => {
    const { dark, toggleTheme } = useContext(ThemeContext);

    return (
        <button
        onClick={toggleTheme}
        className="mb-4 px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-600 transition"
        >
        {dark ? "Modo Claro" : "Modo Oscuro"}
        </button>
    );
    };

export default ThemeButton;
