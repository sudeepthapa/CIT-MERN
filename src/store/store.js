import { configureStore } from '@reduxjs/toolkit';
import bookSlice from './slices/bookSlice'
import abc from './slices/userSlice'
const store = configureStore(
    {
        reducer: {
            books: bookSlice,
            users: abc
        }
    }
)

export default store;