"use client";


import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';



const Services = () => {

const gridRef = useRef(null);

useEffect(() => {
const observer = new IntersectionObserver(
(entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add('animate-fade-in');
}
});
},
{ threshold: 0.5 } // Adjust threshold as needed
);

if (gridRef.current) {
const gridItems = gridRef.current.querySelectorAll('.grid-item');
gridItems.forEach((item) => {
observer.observe(item);
});
}
}, []);

const services = [
{
icon: 'construction-consultant.svg',                                                                         
title: 'Construction Consultant',
text: 'Our experts guide your project with data-driven insights, optimizing construction plans for efficiency, cost-effectiveness, and quality.',
},
{
icon: 'architectural-design.svg', 
title: 'Architectural Design',
text: 'We fuse creativity with practicality, crafting spaces that inspire. Our architectural designs transform concepts into stunning blueprints.',
},
{
icon: 'real-estate.svg',
title: 'Real Estate',
text: 'Shape the future with us. Our real estate development team creates sustainable properties, enriching communities and markets.',
},
{
icon: 'general-contracting.svg',
title: 'General Contracting',
text: 'Leave every detail to us. As your general contractor, we manage and execute your project seamlessly, ensuring quality and safety.',
},
{
icon: 'reconstruction-services.svg',
title: 'Reconstruction Services',
text: 'Revitalize spaces while preserving heritage. Our reconstruction services blend modern techniques with meticulous attention.',
},
{
icon: 'property-development.svg',
title: 'Property Development',
text: 'From concept to reality, we specialize in transforming land into thriving developments, from planning to execution and beyond.',
},
];

return (
<div className="text-center py-32" ref={gridRef}>
<motion.div className="" 
initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
<h1 className=" text-4xl font-bold relative inline-block uppercase">
Our <span className='text-color-primary'>Services</span>
<div className="w-16 h-1.5 bg-amber-500 absolute  top-11 left-0 transform -translate-x-0"></div>
</h1>
<div className='mt-12 flex items-start justify-center'>
<div className="container mx-auto px-4 py-8 align-top grid grid-cols-1 space-y-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2 content-evenly items-start">
{services.map((service, index) => (
<div key={index} className="p-4">
<div className="md:flex lg:justify-start align-top  md:flex-col lg:flex-row items-start justify-center">
<div className="m-auto mt-0 lg:m-0 w-10 h-10 p-10 flex items-center align-top justify-center rounded-full border-4 border-amber-500 lg:mr-4">
<Image 
src={`/assets/images/${service.icon}`}
width={40}
height={40}
className=' absolute'
/>
</div>
<div className='mt-4 lg:mt-0'>
<h3 className="text-lg font-semibold lg:text-left">{service.title}</h3>
<p className="mt-2 lg:text-left text-base">{service.text}</p>
</div>
</div>
</div>
))}
</div>
</div>

</motion.div>
</div>
)
}

export default Services
