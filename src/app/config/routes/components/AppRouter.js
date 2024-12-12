import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Route, Routes } from 'react-router-dom';
import AccountLayout from '@features/ui/layout/AccountLayout/AccountLayout';
import AuthLayout from '@features/ui/layout/AuthLayout';
import AddTripPage from '@pages/account/add-trip';
import DashBoardPage from '@pages/account/dashboard';
import TripsPage from '@pages/account/trips';
import HomePage from '@pages/home';
import LoginPage from '@pages/login';
import NotFoundPage from '@pages/not-found';
import SignUpPage from '@pages/sign-up';
import { AppRoutes } from '../AppRoutes';
import ProtectedRoute from './ProtectedRoute';
export default function AppRouter() {
    return (_jsxs(Routes, { children: [_jsx(Route, { path: AppRoutes.home, element: _jsx(HomePage, {}) }), _jsxs(Route, { element: _jsx(AuthLayout, {}), children: [_jsx(Route, { path: AppRoutes.signUp, element: _jsx(SignUpPage, {}) }), _jsx(Route, { path: AppRoutes.login, element: _jsx(LoginPage, {}) })] }), _jsxs(Route, { element: _jsx(ProtectedRoute, { children: _jsx(AccountLayout, {}) }), children: [_jsx(Route, { path: AppRoutes.dashboard, element: _jsx(DashBoardPage, {}) }), _jsx(Route, { path: AppRoutes.trips, element: _jsx(TripsPage, {}) }), _jsx(Route, { path: AppRoutes.addTrip, element: _jsx(AddTripPage, {}) })] }), _jsx(Route, { path: "*", element: _jsx(NotFoundPage, {}) })] }));
}
