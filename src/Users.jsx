import { useEffect, useState } from "react"

export default function Users(){
    const [users, setUsers]= useState([]);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=> res.json())
        .then(data=>setUsers(data))
    },[])

 const userStyle={
    border:'2px solid purple',
    borderRadius:'10px',
    margin:'20px',
    padding:'20px',
 }
    return(
        <div style={userStyle}>
            <h2>User : {users.length}</h2>
        </div>
    )
}