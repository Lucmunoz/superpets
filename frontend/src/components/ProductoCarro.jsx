import { useContext } from 'react'
import { PetsContext } from '../context/PetsContext'

const ProductoCarro = (elemento) => {
  const { productosCarro, agregarCarro, quitarCarro } = useContext(PetsContext)

  return (
    <div className='container-fluid p-2 pb-1 m-0 border-bottom'>
      {productosCarro.map((elemento) => {
        return (
          <div className='row' key={elemento.id}>
            <div className='col-3 col-sm-2 col-lg-1 p-0 mx-0 mx-lg-3 d-flex align-items-center justify-content-center'>
              <div className='text-center'>
                <img className='' style={{ height: '70px' }} src={elemento.imagen} alt='MDN' />
              </div>
            </div>
            <div className='col-9 col-sm-10 col-lg-10 d-flex flex-column py-2'>
              <h6 className='p-0 m-0'>{elemento.nombre}</h6>
              <div className='text-truncate fst-italic fw-light text-muted'>
                {elemento.descripcion}
              </div>
              <div className='d-flex align-items-center mt-auto pt-2'>
                <div>${(elemento.precio / 1000).toFixed(3)}</div>
                <div className='d-flex ms-auto'>
                  <span><button type='button' className='btn btn-secondary btn-sm py-0' onClick={() => quitarCarro(elemento.id)}>-</button></span>
                  <p className='p-0 m-0 px-1'>{elemento.cantidad}</p>
                  <span><button type='button' className='btn btn-secondary btn-sm py-0' onClick={() => agregarCarro(elemento.id)}>+</button></span>
                </div>
              </div>
            </div>
          </div>
        )
      })}

    </div>
  )
}

export default ProductoCarro
