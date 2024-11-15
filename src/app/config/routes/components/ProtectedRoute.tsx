import { Navigate, useLocation } from 'react-router-dom';

import { selectAuth } from '@features/auth/store/authSlice';
import Loader from '@features/ui/Loader';
import { useAppSelector } from '@store/index';

interface Props {
  children: JSX.Element;
}

export default function ProtectedRoute({ children }: Props) {
  const auth = useAppSelector(selectAuth);
  const location = useLocation();

  if (auth.status === 'loading' || auth.status === 'idle') {
    return <Loader />;
  }

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
}
