import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
      <div>
        <h3>Síguenos</h3>
        <ul>
          <li>
            <a target='_blank' href='https://www.facebook.com/' rel='noreferrer'>
              <i className='fa-brands fa-facebook fa-lg' />
            </a>
          </li>
          <li>
            <a target='_blank' href='https://www.instagram.com/' rel='noreferrer'>
              <i className='fa-brands fa-instagram fa-lg' />
            </a>
          </li>
        </ul>
      </div>
      <div>
        <h3>
          Enlaces útiles
        </h3>
        <ul>
          <li>
            <i className='fa-solid fa-paw fa-lg' />
            <Link to='/acercadenosotros'> Acerca de nosotros</Link>
          </li>
          <li>
            <i className='fa-solid fa-paw fa-lg' />
            <Link to='/preguntasfrecuentes'>
              Preguntas frecuentes
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <h3>Información de Contacto</h3>
        <ul>
          <li>  <i className='fa-solid fa-paw fa-lg' /> Contacto: +569 00000000</li>
          <li>  <i className='fa-solid fa-paw fa-lg' />email: superpets@correo.com</li>
        </ul>
      </div>
    </footer>
  )
}

export default Footer
