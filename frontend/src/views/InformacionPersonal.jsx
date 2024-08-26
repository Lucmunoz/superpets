const InformacionPersonal = () => {
  const eliminarcuenta = () => {}
  return (
    <main>
      <div className='divInfoPersonal'>
        <h1>Información Personal</h1>
        <p>Nombre </p>
        <span>Juan López</span>
        <hr />
        <p>Email</p>
        <span>juanitolopez@correo.com</span>
        <hr />
        <p>RUT</p>
        <span>20.000.000-k</span>
        <hr />
        <p>Teléfono</p>
        <span>+5912345679</span>
        <hr />
        <p>Dirección</p>
        <span>Los Claveles 17, Concepción</span>
        <hr />
        <br />
        <br />
        <button type='button' className='btn btn-danger' onClick={eliminarcuenta()}>Eliminar Cuenta</button>
      </div>
    </main>
  )
}

export default InformacionPersonal
