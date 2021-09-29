import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
const sliceName = 'users';

const BASE = 'https://jsonplaceholder.typicode.com/users'

export const getUsers = createAsyncThunk(
    `${sliceName}/getUsers`,
    async (payload, {dispatch}) => {

        try{
            const response = await axios.get(BASE);
            return response.data;
        }catch(err){
            throw(err)
        }
    }
)
export const usersSlice = createSlice({
    name: sliceName,
    initialState: {
        users: [],
        status: 'idle'
    },
    extraReducers: (builder)=>{ 'users/getUsers/pending'
        // get users reducers
        builder.addCase(getUsers.pending, (state, action) => {
            state.status = 'pending';
        }).addCase(getUsers.rejected, (state, action)=>{
            state.status = 'error';
        }).addCase(getUsers.fulfilled, (state, action) => {
            state.status = 'success';
            state.users = action.payload
        })

        // delete users reducer
    }
})

export default usersSlice.reducer;