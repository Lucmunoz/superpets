import { useEffect, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { PetsContext } from '../context/PetsContext'
import CorazonFav from '../components/CorazonFav'

const Favoritos = () => {
  const { agregarCarro, productosFavoritos, cambiarFavorito, setearFavoritos } = useContext(PetsContext)
  const [cargando, setCargando] = useState(true)
  const navigate = useNavigate()
  const irDetalleProducto = (id) => {
    navigate(`/tienda/producto/${id}`)
  }

  const mostrarSpinner = () => {
    <div class='spinner-border' role='status'>
      <span class='visually-hidden'>Loading...</span>
    </div>
  }

  const getData = () => { // Reviso si mi session activa tiene un arreglo de favoritos ya creado.
    if (window.sessionStorage.getItem('favoritos')) {
      const arregloTemporal = JSON.parse(window.sessionStorage.getItem('favoritos'))
      setearFavoritos(arregloTemporal)
    }
    setCargando(false)
  }

  const mostrarFavoritos = () => {
    return (
      <>
        {productosFavoritos.length !== 0 ? hayFavoritos() : sinFavoritos()}
      </>
    )
  }

  const hayFavoritos = () => {
    return (
      <div className='container-fluid bg-white col-11 bordesRed p-2 px-md-4' style={{ maxWidth: '1020px' }}>
        <h1 className='m-0 py-3 fs-2 text-center'>Mis Productos Favoritos <i className='fa-solid fa-heart' /></h1>
        <div className='d-flex flex-column gap-1 gap-md-2 pb-4'>
          {productosFavoritos.map((producto) => {
            return (
              <div key={producto.id}>
                <div className='d-flex flex-column flex-md-row gap-md-5 bg-light p-2'>
                  <div className='d-flex text-truncate gap-2'>
                    <img className='' style={{ height: '70px' }} src={producto.imagen} alt='MDN' />
                    <div className='p-0 text-truncate d-flex flex-column justify-content-center'>
                      <h6 className='p-0 m-0'>{producto.nombre}</h6>
                      <p className='text-truncate p-0 m-0'>{producto.descripcion}</p>
                    </div>
                  </div>
                  <div className=' p-0 py-2 d-flex gap-2 justify-content-center align-items-center'>
                    <button className='botonEstilos' onClick={() => irDetalleProducto(producto.id)}>Ver detalle</button>
                    <button className='buttonAgregar' onClick={() => agregarCarro(producto.id)}> <i className='fa-solid fa-cart-shopping fa-lg' /></button>
                    <button className='buttonCorazon' onClick={() => cambiarFavorito(producto.id)}>
                      <CorazonFav id={producto.id} />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    )
  }

  const sinFavoritos = () => { return (<h1 className='text-center pb-3' style={{ color: 'white' }}>Aún no has agregado favoritos <i className='fa-solid fa-face-sad-tear fa-xl ps-3' /></h1>) }

  useEffect(() => {
    // Código para verificar existencia de token. De lo contrario, redirigir a ingresar
    if (!window.sessionStorage.getItem('token')) {
      navigate('/ingresar')
    } else {
      getData()
    }
    /* *Reemplazar codigo cuando se realice backend***/
  }, [])

  return (
    <main className=''>
      {cargando ? mostrarSpinner() : mostrarFavoritos()}
    </main>
  )
}

export default Favoritos
