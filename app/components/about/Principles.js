"use client";

import Image from "next/image"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from "next/link";

const Principles = () => {

  const corePrinciples = [
    { title: 'Execellence', img: '/assets/images/excellence.svg'},
    { title: 'Innovation', img: '/assets/images/innovation.svg' },
    { title: 'Integrity', img: '/assets/images/integrity.svg' },
    { title: 'Collaboration', img: '/assets/images/collaboration.svg' },
    { title: 'Sustainability', img: '/assets/images/sustainability.svg' },
    { title: 'Client Centric', img: '/assets/images/cca.svg' },
    { title: 'Empowerment', img: '/assets/images/empowerment.svg' },
    ];
  
return (
<div className="pb-8 lg:pb-16">
<div className="relative  w-full h-full ">
<Image 
src="/assets/images/menatwork2.webp"
blurDataURL=" "
placeholder="blur"
sizes={'(max-width: 1250px) 100vw, 1250px'}
alt="Hero-Background" 
style={{objectFit:"cover",  objectPosition: '50% 20%'}}
fill
/>
<div className="absolute inset-0 bg-black backdrop-brightness-50 opacity-75"></div>

<div className="flex lg:items-start w-full">
<div className="hidden w-[750px] xl:w-[500px]  col-span-2 overflow-hidden lg:h-[850px] xl:h-[780px] 1xl:h-[790px]  relative xl:block inset-0">
<Image 
src="/assets/images/menatwork.webp"
alt="Men At Work"
fill
blurDataURL=" "
placeholder="blur"
style={{objectFit:"cover"}}
className="w-full h-full "
/>
</div>
  
<div className="p-2 xl:p-16   z-10 mx-0 col-span-2  w-full lg:mx-10 2xl:mx-20 justify-center  items-start text-center lg:text-left flex flex-col lg:flex-row lg:gap-2  text-white">
<div className="xl:absolute mt-10 gap-5 top-5 xl:left-[50%] text-center mx-auto lg:mx-10 2xl:mx-20 items-center justify-center lg:text-left lg:justify-normal lg:items-start xl:transform xl:-translate-x-1/2 p-10 xl:p-16  text-white">
<div className="w-full flex flex-col gap-y-2 capitalize">
<small className="hidden xl:block uppercase text-sm">CORE VALUES</small>
<div className="hidden xl:block w-8 h-1.5 bg-amber-500"></div>
<div className="flex flex-row text-3xl md:text-4xl font-bold items-center justify-center  xl:items-start xl:justify-normal">
<h1 className="flex flex-col">Our Core</h1><span className='text-amber-500'>&nbsp;Values</span>
</div>
</div>
<div className="py-12 ">
    <p>Our identity is woven into a fabric of unwavering principles that define our ethos and drive ou actions. These core values stand as guiding beacons, illuminating our path to excellence, innovation, and meaningful impact in the world of construction</p>
</div>
<div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 xl:gap-5 xl:gap-x-32 2xl:gap-5 flex-wrap">
{corePrinciples.map(({ title, img }, index) => (
<div className="w-[125px] h-[125px] relative" key={index}>
  <div className="absolute top-0 left-0 w-full h-full    bg-black opacity-50"></div>
  <div className="p-5 flex flex-col items-center justify-center align-middle  z-30 top-1/2 left-1/2  text-white text-center">
  <Image 
src={img}
width={50}
alt='icon'
height={50}
className='z-10 pb-2'
/>
<p className="text-white text-sm z-10 font-light">{title}</p>
  </div>
</div>
))}
</div>
</div>
</div>
</div>
</div>
<div className="flex bg-amber-500 -left-1/2 mx-auto items-center justify-center py-10">
<Link href={'/contact'} className="  p-6 cursor-pointer"><div className="text-center lg:flex md:gap-4 align-middle px-5 py-5 md:py-0">
        <p className=" pb-5 text-xl xl:text-2xl font-medium md:text-base text-amber-950">Eager to discuss your vision with our experts? <span className="underline">Start a Conversion</span></p>
      </div>
      </Link>
      </div>
</div>
)
}

export default  Principles