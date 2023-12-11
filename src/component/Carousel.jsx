import React from 'react'

const Carousel = (props) => {
  return (
    <div>
<div>
        <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active c-item" style={{  height:"470px", objectFit: "cover"  }}>
      <img src={props.img1} className="d-block c-img  w-100 h-10" style={{  height:"100%", objectFit: "cover" ,filter:" brightness(0.99)" }} alt="..."/>
    </div>

    </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
      </div>
    </div>
  )
}

export default Carousel
