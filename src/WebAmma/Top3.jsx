import React from 'react'

const Top3 = () => {
    return (
        <>
            <div >
                <ul style={{display:"flex",justifyContent:"space-between"}}>
                    <button className='btn btn-dark'>Home</button>
                    <button className='btn btn-dark'>SIGNATURE & PASTRIES</button>
                    <button className='btn btn-dark'>EGGLESS CAKES</button>
                    <button className='btn btn-dark'>THEME CAKES</button>
                    <button className='btn btn-dark'>DREAM CAKE</button>
                    <button className='btn btn-dark'>COOKIES N CHOCOLATES</button>
                    <button className='btn btn-dark'>BREADS / SNACKS</button>
                    <button className='btn btn-dark'>PARTY ITEMS</button>
                </ul>
            </div>
        </>
    )
}

export default Top3