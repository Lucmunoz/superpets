import { useContext } from 'react'
import CorazonFav from '../components/CorazonFav'
import { PetsContext } from '../context/PetsContext'
import { useParams } from 'react-router-dom'

const Producto = () => {
  const { id } = useParams()
  const { productos, cambiarFavorito } = useContext(PetsContext)
  const producto = [...productos].filter((p) => p.id === Number(id))

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
