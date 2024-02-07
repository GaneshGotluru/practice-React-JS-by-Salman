import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Weather = () => {
    let [search,setSearch]=useState('bengaluru')
    let [state,setState]=useState('')

    // const api=()=>{
    //     key:'a1b32c3be0641a28fee9ed707012e554'
    //     base:'https://api.openweathermap.org/data/2.5/'
    // };

    let searchPress=()=>{
        // fetch(`${api.base}weather?q=${search},uk&APPID=${api.key}`)


        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search},uk&APPID=a1b32c3be0641a28fee9ed707012e554`)
        .then((res)=>res.json())
        .then(data => setState(data))
        .then(data => console.log(data))
    }
  return (
    <>
    <div>
        <h1>Weather api</h1>
        <input type="text" placeholder='Search... ' onChange={e => setSearch(e.target.value)}/>
        <button onClick={searchPress}>Search</button>

        <p>{state.name}</p>
        <p>{state.main ? state.main.temp: null} <sup>o</sup></p>
        <p>{state.Weather ? state.Weather[0].main:null}</p>
    </div>
    </>

  )
}

export default Weather

