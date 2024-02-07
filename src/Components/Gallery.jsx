import React from 'react'

const Gallery = (props) => {
    // console.log(props)

    let {url,h}=props
  return (
    <>
        {/* <div className="card">
            <div className="cont-img">

                <img src="/images/fav.jpg" alt="" />
            </div>
            <div className="card-body">
                <h3>Ganesh</h3>
            </div>
        </div> */}

        <div className="card">
        <div className='card-img'>
                <img src={url} alt="" />
        </div>
        <div className="card-body">
            <h3>{h}</h3>
        </div>
    </div>
    </>
  )
}

export default Gallery