import { configureStore } from '@reduxjs/toolkit';
import marketsSlice from './marketsSlice';
import userSlice from './userSlice';

export default configureStore({
    reducer: {
        user: userSlice,
        markets:marketsSlice,
    },
})