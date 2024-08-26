const PublicacionListada = (publicacion) => {
  return (
    <div className='container-fluid border-bottom px-4 m-0' key={publicacion.id}>
      <div className='d-flex gap-4 align-items-center py-2'>
        <div className='col-1 text-center'>
          <img style={{ height: '70px' }} src={publicacion.imagen} alt='MDN' />
        </div>
        <div className='d-flex flex-column text-start col-6'>
          <h6>{publicacion.nombre}</h6>
          <div className='fw-light fst-italic'>{publicacion.descripcion.substring(0, 70) + '...'}</div>
        </div>
        <div className='d-flex flex-column text-start ms-auto'>
          <h6>Precio</h6>
          <div className='fw-light fst-italic'>${(publicacion.precio / 1000).toFixed(3)}</div>
        </div>
        <div className='d-flex flex-row gap-4 ms-auto justify-content-center'>
          <button type='button' className='btn btn-secondary'>Ver publicacion</button>
          <button type='button' className='btn btn-danger'>Eliminar publicacion</button>
        </div>
      </div>
    </div>
  )
}

export default PublicacionListada
