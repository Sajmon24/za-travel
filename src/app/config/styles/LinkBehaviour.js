import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import { Link as RouterLink, } from 'react-router-dom';
const LinkBehavior = forwardRef((props, ref) => {
    const { href, ...other } = props;
    return _jsx(RouterLink, { ref: ref, to: href, ...other });
});
export default LinkBehavior;
