import { configureStore } from '@reduxjs/toolkit';
import contactSlice from './slices/contactSlice';
export default configureStore({
    reducer: {
        contact: contactSlice
    },
})