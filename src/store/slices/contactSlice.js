import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
    name: 'contact',
    initialState: {
        contacts: []
    },
    reducers: {
        deleteContact: (state, action) => {
            const updatedContacts = state.contacts.filter(contact=>contact.id !== action.payload.id);
            state.contacts = updatedContacts;
        },

        addContact: (state, action) => {
            state.contacts = [action.payload,...state.contacts]
        }
    }
})

export const { deleteContact, addContact } = contactSlice.actions

export default contactSlice.reducer;


// action->dispatch => reducer => state change => ui rerender