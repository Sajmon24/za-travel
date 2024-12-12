import { jsx as _jsx } from "react/jsx-runtime";
import LoadingButton from '@mui/lab/LoadingButton';
import { Typography } from '@mui/material';
export default function AppButton({ type = 'button', variant = 'contained', loading, fullWidth, LinkComponent, href, endIcon, startIcon, onClick, children, sx, }) {
    return (_jsx(LoadingButton, { LinkComponent: LinkComponent, href: href, loading: loading, fullWidth: fullWidth, type: type, variant: variant, endIcon: endIcon, startIcon: startIcon, onClick: onClick, sx: {
            borderRadius: 2,
            height: {
                xs: variant === 'text' ? 42 : 48,
                md: variant === 'text' ? 48 : 56,
            },
            textTransform: 'none',
            width: fullWidth ? '100%' : 'fit-content',
            ...sx,
        }, children: _jsx(Typography, { component: "span", variant: "body2", children: children }) }));
}
