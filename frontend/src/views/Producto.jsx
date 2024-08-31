import { useContext, useState, useEffect } from 'react'
import CorazonFav from '../components/CorazonFav'
import { PetsContext } from '../context/PetsContext'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { ENDPOINT } from '../config/constants.js'

const Producto = () => {
  const { id } = useParams()
  const { usuario, productos, cambiarFavorito } = useContext(PetsContext)

  // función que trae todos los productos comentar después
  // const [productosData, setProductosData] = useState([])
  // const getData = () => {
  //   axios.get(ENDPOINT.tienda)
  //     .then(({ data }) => {
  //       setProductosData(data)
  //     })
  //     .catch(({ response: { data } }) => {
  //       console.log(data.message)
  //       window.alert(`${data.message}`)
  //     })
  // }

  // useEffect(() => {
  //   getData()
  // }, [])

  let productosTienda = [...productos]
  if (usuario !== null) productosTienda = [...productos].filter((p) => p.id_usuarios !== usuario.id_usuarios)
  console.log(productosTienda, 'prod tienda')

  const producto = [...productosTienda].filter((p) => p.id === (id))
  console.log(producto)

  return (
    <main className='mainProducto'>
      {producto?.map((p) =>
        <div className='divDetalleProducto' key={p.id}>
          <div>
            <img src={p.imagen} alt='producto-detalle' />
          </div>
          <div style={{ textAlign: 'center' }}>
            <div className='divTextProducto'>
              <h1 className='m-0'>{p.nombre}</h1>
              <p className='pt-3'>{p.descripcion}</p>
              <span style={{ fontSize: '20px', color: '#ED5C01', fontWeight: '700', margin: '0' }}>${p.precio}</span>
            </div>
            <button type='button' className='btn btn-danger'>Agregar al carro</button>
            <button className='buttonCorazon' onClick={() => cambiarFavorito(p.id)}>
              <CorazonFav
                filled={!!p.isFavorite}
              />
            </button>
          </div>
        </div>)}
    </main>
  )
}

export default Producto
