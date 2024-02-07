import axios from 'axios'
import React, { useState } from 'react'

const SearchEmoji = () => {

  let [state,setState]=useState([])
  let [emojiname,setEmoName] = useState('')

  function handleChange(e){
    setState(e.target.value)

   
  }

  function handleSubmit(e){

    axios.get(`https://emoji-api.com/emojis?search=${state}&access_key=3d63310cbd40ae41cc2bc2291d82f41c759927f0`)
    .then(res=>console.log(res))


    // setState(e.target[0].value)


     e.preventDefault()
     setState('')
  }
  return (
    <>
    <h1>Emojis</h1>

    <form action="" onSubmit={handleSubmit}> 
      <input type="text" placeholder='Enter here' value={state} onChange={handleChange} />
      <button type='submit'>Search</button>
    </form>

    {
      // state.map((u)=>{
      //   return (
      //     <h1>Hi</h1>
      //   )
      // })
    }
    </>
  )
}

export default SearchEmoji