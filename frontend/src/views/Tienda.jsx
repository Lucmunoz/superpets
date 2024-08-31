import { useContext, useEffect, useState } from 'react'
import CorazonFav from '../components/CorazonFav'
import { PetsContext } from '../context/PetsContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ENDPOINT } from '../config/constants.js'

const Tienda = () => {
  const { productos, cambiarFavorito, select, cambiarSelect, usuario, agregarCarro, quitarCarro } = useContext(PetsContext)
  const navigate = useNavigate()
  const irDetalleProducto = (id) => {
    navigate(`/tienda/producto/${id}`)
  }

  // función que trae todos los productos comentar después
  // const [productosDataTienda, setProductosDataTienda] = useState([])
  // const getData = () => {
  //   axios.get(ENDPOINT.tienda)
  //     .then(({ data }) => {
  //       setProductosDataTienda(data)
  //     })
  //     .catch(({ response: { data } }) => {
  //       console.log(data.message)
  //       window.alert(`${data.message}`)
  //     })
  // }

  // useEffect(() => {
  //   getData()
  // }, [])

  // función que muestra los productos distintos a los que el usuario creo
  let productosTienda = [...productos]
  if (usuario !== null) productosTienda = [...productos].filter((p) => p.id_usuarios !== usuario.id_usuarios)
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
                <button className='buttonCorazon' onClick={() => cambiarFavorito(p.id)}>
                  <CorazonFav
                    filled={!!p.isFavorite}
                  />
                </button>
              </div>
              <img src={p.imagen} className='card-img-top' alt='disfraz-salchicha' />
              <div className='card-body'>
                <h5 className='card-title'>{p.nombre}</h5>
                <p className='precioCardHome'>${p.precio}</p>
              </div>
              <div>
                <button className='buttonCard' onClick={() => irDetalleProducto(p.id)}>Ver detalle</button>
                <br />
                <button className='buttonAgregar' onClick={() => agregarCarro(p.id)}> <i className='fa-solid fa-cart-shopping fa-lg' /></button>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default Tienda
