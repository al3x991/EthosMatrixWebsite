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
      icon: 'construction-consultant.svg', // Replace with your desired icon
      title: 'Feature 1',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit et malesuada fames ac turpis egestas.',
    },
    {
      icon: 'architectural-design.svg', // Replace with your desired icon
      title: 'Feature 2',
      text: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.',
    },
    {
      icon: 'real-estate.svg', // Replace with your desired icon
      title: 'Feature 3',
      text: 'Vestibulum sed ipsum lacinia, euismod turpis sit amet, finibus ex.',
    },
    {
      icon: 'general-contracting.svg', // Replace with your desired icon
      title: 'Feature 4',
      text: 'Fusce quis libero id orci vulputate ultricies in a velit.',
    },
    {
      icon: 'reconstruction-services.svg', // Replace with your desired icon
      title: 'Feature 5',
      text: 'Aenean accumsan elit a mi sodales, nec vehicula urna venenatis.',
    },
    {
      icon: 'property-development.svg', // Replace with your desired icon
      title: 'Feature 6',
      text: 'Integer luctus nulla id ligula elementum, ut fermentum justo consectetur.',
    },
  ];

return (
  <div className="text-center my-40" ref={gridRef}>
    <motion.div className="" 
    initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
  <h1 className=" text-4xl font-bold relative inline-block uppercase">
    Our <span className='text-color-primary'>Services</span>
    <div className="w-16 h-1.5 bg-amber-500 absolute  top-11 left-0 transform -translate-x-0"></div>
  </h1>
  <div className='mt-12 flex items-center justify-center'>
  <div className="container mx-auto px-4 py-8 align-middle grid grid-cols-1 space-y-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-2 content-evenly items-start">
      {services.map((service, index) => (
        <div key={index} className="p-4">
          <div className="md:flex lg:justify-start align-middle  md:flex-col lg:flex-row items-center justify-center">
            <div className="m-auto mt-0 lg:m-0 w-20 h-20 p-10 flex items-center justify-center rounded-full border-4 border-amber-500 lg:mr-4">
              <Image 
              src={`/assets/images/${service.icon}`}
              width={50}
              height={50}
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
  {/* <p className="mt-2 top-24 text-gray-600 capitalize">Subtitle</p> */}
  </motion.div>
</div>
)
}

export default Services
{/* <div className='ml-10 mr-10 mt-12  mb-40 md:px-10 lg:px-52'>
<div className='flex items-center justify-center'>
<h1 className='text-center text-2xl md:text-4xl uppercase  font-bold'>Our 
<span className='text-color-primary'>&nbsp;Services</span></h1>
</div>
<div className='flex items-center justify-center'>
  <p className='text-center text-base md:text-1xl capitalize font-medium'> All over system </p>
  </div>
</div> */}