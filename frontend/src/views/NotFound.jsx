import ButtonIrHome from '../components/ButtonIrHome'

const NotFound = () => {
  return (
    <main>
      <div className='divNotFound'>
        <div>
          <img src='/notFound-gato.png' alt='notFound' />
        </div>
        <div className='divErrorText'>
          <h1>Ops!... 404</h1>
          <p>Página no encontrada</p>
          <ButtonIrHome />
        </div>
      </div>
    </main>
  )
}

export default NotFound
