import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography, } from '@mui/material';
import AppIconButton from '@features/ui/AppIconButton';
import { useBreakpoints } from '@hooks/useBreakpoints';
import { EXPENSE_ICON_BY_CATEGORY } from '../../data';
import CategoryIcon from './CategoryIcon';
export default function ExpensesTable({ expenses, onDelete }) {
    const { md } = useBreakpoints();
    const bottomBoxRef = useRef(null);
    useEffect(() => {
        if (bottomBoxRef) {
            bottomBoxRef?.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [expenses]);
    return (_jsxs(TableContainer, { children: [_jsxs(Table, { "aria-label": "Expenses Table", children: [_jsx(TableHead, { children: _jsxs(TableRow, { children: [_jsx(TableCell, { children: _jsx(Typography, { component: "span", variant: "subtitle2", sx: { width: { xs: '45%', md: '25%' } }, children: "Category" }) }), md && (_jsx(TableCell, { sx: { width: '100%' }, children: _jsx(Typography, { component: "span", variant: "subtitle2", children: "Description" }) })), _jsx(TableCell, { children: _jsx(Typography, { component: "span", variant: "subtitle2", children: "Amount" }) }), _jsx(TableCell, { children: _jsx(Typography, { component: "span", variant: "subtitle2", children: "Action" }) })] }) }), _jsx(TableBody, { children: expenses.map((expense) => {
                            const iconInfo = EXPENSE_ICON_BY_CATEGORY[expense.category];
                            return (_jsxs(TableRow, { sx: { '&:last-child td, &:last-child th': { border: 0 } }, children: [_jsx(TableCell, { children: _jsxs(Stack, { component: "span", direction: "row", alignItems: "center", gap: 1, children: [_jsx(CategoryIcon, { category: expense.category, color: iconInfo.color, backgroundColor: iconInfo.backgroundColor, borderColor: "transparent", isSmall: true, children: _jsx(iconInfo.icon, {}) }), _jsx(Typography, { component: "span", variant: "subtitle1", children: expense.category })] }) }), md && (_jsx(TableCell, { sx: { width: 200, maxWidth: 200 }, children: _jsx(Typography, { component: "span", variant: "subtitle1", sx: { wordWrap: 'break-word' }, children: expense.description }) })), _jsx(TableCell, { children: _jsxs(Typography, { component: "span", variant: "subtitle1", children: ["$", expense.amount] }) }), _jsx(TableCell, { children: _jsx(AppIconButton, { onClick: () => onDelete(expense.id), "aria-label": 'Remove Expense', children: _jsx(DeleteIcon, {}) }) })] }, expense.id));
                        }) })] }), _jsx(Box, { ref: bottomBoxRef })] }));
}
