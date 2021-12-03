import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import React from 'react';
import imagen1 from './images/1.jpg';
import imagen2 from './images/2.jpg';
import imagen3 from './images/3.jpg';

//comentario
const carousel = () => {
  return (
    <div class="container">
      <Carousel fade={true} interval={null}>
        <Carousel.Item>
          <img

            src={imagen1}

            width="100%"
            height="800px"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={imagen2}
            width="100%"
            height="600px"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            src={imagen3}
            alt="Third slide"
            width="100%"
            height="800px"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default carousel;