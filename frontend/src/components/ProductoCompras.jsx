const ProductoCompras = (compra) => {
  return (
    <div key={compra.idCompra} className='p-0 pb-5 container'>
      <div className='container border-bottom border-2 pb-2 p-0'>
        {/* >992 */}
        <div className='row align-items-end d-none d-lg-flex'>
          <div className='col-6'>
            <h6 className='p-0 m-0'>Fecha de Compra: <span className='fw-light fst-italic'>{compra.fecha}</span></h6>
          </div>
          <div className='col-4 text-end'>
            <h6 className='p-0 m-0'>Total de la compra: <span className='fw-light fst-italic'>${(compra.total / 1000).toFixed(3)}</span></h6>
          </div>
          <div className='col-2 text-end'>
            <div>
              <button type='button' className='btn btn-danger p-1 px-2'>Ver detalle</button>
            </div>
          </div>
        </div>

        {/* <992 */}
        <div className='d-flex d-lg-none'>
          <div>
            <h6 className='p-0 m-0'>Fecha de Compra: <span className='fw-light fst-italic'>{compra.fecha}</span></h6>
            <h6 className='p-0 m-0'>Total de la compra: <span className='fw-light fst-italic'>${(compra.total / 1000).toFixed(3)}</span></h6>
          </div>
          <div className='ms-auto'>
            <button type='button' className='btn btn-danger p-1 px-2'>Ver detalle</button>
          </div>
        </div>

      </div>
      {compra.productos.map((producto) => {
        return (
          <div className='container-fluid p-0' key={compra.idCompra + '-' + producto.id}>
            <div class='row d-flex align-items-center container-fluid p-0 m-0'>
              <div class='col-lg-1 col-5 p-0 d-flex ms-auto me-auto'>
                <img className='img-fluid text-center' src={producto.imagen} alt='MDN' />
              </div>
              <div class='col-xxl-6 col-xl-4 col-lg-3 p-0 ps-2 d-flex flex-column text-md-center text-lg-start '>
                <h6>{producto.nombre}</h6>
                <div className='fw-light fst-italic text-truncate '>{producto.descripcion.substring(0, 70) + '...'}</div>
              </div>
              <div class='col-lg-2 container p-0'>
                <div class='row align-items-center'>
                  <div className='ms-auto col-lg-8 col-6 p-0 text-end pe-1'><h6 className='m-0'>Cantidad:</h6></div>
                  <div className='ms-auto col-lg-4 col-6 p-0'>{producto.cantidad}</div>
                </div>
              </div>
              <div class='col-xl-4 col-xxl-3 col-lg-5 col-12 p-0 d-flex gap-2 align-items-center justify-content-lg-end justify-content-center'>
                <div><button type='button' className='btn btn-secondary p-1 px-2'>Ver producto</button></div>
                <div><button type='button' className='btn btn-danger p-1 px-2'>Agregar al carro</button></div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default ProductoCompras
