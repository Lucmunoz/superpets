const ProductoResumen = (producto) => {
  return (
    // <div key={producto.id}>{`${producto.nombre}`}</div>
      <div className='p-2 container-fluid border bg-light' key={producto.id}>{`${producto.nombre}`}</div>
  )
}

export default ProductoResumen
