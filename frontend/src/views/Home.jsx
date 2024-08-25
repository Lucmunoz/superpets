import Card from '../components/Card'
import Carrusel from '../components/Carrusel'

const Home = () => {
  return (
    <main className='divMainHome'>
      <Carrusel />
      <div className='d-flex gap-5 pt-5 justify-content-center divCardHome'>
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  )
}

export default Home
