const ProductoCompras = (compra) => {
  return (
    <div key={compra.idCompra} className='pt-3 mb-5 pb-3 container bg-light'>
      <div className='container border-bottom border-2 pb-2 p-0'>
        <div className='d-md-flex flex-column flex-md-row text-center'>
          <div className='d-md-flex flex-column flex-md-row text-center align-items-center gap-4'>
            <div className='d-lg-flex flex-column flex-lg-row text-center align-items-center gap-1'><h6 className='p-0 m-0'>Fecha de Compra:</h6><span className='fw-light fst-italic ms-auto'>{compra.fecha}</span></div>
            <div className='d-lg-flex flex-column flex-lg-row text-center align-items-center gap-1'><h6 className='p-0 m-0'>Total de la compra:</h6> <span className='fw-light fst-italic'>${(compra.total / 1000).toFixed(3)}</span></div>
          </div>
          <div className='ms-auto'>
            <button type='button' className='btn btn-danger btn-sm p-1 px-2'>Ver detalle</button>
          </div>
        </div>

      </div>
      {compra.productos.map((producto) => {
        return (
          <div className='container-fluid p-0 pb-md-3' key={compra.idCompra + '-' + producto.id}>
            <div class='row p-0 m-0'>
              <div class='col-md-1 p-0'>
                <img className='img-fluid' src={producto.imagen} alt='MDN' />
              </div>
              <div class='d-flex flex-column text-center text-md-start justify-content-center col-md-9 col-lg-5'>
                <h6>{producto.nombre}</h6>
                <div className='fw-light fst-italic text-truncate'>{producto.descripcion}</div>
              </div>
              <div class='d-flex p-0 align-items-center justify-content-center col-md-2'>
                <div className='d-none'><h6 className='m-0'>Qty:</h6><p className='p-0 m-0'>{producto.cantidad}</p></div>
                <div className='d-flex align-items-center gap-1'>
                  <h6 className='m-0'>Cantidad:</h6>
                  <span className='m-0 p-0'>{producto.cantidad}</span>
                </div>
              </div>
              <div class='d-flex btn-sm gap-2 p-0 pt-2 pt-lg-0 align-items-center justify-content-center justify-content-lg-end col-12 col-lg-4 ms-auto'>
                <div><button type='button' className='btn btn-secondary btn-sm p-1 px-2'>Ver producto</button></div>
                <div><button type='button' className='btn btn-danger btn-sm p-1 px-2'>Agregar al carro</button></div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProductoCompras
