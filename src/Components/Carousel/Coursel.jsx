import React,{useState} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'
import a from './gg.jpg'
import b from './2822.jpg'
import c from './3222.jpg'
import d from './samuri.jpg'
import e from './japan.jpg'
const Coursel = () => {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };

  return (
    <div>
  
    <Carousel activeIndex={index} onSelect={handleSelect}>
    <Carousel.Item className='heights'>
      <img
        className="heights"
        src={a}
        alt="First slide"
      />
      <Carousel.Caption>
        <h2>Comics For teens 😉</h2>
      
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="heights"
        src={b}
        alt="Second slide"
      />

      <Carousel.Caption>
        <h2>welcome to fantasy Land 🚀</h2>

      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="heights"
        src={c}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h2 className='text-dark'>You can become AnyThing here 👽</h2>
       
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="heights"
        src={d}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h2 className='text-info'>Battle Villans in Yor Mind ⚔️</h2>
      
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="heights"
        src={e}
        alt="Third slide"
      />

      <Carousel.Caption>
        <h2 >Like Native times? we can take you back in time🏯</h2>

      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    </div>
  )
}

export default Coursel