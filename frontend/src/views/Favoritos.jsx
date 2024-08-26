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
        <div className='mt-5 d-flex flex-row justify-content-center align-items-center border bg-white text-center d-none d-lg-flex'>
          <div> <img className='img-fluid' src='/Perro-triste.jpg' alt='Imagen carro vacío' /></div>
          <div className='d-flex flex-column'>
            <h3>No tienes producto Favoritos</h3>
            <h5 className='p-4'>No pierdas mas tiempo. revisa nuestra amplia oferta de productos para tu mascota!</h5>
            <button type='button ' className='btn btn-secondary col-4 me-auto ms-auto'>Ver Productos</button>
          </div>
        </div>

        {/* Media Query md <992px */}
        <div className='d-lg-none d-flex flex-column justify-content-center align-items-center border bg-white text-center py-3 '>
          <div>
            <img className='img-fluid w-75' src='/Perro-triste.jpg' alt='Imagen carro vacío' />
          </div>
          <div className='p-4'>
            <h3>No tienes producto Favoritos</h3>
            <h5 className=''>No pierdas mas tiempo. revisa nuestra amplia oferta de productos para tu mascota!</h5>
            <button type='button ' className='btn btn-secondary col-4 me-auto ms-auto'>Ver Productos</button>
          </div>
        </div>

      </>

    )
  }

  const mostrarDataFavoritos = () => {
    return (
      <>
        <div className='py-5 bg-white d-flex flex-column align-items-center'>
          <h1 className='text-center pb-4'>Mis Favoritos <i className='fa-solid fa-heart' /></h1>
          <div className='d-flex col-11 flex-column align-items-center gap-3'>
            {arreglo.map((producto) => {
              return ProductoFavorito(producto)
            })}
          </div>
        </div>
      </>
    )
  }

  return (
    <main className='d-flex align-items-center'>
      <div className='main container-fluid col-10 my-5'>
        {favElements !== 0 ? mostrarDataFavoritos() : sinFavoritos()}
      </div>
    </main>
  )
}

export default Favoritos
