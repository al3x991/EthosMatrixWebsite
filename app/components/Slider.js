"use client";

import ReactBeforeSliderComponent  from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';


const FIRST_IMAGE = {
    imageUrl: '/assets/images/test12.jpg'
  };
  const SECOND_IMAGE = {
    imageUrl: '/assets/images/test13.jpg'
  };

const Slider = () => {
  return (
    <ReactBeforeSliderComponent
    firstImage={FIRST_IMAGE}
    secondImage={SECOND_IMAGE}
/>
  )
}

export default Slider