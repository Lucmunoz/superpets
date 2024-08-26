const Perfil = () => {
  return (
    <main className='d-flex align-items-center justify-content-center'>
      <div className='my-5 bg-white p-5'>
        <div className='d-flex container-fluid align-items-center justify-content-center'>
          <div class='list-group'>
            <h3 className='pb-3 fw-bold'>Hola "nombre de usuario"!</h3>
            <a href='#' class='list-group-item list-group-item-action border-0 ps-0 ' aria-current='true'>
              <div class='d-flex w-100 justify-content-between'>
                <h5 class='mb-1'>Información Personal</h5>
              </div>
              <p class='mb-0 fst-italic text-muted'>Revisa la información con la que los compradores te contactarán.</p>
            </a>
            <a href='#' class='list-group-item list-group-item-action border-0 border-top border-bottom ps-0'>
              <div class='d-flex w-100 justify-content-between'>
                <h5 class='mb-1'>Historial de compras</h5>
              </div>
              <p class='mb-0 fst-italic text-muted'>Revisa el detalle de todas las compras que has realizad en nuestra tienda</p>
            </a>
            <a href='#' class='list-group-item list-group-item-action border-0 ps-0'>
              <div class='d-flex w-100 justify-content-between'>
                <h5 class='mb-1'>Mis Publicaciones</h5>
              </div>
              <p class='mb-0 fst-italic text-muted'>Revisa las publicaciones y productos que tienes en venta.</p>
            </a>
          </div>
          <div className=' text-center'> <img src='/bienvenida.jpg' alt='Imagen perro dando la bienvenida' /></div>
        </div>
      </div>
    </main>
  )
}

export default Perfil
