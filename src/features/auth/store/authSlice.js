import { createSlice } from '@reduxjs/toolkit';
import { loginUser, registerUser } from './authActions';
const initialState = {
    user: null,
    status: 'idle',
    error: null,
};
export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        userLoaded: (state, action) => {
            state.user = action.payload;
            state.status = 'succeeded';
            state.error = null;
        },
        logout: (state) => {
            state.user = null;
            state.status = 'succeeded';
            state.error = null;
        },
        setUserName: (state, action) => {
            if (state.user) {
                state.user.displayName = action.payload;
            }
        },
    },
    extraReducers: (builder) => builder
        .addCase(registerUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
    })
        .addCase(registerUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
    })
        .addCase(registerUser.fulfilled, (state) => {
        state.status = 'succeeded';
        state.error = null;
    })
        .addCase(loginUser.pending, (state) => {
        state.status = 'loading';
        state.error = null;
    })
        .addCase(loginUser.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload;
    })
        .addCase(loginUser.fulfilled, (state) => {
        state.status = 'succeeded';
        state.error = null;
    }),
});
export const { userLoaded, logout, setUserName } = authSlice.actions;
export const selectAuth = (state) => state.auth;
export const selectUser = (state) => state.auth.user;
export default authSlice.reducer;
