import React from 'react'
import AliceCarousel from 'react-alice-carousel'

import 'react-alice-carousel/lib/alice-carousel.css'
import "./SecondCarousel.css";
 
class Gallery extends React.Component {
  items = ["https://i.imgur.com/VTpz8XB.jpg", "https://i.imgur.com/nff0PWy.jpg", "https://i.imgur.com/fY311wc.jpeg", "https://i.imgur.com/BaGeu7F.jpeg", "https://i.imgur.com/rc9nH0R.jpeg", "https://i.imgur.com/xnoLgTy.jpeg"]
 
  state = {
    galleryItems: this.items.map((image, index) => <img className="mainImages" key={index} src={image} ></img>),
  }
 
  thumbItem = (item, i) => (
    <img 
      key={item} 
      onClick={() => this.Carousel.slideTo(i)} 
      src={item}
      className="thumbImages"
    />
  )
 
  render() {
    return (
      <div>
        <AliceCarousel
          dotsDisabled={true}
          buttonsDisabled={true}
          items={this.state.galleryItems}
          // swipeDisabled={false}
          mouseTrackingEnabled
          ref={(el) => (this.Carousel = el)}
        />

        <nav>{this.items.map((item, index) => (
          this.thumbItem(item, index)
          ))}
        </nav>
        <button onClick={() => this.Carousel.slidePrev()}>Prev image</button>
        <button onClick={() => this.Carousel.slideNext()}>Next image</button>
      </div>
    )
  }
}

export default Gallery;