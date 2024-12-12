import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from '@mui/material';
export default function AppIconButton(props) {
    return (_jsx(Button, { onClick: props.onClick, "aria-label": props['aria-label'], variant: "outlined", sx: {
            borderRadius: 2,
            minWidth: 'auto',
            width: { xs: props.isSmall ? 34 : 48, md: props.isSmall ? 34 : 58 },
            height: { xs: props.isSmall ? 34 : 48, md: props.isSmall ? 34 : 58 },
            ...props.sx,
        }, children: props.children }));
}
