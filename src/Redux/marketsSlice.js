import { createSlice } from "@reduxjs/toolkit";

export const marketsSlice = createSlice({
    name: 'markets',
    initialState: {
        value: []
    },
    reducers: {
        updateMarketsList: (state, action) => {
            state.value = action.payload;
        }
    }
})

export const { updateMarketsList } = marketsSlice.actions;
export default marketsSlice.reducer;