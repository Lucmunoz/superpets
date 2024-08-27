const ProductoFavorito = (producto) => {
  return (
    <div className='container-fluid bg-light p-0'  key={producto.id}>
      <div className='row'>
        <div className='col-3 col-sm-2 p-0 '>
          <div className='text-center'>
            <img className='' style={{ height: '70px' }} src={producto.imagen} alt='MDN' />
          </div>
        </div>
        <div className='col-9 col-lg-5 col-xl-6 d-flex flex-column justify-content-center p-0'>
          <h6 className='p-0 m-0'>{producto.nombre}</h6>
          <div className='text-truncate fst-italic fw-light text-muted'>
            {producto.descripcion}
          </div>
        </div>
        <div className='d-flex col-lg-4 gap-2 justify-content-center align-items-center p-0 py-2 ms-auto'>
          <button type='button' className='btn btn-sm btn-secondary'>Ver producto</button>
          <button type='button' className='btn btn-sm btn-danger'>Añadir al carro</button>
          <button type='button' className='btn btn-sm btn-danger'>Eliminar</button>
        </div>
      </div>

    </div>
  )
}

export default ProductoFavorito
