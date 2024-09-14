import { useContext, useEffect } from 'react'
import CorazonFav from '../components/CorazonFav'
import { PetsContext } from '../context/PetsContext'
import axios from 'axios'
import { ENDPOINT } from '../config/constants.js'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

const BuscadorVista = () => {
  const { productos, cambiarFavorito, busqueda, usuario, agregarCarro, cambiarProductos, alertaSweet, formatearMoneda } = useContext(PetsContext)
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

  const irDetalleProducto = (id) => {
    navigate(`/tienda/producto/${id}`)
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

  const usuarioLogeado = JSON.parse(window.sessionStorage.getItem('usuario'))
  const getData = () => {
    axios.get(ENDPOINT.home)
      .then(({ data }) => {
        cambiarProductos(data)
      })
      .catch(({ response: { data } }) => {
        console.log(data.message)
        alertaSweet('error', `${data.message}`, '#FF0000')
      })
  }

  useEffect(() => {
    getData()
  }, [])

  let productosdeOtros = [...productos]
  if (usuario !== null) productosdeOtros = [...productos].filter((p) => p.id_usuarios !== usuarioLogeado.id)
  const productosFiltrados = [...productosdeOtros].filter((p) => p.nombre.trim().toLowerCase().includes(busqueda.toLowerCase()))

  return (
    <main>
      <div className='divTienda'>
        {busqueda.length === 0
          ? <h1 className='text-white text-center pt-4'>Mostrando todos los productos</h1>
          : <h1 className='text-white text-center pt-4'>Mostrando resultados de '{busqueda}'</h1>}

        <div className='divProductosTienda'>
          {productosFiltrados.length === 0
            ? <h3 className='text-white text-center'>No encontramos ningún producto que coincida con tu busqueda<i className='fa-solid fa-face-sad-tear fa-xl ps-3' /></h3>
            : productosFiltrados?.map((p) =>
              <div className='card' key={p.id}>
                <div className='text-end pe-3'>
                  <button className='buttonCorazon' onClick={() => cambiosFavorito(p.id)}>
                    <CorazonFav
                      filled={!!p.isFavorite}
                    />
                  </button>
                </div>
                <img src={p.imagen} className='card-img-top' alt='disfraz-salchicha' />
                <div className='card-body'>
                  <h5 className='card-title'>{p.nombre}</h5>
                  <p className='precioCardHome'>${formatearMoneda({ valor: p.precio })}</p>
                </div>
                <div>
                  <button className='botonEstilos' onClick={() => irDetalleProducto(p.id)}>Ver detalle</button>
                  <br />
                  <button className='buttonAgregar' onClick={() => botonAgregar(p.id)}> <i className='fa-solid fa-cart-shopping fa-lg' /></button>
                </div>
              </div>
            )}
        </div>
      </div>
    </main>
  )
}

export default BuscadorVista
