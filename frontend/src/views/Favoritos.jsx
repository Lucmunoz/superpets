import ProductoFavorito from '../components/ProductoFavorito'

const Favoritos = () => {
  const favElements = 1
  const arreglo = [{
    id: '123',
    nombre: 'Pelota Respira Fácil',
    descripcion: 'Pelota de diseño especial, similar a una malla, que facilita la respiración y el flujo de aire hacia los pulmones del animal mientras juega',
    precio: 9594,
    imagen: 'https://cdnx.jumpseller.com/bigotes-pet-store-coffee/image/31906761/resize/610/610?1676288218'
  }, {
    id: '1234',
    nombre: 'Hueso Doble Capa',
    descripcion: 'Hueso impregnado con esencia natural de mantequilla de mani. Fabricado con materiales extra resistente que garantiza durabilidad del producto.',
    precio: 15990,
    imagen: 'https://www.petco.cl/medias/?context=bWFzdGVyfGltYWdlc3wyNzE0NDZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDA4L2hkMi85MjU4NjM1NjI0NDc4LmpwZ3xjZTMwZDkyMDgzMGU4YzUxMmFjZjIzYmUzY2E0NzM0ODQzMDY2OTU1NmJmOTU5Yjg5YzAxZjk0ZjIwYWNhMmEy'
  }, {
    id: '12345',
    nombre: 'Harnes Hiking',
    descripcion: 'Arnes que ofrese toda la seguridad que tu mascota necesita para salir paseos largos y evitar que se escape',
    precio: 25990,
    imagen: 'https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dwf12355c9/images/40985-hiking-harness-camuflado-001.jpg'
  }]

  const sinFavoritos = () => {
    return (
      <>

        <div className='bg-white d-flex flex-column align-items-center justify-content-center'>
          <div>
            <img style={{ height: '200px' }} src='/Perro-triste.jpg' alt='Imagen perro triste' />
          </div>
          <div className='d-flex flex-column px-4 pb-4 text-center'>
            <h3>No tienes producto Favoritos</h3>
            <h5 className='pb-4'>No pierdas mas tiempo. revisa nuestra amplia oferta de productos para tu mascota!</h5>
            <button type='button ' className='btn btn-sm btn-secondary me-auto ms-auto' onClick='/'>Ver productos</button>
          </div>
        </div>
      </>
    )
  }

  const mostrarDataFavoritos = () => {
    return (
      <div className='d-flex flex-column py-5'>
        <h1 className='text-center pb-3'>Mis Favoritos <i className='fa-solid fa-cart-shopping' /></h1>
        <div className='d-flex flex-column p-0 px-3'>
          {arreglo.map((producto) => { return ProductoFavorito(producto) })}
        </div>
      </div>
    )
  }

  return (
    <main className='d-flex align-items-center'>
      <div className='container-fluid col-11 col-xl-10 col-xxl-9 my-3 bg-white'>
        {favElements !== 0 ? mostrarDataFavoritos() : sinFavoritos()}
      </div>
    </main>
  )
}

export default Favoritos
