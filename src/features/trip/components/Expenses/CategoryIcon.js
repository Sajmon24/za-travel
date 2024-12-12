import { jsx as _jsx } from "react/jsx-runtime";
import { Box, ButtonBase } from '@mui/material';
export default function CategoryIcon({ category, onClick, children, color, backgroundColor, borderColor, isSmall, }) {
    return (_jsx(Box, { "aria-label": `${category} icon`, component: onClick ? ButtonBase : Box, onClick: onClick, sx: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: isSmall ? 40 : 75,
            height: isSmall ? 40 : 75,
            color,
            backgroundColor,
            borderRadius: 1,
            border: onClick ? 3 : 0,
            borderColor,
        }, children: children }));
}
