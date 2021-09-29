import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { Button, Form, FormGroup, Label, Input, Alert } from 'reactstrap';
import { createBook, editBook } from '../../store/slices/bookSlice';

export default function AddBook() {
    const dispatch = useDispatch();
    const selectedBook = useSelector(state=>state.books.selectedBook)
    const [book, setBook] = React.useState({
        title: '',
        isbn: '',
        author: '',
        poster: ''
    })
    React.useEffect(() => {
        setBook(selectedBook);
    }, [])

    const history = useHistory()

    const handleInputChange = (e) => {
        if(e.target.type === 'file'){
            setBook({
                ...book,
                [e.target.name]: URL.createObjectURL(e.target.files[0])
            })
        }else {
            setBook({
                ...book,
                [e.target.name]: e.target.value
            })
        }
    }

    const {location:{state: { edit }}} = history;

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(edit){
            dispatch(editBook(book))
        }else{
            dispatch(createBook(book))
        }
        setBook({
            title: '',
            isbn: '',
            author: '',
            poster: ''
        })
        history.goBack();
    }

    return (
        <div style={{margin: '50px 300px'}}>
            <Alert>Add Book</Alert>
            <Form onSubmit={handleFormSubmit}>
                <FormGroup>
                    <Label>Title</Label>
                    <Input type="text" name="title" value={book.title} placeholder="Title" onChange={handleInputChange} />
                </FormGroup>
                <FormGroup>
                    <Label>ISBN</Label>
                    <Input type="text" disabled={edit} name="isbn" value={book.isbn} placeholder="ISBN" onChange={handleInputChange}/>
                </FormGroup>
                <FormGroup>
                    <Label>Author</Label>
                    <Input type="text" name="author" value={book.author} placeholder="Author Name" onChange={handleInputChange}/>
                </FormGroup>
                <FormGroup style={{marginTop: 10, marginBottom: 30}}>
                    <Label>Book Poster</Label>
                    <Input type="file" name="poster" onChange={handleInputChange}/>
                </FormGroup>
                <div style={{width: 100, height: 100}}>
                    <img src={book.poster} style={{width: '100%'}}/>
                </div>
                <Button type="submit" outline color="primary" block>{ edit ? 'Edit Book' : 'Add Book'}</Button>
            </Form>
        </div>
    )
}
