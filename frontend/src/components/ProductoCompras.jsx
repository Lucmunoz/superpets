import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { PetsContext } from '../context/PetsContext'
import moment from 'moment'

const ProductoCompras = (compra) => {
  const { comprasRealizadas } = useContext(PetsContext)
  const navigate = useNavigate()

  const goToPublicacion = (id) => {
    navigate(`/tienda/producto/${id}`)
  }

  return (
    <div>
      {comprasRealizadas.map((compra) => {
        return (
          <div key={compra.idCompra} className='pt-3 mb-5 pb-3 container bg-light'>
            <div className='container border-bottom border-2 pb-2 p-0'>
              <div className='d-flex flex-column flex-sm-row text-center'>
                <div className='d-flex gap-4 justify-content-center'>
                  <div className='d-lg-flex flex-column flex-lg-row text-center align-items-center gap-1'><h6 className='p-0 m-0'>Fecha de Compra:</h6><span className='fw-light fst-italic ms-auto'>{moment(compra.fecha).format('MM/DD/YYYY')}</span></div>
                  <div className='d-lg-flex flex-column flex-lg-row text-center align-items-center gap-1'><h6 className='p-0 m-0'>Total de la compra:</h6> <span className='fw-light fst-italic'>${(compra.total_boleta / 1000).toFixed(3)}</span></div>
                </div>
              </div>
            </div>
            <div className='pt-3'>
              {compra.detalle.map((producto) => {
                return (
                  <div className='container-fluid p-0 pb-md-3' key={compra.idCompra + '-' + producto.id}>
                    <div className='row p-0 m-0'>
                      <div className='col-md-2 p-0 d-flex justify-content-center'>
                        <div className='text-center d-md-none'><img className='d-lg-none' style={{ height: '150px', padding: '10px' }} src={producto.imagen} alt='MDN' /></div>
                        <div className='text-center d-none d-md-flex'><img className='' style={{ height: '75px' }} src={producto.imagen} alt='MDN' /></div>
                      </div>
                      <div className='d-flex flex-column text-center text-md-start justify-content-center col-md-8 col-lg-4 p-0'>
                        <h6>{producto.nombre}</h6>
                        <div className='fw-light fst-italic text-truncate'>{producto.descripcion}</div>
                      </div>
                      <div className='container-fluid d-flex p-0 m-0 align-items-center justify-content-center col-md-2 col-lg-6 col-xxl-6'>
                        <div className='container-fluid d-flex justify-content-center p-0'>
                          <div className='d-flex flex-row gap-2 ms-md-auto align-items-center'>
                            <h6 className='m-0 p-0'>Cantidad:</h6>
                            <span className='m-0 p-0'>{producto.cantidad}</span>
                          </div>
                          <div className='d-none d-lg-flex btn-sm gap-2 p-0 ms-auto pe-lg-4'>
                            <div><button type='button' className='btn btn-secondary btn-sm p-1 px-2' onClick={() => goToPublicacion(producto.id_productos)}> Ver Producto</button></div>
                          </div>
                        </div>
                      </div>
                      <div className='d-flex d-lg-none btn-sm gap-2 p-0 pt-2 pt-lg-0 align-items-center justify-content-center justify-content-lg-end col-12 col-lg-4 ms-auto'>
                        <div><button type='button' className='btn btn-secondary btn-sm p-1 px-1' onClick={() => goToPublicacion(producto.id_productos)}>Ver producto</button></div>
                      </div>
                    </div>
                    <hr />
                  </div>
                )
              })}
            </div>
          </div>
        )
      })}
    </div>

  )
}

export default ProductoCompras
