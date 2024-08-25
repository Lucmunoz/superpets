import ProductoResumen from '../components/ProductoResumen'

const Carro = () => {
  const cartElements = 1
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

  const carroVacio = () => {
    return (
      <>
        <div className='mt-5 p-5 bg-light-subtle border d-flex flex-row align-items-center'>
          <img src='/emptyCart.png' alt='Imagen carro vacío' />
          <div className='d-flex flex-column'>
            <h3>Tu carro está vacío</h3>
            <h5 className='pb-4'>No pierdas mas tiempo. revisa nuestra amplia oferta de productos para tu mascota!</h5>
            <button type='button ' className='btn btn-secondary col-4 me-auto ms-auto' onClick='/'>Ver pizzas</button>
          </div>
        </div>
      </>

    )
  }

  const showCartData = () => {
    return (
      <>
        <div className='mt-3 bg-light-subtle d-flex flex-column align-items-center'>
          <h1 className='text-center pb-4'>Mi Carro <i class='fa-solid fa-cart-shopping' /></h1>
          <table className='table text-center'>
            <thead>
              <tr>
                <th scope='col'>Producto</th>
                <th scope='col'>Valor Unitario</th>
                <th scope='col'>Cantidad</th>
                <th scope='col'>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {arreglo.map((item) => {
                return (
                  <tr key={item.id} className='align-middle'>
                    <td className='col-7'>
                      <div className='d-flex gap-4 align-items-center'>
                        <div><img style={{ height: '70px' }} src={item.imagen} alt='MDN' />
                        </div>
                        <div className='d-flex flex-column align-items-start'>
                          <h6>{item.nombre}</h6>
                          <div className='fw-light fst-italic'>{item.descripcion.substring(0, 100) + '...'}</div>
                        </div>
                      </div>
                    </td>
                    <td>${(item.precio / 1000).toFixed(3)}</td>
                    <td>
                      <div className='d-flex flex-row container-fluid align-items-center justify-content-center'>
                        <div><button type='button' style={{ width: '35px' }} className='bg-success p-1 text-dark bg-opacity-25 border-0 p-0'>-</button></div>
                        <div className='border-0 px-4'>3</div>
                        <div><button type='button ' style={{ width: '35px' }} className='bg-success p-1 text-dark bg-opacity-25 border-0 p-0'>+</button></div>
                      </div>
                    </td>
                    <td>${(item.precio / 1000).toFixed(3)}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>

          <div className='d-flex justify-content-center gap-5 pt-5'>
            <button type='button' className='btn btn-secondary'>Ir a Pagar</button>
            <button type='button' className='btn btn-danger'>Vaciar el carro</button>
          </div>
        </div>
      </>
    )
  }

  return (
    <div className='container-fluid col-10 mt-5'>

      {cartElements !== 0 ? showCartData() : carroVacio()}
    </div>
  )
}

export default Carro
