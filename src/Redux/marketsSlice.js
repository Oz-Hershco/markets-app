import { createSlice } from "@reduxjs/toolkit";

export const marketsSlice = createSlice({
    name: 'markets',
    initialState: {
        value: []
    },
    reducers: {
        update: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { update } = marketsSlice.actions;
export default marketsSlice.reducer;