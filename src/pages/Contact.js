import React from 'react'
import '../App.css'
const Contact = () => {

    const [name, setName] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const [nameError, setNameError] = React.useState(null);


    const handleFormSubmit = (e) => {
        e.preventDefault();
        if(name === '' || name===null){
            setNameError("Name is required.");
        }else {
            setNameError(null);
            console.log("FORM IS VALID.")
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
                <div className="form_control">
                    <label>Password</label>
                    <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} name="password" />
                </div>

                <button className="button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default  Contact;
