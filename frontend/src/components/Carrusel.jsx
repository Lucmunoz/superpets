const Carrusel = () => {
  return (
    <div id='carouselExampleIndicators' className='carousel slide' data-bs-ride='carousel'>
      <div className='carousel-indicators'>
        <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='0' className='active' aria-current='true' aria-label='Slide 1' />
        <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='1' aria-label='Slide 2' />
        <button type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide-to='2' aria-label='Slide 3' />
      </div>
      <div className='carousel-inner'>
        <div className='carousel-item active' data-bs-interval='10000'>
          <img src='/banner-superpets-01.jpg' className='imgCarrusel' alt='proplan' />
          <div id='div1ImagenCarrusel' className='divCarruselImg img-fluid' />
        </div>
        <div className='carousel-item' data-bs-interval='5000'>
          <img src='/banner-superpets-02.jpg' className='imgCarrusel' alt='proplan2' />
          <div id='div2ImagenCarrusel' className='divCarruselImg img-fluid' />
        </div>
        <div className='carousel-item' data-bs-interval='5000'>
          <img src='/banner-superpets-03.jpg' className='imgCarrusel' alt='proplan3' />
          <div id='div3ImagenCarrusel' className='divCarruselImg img-fluid' />
        </div>
      </div>
      <button className='carousel-control-prev' type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='prev'>
        <span className='carousel-control-prev-icon' aria-hidden='true' />
        <span className='visually-hidden'>Previous</span>
      </button>
      <button className='carousel-control-next' type='button' data-bs-target='#carouselExampleIndicators' data-bs-slide='next'>
        <span className='carousel-control-next-icon' aria-hidden='true' />
        <span className='visually-hidden'>Next</span>
      </button>
    </div>
  )
}

export default Carrusel
