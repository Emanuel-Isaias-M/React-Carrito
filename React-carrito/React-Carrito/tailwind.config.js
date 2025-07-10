/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}"
    ],
    darkMode: 'class', // <- esto es clave para activar modo oscuro con clase "dark"
    theme: {
        extend: {},
    },
    plugins: [],
}
