import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import { AppBar, Box, styled } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { theme } from '@config/styles';
import AppIconButton from '@features/ui/AppIconButton';
import { useBreakpoints } from '@hooks/useBreakpoints';
import AccountSidebar from './AccountSidebar';
const DESKTOP_DRAWER_WIDTH = 288;
const DESKTOP_MINIMIZED_DRAWER_WIDTH = 94;
const openedMixin = (theme) => ({
    width: DESKTOP_DRAWER_WIDTH,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});
const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: DESKTOP_MINIMIZED_DRAWER_WIDTH,
});
const StyledDrawer = styled(Drawer, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme }) => ({
    width: DESKTOP_DRAWER_WIDTH,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
        {
            props: ({ open }) => open,
            style: {
                ...openedMixin(theme),
                '& .MuiDrawer-paper': openedMixin(theme),
            },
        },
        {
            props: ({ open }) => !open,
            style: {
                ...closedMixin(theme),
                '& .MuiDrawer-paper': closedMixin(theme),
            },
        },
    ],
}));
const TOOLBAR_STYLES = { mb: 1, mt: 2 };
export default function AccountLayout() {
    const { md, xl } = useBreakpoints();
    const [isOpen, setOpen] = useState(xl);
    const [isClosing, setIsClosing] = useState(false);
    const closeDrawer = () => {
        setOpen(false);
    };
    const handleDrawerClose = () => {
        setIsClosing(true);
        setOpen(false);
    };
    const handleDrawerTransitionEnd = () => {
        setIsClosing(false);
    };
    const handleDrawerToggle = () => {
        if (!isClosing) {
            setOpen(!isOpen);
        }
    };
    return (_jsxs(Box, { sx: {
            display: 'flex',
            bgcolor: 'grey.100',
            minHeight: { md: '100vh' },
            height: { xs: '100vh', md: 'auto' },
            maxHeight: { xs: '-webkit-fill-available', md: 'auto' },
        }, children: [md && (_jsxs(_Fragment, { children: [_jsx(StyledDrawer, { variant: "permanent", open: isOpen, children: _jsx(AccountSidebar, { onClose: closeDrawer, isMinimized: !isOpen }) }), _jsx(AppIconButton, { isSmall: true, "aria-label": "sidebar toggle button", onClick: handleDrawerToggle, sx: {
                            borderRadius: 1,
                            position: 'absolute',
                            top: 27,
                            left: `calc(${isOpen ? DESKTOP_DRAWER_WIDTH : DESKTOP_MINIMIZED_DRAWER_WIDTH}px - 17px)`,
                            zIndex: theme.zIndex.drawer + 1,
                            background: 'white',
                            transition: theme.transitions.create('left', {
                                easing: theme.transitions.easing.sharp,
                                duration: theme.transitions.duration.leavingScreen,
                            }),
                            ':hover': {
                                background: 'white',
                            },
                        }, children: isOpen ? _jsx(ChevronLeftIcon, {}) : _jsx(ChevronRightIcon, {}) })] })), !md && (_jsxs(_Fragment, { children: [_jsx(AppBar, { position: "fixed", sx: { boxShadow: 'none', backgroundColor: 'grey.100' }, children: _jsx(Toolbar, { sx: TOOLBAR_STYLES, children: _jsx(IconButton, { color: "inherit", "aria-label": "open drawer", edge: "start", onClick: handleDrawerToggle, children: _jsx(MenuIcon, { sx: { color: 'primary.main', fontSize: 40 } }) }) }) }), _jsx(Drawer, { variant: "temporary", open: isOpen, onTransitionEnd: handleDrawerTransitionEnd, onClose: handleDrawerClose, ModalProps: {
                            keepMounted: true, // Better open performance on mobile.
                        }, sx: {
                            '& .MuiDrawer-paper': {
                                boxSizing: 'border-box',
                                width: DESKTOP_DRAWER_WIDTH,
                            },
                        }, children: _jsx(AccountSidebar, { onClose: closeDrawer }) })] })), _jsxs(Box, { component: "main", sx: {
                    width: '100%',
                    px: {
                        xs: 2,
                        md: 7,
                    },
                    pt: {
                        xs: 0,
                        md: 4,
                    },
                    pb: 4,
                }, children: [_jsx(Toolbar, { sx: { display: { md: 'none' }, ...TOOLBAR_STYLES } }), _jsx(Outlet, {})] })] }));
}
