import { enqueueSnackbar } from 'notistack';
import { isRejectedWithValue } from '@reduxjs/toolkit';
export const rtkQueryErrorLogger = () => (next) => (action) => {
    if (isRejectedWithValue(action) && typeof action.payload === 'string') {
        enqueueSnackbar(action.payload, {
            variant: 'error',
        });
    }
    return next(action);
};
