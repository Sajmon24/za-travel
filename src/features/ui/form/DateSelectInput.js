import { jsx as _jsx } from "react/jsx-runtime";
import dayjs from 'dayjs';
import { Controller } from 'react-hook-form';
import { DatePicker } from '@mui/x-date-pickers';
export default function DateSelectInput({ control, name, label, requiredErrorText, maxDate, minDate, }) {
    return (_jsx(Controller, { name: name, control: control, rules: { required: requiredErrorText }, render: ({ field: { ref, ...field }, fieldState }) => (_jsx(DatePicker, { label: label, slotProps: {
                textField: {
                    inputRef: ref,
                    variant: 'standard',
                    helperText: fieldState.error?.message,
                    error: Boolean(fieldState.error),
                },
                inputAdornment: { position: 'start' },
            }, ...field, onChange: (newValue) => {
                let value;
                try {
                    value = dayjs(newValue).toISOString();
                }
                catch (_) {
                    /*empty*/
                }
                field.onChange(value ?? newValue);
            }, sx: {
                width: '100%',
                '& .MuiSvgIcon-root': { ml: 0.2 },
            }, value: field.value ? dayjs(field.value) : null, maxDate: maxDate ? dayjs(maxDate) : undefined, minDate: minDate ? dayjs(minDate) : undefined })) }));
}
