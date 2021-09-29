import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUsers } from '../../store/slices/userSlice';

export default function UserList() {
    const dispatch = useDispatch();

    const {users = [], status} = useSelector(state=>state.users)

    React.useEffect(()=>{
        dispatch(getUsers());
    }, [])

    console.log(status)

    if(status === 'pending'){
        return <h1>Loading....</h1>
    }
    if(status === 'error'){
        return <h1>There is something wrong!</h1>
    }

    if(users.length === 0){
        return <h1>No result found.</h1>
    }
    return (
        <div>
            {users.map(user=><h1 key={user.id}> {user.email} </h1>)}
        </div>
    )
}
