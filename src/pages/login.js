import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Typography } from '@mui/material';
import { APP_NAME } from '@config/constants';
import LoginForm from '@features/auth/components/LoginForm';
export default function LoginPage() {
    return (_jsxs(_Fragment, { children: [_jsx(Typography, { component: "h1", variant: "h2", mb: 1, children: "Login" }), _jsxs(Typography, { color: "text.secondary", mb: 4, children: ["Login to access ", APP_NAME] }), _jsx(LoginForm, {})] }));
}
