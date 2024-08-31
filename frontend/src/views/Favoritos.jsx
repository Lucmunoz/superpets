import { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { PetsContext } from '../context/PetsContext'
import CorazonFav from '../components/CorazonFav'

const Favoritos = () => {
  const { agregarCarro, productosFavoritos, cambiarFavorito } = useContext(PetsContext)
  const navigate = useNavigate()
  const irDetalleProducto = (id) => {
    navigate(`/tienda/producto/${id}`)
  }

  useEffect(() => {
    if (window.sessionStorage.getItem('token')) { // <----- ELIMINAR
      // if (!window.sessionStorage.getItem('token')) {
      navigate('/ingresar')
    }
  }, [])

  return (
    <main className='d-flex align-items-center'>
      <div className='container-fluid col-11 col-xl-10 col-xxl-9 my-3 '>
        {productosFavoritos.length === 0
          ? <h1 className='text-center pb-3' style={{ color: 'white' }}>Aún no has agregado favoritos <i className='fa-solid fa-face-sad-tear fa-xl ps-3' /></h1>
          : <h1 className='text-center pb-3' style={{ color: 'white' }}>Mis Productos Favoritos <i className='fa-solid fa-heart' /></h1>}
        <div className={`container-fluid col-11 col-xl-10 col-xxl-9 p-4 rounded-3 ${productosFavoritos.length >= 1 ? 'bg-white' : ''}`}>
          <div className='d-flex flex-column  p-3 rounded-3'>
            {productosFavoritos.map((producto) => {
              return (
                <div className='container-fluid bg-light p-3' key={producto.id}>
                  <div className='row'>
                    <div className='col-3 col-sm-2 p-0'>
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
                      <button className='buttonCard' onClick={() => irDetalleProducto(producto.id)}>Ver detalle</button>
                      <button className='buttonAgregar' onClick={() => agregarCarro(producto.id)}> <i className='fa-solid fa-cart-shopping fa-lg' /></button>
                      <button className='buttonCorazon' onClick={() => cambiarFavorito(producto.id)}>
                        <CorazonFav
                          filled={!!producto.isFavorite}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </main>

  )
}

export default Favoritos
