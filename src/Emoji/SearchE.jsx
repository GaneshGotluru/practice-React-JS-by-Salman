import axios from 'axios'
import React, { useEffect, useState } from 'react'

const SearchE = () => {
    let [state ,setState] = useState([])
    let [emojiName,setEmojiName] = useState('')  //  onchange
    let [newemoji,setNewEmoji] = useState('') // onSubmit


    
    let handleChage=(e)=>{
        setEmojiName(e.target.value)
    }

    let handleSubmit= (e) => {
        e.preventDefault()
        setNewEmoji(emojiName)
    }


    useEffect(()=>{
        axios.get(`https://emoji-api.com/emojis?search=${newemoji}&access_key=aca1f7d3ced0361f21b2406daf4a092dc81d2892`)
        .then(res =>setState(res.data))
    },[newemoji])

    return (
    
        <div>
            <form action="" onSubmit={handleSubmit}>
                <input onChange={handleChage} value={emojiName} type='text'placeholder='enter the emoji name'/>
                <button>search</button>
            </form>
            <ul>
                {
                    state.map((obj,i)=>{
                        return <li key={i}>{obj.character}</li>
                    })
                }
            </ul>

        </div>
  )
}

export default SearchE










