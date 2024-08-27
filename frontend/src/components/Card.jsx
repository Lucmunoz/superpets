import { useEffect, useState } from 'react'

const Card = () => {
  const [productos, setProductos] = useState([])
  const getData = async () => {
    try {
      const response = await fetch('/productos.json')
      const data = await response.json()
      setProductos(data)
      console.log(productos)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      {productos.slice(6).map((p) =>
        <div className='card' key={p.id}>
          <img src={p.img} className='card-img-top' alt='disfraz-salchicha' />
          <div className='card-body'>
            <h5 className='card-title'>{p.nombre}</h5>
            <p className='precioCardHome'>${p.precio}</p>
          </div>
          <div>
            <button className='buttonCard'>Ver detalle</button>
          </div>
        </div>
      )}
    </>
  )
}

export default Card
