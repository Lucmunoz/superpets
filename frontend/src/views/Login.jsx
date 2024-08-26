const Login = () => {
  return (
    <main className='d-flex align-items-center'>
      <div className='container col-4 text-center p-5 bg-white my-5'>
        <h2 className='pb-2'>Inicio de sesión</h2>
        <form>
          <div class='mb-3'>
            <label class='form-label'>Correo electrónico</label>
            <input type='email' className='form-control text-center' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Correo electrónico de registro' />
            <div id='emailHelp' className='form-text fst-italic'>Nunca compartiremos tu correo. Puedes estar tranquilo</div>
          </div>
          <div class='mb-3'>
            <label className='form-label'>Contraseña</label>
            <input type='password' className='form-control text-center' id='exampleInputPassword1' placeholder='*********' />
          </div>
          <button type='submit' className='btn btn-primary'>Iniciar Sesión</button>
        </form>
      </div>
    </main>
  )
}

export default Login
