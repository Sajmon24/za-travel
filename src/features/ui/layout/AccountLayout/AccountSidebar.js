import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import LogoutIcon from '@mui/icons-material/Logout';
import { Avatar, Box, ButtonBase, Link, List, ListItem, ListItemButton, ListItemIcon, Stack, Typography, } from '@mui/material';
import { AppRoutes } from '@config/routes';
import { Colors, theme } from '@config/styles';
import { selectUser } from '@features/auth/store/authSlice';
import AppButton from '@features/ui/AppButton';
import Logo from '@features/ui/logo/Logo';
import { useBreakpoints } from '@hooks/useBreakpoints';
import { logout } from '@services/api';
import { useAppSelector } from '@store/index';
import { ACCOUNT_LINKS } from './data';
export default function AccountSidebar({ isMinimized, onClose }) {
    const { md } = useBreakpoints();
    const user = useAppSelector(selectUser);
    const userInitial = user?.displayName?.split(' ')[0][0];
    const onLinkClick = () => {
        if (!md) {
            onClose();
        }
    };
    const onLogout = () => {
        logout();
    };
    return (_jsxs(Stack, { justifyContent: "space-between", sx: { py: 3, px: 2, height: '100%', background: 'white' }, children: [_jsxs(Box, { children: [_jsx(Box, { mb: 6, children: _jsx(Logo, { isMinimized: isMinimized }) }), _jsxs(Stack, { direction: "row", alignItems: "center", mb: 4, gap: 3, justifyContent: isMinimized ? 'center' : 'flex-start', children: [_jsx(Avatar, { sx: { height: 48, width: 48, background: Colors.disabled }, children: userInitial }), !isMinimized && _jsx(Typography, { variant: "body1", children: "Simona" })] }), _jsx(List, { children: ACCOUNT_LINKS.map(({ Icon, text, path }) => (_jsx(ListItem, { disablePadding: true, children: _jsx(NavLink, { to: path, style: {
                                    width: '100%',
                                    textDecoration: 'none',
                                }, onClick: onLinkClick, children: ({ isActive }) => (_jsxs(ListItemButton, { sx: {
                                        background: isActive
                                            ? Colors.secondaryGreen
                                            : 'transparent',
                                        borderRadius: 2,
                                        mb: 1,
                                        color: isActive
                                            ? theme.palette.primary.main
                                            : theme.palette.text.primary,
                                        px: isMinimized ? 1 : 2,
                                        justifyContent: 'center',
                                    }, children: [_jsx(ListItemIcon, { sx: {
                                                minWidth: isMinimized ? 'inherit' : 56,
                                                color: isActive
                                                    ? theme.palette.primary.main
                                                    : theme.palette.text.secondary,
                                            }, children: _jsx(Icon, { fontSize: "large" }) }), !isMinimized && (_jsx(Typography, { variant: isActive ? 'body2' : 'body1', children: text }))] })) }) }, text))) }), _jsx(AppButton, { fullWidth: true, LinkComponent: Link, href: AppRoutes.addTrip, onClick: onLinkClick, sx: { mt: 2 }, children: _jsxs(Stack, { gap: 1, component: "span", alignItems: "center", justifyContent: "center", direction: "row", children: [!isMinimized && 'Go travel', " ", _jsx(AddIcon, {})] }) })] }), _jsx(Box, {}), _jsxs(ButtonBase, { onClick: onLogout, sx: { height: 51, py: 1, px: 2, width: 'fit-content', borderRadius: 2 }, children: [_jsx(LogoutIcon, { sx: { color: 'text.secondary', mr: isMinimized ? 0 : 4 } }), !isMinimized && (_jsx(Typography, { component: "span", variant: "body1", children: "Logout" }))] })] }));
}
