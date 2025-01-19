import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Footer from '../../components/common/Footer';
import Header from '../../components/common/Header';
const MainLayout = () => {
    return (_jsxs("div", { className: "min-h-screen flex flex-col", children: [_jsx(Header, {}), _jsx("main", { className: "flex-grow container mx-auto px-6 py-8", children: "Welcome to ElegantStore!" }), _jsx("footer", { className: "bg-gray-800 text-white text-center py-4", children: _jsx(Footer, {}) })] }));
};
export default MainLayout;
