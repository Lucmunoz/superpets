import { useContext, useEffect } from 'react'
import CorazonFav from '../components/CorazonFav'
import { PetsContext } from '../context/PetsContext'
import { useParams, useNavigate } from 'react-router-dom'

// import axios from 'axios'
// import { ENDPOINT } from '../config/constants.js'

const Producto = () => {
  const { id } = useParams()
  const { usuario, productos, cambiarFavorito, setearFavoritos, agregarCarro } = useContext(PetsContext)
  const navigate = useNavigate()

  const cambiosFavorito = (id) => {
    if (!window.sessionStorage.getItem('usuario')) {
      window.alert('Para agregar favoritos debes iniciar sesión, te redirigiremos!')
      return navigate('/ingresar')
    }
    cambiarFavorito(id)
  }

  useEffect(() => {
    if (window.sessionStorage.getItem('favoritos')) {
      const arregloTemporalFavoritos = JSON.parse(window.sessionStorage.getItem('favoritos'))
      setearFavoritos(arregloTemporalFavoritos)
    }
  }, [])

  let productosTienda = [...productos]
  if (usuario !== null) productosTienda = [...productos].filter((p) => p.id_usuarios !== usuario.id_usuarios)
  // console.log(productosTienda, 'prod tienda')

  const producto = [...productosTienda].filter((p) => p.id === (id))
  // console.log(producto)

  return (
    <main className='mainProducto'>
      {producto?.map((p) =>
        <div className='divDetalleProducto' key={p.id}>
          <div>
            <img src={p.imagen} alt='producto-detalle' />
          </div>
          <div style={{ width: '100%' }}>
            <div className='divTextProducto'>
              <h1 className='m-0'>{p.nombre}</h1>
              <p className='pt-3'>{p.descripcion}</p>
              <span style={{ fontSize: '20px', color: '#ED5C01', fontWeight: '700' }}>${p.precio}</span>
            </div>
            <div style={{ textAlign: 'center' }}>
              <button type='button' className='botonEstilos' onClick={() => agregarCarro(p.id)}>Agregar al carro</button>
              <button type='button' className='botonEstilos' onClick={() => navigate(-1)}>Regresar </button>
              <button className='buttonCorazon' onClick={() => cambiosFavorito(p.id)}>
                <CorazonFav id={p.id} />
              </button>
            </div>
          </div>
        </div>)}
    </main>
  )
}

export default Producto
