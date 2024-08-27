import ProductoCompras
  from '../components/ProductoCompras'
const MisCompras = () => {
  const cantidadCompras = 0

  const arregloComprasUsuario =
    [{
      idCompra: 1,
      total: 35250,
      fecha: '24-05-2014',
      productos: [{
        id: '12345',
        cantidad: 3,
        nombre: 'Harnes Hiking',
        descripcion: 'Arnes que ofrese toda la seguridad que tu mascota necesita para salir paseos largos y evitar que se escape',
        imagen: 'https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dwf12355c9/images/40985-hiking-harness-camuflado-001.jpg'
      }, {
        id: '1234',
        cantidad: 1,
        nombre: 'Hueso Doble Capa',
        descripcion: 'Hueso impregnado con esencia natural de mantequilla de mani. Fabricado con materiales extra resistente que garantiza durabilidad del producto.',
        imagen: 'https://www.petco.cl/medias/?context=bWFzdGVyfGltYWdlc3wyNzE0NDZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDA4L2hkMi85MjU4NjM1NjI0NDc4LmpwZ3xjZTMwZDkyMDgzMGU4YzUxMmFjZjIzYmUzY2E0NzM0ODQzMDY2OTU1NmJmOTU5Yjg5YzAxZjk0ZjIwYWNhMmEy'
      }, {
        id: '123',
        cantidad: 12,
        nombre: 'Pelota Respira Fácil',
        descripcion: 'Pelota de diseño especial, similar a una malla, que facilita la respiración y el flujo de aire hacia los pulmones del animal mientras juega',
        imagen: 'https://cdnx.jumpseller.com/bigotes-pet-store-coffee/image/31906761/resize/610/610?1676288218'
      }]
    }, {
      idCompra: 2,
      total: 16990,
      fecha: '05-07-2020',
      productos: [{
        id: '1234',
        cantidad: 1,
        nombre: 'Hueso Doble Capa',
        descripcion: 'Hueso impregnado con esencia natural de mantequilla de mani. Fabricado con materiales extra resistente que garantiza durabilidad del producto.',

        imagen: 'https://www.petco.cl/medias/?context=bWFzdGVyfGltYWdlc3wyNzE0NDZ8aW1hZ2UvanBlZ3xpbWFnZXMvaDA4L2hkMi85MjU4NjM1NjI0NDc4LmpwZ3xjZTMwZDkyMDgzMGU4YzUxMmFjZjIzYmUzY2E0NzM0ODQzMDY2OTU1NmJmOTU5Yjg5YzAxZjk0ZjIwYWNhMmEy'
      }, {
        id: '12345',
        cantidad: 2,
        nombre: 'Harnes Hiking',
        descripcion: 'Arnes que ofrese toda la seguridad que tu mascota necesita para salir paseos largos y evitar que se escape',
        imagen: 'https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dwf12355c9/images/40985-hiking-harness-camuflado-001.jpg'
      }]
    },
    {
      idCompra: 3,
      total: 14990,
      fecha: '02-04-1989',
      productos: [{
        id: '123',
        cantidad: 1,
        nombre: 'Pelota Respira Fácil',
        descripcion: 'Pelota de diseño especial, similar a una malla, que facilita la respiración y el flujo de aire hacia los pulmones del animal mientras juega',
        imagen: 'https://cdnx.jumpseller.com/bigotes-pet-store-coffee/image/31906761/resize/610/610?1676288218'
      }]
    },
    {
      idCompra: 4,
      total: 5200,
      fecha: '02-07-2024',
      productos: [{
        id: '12345',
        cantidad: 6,
        nombre: 'Harnes Hiking',
        descripcion: 'Arnes que ofrese toda la seguridad que tu mascota necesita para salir paseos largos y evitar que se escape',
        imagen: 'https://www.superzoo.cl/on/demandware.static/-/Sites-SuperZoo-master-catalog/default/dwf12355c9/images/40985-hiking-harness-camuflado-001.jpg'
      }]
    }]

  const mostrarDataCompras = () => {
    return (
      <>
        <div className='p-3 p-md-5 bg-white d-flex flex-column'>
          <h1 className='text-center pb-4'>Mis Compras <i className='fa-solid fa-bag-shopping' /></h1>
          {
            arregloComprasUsuario.map((compra) => {
              return (ProductoCompras(compra))
            })
          }
        </div>
      </>
    )
  }

  const sinCompras = () => {
    return (
      <div className='p-4 bg-white d-flex flex-row justify-content-center align-items-center'>
        <div><img className='img-fluid' src='/carrovacio.jpg' alt='Imagen carro vacío' /></div>
        <div className='d-flex flex-column p-4 text-center'>
          <h1>Hey!</h1>
          <h3>Aún no has visto nuestras ofertas?</h3>
          <h5 className=''>No pierdas mas tiempo, hay increibles descuento esperando! Ellos, lo merecen!</h5>
          <button type='button ' className='btn btn-secondary col-4 me-auto ms-auto'>Ver Productos</button>
        </div>
      </div>
    )
  }

  return (
    <main className='d-flex align-items-center'>
      <div className='container-fluid col-10 my-5'>
        {cantidadCompras !== 0 ? mostrarDataCompras() : sinCompras()}
      </div>
    </main>
  )
}

export default MisCompras
