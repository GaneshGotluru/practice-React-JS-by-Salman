import React, { useState } from 'react'

const HandleChange = () => {
    let [state,setState]=useState("")
   
   
    function handleOnchange(e){
        
        setState(e.target.value)
        
    }
    
  return (
    <div>
        <input onChange={handleOnchange} type="text" placeholder='Enter Places'/>

        <h1>Destination: {state}</h1>
    </div>
  )
}

export default HandleChange