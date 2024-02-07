import React from 'react'

const Home = () => {
  return (
    <>

      <div id="carouselExample" class="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://static.wixstatic.com/media/c29b8c_e8c0feace30d4ed2b9c7bc3383bf881b~mv2.jpg/v1/fill/w_1225,h_589,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/c29b8c_e8c0feace30d4ed2b9c7bc3383bf881b~mv2.jpg" class="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://static.wixstatic.com/media/ebe07d_8a840d9ade4d407bab1968512d142262~mv2.jpg/v1/fill/w_1225,h_589,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ebe07d_8a840d9ade4d407bab1968512d142262~mv2.jpg" class="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src="https://static.wixstatic.com/media/ebe07d_05e25039d95d4648a806ec69896cf325~mv2.jpg/v1/fill/w_1225,h_589,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/ebe07d_05e25039d95d4648a806ec69896cf325~mv2.jpg" class="d-block w-100" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default Home