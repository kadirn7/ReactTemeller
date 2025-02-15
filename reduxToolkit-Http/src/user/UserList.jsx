import React from 'react'
import {useDispatch,useSelector} from 'react-redux'
import { getAllUsers } from '../redux/userSlice'
import { useEffect } from 'react'

const UserList = () => {
    const dispatch=useDispatch()
    const users=useSelector((state)=>state.user.users)
    useEffect(()=>{
        dispatch(getAllUsers())
    },[])
  
  
    return (

    <div>

        {users.map((user)=>(
            <div key={user.id}>
                <h3>{user.name}</h3>
                <div style={{display:'flex',flexDirection:'row  ',gap:'10px'}}>
                    <h4>E-mail:  {user.email}</h4>
                    <h4>Phone:  {user.phone}</h4>
                </div>
                
                
            </div>
        ))}
    </div>
        
  )
}
export default UserList
