import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Button, Table } from 'reactstrap';
import { removeBook, setSelectedBook } from '../../store/slices/bookSlice';

export default function BookList() {

    const history = useHistory();
    const dispatch = useDispatch();

    const { books } = useSelector(state=>state.books)
    console.log(books)
    const goToAddBook = () => {
        dispatch(setSelectedBook({}))
        history.push('/book/add', {edit: false})
    }

    const handleEdit = (book) => {
        dispatch(setSelectedBook(book))
        history.push('/book/add', {edit: true})
    }

    return (
        <div style={{margin: '20px 100px'}}>
            <div className="d-flex align-items-center justify-content-between">
                <h1>All Books</h1>
                <Button onClick={goToAddBook}>Add Book</Button>
                <Button onClick={()=>history.push('/users')}>Users</Button>
            </div>
            <Table striped bordered>
                <thead>
                    <tr>
                        <th></th>
                        <th>ISBN</th>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                    books.map(({isbn, title, author, poster})=><tr key={isbn}>
                        <th scope="row">
                            <div style={{width: 100, height:100}}>
                                <img src={poster} style={{ width: '100%' }}/>
                            </div>
                        </th>
                        <td>{isbn}</td>
                        <td>{title}</td>
                        <td>{author}</td>
                        <td>
                            <button onClick={()=>dispatch(removeBook(isbn))}>Delete</button>
                            <button onClick={()=>handleEdit({isbn, title, author, poster})}>Edit</button>
                        </td>
                    </tr>)
                    }
                </tbody>
            </Table>
        </div>
    )
}
