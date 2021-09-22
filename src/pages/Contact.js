import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import '../App.css'
import { addContact, deleteContact } from '../store/slices/contactSlice';
const Contact = () => {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');

    const [nameError, setNameError] = React.useState(null);

    const contactState = useSelector(state=>state.contact);

    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(addContact({name: 'age', email: 'test', id: 1}))
    }, [])

    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(name === '' || name===null){
            setNameError("Name is required.");
        }else {
            setNameError(null);
            const contact = {
                name,
                email,
                id: new Date().toString()
            }
            dispatch(addContact(contact))
            setEmail('');
            setName('')
        }
    }

    return (
        <div className="form_container">
            <form className="form" onSubmit={handleFormSubmit}>
                <div className="form_control">
                    <label>Name</label>
                    <input type="text" value={name} onChange={(e)=>{setName(e.target.value); setNameError(null)}} name="name" />
                    <i className="error">{nameError}</i>
                </div>
                <div className="form_control">
                    <label>Email</label>
                    <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} name="email" />
                </div>

                <button className="button" type="submit">Submit</button>
            </form>
            <div className="form">
                {contactState.contacts.map(contact=>{
                    return <div key={contact.id} style={{ backgroundColor: '#450000', color:'white', padding: '10px', marginBottom: '10px' }}>
                        <h3>{contact.name}</h3>
                        <em>{contact.email}</em>
                        <button onClick={()=>dispatch(deleteContact(contact))}>Delete</button>
                    </div>
                })}
            </div>
        </div>
    )
}

export default  Contact;
