"use client";

import ReactBeforeSliderComponent  from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const SECOND_IMAGE = {
imageUrl: '/assets/images/poolBefore.webp',

};
const FIRST_IMAGE = {
imageUrl: '/assets/images/poolAfter.webp',

};

const BeforeAfter = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5,
      });
      
return (
<div className='container mx-auto px-12 py-16  pb-40'>
<div className='flex gap-0 flex-col xl:flex-row items-center'>
<motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.3 }}
      className="max-w-lg pb-20 xl:pb-0 lg:max-w-3xl xl:px-20"
    >
    <div className='py-5'>
<small className=''>Transforming Spaces with Expertise</small>
<h1 className=" text-3xl  md:text-4xl font-bold relative">
Masterful Renovations
<span className="absolute ">
<span className="bg-amber-500 w-3 h-3 rounded-full block"></span>
</span>
</h1>
</div>

<p className='text-base'>Our approach blends innovation and tradition to craft spaces that make an enduring impact, encompassing everything from rejuvenating interiors to reimagining exteriors.<br></br><br></br>

With a steadfast commitment to excellence, our renovations exceed expectations. Our artisans infuse skill and passion into each project, breathing new life into homes and spaces. Whether it's restoring historical charm or crafting modern marvels, we're your partners in uncovering potential. Experience the art of renovation and redefine your surroundings with us.</p>
</motion.div>
<motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: inView ? 1 : 0, y: inView ? 0 : 20 }}
      transition={{ duration: 0.6 }}
      className=' w-4/5 xl:max-w-lg mx-auto'>
<ReactBeforeSliderComponent
firstImage={FIRST_IMAGE}
secondImage={SECOND_IMAGE}
/>
</motion.div>
</div>
</div>
)
}

export default BeforeAfter