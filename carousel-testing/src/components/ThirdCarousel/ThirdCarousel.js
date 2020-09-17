import React, { useRef } from 'react';
import AliceCarousel from 'react-alice-carousel';

import 'react-alice-carousel/lib/alice-carousel.css';
import "./ThirdCarousel.css";

const items = ["https://i.imgur.com/VTpz8XB.jpg", "https://i.imgur.com/nff0PWy.jpg", "https://i.imgur.com/fY311wc.jpeg", "https://i.imgur.com/BaGeu7F.jpeg", "https://i.imgur.com/rc9nH0R.jpeg", "https://i.imgur.com/xnoLgTy.jpeg"];

function ThirdCarousel() {
  let Carousel = useRef();
  
  const galleryItems = items.map((image, index) => (
    <img alt="img" className="mainImages" key={index} src={image} ></img>
  ))

  const thumbItem = (item, index) => (
    <img 
      alt="Img"
      key={item} 
      onClick={() => Carousel.slideTo(index)} 
      src={item}
      className={`thumbImages`}
    />
  )

  return (
    <div>
      <AliceCarousel
        dotsDisabled={true}
        buttonsDisabled={true}
        items={galleryItems}
        mouseTrackingEnabled
        ref={el => Carousel = el}
      />

      <nav>{items.map((item, index) => (
        thumbItem(item, index)
      ))}
      </nav>
      <button onClick={() => Carousel.slidePrev()}>Prev image</button>
      <button onClick={() => Carousel.slideNext()}>Next image</button>
    </div>
  )
}

export default ThirdCarousel
