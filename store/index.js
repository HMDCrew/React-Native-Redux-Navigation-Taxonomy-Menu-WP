import { configureStore } from '@reduxjs/toolkit';
import taxonomyMenuSlice from './features/taxonomyMenuSlice';
import productSlice from './features/productSlice';

export const store = configureStore({
    reducer: {
        menu: taxonomyMenuSlice,
        product: productSlice,
    },
});