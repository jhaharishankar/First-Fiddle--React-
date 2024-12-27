import React from 'react'

function Slider() {
  return (
    <>
      {/*Home slider div start */}
      <div class="carousel slide" data-bs-ride="carousel" id="s">

        <div class="carousel-indicators">
          <button type="button" data-bs-target="#s" data-bs-slide-to="0" class="active"></button>
          <button type="button" data-bs-target="#s" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#s" data-bs-slide-to="2"></button>
        </div>
        {/* carousel-indicators end */}

        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="4000">
            <img src="https://pn-paul.netlify.app/image/slider1.jpg" alt="slider image" class="w-100" />
          </div>
          <div class="carousel-item" data-bs-interval="4000">
            <img src="https://pn-paul.netlify.app/image/slider22.jpg" alt="slider image" class="w-100" />
          </div>
          <div class="carousel-item" data-bs-interval="4000">
            <img src="https://pn-paul.netlify.app/image/slidwr33.jpg" alt="slider image" class="w-100" />
          </div>
        </div>
        {/* carousel-inner end */}

        <button class="carousel-control-prev" type="button" data-bs-target="#s" data-bs-slide="prev">
          <span class="carousel-control-prev-icon"></span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#s" data-bs-slide="next">
          <span class="carousel-control-next-icon"></span>
        </button>

      </div>
      {/*Home slider div end */}
    </>
  )
}

export default Slider
