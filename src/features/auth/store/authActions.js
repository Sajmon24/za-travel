import { createAsyncThunk } from '@reduxjs/toolkit';
import { login, register } from '@services/api';
export const registerUser = createAsyncThunk('auth/register', async (user, { rejectWithValue }) => {
    try {
        await register(user.name, user.email, user.password);
    }
    catch (error) {
        if (error instanceof Error) {
            return rejectWithValue(error.message);
        }
        return rejectWithValue('Something went wrong!');
    }
});
export const loginUser = createAsyncThunk('auth/login', async (user, { rejectWithValue }) => {
    try {
        await login(user.email, user.password);
    }
    catch (error) {
        if (error instanceof Error) {
            return rejectWithValue(error.message);
        }
        return rejectWithValue('Something went wrong!');
    }
});
