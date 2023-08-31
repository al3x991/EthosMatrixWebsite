"use client";

import Image from "next/image"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Statement = () => {


  
return (
<div className="py-8 lg:py-16 overflow-hidden">
<div className="relative  w-full h-full xl:h-2/6">
<Image 
src="/assets/images/lab-building-construction.webp"
blurDataURL=" "
placeholder="blur"
sizes={'(max-width: 1250px) 100vw, 1250px'}
alt="Hero-Background" 
style={{objectFit:"cover"}}
fill
/>
<div className="absolute inset-0 bg-black backdrop-brightness-50 opacity-75"></div>

<div className="flex xl:items-start justify-between">
<div className="absolute  xl:left-0 top-5 text-center  w-[400px] md:w-[600px] xl:w-[900px] max-w-[1200px] mx-0 lg:mx-10 2xl:mx-20 items-center justify-center xl:text-left xl:justify-normal xl:items-start transform min-w-[400px]   p-16  text-white">
<h1 className="text-3xl  font-bold">Guiding the path: our misson and vision</h1>
</div>
<div className="p-16 z-10 mx-0 lg:mx-10 2xl:mx-20 justify-center  items-start text-center lg:text-left flex flex-col lg:flex-row lg:gap-10  text-white">
  <div className="flex flex-col gap-y-1">
<div className="mt-48 lg:mt-32 flex justify-center items-center lg:justify-normal lg:items-start flex-col xl:flex-row gap-10">
<Image 
src={'/assets/images/mission.svg'}
width={60}
alt='icon'
height={60}
className=''
/>
  <div className=" lg:justify-normal lg:items-start">
  <h2 className="font-bold text-2xl">Our Mission</h2>
<p className="my-5 max-w-2xl  text-base mb-12 ">
Step into the heart of our company's evolution. Delve into the stories that have shaped our identity, from humble beginnings to becoming industry innovators. 
Explore our values, culture, and the team that fuels our passion for creating exceptional spaces.</p>
</div>
</div>
<div className="flex justify-center items-center lg:justify-normal lg:items-start flex-col xl:flex-row gap-10">
<Image 
src={'/assets/images/vision.svg'}
width={60}
alt='icon'
height={60}
className=''
/>
  <div className=" lg:justify-normal lg:items-start ">
  <h2 className="font-bold text-2xl">Our Vision</h2>
<p className="my-5 max-w-2xl text-base mb-12 ">
Step into the heart of our company's evolution. Delve into the stories that have shaped our identity, from humble beginnings to becoming industry innovators. 
Explore our values, culture, and the team that fuels our passion for creating exceptional spaces.</p>
</div>
</div>
</div>
</div>
<div className="hidden w-[750px] xl:w-[500px]  col-span-2 overflow-hidden lg:h-[850px] xl:h-[730px] 1xl:h-[730px] 2xl:h-[670px] relative lg:block inset-0">
<Image 
src="/assets/images/menatwork3.webp"
alt="Men At Work"
fill
blurDataURL=" "
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