import Card from '../components/Card'
import Footer from '../components/Footer'
import Carrusel from '../components/Carrusel'

const Home = () => {
  return (
    <main className='main'>
      <Carrusel />
      <div className='d-flex gap-5 justify-content-center divCardHome'>
        <Card />
        <Card />
        <Card />
      </div>
    </main>
  )
}

export default Home
