const Producto = () => {
  return (
    <main className='mainProducto'>
      <div className='divDetalleProducto'>
        <div>
          <img src='/disfraz-salchicha.jpg' alt='producto-detalle' />
        </div>
        <div style={{ textAlign: 'center' }}>
          <div className='divTextProducto'>
            <h1 className='m-0'>Nombre Producto</h1>
            <span>SKU-000</span>
            <p className='pt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum, autem praesentium! Cumque, dolorem? Consequuntur repellat, repellendus obcaecati recusandae facere asperiores?</p>
          </div>
          <button type='button' className='btn btn-danger'>Agregar al carro</button>
        </div>
      </div>
    </main>
  )
}

export default Producto
