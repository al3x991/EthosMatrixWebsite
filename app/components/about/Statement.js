"use client";

import Image from "next/image"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Statement = () => {


  
return (
<div className="py-8 lg:py-16">
<div className="relative  w-full h-full xl:h-2/6">
<Image 
src="/assets/images/lab-building-construction.webp"
blurDataURL="data:..."
placeholder="blur"
sizes={'(max-width: 1250px) 100vw, 1250px'}
alt="Hero-Background" 
style={{objectFit:"cover"}}
fill
/>
<div className="absolute inset-0 bg-black backdrop-brightness-50 opacity-75"></div>

<div className="flex xl:items-start justify-between">
  <div className="absolute  top-5 left-10  z-10 flex-grow p-16  text-white">
<h1>Guiding the path: our misson and vision</h1>
</div>
<div className="p-16 z-10 mx-0 lg:mx-10 2xl:mx-20 justify-center  items-start text-center lg:text-left flex flex-col lg:flex-row lg:gap-10  text-white">
  <div className="flex flex-col gap-y-1">
<div className="mt-20 flex flex-col xl:flex-row gap-2">
<Image 
src={'/assets/images/mission.svg'}
width={50}
alt='icon'
height={50}
className=''
/>
  <div className="">
  <h2 className="bold text-lg">Our Mission</h2>
<p className="my-5 max-w-2xl  xl:justify-normal xl:items-start  text-sm md:text-base mb-12 ">
Step into the heart of our company's evolution. Delve into the stories that have shaped our identity, from humble beginnings to becoming industry innovators. 
Explore our values, culture, and the team that fuels our passion for creating exceptional spaces.</p>
</div>
</div>
<div className="flex flex-col xl:flex-row gap-2">
<Image 
src={'/assets/images/mission.svg'}
width={50}
alt='icon'
height={50}
className=''
/>
  <div className="">
  <h2 className="bold text-lg">Our Viision</h2>
<p className="my-5 max-w-2xl  xl:justify-normal xl:items-start  text-sm md:text-base mb-12 ">
Step into the heart of our company's evolution. Delve into the stories that have shaped our identity, from humble beginnings to becoming industry innovators. 
Explore our values, culture, and the team that fuels our passion for creating exceptional spaces.</p>
</div>
</div>
</div>
</div>
<div className="hidden w-[500px] col-span-2 overflow-hidden h-[600px] relative xl:block inset-0">
<Image 
src="/assets/images/menatwork3.webp"
alt="Men At Work"
fill
blurDataURL="data:..."
placeholder="blur"
style={{objectFit:"cover"}}
className="w-full h-full"
/>
</div>
</div>
</div>
</div>
)
}

export default Statement