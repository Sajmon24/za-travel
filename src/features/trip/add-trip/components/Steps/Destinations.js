import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Controller, useFieldArray, useForm, } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import { Stack, TextField } from '@mui/material';
import AppButton from '@features/ui/AppButton';
import AppIconButton from '@features/ui/AppIconButton';
import { useAppDispatch, useAppSelector } from '@store/index';
import { MAX_TRIP_DESTINATIONS } from '../../../costants';
import { nextStep, selectWizardTrip, setDestinations, setLocationFrom, } from '../../store/tripWizardSlice';
import Pagination from '../Navigation/Pagination';
export default function Destinations() {
    const { destinations, addDestination, removeDestination, handleSubmit, control, onSubmit, } = useDestinationsForm();
    return (_jsxs(Stack, { component: "form", noValidate: true, onSubmit: handleSubmit(onSubmit), sx: { width: '100%' }, gap: 2, children: [_jsxs(Stack, { gap: 3, children: [_jsx(Controller, { name: "locationFrom", control: control, rules: { required: 'Please specify where your trip starts!' }, render: ({ field: { ref, ...field }, fieldState }) => (_jsx(TextField, { autoFocus: true, inputRef: ref, variant: "standard", margin: "normal", required: true, fullWidth: true, id: "locationFrom", label: "From", helperText: fieldState.error?.message, error: Boolean(fieldState.error), ...field })) }), destinations.map((destination, index) => (_jsxs(Stack, { direction: "row", gap: 1, alignItems: "flex-end", children: [_jsx(Controller, { name: `destinations.${index}.name`, control: control, rules: { required: 'Please specify the destination!' }, render: ({ field: { ref, ...field }, fieldState }) => (_jsx(TextField, { inputRef: ref, variant: "standard", margin: "normal", required: true, fullWidth: true, id: `${destination}.${index}`, label: `Destination ${index + 1}`, helperText: fieldState.error?.message, error: Boolean(fieldState.error), ...field })) }), index !== 0 && (_jsx(AppIconButton, { onClick: () => removeDestination(index), "aria-label": 'Remove Distination', children: _jsx(DeleteIcon, {}) }))] }, destination.id)))] }), destinations.length < MAX_TRIP_DESTINATIONS && (_jsxs(AppButton, { variant: "text", onClick: addDestination, startIcon: _jsx(AddIcon, {}), children: [' ', "ADD DESTINATION"] })), _jsx(Pagination, {})] }));
}
function useDestinationsForm() {
    const dispatch = useAppDispatch();
    const trip = useAppSelector(selectWizardTrip);
    const { handleSubmit, control } = useForm({
        defaultValues: {
            locationFrom: trip.locationFrom,
            destinations: trip.destinations,
        },
    });
    const { fields: destinations, append, remove, } = useFieldArray({
        control,
        name: 'destinations',
    });
    const addDestination = () => {
        append({ id: uuidv4(), name: '' });
    };
    const removeDestination = (index) => {
        remove(index);
    };
    const onSubmit = (data) => {
        dispatch(setLocationFrom(data.locationFrom));
        dispatch(setDestinations(data.destinations));
        dispatch(nextStep());
    };
    return {
        handleSubmit,
        control,
        onSubmit,
        destinations,
        addDestination,
        removeDestination,
    };
}
