import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useFieldArray, useForm } from 'react-hook-form';
import AddIcon from '@mui/icons-material/Add';
import { Stack } from '@mui/material';
import ExpensesTable from '@features/trip/components/Expenses/ExpensesTable';
import AppButton from '@features/ui/AppButton';
import useDialog from '@hooks/useDialog';
import { useAppDispatch, useAppSelector } from '@store/index';
import ExpensesDialog from '../../../components/Expenses/ExpensesDialog';
import { nextStep, selectWizardTrip, setExpenses, } from '../../store/tripWizardSlice';
import Pagination from '../Navigation/Pagination';
export default function Expenses() {
    const { open, close, isOpen } = useDialog();
    const { expenses, onSubmit, handleSubmit, addExpense, removeExpense } = useExpensesForm({ closeExpenseDialog: close });
    return (_jsxs(Stack, { component: "form", noValidate: true, onSubmit: handleSubmit(onSubmit), sx: { width: '100%' }, gap: 3, children: [_jsx(AppButton, { onClick: open, endIcon: _jsx(AddIcon, {}), fullWidth: true, variant: "outlined", children: "Add Expense" }), _jsx(ExpensesDialog, { onSave: addExpense, isOpen: isOpen, onClose: close }), expenses.length > 0 && (_jsx(ExpensesTable, { expenses: expenses, onDelete: removeExpense })), _jsx(Pagination, {})] }));
}
function useExpensesForm({ closeExpenseDialog, }) {
    const dispatch = useAppDispatch();
    const trip = useAppSelector(selectWizardTrip);
    const { watch, handleSubmit, control } = useForm({
        defaultValues: {
            expenses: trip.expenses,
        },
    });
    const expenses = watch('expenses');
    const { append, remove } = useFieldArray({
        control,
        name: 'expenses',
    });
    const addExpense = (expense) => {
        append(expense);
        closeExpenseDialog();
    };
    const removeExpense = (expenseId) => {
        remove(expenses.findIndex((expense) => expense.id === expenseId));
    };
    const onSubmit = (data) => {
        dispatch(setExpenses(data.expenses));
        dispatch(nextStep());
    };
    return {
        onSubmit,
        expenses,
        handleSubmit,
        addExpense,
        removeExpense,
    };
}
