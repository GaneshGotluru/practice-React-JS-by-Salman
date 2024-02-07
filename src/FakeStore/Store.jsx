import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Store = () => {
    let[state , setState] = useState([])

    useEffect(()=>{

        axios.get("https://fakestoreapi.com/products")
        .then(res => setState(res.data))

    } , [])


  return (
    <>

    <h1>Ecommerce-Website</h1>
    <div className='container my-1 ' style={{display:'grid' , gridTemplateColumns:'auto auto auto auto' }}>
    {
        state.map((user)=>{
            return <EcomCard user={user}/>
        })
    }
    </div>

    </>
  )
}


export default Store  

function EcomCard(props){

  let{title , price ,description , image, rate } = props.user

  return <div class="card" style={{width: '14rem',display:'flex',justifyContent:"center", alignItems:"center"}}>
          <img src={image}  style={{height:"100px",width:"100px"}} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">{title}</h5>
            {/* <p class="card-text">{description}</p> */}
          </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">Price : $ {price}</li>
            <li class="list-group-item">Rating :{rate}</li>
          </ul>
        </div>
}