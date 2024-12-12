import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SnackbarProvider } from 'notistack';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { AppRouter } from '@config/routes';
import { theme } from '@config/styles';
import Loader from '@features/ui/Loader';
import { useAuthStateSubscription } from '@services/firebase';
import { persistor } from '@store/index';
export default function App() {
    useAuthStateSubscription();
    return (_jsx(PersistGate, { loading: _jsx(Loader, {}), persistor: persistor, children: _jsx(BrowserRouter, { children: _jsx(LocalizationProvider, { dateAdapter: AdapterDayjs, children: _jsxs(ThemeProvider, { theme: theme, children: [_jsx(CssBaseline, {}), _jsx(SnackbarProvider, { children: _jsx(AppRouter, {}) })] }) }) }) }));
}
