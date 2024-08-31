import { useContext, useState, useEffect } from 'react'
import CorazonFav from '../components/CorazonFav'
import { PetsContext } from '../context/PetsContext'
import axios from 'axios'
import { ENDPOINT } from '../config/constants.js'

const BuscadorVista = () => {
  const { productos, cambiarFavorito, busqueda, usuario, agregarCarro } = useContext(PetsContext)

  // función que trae todos los productos comentar después
  // const [productosData, setProductosData] = useState([])
  // const getData = () => {
  //   axios.get(ENDPOINT.home)
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

  let productosdeOtros = [...productos]
  if (usuario !== null) productosdeOtros = [...productos].filter((p) => p.id_usuarios !== usuario.id_usuarios)
  const productosFiltrados = [...productosdeOtros].filter((p) => p.nombre.trim().toLowerCase().includes(busqueda.toLowerCase()))
  console.log(productosFiltrados, 'prod filtrados')
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
                  <button className='buttonCard'>Ver detalle</button>
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

export default BuscadorVista
