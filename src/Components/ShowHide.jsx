import React, { useState } from 'react'

const ShowHide = () => {

    let [state,setState]=useState(true)
    
    function handleClick(){
        setState(!state)
    }
  return (
    <>
        <br />
        <button onClick={handleClick}>
            {
                state ? "Show":"Hide"
            }
        </button>
        {
            state ? "":<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit soluta, repudiandae aspernatur sint magni facilis odit dignissimos, eligendi voluptatum totam aliquid sapiente numquam adipisci sed. Laborum, incidunt. Laboriosam, hic impedit?</p>
        }
      
    </>
  )
}

export default ShowHide