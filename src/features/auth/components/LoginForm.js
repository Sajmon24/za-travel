import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Controller, useForm } from 'react-hook-form';
import { Navigate, useLocation } from 'react-router-dom';
import { Box, Link, Stack, TextField, Typography } from '@mui/material';
import { AppRoutes } from '@config/routes';
import AppButton from '@features/ui/AppButton';
import { useAppDispatch, useAppSelector } from '@store/index';
import { loginUser } from '../store/authActions';
import { selectAuth } from '../store/authSlice';
export default function LoginForm() {
    const { handleSubmit, control, onSubmit } = useLoginForm();
    const auth = useAppSelector(selectAuth);
    const location = useLocation();
    if (auth.user) {
        const from = location.state?.from?.pathname || AppRoutes.dashboard;
        return _jsx(Navigate, { to: from, replace: true });
    }
    return (_jsxs(Box, { component: "form", noValidate: true, onSubmit: handleSubmit(onSubmit), sx: { width: '100%' }, children: [_jsx(Controller, { name: "email", control: control, rules: { required: 'Please specify email address!' }, render: ({ field, fieldState }) => (_jsx(TextField, { variant: "standard", margin: "normal", required: true, fullWidth: true, id: "email", label: "Email Address", autoComplete: "email", autoFocus: true, helperText: fieldState.error?.message, error: Boolean(fieldState.error), sx: { mb: 3 }, ...field })) }), _jsx(Controller, { name: "password", control: control, rules: { required: 'Please specify your password!' }, render: ({ field, fieldState }) => (_jsx(TextField, { variant: "standard", margin: "normal", required: true, fullWidth: true, label: "Password", type: "password", id: "password", autoComplete: "current-password", helperText: fieldState.error?.message, error: Boolean(fieldState.error), sx: { mb: { xs: 3, md: 5 } }, ...field })) }), _jsx(AppButton, { loading: auth.status === 'loading', type: "submit", fullWidth: true, variant: "contained", sx: { mb: 2 }, children: "Login" }), _jsxs(Stack, { justifyContent: "center", direction: "row", spacing: 0.5, sx: { width: '100%' }, children: [_jsx(Typography, { color: "text.secondary", children: "Dont have an account yet?" }), _jsx(Link, { href: AppRoutes.signUp, variant: "body2", children: "Sign Up" })] })] }));
}
function useLoginForm() {
    const dispatch = useAppDispatch();
    const { handleSubmit, control } = useForm({
        defaultValues: {
            email: '',
            password: '',
        },
    });
    const onSubmit = (data) => {
        dispatch(loginUser({
            email: data.email,
            password: data.password,
        }));
    };
    return {
        handleSubmit,
        control,
        onSubmit,
    };
}
