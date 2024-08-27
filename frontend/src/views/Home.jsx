import Card from '../components/Card'
import Carrusel from '../components/Carrusel'

const Home = () => {
  return (
    <main className='mainHome'>
      <div>
        <Carrusel />
        <h1 className='text-white text-center pt-5'>Destacados SuperPets<i className='fa-solid fa-paw fa-md ps-2' /> </h1>
        <div className='d-flex gap-5 justify-content-center divCardHome'>
          <Card />
        </div>
      </div>
    </main>
  )
}

export default Home
