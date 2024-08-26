const Login = () => {
  return (
    <main className='d-flex align-items-center'>
      <div className='container col-10 col-lg-5 text-center bg-white py-3'>
        <h2 className='pb-2'>Inicio de sesión</h2>
        <form>
          <div class='mb-3 px-4'>
            <label class='form-label'>Correo electrónico</label>
            <input type='email' className='form-control text-center' id='exampleInputEmail1' aria-describedby='emailHelp' placeholder='Correo electrónico de registro' />
            <div id='emailHelp' className='form-text fst-italic'>Nunca compartiremos tu correo.</div>
          </div>
          <div class='mb-3 px-4'>
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
