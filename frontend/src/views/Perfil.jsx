const Perfil = () => {
  return (
    <main className='d-flex align-items-center justify-content-center '>
      <div className='container-fluid col-11 col-lg-10 col-xl-8 col-xxl-7 my-3 bg-white'>
        <div className='d-flex flex-column flex-md-row container-fluid align-items-center justify-content-center p-0'>
          <div className=' text-center'> <img style={{ height: '220px' }} src='/bienvenida.jpg' alt='Imagen perro dando la bienvenida' /></div>
          <div class='list-group text-center pb-3 pt-md-3'>
            <h3 className='pb-3 fw-bold'>Hola "nombre de usuario"!</h3>
            <a href='#' className='text-center list-group-item list-group-item-action border-0 p-0 py-2 ' aria-current='true'>
              <div class='d-flex w-100 justify-content-center'>
                <h5 class='mb-1'>Información Personal</h5>
              </div>
              <p class='mb-0 fst-italic text-muted'>Revisa la información con la que los compradores te contactarán.</p>
            </a>
            <a href='#' class='list-group-item list-group-item-action border-0 border-top border-bottom p-0 py-2'>
              <div class='d-flex w-100 justify-content-center'>
                <h5 class='mb-1'>Historial de compras</h5>
              </div>
              <p class='mb-0 fst-italic text-muted'>Revisa el detalle de todas las compras que has realizad en nuestra tienda</p>
            </a>
            <a href='#' class='list-group-item list-group-item-action border-0 p-0 py-2'>
              <div class='d-flex w-100 justify-content-center'>
                <h5 class='mb-1'>Mis Publicaciones</h5>
              </div>
              <p class='mb-0 fst-italic text-muted'>Revisa las publicaciones y productos que tienes en venta.</p>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Perfil
