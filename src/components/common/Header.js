import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { HeaderBasket } from '../eCommerce';
const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // تعريف الدالة toggleMenu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (_jsx("header", { className: "bg-white shadow-lg fixed w-full z-50", children: _jsxs("div", { className: "container mx-auto px-6 py-4 flex justify-between items-center", children: [_jsx("div", { className: "text-2xl font-bold text-gray-800", children: _jsxs("a", { href: "/", className: "flex items-center hover:text-gray-600 transition duration-300", children: [_jsx("span", { className: "text-indigo-600", children: "Elegant" }), _jsx("span", { className: "text-gray-800", children: "Store" })] }) }), _jsx("div", { className: "md:hidden", children: _jsx("button", { onClick: toggleMenu, className: "text-gray-800 focus:outline-none", "aria-label": "Toggle Menu", children: _jsx("svg", { className: "w-6 h-6", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "2", d: "M4 6h16M4 12h16m-7 6h7" }) }) }) }), _jsxs("nav", { className: `${isMenuOpen ? 'block' : 'hidden'} md:flex md:items-center md:space-x-8 absolute md:static bg-white w-full md:w-auto left-0 px-6 pb-4 md:pb-0 shadow-md md:shadow-none`, children: [_jsx("a", { href: "/", className: "block text-gray-800 hover:text-indigo-600 transition duration-300 font-medium py-2 md:py-0", children: "Home" }), _jsx("a", { href: "/category", className: "block text-gray-800 hover:text-indigo-600 transition duration-300 font-medium py-2 md:py-0", children: "Categories" }), _jsx("a", { href: "/about", className: "block text-gray-800 hover:text-indigo-600 transition duration-300 font-medium py-2 md:py-0", children: "About" }), _jsx("a", { href: "/login", className: "block text-gray-800 hover:text-indigo-600 transition duration-300 font-medium py-2 md:py-0", children: "Login" }), _jsx("a", { href: "/register", className: "block md:inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300 font-medium mt-2 md:mt-0", children: "Register" })] }), _jsx(HeaderBasket, { quantity: 5 })] }) }));
};
export default Header;
