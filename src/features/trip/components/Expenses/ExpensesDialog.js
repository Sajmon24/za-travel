import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Controller, useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { Box, FormHelperText, Grid, Stack, TextField, Typography, } from '@mui/material';
import AppDialog from '@features/ui/AppDialog';
import { useBreakpoints } from '@hooks/useBreakpoints';
import { EXPENSES_CATEGORIES, EXPENSE_ICON_BY_CATEGORY } from '../../data';
import { removeTrailingZeros } from '../../utils/removeTrailingZeros';
import CategoryIcon from './CategoryIcon';
export default function ExpensesDialog(props) {
    const { md } = useBreakpoints();
    const { handleSubmit, control, onSubmit, onReset, register, onCategoryClick, selectedCategory, errors, } = useExpenseForm(props);
    return (_jsx(AppDialog, { title: "Add expenses", primaryButtonText: "Save", isOpen: props.isOpen, onClose: onReset, onPrimaryButtonClick: handleSubmit(onSubmit), isForm: true, maxWidth: 684, children: _jsxs(Stack, { sx: { width: '100%' }, gap: 4, children: [_jsxs(Box, { children: [_jsxs(Grid, { container: !md, display: { xs: 'grid', md: 'flex' }, gridTemplateColumns: "repeat(3, 75px)", columnGap: { xs: 5, sm: 20, md: 0 }, justifyContent: "space-between", rowGap: 2, children: [EXPENSES_CATEGORIES.map(({ id, category }) => {
                                    const iconInfo = EXPENSE_ICON_BY_CATEGORY[category];
                                    return (_jsxs(Grid, { item: true, gap: 1, alignItems: "center", display: "flex", flexDirection: "column", children: [_jsx(CategoryIcon, { category: category, onClick: () => onCategoryClick(category), color: iconInfo.color, backgroundColor: iconInfo.backgroundColor, borderColor: selectedCategory === category ? iconInfo.color : 'white', children: _jsx(iconInfo.icon, { fontSize: "large" }) }), _jsx(Typography, { variant: "subtitle1", children: category })] }, id));
                                }), _jsx("input", { type: "hidden", ...register('category', {
                                        required: 'Please select a category!',
                                    }) })] }), errors.category && (_jsx(FormHelperText, { error: true, children: errors.category?.message }))] }), _jsxs(Stack, { gap: 3, children: [_jsx(Controller, { name: "amount", control: control, rules: {
                                required: 'Please specify the amount!',
                                validate: {
                                    positiveNumber: (value) => value > 0 ? undefined : 'Amount should be greater than zero',
                                },
                            }, render: ({ field: { ref, ...field }, fieldState }) => (_jsx(TextField, { type: "number", inputRef: ref, variant: "standard", margin: "normal", fullWidth: true, id: "amount", label: "Expenses", helperText: fieldState.error?.message, error: Boolean(fieldState.error), ...field, onChange: (event) => {
                                    field.onChange(removeTrailingZeros(event.target.value));
                                } })) }), _jsx(Controller, { name: "description", control: control, render: ({ field: { ref, ...field }, fieldState }) => (_jsx(TextField, { inputRef: ref, variant: "standard", margin: "normal", fullWidth: true, id: "description", label: "Description", multiline: true, maxRows: 6, inputProps: { maxLength: 200 }, helperText: fieldState.error?.message ?? `${field.value.length}/200`, error: Boolean(fieldState.error), ...field })) })] })] }) }));
}
function useExpenseForm({ onSave, onClose }) {
    const { handleSubmit, reset, resetField, control, register, setValue, watch, trigger, formState: { errors }, } = useForm({
        defaultValues: {
            amount: 0,
            description: '',
            category: undefined,
        },
    });
    const selectedCategory = watch('category');
    const onSubmit = (data) => {
        onSave({ id: uuidv4(), ...data });
        onReset();
    };
    const onReset = () => {
        onClose();
        resetField('category');
        reset();
    };
    const onCategoryClick = (category) => {
        setValue('category', category);
        trigger('category');
    };
    return {
        handleSubmit,
        control,
        onSubmit,
        onReset,
        onCategoryClick,
        register,
        selectedCategory,
        errors,
    };
}
