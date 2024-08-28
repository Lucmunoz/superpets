const CrearPublicacion = () => {
  return (
    <main className='d-flex align-items-center'>
      <div className='container-fluid col-11 my-3 col-sm-auto bg-white'>
        <div className='p-4 py-4'>
          <div className='d-flex justify-content-center pb-3'>
            <h2 className='text-center'>Crear Publicación <i class='fa-regular fa-square-plus' /></h2>
          </div>
          <form>
            <div className='form-group pb-3'>
              <label htmlFor='exampleFormControlInput1'>Nombre del producto </label>
              <input type='text' className='d-sm-none form-control fst-italic' id='nombre' placeholder='Ingresa el Nombre de tu producto...' />
              <input type='text' className='d-none d-sm-flex form-control fst-italic' style={{ width: '467px' }} id='nombre' placeholder='Ingresa el Nombre de tu producto...' />
            </div>
            <div className='form-group pb-3'>
              <label htmlFor='exampleFormControlTextarea1'>Descripción del producto</label>
              <textarea className='form-control fst-italic' id='descripcion' rows='3' placeholder='Ingresa el mayor detalle posible de tu producto para que los usuarios no tengan ninguna duda!' />
            </div>
            <div className='form-group pb-3'>
              <label htmlFor='exampleFormControlTextarea1'>Descripción del producto</label>
              <input type='number' className='form-control fst-italic' id='valor' placeholder='Ingresa el valor de venta...' />
            </div>
            <div className='form-group pb-3'>
              <label htmlFor='exampleFormControlInput1'>Ingresa la URL de tu imagen</label>
              <input type='text' className='form-control fst-italic' id='img-url' placeholder='Ingresa la URL de tu imagen...' />
            </div>
            <div className='text-center'>
              <button type='submit' className='btn btn-danger'>Crear Publicación</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default CrearPublicacion
