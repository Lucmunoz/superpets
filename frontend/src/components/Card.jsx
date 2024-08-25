const Card = () => {
  return (
    <div className='card'>
      <img src='/disfraz-salchicha.jpg' className='card-img-top' alt='disfraz-salchicha' />
      <div className='card-body'>
        <h5 className='card-title'>Disfraz perro salchicha</h5>
        <p className='card-text'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsa, eius?</p>
      </div>
      <div>
        <button className='buttonCard'>Ver más</button>
      </div>
    </div>
  )
}

export default Card
