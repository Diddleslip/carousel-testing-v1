import React from 'react';
import './App.css';
import Carousel from "./components/Carousel/Carousel";
import SecondCarousel from "./components/SecondCarousel/SecondCarousel";
import ThirdCarousel from "./components/ThirdCarousel/ThirdCarousel";

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      {/* <Carousel/> */}
      {/* <SecondCarousel/> */}
      <ThirdCarousel/>
    </div>
  );
}

export default App;
