import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        value: {
            isLoggedIn:false
        }
    },
    reducers: {
        updateLoginStatus: (state, action) => {
            state.value.isLoggedIn = action.payload;
        }
    }
})

export const { updateLoginStatus } = userSlice.actions;
export default userSlice.reducer;