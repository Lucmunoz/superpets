import { useState } from 'react'
import CorazonFav from '../components/CorazonFav'

const Producto = () => {
  const estadoInicial = [
    {
      id: 1,
      sku: 122,
      nombre: 'Disfraz',
      isFavorite: false
    }
    // {
    //   id: 2,
    //   sku: 123,
    //   nombre: 'Pelota',
    //   isFavorite: false
    // }
  ]

  const [productos, setProductos] = useState(estadoInicial)

  const changeFavorite = (id) => {
    const nuevosProductos = [...productos]
    const index = nuevosProductos.findIndex((p) => p.id === id)
    nuevosProductos[index].isFavorite = !nuevosProductos[index].isFavorite
    setProductos(nuevosProductos)
  }

  return (
    <main className='mainProducto'>
      {productos.map((p) =>
        <div className='divDetalleProducto' key={p.id}>
          <div>
            <img src='/disfraz-salchicha.jpg' alt='producto-detalle' />
          </div>
          <div style={{ textAlign: 'center' }}>
            <div className='divTextProducto'>
              <h1 className='m-0'>{p.nombre}</h1>
              <span>SKU-{p.sku}</span>
              <p className='pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, autem praesentium! Cumque, dolorem? Consequuntur repellat, repellendus obcaecati recusandae facere asperiores?</p>
            </div>
            <button type='button' className='btn btn-danger'>Agregar al carro</button>
            <button className='buttonCorazon' onClick={() => changeFavorite(p.id)}>
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
