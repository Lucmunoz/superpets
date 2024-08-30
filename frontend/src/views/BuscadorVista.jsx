import { useContext } from 'react'
import CorazonFav from '../components/CorazonFav'
import { PetsContext } from '../context/PetsContext'

const BuscadorVista = () => {
  const { productos, cambiarFavorito, busqueda, usuario } = useContext(PetsContext)
  let productosdeOtros = [...productos]
  if (usuario !== null) productosdeOtros = productosdeOtros.filter((p) => p.id_usuario !== usuario.id_usuario)
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
                </div>
              </div>
            )}
        </div>
      </div>
    </main>
  )
}

export default BuscadorVista
