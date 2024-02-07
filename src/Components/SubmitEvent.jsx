import React, { useState } from 'react'

const SubmitEvent = () => {
    let [state,setState]=useState("")
    function hadleSubmit(e){
   
        setState(e.target[0].value)


        e.preventDefault()
    }
    return (
        <>
            <div>
                <form onSubmit={hadleSubmit}>
                    <input type="text" placeholder='enter Name' />

                    <button type="submit">
                        Submit
                    </button>
                </form>
                <h2>User Name: {state}</h2>
            </div>
        </>
    )
}

export default SubmitEvent