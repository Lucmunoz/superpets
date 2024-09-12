import { useContext, useEffect } from 'react'
import CorazonFav from '../components/CorazonFav'
import { PetsContext } from '../context/PetsContext'
import { useParams, useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

// import axios from 'axios'
// import { ENDPOINT } from '../config/constants.js'

const Producto = () => {
  const { id } = useParams()
  const { usuario, productos, cambiarFavorito, setearFavoritos, agregarCarro } = useContext(PetsContext)
  const navigate = useNavigate()
  const sweetAlert2 = (nombre) => {
    Swal.fire({
      title: `Debes iniciar sesión para agregar ${nombre}`,
      text: '¿Te llevamos?',
      showDenyButton: true,
      confirmButtonText: 'Sí, llevame a iniciar sesión',
      denyButtonText: 'Quiero quedarme aquí',
      confirmButtonColor: '#062D3D',
      denyButtonColor: '#ED5C01',
      customClass: 'alertaSweetEstilos'
    }).then((result) => {
      result.isConfirmed && navigate('/ingresar')
    })
  }

  const cambiosFavorito = (id) => {
    if (!window.sessionStorage.getItem('usuario')) {
      sweetAlert2('favoritos')
    } else {
      cambiarFavorito(id)
    }
  }

  const botonAgregar = (id) => {
    if (!window.sessionStorage.getItem('usuario')) {
      sweetAlert2('productos')
    } else {
      agregarCarro(id)
    }
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
        <div key={p.id}>
          <div className='divContainerProducto'>
            <div style={{ display: 'flex', justifyContent: 'end', padding: '10px 10px 0 0' }}>
              <button className='buttonCorazon' onClick={() => cambiosFavorito(p.id)}>
                <CorazonFav id={p.id} />
              </button>
            </div>
            <div className='divDetalleProducto'>
              <div>
                <img src={p.imagen} alt='producto-detalle' />
              </div>
              <div style={{ width: '100%' }}>
                <div className='divTextProducto'>
                  <h1 className='m-0'>{p.nombre}</h1>
                  <p className='pt-3'>{p.descripcion}</p>
                  <span style={{ fontSize: '20px', color: '#ED5C01', fontWeight: '700' }}>${p.precio}</span>
                </div>
                <div className='d-flex flex-column align-items-center justify-content-sm-center flex-sm-row gap-2' style={{ textAlign: 'center' }}>
                  <button type='button' className='botonEstilos' onClick={() => navigate(-1)}>Regresar </button>
                  <button type='button' className='botonEstilos' onClick={() => botonAgregar(p.id)}>Agregar al carro</button>
                </div>
              </div>
            </div>
          </div>
        </div>)}
    </main>
  )
}

export default Producto
