import { useContext, useEffect, useState } from 'react'
import CorazonFav from '../components/CorazonFav'
import { PetsContext } from '../context/PetsContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ENDPOINT } from '../config/constants.js'
import Swal from 'sweetalert2'

const Tienda = () => {
  const { productos, cambiarFavorito, setearFavoritos, select, cambiarSelect, usuario, agregarCarro, cambiarProductos, alertaSweet } = useContext(PetsContext)
  const [loading, setLoading] = useState(true)
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

  useEffect(() => {
    if (window.sessionStorage.getItem('favoritos')) {
      const arregloTemporalFavoritos = JSON.parse(window.sessionStorage.getItem('favoritos'))
      setearFavoritos(arregloTemporalFavoritos)
    }
  }, [])

  // función que muestra los productos distintos a los que el usuario creo
  const usuarioLogeado = JSON.parse(window.sessionStorage.getItem('usuario'))
  const getData = () => {
    axios.get(ENDPOINT.home)
      .then(({ data }) => {
        cambiarProductos(data)
        setLoading(false)
      })
      .catch(({ response: { data } }) => {
        console.log(data.message)
        alertaSweet('error', `${data.message}`, '#FF0000')
      })
  }

  useEffect(() => {
    getData()
  }, [])

  const mostrarSpinner = () => {
    return (
      <div className='pt-5 text-center'>
        <div className='spinner-border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>

    )
  }

  const sinPublicaciones = () => {
    return (
      <h1 className='text-center py-5' style={{ color: 'white' }}>Aún no existe ninguna publicacion <i className='fa-solid fa-face-sad-tear fa-xl ps-3' /></h1>
    )
  }

  const existenCards = () => {
    return (
      productos.length !== 0 ? mostrarCards() : sinPublicaciones()
    )
  }

  const mostrarCards = () => {
    return (
      <div className='divProductosTienda'>
        {productosOrdenados?.map((p) =>
          <div className='card' key={p.id}>
            <div className='text-end pe-3'>
              <button className='buttonCorazon' onClick={() => cambiosFavorito(p.id)}>
                <CorazonFav id={p.id} />
              </button>
            </div>
            <img src={p.imagen} className='card-img-top' alt='disfraz-salchicha' />
            <div className='card-body'>
              <h5 className='card-title'>{p.nombre}</h5>
              <p className='precioCardHome'>${p.precio}</p>
            </div>
            <div>
              <button className='botonEstilos' onClick={() => irDetalleProducto(p.id)}>Ver detalle</button>
              <br />
              <button className='buttonAgregar' onClick={() => botonAgregar(p.id)}> <i className='fa-solid fa-cart-shopping fa-lg' /></button>
            </div>
          </div>
        )}
      </div>

    )
  }

  let productosTienda = [...productos]
  if (usuario !== null) productosTienda = [...productos].filter((p) => p.id_usuarios !== usuarioLogeado.id)

  let productosOrdenados = [...productosTienda]
  if (select === 'az') productosOrdenados = [...productosTienda].sort((a, b) => a.nombre.localeCompare(b.nombre))
  if (select === 'za') productosOrdenados = [...productosTienda].sort((a, b) => b.nombre.localeCompare(a.nombre))
  if (select === 'menor') productosOrdenados = [...productosTienda].sort((a, b) => a.precio - b.precio)
  if (select === 'mayor') productosOrdenados = [...productosTienda].sort((a, b) => b.precio - a.precio)

  return (
    <main className='d-flex align-items-start'>
      <div className='divTienda'>
        <h1 className='text-white text-center pt-4'>Tienda <i className='fa-solid fa-bag-shopping ps-2' /></h1>
        <div className='divSelectorTienda'>
          <select className='form-select' value={select} onChange={cambiarSelect}>
            <option value='az'>Ordenar A-Z</option>
            <option value='za'>Ordenar Z-A</option>
            <option value='menor'>Precio Menor a Mayor</option>
            <option value='mayor'>Precio Mayor a Menor</option>
          </select>
        </div>
        {loading ? mostrarSpinner() : existenCards()}
      </div>
    </main>
  )
}

export default Tienda
