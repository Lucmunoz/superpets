import { Link } from 'react-router-dom'

const ButtonIrHome = () => {
  return (
    <div>
      <button className='buttonIrHome'>
        <Link to='/'> Ir a <i className='fa-solid fa-house ps-2' /></Link>
      </button>
    </div>

  )
}

export default ButtonIrHome
