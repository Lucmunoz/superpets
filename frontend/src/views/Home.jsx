import Card from '../components/Card'
import Carrusel from '../components/Carrusel'

const Home = () => {
  return (
    <main className='mainHome'>
      <div>
        <Carrusel />
        <div className='d-flex gap-5 justify-content-center divCardHome'>
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </main>
  )
}

export default Home
