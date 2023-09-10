import { useState } from "react"

export default function Team(){
    const [team, setTeam]=useState(11);
    // add player...
    const handleAdd=()=>{
        const newTeam = team + 1;
        setTeam(newTeam);
    }
    // remove player...
    const handleRemove=()=>{
       setTeam(team - 1);
    }

    // Add style div...
    const teamStyle ={
    border:'2px solid blue',
    marginBottom:'10px',
    borderRadius:'10px',
    padding:'20px'
}
    return(
        <div style={teamStyle}>
            <h3>Player : {team}</h3>
            <button onClick={handleAdd}>Add</button>
            <button onClick={handleRemove}>Remove</button>
        </div>
    )
}