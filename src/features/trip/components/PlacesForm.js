import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Controller, useFieldArray, useForm, } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';
import { Checkbox, FormHelperText, InputBase, Stack } from '@mui/material';
export default function PlacesForm(props) {
    const { places, handleSubmit, control, errors, onInputKeyDown } = usePlacesForm(props);
    return (_jsxs(Stack, { component: "form", noValidate: true, onSubmit: handleSubmit(props.onSubmit), sx: { width: '100%' }, gap: 1, children: [places.map((place, index) => (_jsxs(Stack, { children: [_jsxs(Stack, { direction: "row", gap: 0.25, children: [_jsx(Controller, { name: `places.${index}.isChecked`, control: control, render: ({ field }) => (_jsx(Checkbox, { checked: field.value, onChange: field.onChange, inputProps: { 'aria-label': 'is place visited checkbox' } })) }), _jsx(Controller, { name: `places.${index}.name`, control: control, rules: { required: 'Please specify the place!' }, render: ({ field: { ref, ...field } }) => (_jsx(InputBase, { id: `{place}.${index}`, inputRef: ref, placeholder: "Type here...", inputProps: { 'aria-label': 'Place Name' }, onKeyDown: (event) => onInputKeyDown(event, index), autoFocus: index === places.length - 1, sx: {
                                        textDecoration: place.isChecked ? 'line-through' : 'none',
                                        width: '100%',
                                    }, ...field })) })] }, place.id), errors.places?.[index] && (_jsx(FormHelperText, { error: true, sx: { ml: 1.5 }, children: errors.places?.[index]?.name?.message }))] }, place.id))), props.SubmitComponent] }));
}
function usePlacesForm({ defaultPlaces }) {
    const { watch, handleSubmit, control, formState: { errors }, setFocus, } = useForm({
        defaultValues: {
            places: defaultPlaces,
        },
    });
    const places = watch('places');
    const { insert, remove } = useFieldArray({
        control,
        name: 'places',
    });
    const onInputKeyDown = (event, index) => {
        if (event.key === 'Enter') {
            event.preventDefault();
            insert(index + 1, { id: uuidv4(), name: '', isChecked: false }),
                { shouldFocus: true };
        }
        else if (event.key === 'Backspace') {
            if (places[index].name.length === 0 && places.length > 1) {
                event.preventDefault();
                remove(index);
                setFocus(`places.${index - 1}.name`);
            }
        }
        else if (event.key === 'ArrowUp') {
            setFocus(`places.${index - 1}.name`);
        }
        else if (event.key === 'ArrowDown') {
            setFocus(`places.${index + 1}.name`);
        }
    };
    return {
        handleSubmit,
        control,
        places,
        errors,
        onInputKeyDown,
    };
}
