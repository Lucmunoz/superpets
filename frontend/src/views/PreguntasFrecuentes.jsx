const PreguntasFrecuentes = () => {
  return (
    <main className='d-flex align-items-centerp'>
      <div className='container-fluid col-11 col-xl-10 col-xxl-9 my-3 bg-white py-2 bordesRed'>
        <div className='container-fluid d-flex flex-column align-items-center col-md-9'>
          <div>
            <h2 className='text-center pt-4'>Preguntas frecuentes <i class='fa-solid fa-question' /></h2>
          </div>
          <div className='pb-2'>
            <img className='img-fluid' src='/faq.jpg' alt='MDN' />
          </div>
          <div className='text-center'>
            <p>
              <span className='fw-bold'>Hola!</span> Para nosotros, lo mas importante es entregar <span className='fw-bold'>seguridad y confianza</span> mientras nos visites.
              Es por ello que habilitamos esta sección de preguntas frecuentes que de seguro te ayudarán a aclarar muchas dudas!
            </p>
            <p>
              De igual manera, siempre tienes la posibilidad de escribirnos al <a href='mailto:correo@ejemplo.com' style={{ color: '#ED5C01', fontWeight: '500', textDecoration: 'none' }}>mail</a> o hablarnos por<a style={{ color: '#ED5C01', fontWeight: '500', textDecoration: 'none' }} href='https://www.whatsapp.com/' target='_blank' rel='noreferrer'> whatsapp!</a>
            </p>
            <p><span className='fw-bold'>Puedes hacerlo con total confianza!</span></p>
          </div>

          <div className='container-fluid py-3 '>
            <div className='accordion accordion-flush  ' id='accordionFlushExample'>
              <div className='accordion-item'>
                <h2 className='accordion-header' id='flush-headingOne'>
                  <button className='accordion-button collapsed ' type='button' data-bs-toggle='collapse' data-bs-target='#flush-collapseOne' aria-expanded='false' aria-controls='flush-collapseOne'>
                    <h4 className='p-0 m-0'>Quienes somos</h4>
                  </button>
                </h2>
                <div id='flush-collapseOne' className='accordion-collapse collapse' aria-labelledby='flush-headingOne' data-bs-parent='#accordionFlushExample'>
                  <div className='accordion-body'>Placeholder content for this accordion, which is intended to demonstrate the <code /> class. This is the first item's accordion body.</div>
                </div>
              </div>

              <div className='accordion-item '>
                <h2 className='accordion-header' id='flush-headingTwo'>
                  <button className='accordion-button collapsed  ' type='button' data-bs-toggle='collapse' data-bs-target='#flush-collapseTwo' aria-expanded='false' aria-controls='flush-collapseTwo'>
                    <h4 className='p-0 m-0'>Como comprar</h4>
                  </button>
                </h2>
                <div id='flush-collapseTwo' className='accordion-collapse collapse' aria-labelledby='flush-headingTwo' data-bs-parent='#accordionFlushExample'>
                  <div className='accordion-body'>Placeholder content for this accordion, which is intended to demonstrate the <code /> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                </div>
              </div>

              <div className='accordion-item'>
                <h2 className='accordion-header' id='flush-headingThree'>
                  <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#flush-collapseThree' aria-expanded='false' aria-controls='flush-collapseThree'>
                    <h4 className='p-0 m-0'>Formas de pago</h4>
                  </button>
                </h2>
                <div id='flush-collapseThree' className='accordion-collapse collapse' aria-labelledby='flush-headingThree' data-bs-parent='#accordionFlushExample'>
                  <div className='accordion-body'>Placeholder content for this accordion, which is intended to demonstrate the <code /> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>

              <div className='accordion-item'>
                <h2 className='accordion-header' id='flush-headingFour'>
                  <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#flush-collapseFour' aria-expanded='false' aria-controls='flush-collapseFour'>
                    <h4 className='p-0 m-0'>Envíos cambios y devoluciones</h4>
                  </button>
                </h2>
                <div id='flush-collapseFour' className='accordion-collapse collapse' aria-labelledby='flush-headingFour' data-bs-parent='#accordionFlushExample'>
                  <div className='accordion-body'>Placeholder content for this accordion, which is intended to demonstrate the <code /> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default PreguntasFrecuentes
