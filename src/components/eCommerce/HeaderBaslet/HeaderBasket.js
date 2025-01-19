import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import cartIcon from '../../../assets/svg/cart.svg';
const HeaderBasket = ({ quantity = 0 }) => {
    return (_jsxs("div", { className: "relative", children: [_jsx("img", { src: cartIcon, alt: "Basket", className: "w-8 h-8 text-gray-800 hover:text-indigo-600 transition duration-300" }), quantity > 0 && (_jsx("div", { className: "absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center", children: quantity }))] }));
};
export default HeaderBasket;
