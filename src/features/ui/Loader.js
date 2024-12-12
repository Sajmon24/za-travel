import { jsx as _jsx } from "react/jsx-runtime";
import { Box, CircularProgress } from '@mui/material';
export default function Loader() {
    return (_jsx(Box, { sx: {
            width: '100vw',
            height: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }, children: _jsx(CircularProgress, {}) }));
}
