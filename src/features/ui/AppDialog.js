import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import CloseIcon from '@mui/icons-material/Close';
import { Box, Dialog, DialogActions, DialogContent, IconButton, Typography, } from '@mui/material';
import { useBreakpoints } from '@hooks/useBreakpoints';
import AppButton from './AppButton';
const DESKTOP_PADDING_X = 4;
const MOBILE_PADDING_X = 2;
const DESKTOP_PADDING_Y = 5;
const MOBILE_PADDING_Y = 3;
export default function AppDialog({ title, primaryButtonText, isOpen, onClose, onPrimaryButtonClick, isForm, maxWidth, children, }) {
    const { md } = useBreakpoints();
    return (_jsxs(Dialog, { onClose: onClose, "aria-labelledby": "customized-dialog-title", open: isOpen, PaperProps: {
            sx: {
                borderRadius: 2,
                width: { md: 864 },
                maxWidth: maxWidth ?? 'inherit',
            },
        }, fullScreen: !md, children: [_jsx(IconButton, { "aria-label": "close", onClick: onClose, sx: (theme) => ({
                    position: 'absolute',
                    right: 16,
                    top: 24,
                    color: theme.palette.grey[500],
                }), children: _jsx(CloseIcon, { fontSize: "large", sx: { color: 'text.primary' } }) }), _jsx(Typography, { textAlign: "center", variant: "h4", sx: {
                    pt: 8.75,
                    px: { xs: MOBILE_PADDING_X, md: DESKTOP_PADDING_X },
                    pb: 3,
                }, children: title }), _jsxs(Box, { component: isForm ? 'form' : 'div', children: [_jsx(DialogContent, { sx: { px: { xs: MOBILE_PADDING_X, md: DESKTOP_PADDING_X }, py: 0 }, children: children }), _jsx(DialogActions, { sx: {
                            px: { xs: MOBILE_PADDING_X, md: DESKTOP_PADDING_X },
                            pb: { xs: MOBILE_PADDING_Y, md: DESKTOP_PADDING_Y },
                            pt: 3,
                            position: { xs: 'fixed', md: 'static' },
                            bottom: 0,
                            width: '100%',
                        }, children: _jsx(AppButton, { type: isForm ? 'submit' : 'button', fullWidth: true, onClick: onPrimaryButtonClick, children: primaryButtonText }) })] })] }));
}
