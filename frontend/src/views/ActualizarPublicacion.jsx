const ActualizarPublicacion = () => {
  return (
    <main className='d-flex align-items-center'>
      <div className='container-fluid col-11 col-sm-auto my-3 bg-white'>
        <div className='p-4 py-4'>
          <div className='d-flex justify-content-center pb-3'>
            <h2 className=''>Actualizar publicación</h2>
          </div>
          <form>
            <div className='form-group pb-3'>
              <label htmlFor='exampleFormControlInput1'>Nombre producto </label>
              <input type='text' className='d-sm-none form-control fst-italic' id='nombre' placeholder='...' />
              <input type='text' className='d-none d-sm-flex form-control fst-italic' style={{ width: '467px' }} id='nombre' placeholder='...' />
            </div>
            <div className='form-group pb-3'>
              <label htmlFor='exampleFormControlTextarea1'>Descripción del producto</label>
              <textarea className='form-control fst-italic' id='descripcion' rows='3' placeholder='...' />
            </div>
            <div className='form-group pb-3'>
              <label htmlFor='exampleFormControlTextarea1'>Descripción del producto</label>
              <input type='number' className='form-control fst-italic' id='valor' placeholder='...' />
            </div>
            <div className='form-group pb-3'>
              <label htmlFor='exampleFormControlInput1'>Ingresa la URL de tu imagen</label>
              <input type='text' className='form-control fst-italic' id='img-url' placeholder='...' />
            </div>
            <div className='d-flex gap-2 justify-content-center'>
              <button type='submit' className='btn btn-sm btn-success'>Guardar Cambios</button>
              <button type='submit' className='btn btn-sm btn-danger'>Eliminar Publicación</button>
            </div>
          </form>
        </div>
      </div>
    </main>
  )
}

export default ActualizarPublicacion
