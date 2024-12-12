import { jsx as _jsx } from "react/jsx-runtime";
import { Navigate, useLocation } from 'react-router-dom';
import { selectAuth } from '@features/auth/store/authSlice';
import Loader from '@features/ui/Loader';
import { useAppSelector } from '@store/index';
export default function ProtectedRoute({ children }) {
    const auth = useAppSelector(selectAuth);
    const location = useLocation();
    if (auth.status === 'loading' || auth.status === 'idle') {
        return _jsx(Loader, {});
    }
    if (!auth.user) {
        return _jsx(Navigate, { to: "/login", state: { from: location }, replace: true });
    }
    return children;
}
