import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Controller, useForm } from 'react-hook-form';
import { Navigate } from 'react-router-dom';
import { Box, Link, Stack, TextField, Typography } from '@mui/material';
import { AppRoutes } from '@config/routes';
import AppButton from '@features/ui/AppButton';
import { auth } from '@services/firebase';
import { useAppDispatch, useAppSelector } from '@store/index';
import { registerUser } from '../store/authActions';
import { selectAuth, setUserName } from '../store/authSlice';
export default function SignUpForm() {
    const auth = useAppSelector(selectAuth);
    const { handleSubmit, control, password, onSubmit } = useSignUpForm();
    if (auth.user) {
        return _jsx(Navigate, { to: AppRoutes.dashboard, replace: true });
    }
    return (_jsxs(Box, { component: "form", noValidate: true, onSubmit: handleSubmit(onSubmit), sx: { width: '100%' }, children: [_jsx(Controller, { name: "name", control: control, rules: { required: 'Please specify email address!' }, render: ({ field, fieldState }) => (_jsx(TextField, { variant: "standard", margin: "normal", required: true, fullWidth: true, id: "name", label: "Name", autoComplete: "name", autoFocus: true, helperText: fieldState.error?.message, error: Boolean(fieldState.error), sx: { mb: 3 }, ...field })) }), _jsx(Controller, { name: "email", control: control, rules: { required: 'Please specify email address!' }, render: ({ field, fieldState }) => (_jsx(TextField, { variant: "standard", margin: "normal", required: true, fullWidth: true, id: "email", label: "Email Address", autoComplete: "email", helperText: fieldState.error?.message, error: Boolean(fieldState.error), sx: { mb: 3 }, ...field })) }), _jsx(Controller, { name: "password", control: control, rules: { required: 'Please specify your password!' }, render: ({ field, fieldState }) => (_jsx(TextField, { variant: "standard", margin: "normal", required: true, fullWidth: true, label: "Password", type: "password", id: "password", autoComplete: "current-password", helperText: fieldState.error?.message, error: Boolean(fieldState.error), sx: { mb: 3 }, ...field })) }), _jsx(Controller, { name: "passwordRepeat", control: control, rules: {
                    required: 'Please specify your password confirmation!',
                    validate: (confirmPassword) => confirmPassword !== password ? "Password doesn't match" : undefined,
                }, render: ({ field, fieldState }) => (_jsx(TextField, { variant: "standard", margin: "normal", required: true, fullWidth: true, label: "Confirm Password", type: "password", id: "passwordRepeat", autoComplete: "current-password", helperText: fieldState.error?.message, error: Boolean(fieldState.error), sx: { mb: { xs: 3, md: 5 } }, ...field })) }), _jsx(AppButton, { loading: auth.status === 'loading', type: "submit", fullWidth: true, variant: "contained", sx: { mb: 2 }, children: "Sign up" }), _jsxs(Stack, { justifyContent: "center", direction: "row", spacing: 0.5, sx: { width: '100%' }, children: [_jsx(Typography, { color: "text.secondary", children: "Do you have an account already?" }), _jsx(Link, { href: AppRoutes.login, variant: "body2", children: "Login" })] })] }));
}
function useSignUpForm() {
    const dispatch = useAppDispatch();
    const { handleSubmit, control, watch } = useForm({
        defaultValues: {
            name: '',
            email: '',
            password: '',
            passwordRepeat: '',
        },
    });
    const password = watch('password');
    const onSubmit = async (data) => {
        await dispatch(registerUser({
            name: data.name,
            email: data.email,
            password: data.password,
        })).unwrap();
        dispatch(setUserName(auth.currentUser?.displayName));
    };
    return {
        handleSubmit,
        control,
        password,
        onSubmit,
    };
}
