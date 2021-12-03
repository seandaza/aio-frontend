import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import React from 'react';
import imagen1 from './images/1.jpg';
import imagen2 from './images/2.jpg';
import imagen3 from './images/3.jpeg';

//comentario
const carousel = () => {
  return (
    <div class="container">
      <Carousel fade={true} interval={2000}>
        <Carousel.Item>
          <img

            src={imagen1}

            width="80%"
            height="350px"
            padding="5%"
          />
          <Carousel.Caption>
            <p>Desliza y observa nuestros alojamientos</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>

          <img
            src={imagen2}
            width="80%"
            height="350px"
          />

          <Carousel.Caption>
          <p>Desliza y observa nuestros alojamientos</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={imagen3}
            alt="Third slide"
            width="80%"
            height="350px"
          />

          <Carousel.Caption>
            <p>Desliza y observa nuestros alojamientos</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default carousel;

