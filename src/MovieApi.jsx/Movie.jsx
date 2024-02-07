// import React, { useEffect, useState } from 'react'
// import axios from 'axios'

// const MovieTravia = () => {

//     let [state , setState] = useState('')
//     let [movie , setMovie] = useState([])
 

    

//     function handleChange(event){
//         setState(event.target.value)
//     }

//     function handleSubmit(event){
       
//         axios.get(`https://www.omdbapi.com/?s=${state}&apikey=20929e54`)
//         .then(res => setMovie(res.data.Search))


//         event.preventDefault()

//         setState('')

//     }

//   return (
//    <>
    
//         <form action="" onSubmit={handleSubmit}>
//             <input type="text" placeholder='Enter Here' value={state} onChange={handleChange}/>
//             <button type='submit'>Search</button>
//         </form>

//         <table className='table table-bordered table-info table-striped border-dark'>
//             <thead className='table-danger border-dark'>
//                 <tr>    
//                     <th>SuperHero ID :</th>
//                     <th>SuperHero Name :</th>
//                     <th>SuperHero poster :</th>           
//                 </tr>
//             </thead>
//             <tbody>

            
//                     {
//                         movie.map((user)=>{
//                             return <tr>
//                                 <th>{user.Title}</th>
//                                 <th>{user.Year}</th>
//                                 <th><img src={user.Poster} alt="something wrong" /></th>
//                             </tr>


                          

//                         })
//                     }
            
            

//             </tbody>
//         </table>


   
//    </>
//   )
// }

// export default MovieTravia

import axios from 'axios'
import React, { useEffect } from 'react'

    // useEffect(()=>{
    //     axios.get("https://www.omdbapi.com/?i=tt3896198&apikey=762ba6fc")
    //     .then(res=>console.log(res))
    // },[])
const Movie = () => {
  return (
    <>
        <h1>Movie</h1>

    </>
)
}

export default Movie