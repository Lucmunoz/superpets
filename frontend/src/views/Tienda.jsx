import { useContext, useEffect } from 'react'
import CorazonFav from '../components/CorazonFav'
import { PetsContext } from '../context/PetsContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ENDPOINT } from '../config/constants.js'

const Tienda = () => {
  const { productos, cambiarFavorito, setearFavoritos, select, cambiarSelect, usuario, agregarCarro, cambiarProductos } = useContext(PetsContext)
  const navigate = useNavigate()
  const irDetalleProducto = (id) => {
    navigate(`/tienda/producto/${id}`)
  }

  const cambiosFavorito = (id) => {
    if (!window.sessionStorage.getItem('usuario')) {
      window.alert('Para agregar favoritos debes iniciar sesión, te redirigiremos!')
      return navigate('/ingresar')
    }
    cambiarFavorito(id)
  }

  const botonAgregar = (id) => {
    if (!window.sessionStorage.getItem('usuario')) {
      window.alert('Para agregar productos debes iniciar sesión, te redirigiremos!')
      return navigate('/ingresar')
    }
    agregarCarro(id)
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
      })
      .catch(({ response: { data } }) => {
        console.log(data.message)
        window.alert(`${data.message}`)
      })
  }

  useEffect(() => {
    getData()
  }, [])

  let productosTienda = [...productos]
  if (usuario !== null) productosTienda = [...productos].filter((p) => p.id_usuarios !== usuarioLogeado.id)
  // console.log(productosTienda, 'prod tienda')

  let productosOrdenados = [...productosTienda]
  if (select === 'az') productosOrdenados = [...productosTienda].sort((a, b) => a.nombre.localeCompare(b.nombre))
  if (select === 'za') productosOrdenados = [...productosTienda].sort((a, b) => b.nombre.localeCompare(a.nombre))
  if (select === 'menor') productosOrdenados = [...productosTienda].sort((a, b) => a.precio - b.precio)
  if (select === 'mayor') productosOrdenados = [...productosTienda].sort((a, b) => b.precio - a.precio)
  // console.log(productosOrdenados, 'prod.ordenados')

  return (
    <main>
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
      </div>
    </main>
  )
}

export default Tienda
