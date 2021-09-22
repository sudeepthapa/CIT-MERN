import React from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'

const Home = () => {

    const history = useHistory()

    const handleClick = () => {
        history.push('/contact/21?name=alex');
        // setTimeout(()=>{
        //     setTimeout(()=>{
        //         history.goBack();
        //     }, 5000)
        // }, 5000)
    }
    return (
        <div>
            <h1>Home</h1>
            <Link className="button" to="/contact">Contact</Link>
        </div>
    )
}

export default  Home;
