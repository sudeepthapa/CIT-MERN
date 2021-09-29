import {createSlice} from '@reduxjs/toolkit';

const sliceName = 'books';

export const bookSlice = createSlice({
    name: sliceName,
    initialState: {
        books: [],
        selectedBook: {}
    },
    reducers: {
        createBook: (state, action) => {
            state.books = [...state.books, action.payload]
        },
        removeBook: (state, action) => {
            state.books = state.books.filter(book=>book.isbn !== action.payload)
        },
        editBook: (state, action) => {
            state.books = state.books.map((book)=>{
                if(book.isbn === action.payload.isbn){
                    book = action.payload
                }
                return book;
            })
        },
        setSelectedBook: (state, action) => {
            state.selectedBook = action.payload
        }
    },
    extraReducers: {

    }
})

export const { createBook, removeBook, editBook, setSelectedBook } = bookSlice.actions

export default bookSlice.reducer


// action - {type:'clearData'} - behaviour

// reducer tracks action with type 'clearData' and changes the state 

