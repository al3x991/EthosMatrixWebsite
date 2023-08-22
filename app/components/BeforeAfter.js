"use client";

import ReactBeforeSliderComponent  from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';


const FIRST_IMAGE = {
imageUrl: '/assets/images/poolBefore.jpg',

};
const SECOND_IMAGE = {
imageUrl: '/assets/images/poolAfter.jpg',

};

const BeforeAfter = () => {
return (
<div className='container mx-auto p-12'>
<div className='flex flex-col md:flex-row'>
<div className=''>
<h2 className=''>Masterful Renovations</h2>
<span>Transforming Spaces with Expertise</span>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit et malesuada fames ac turpis egestas.</p>
</div>
<div className=' max-w-lg mx-auto'>
<ReactBeforeSliderComponent
firstImage={FIRST_IMAGE}
secondImage={SECOND_IMAGE}
/>
</div>
</div>
</div>
)
}

export default BeforeAfter