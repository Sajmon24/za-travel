import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
export default function NotFoundPage() {
    return (_jsxs("div", { children: [_jsx("h2", { children: "Nothing to see here!" }), _jsx("p", { children: _jsx(Link, { to: "/", children: "Go to home page" }) })] }));
}
