import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Typography } from '@mui/material';
import { APP_NAME } from '@config/constants';
import SignUpForm from '@features/auth/components/SignUpForm';
export default function SignUpPage() {
    return (_jsxs(_Fragment, { children: [_jsx(Typography, { component: "h1", variant: "h2", mb: 1, children: "Sign Up" }), _jsxs(Typography, { color: "text.secondary", mb: 4, children: ["Become a user of ", APP_NAME] }), _jsx(SignUpForm, {})] }));
}
