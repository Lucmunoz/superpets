const ProductoFavorito = (producto) => {
  return (
    <div className='container-fluid bg-light' key={producto.id}>
      <div className='d-flex gap-3 align-items-center py-2 d-none d-lg-flex '>
        <div className='col-1 text-center'>
          <img style={{ height: '70px' }} src={producto.imagen} alt='MDN' />
        </div>
        <div className='d-flex flex-column text-start col-xxl-5 col-xl-4 col-lg-3'>
          <h6>{producto.nombre}</h6>
          <div className='fw-light fst-italic text-truncate '>{producto.descripcion.substring(0, 70) + '...'}</div>
        </div>
        <div className='d-flex flex-row gap-4 ms-auto justify-content-center'>
          <button type='button' className='btn btn-secondary'>Ver producto</button>
          <button type='button' className='btn btn-danger'>Agregar al carro</button>
          <button type='button' className='btn btn-danger'>Eliminar</button>
        </div>
      </div>
      {/* Media Query md <992px */}
      <div className='d-lg-none d-flex flex-column align-items-center py-4'>
        <div className='d-flex justify-content-center container-fluid gap-4 pb-4'>
          <div className='col-2 text-center'>
            <img style={{ height: '70px' }} src={producto.imagen} alt='MDN' />
          </div>
          <div className='col-9 text-center d-flex flex-column justify-content-center'>
            <h5 className='p-0 m-0'>{producto.nombre}</h5>
            <div className='fw-light fst-italic text-truncate '>{producto.descripcion.substring(0, 70) + '...'}</div>
          </div>
        </div>
        <div className='d-flex gap-4'>
          <button type='button' className='btn btn-secondary'>Ver producto</button>
          <button type='button' className='btn btn-danger'>Agregar al carro</button>
          <button type='button' className='btn btn-danger'>Eliminar</button>
        </div>
      </div>
    </div>
  )
}

export default ProductoFavorito
