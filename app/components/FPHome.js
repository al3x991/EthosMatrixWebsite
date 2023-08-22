"use client";

import Image from "next/image"
import { motion } from 'framer-motion';


const FPHome = () => {
return (
<div className="relative  w-full h-full lg:py-40 lg:my-40">
<Image 
src="/assets/images/layout-bg.webp"
blurDataURL="data:..."
placeholder="blur"
sizes="100vw"
alt="Hero-Background" 
objectFit="cover"
layout="fill"
/>
<div className="absolute inset-0 bg-black backdrop-brightness-50 opacity-75"></div>
<div className="container py-10 px-32">
<div className="flex flex-col items-start">
<h1 className=" text-4xl font-bold relative inline-block uppercase text-white">
    Featured <span className='text-color-primary'>Projects</span>
    <div className="w-16 h-1.5 bg-amber-500 absolute  top-11 left-0 transform -translate-x-0"></div>
  </h1>
</div>
<div className="flex items-center flex-row gap-4 py-10  ">
<div className="z-10 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300">
      <div className="relative h-40">
        <Image
        src="/assets/images/layout-bg.webp"
          alt="Modern Living Space"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">Modern Office Building</h2>
        <p className="text-gray-600">Lekki Phase 1, Lagos</p>
      </div>
    </div>
</div>
</div>


</div>
)
}

export default FPHome