"use client";

import ReactBeforeSliderComponent  from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';


const FIRST_IMAGE = {
imageUrl: '/assets/images/test12.jpg',
width: '500px',
height: '50px'
};
const SECOND_IMAGE = {
imageUrl: '/assets/images/test13.jpg',
width: '500px',
height: '50px'
};

const BeforeAfter = () => {
return (
<div className=''>
<div className='flex flex-col md:flex-row'>
<div className=''>

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