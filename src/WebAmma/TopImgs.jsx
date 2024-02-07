import React from 'react'

const TopImgs = (props) => {
    console.log(props)
    let {url,h}=props
    return (
        <>
            <div className="card" style={{width:"18rem" ,display:"flex"}}>
                <img src={url} class="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title head">
                            {h}
                        </h5>
                    </div>
            </div>
        </>
    )
}

export default TopImgs


