import { useContext } from 'react'
import { PetsContext } from '../context/PetsContext'
import { useNavigate } from 'react-router-dom'

const Card = () => {
  const { productos } = useContext(PetsContext)
  const navigate = useNavigate()
  const irDetalleProducto = (id) => {
    navigate(`/tienda/producto/${id}`)
  }

  return (
    <>
      {productos.slice(6).map((p) =>
        <div className='card' key={p.id}>
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
    </>
  )
}

export default Card
