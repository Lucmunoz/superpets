import { useContext } from 'react'
import CorazonFav from '../components/CorazonFav'
import { PetsContext } from '../context/PetsContext'
import { useNavigate } from 'react-router-dom'

const Tienda = () => {
  const { productos, cambiarFavorito, select, cambiarSelect, usuario } = useContext(PetsContext)
  const navigate = useNavigate()
  const irDetalleProducto = (id) => {
    navigate(`/tienda/producto/${id}`)
  }
  // función que muestra los productos distintos a los que el usuario creo
  let productosTienda = [...productos]
  if (usuario !== null) productosTienda = [...productos].filter((p) => p.id_usuario !== usuario.id_usuario)

  let productosOrdenados = [...productosTienda]
  if (select === 'az') productosOrdenados = [...productosTienda].sort((a, b) => a.nombre.localeCompare(b.nombre))
  if (select === 'za') productosOrdenados = [...productosTienda].sort((a, b) => b.nombre.localeCompare(a.nombre))
  if (select === 'menor') productosOrdenados = [...productosTienda].sort((a, b) => a.precio - b.precio)
  if (select === 'mayor') productosOrdenados = [...productosTienda].sort((a, b) => b.precio - a.precio)
  console.log(productosOrdenados)

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
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default Tienda
