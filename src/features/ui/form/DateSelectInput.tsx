import { type Control, Controller } from 'react-hook-form';

import { DatePicker } from '@mui/x-date-pickers';

interface Props {
  control: Control<any, unknown>;
  name: string;
  label: string;
  requiredErrorText?: string;
  maxDate?: Date | null;
  minDate?: Date | null;
}

export default function DateSelectInput({
  control,
  name,
  label,
  requiredErrorText,
  maxDate,
  minDate,
}: Props) {
  return (
    <Controller
      name={name}
      control={control}
      rules={{ required: requiredErrorText }}
      render={({ field: { ref, ...field }, fieldState }) => (
        <DatePicker
          label={label}
          slotProps={{
            textField: {
              inputRef: ref,
              variant: 'standard',
              helperText: fieldState.error?.message,
              error: Boolean(fieldState.error),
            },
            inputAdornment: { position: 'start' },
          }}
          {...field}
          sx={{
            width: '100%',
            '& .MuiSvgIcon-root': { ml: 0.2 },
          }}
          maxDate={maxDate}
          minDate={minDate}
        />
      )}
    />
  );
}
