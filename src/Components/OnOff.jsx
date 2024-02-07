import React, { useState } from 'react'

const OnOff = () => {

    // console.log(useState("ganehsh"))
    let [state,setState]=useState(true)
    // console.log(state)

    
    function handleClick(){
        setState(!state)
    }
  return (
   <>
   <button onClick={handleClick}>
    {
        state ? "ON":"OFF"
    }
   </button>
   </>
  )
}

export default OnOff