import { useContext, useEffect, useState } from 'react'
import { PetsContext } from '../context/PetsContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ENDPOINT } from '../config/constants.js'

const Card = () => {
  const { productos, usuario } = useContext(PetsContext)
  const navigate = useNavigate()
  const irDetalleProducto = (id) => {
    navigate(`/tienda/producto/${id}`)
  }

  // función que trae todos los productos del backend
  const [productosData, setProductosData] = useState([])
  const getData = () => {
    axios.get(ENDPOINT.home)
      .then(({ data }) => {
        setProductosData(data)
      })
      .catch(({ response: { data } }) => {
        console.log(data.message)
        window.alert(`${data.message}`)
      })
  }

  useEffect(() => {
    getData()
  }, [productos])

  // función que muestra los productos distintos a los que el usuario creo
  const usuarioLogeado = JSON.parse(window.sessionStorage.getItem('usuario'))

  let productosTienda = [...productos]
  if (usuario !== null) productosTienda = [...productos].filter((p) => p.id_usuarios !== usuarioLogeado.id)

  const sinPublicaciones = () => { return (<h1 className='text-center pb-3' style={{ color: 'white' }}>Aún no existe ninguna publicacion <i className='fa-solid fa-face-sad-tear fa-xl ps-3' /></h1>) }

  const mostrarPublicaciones = () => {
    return (
      productosTienda.slice(0, 3).map((p) =>
        <div className='card' key={p.id}>
          <img src={p.imagen} className='card-img-top' alt='disfraz-salchicha' />
          <div className='card-body'>
            <h5 className='card-title'>{p.nombre}</h5>
            <p className='precioCardHome'>${p.precio}</p>
          </div>
          <div>
            <button className='botonEstilos' onClick={() => irDetalleProducto(p.id)}>Ver detalle</button>
          </div>
        </div>
      )
    )
  }

  return (
    <>
      {productosTienda.length !== 0 ? mostrarPublicaciones() : sinPublicaciones()}
    </>
  )
}

export default Card
