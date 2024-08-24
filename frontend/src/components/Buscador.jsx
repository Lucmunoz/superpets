const Buscador = () => {
  return (
    <form className='d-flex justify-content-center pt-2 pe-5 buscador'>
      <input className='form-control me-2' type='search' placeholder='Busca tu producto ...' aria-label='Search' />
      <button className='btn btn-outline-success' type='submit'>
        <i className='fa-solid fa-magnifying-glass fa-xl' />
      </button>
    </form>
  )
}

export default Buscador
