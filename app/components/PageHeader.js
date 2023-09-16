"use client";


import Image from "next/image";
import { motion, useTransform, useScroll } from 'framer-motion';
import "./home/hero.css"



const Hero = ({title, imgSource, curL }) => {
    const { scrollY } = useScroll();
    const translateY = useTransform(scrollY, [0, 400], [0, -100]); // Adjust values for desired parallax effect
  

return (
<section className="relative flex w-full  h-[80vh]">
 
{/* className="object-cover w-full h-full"  */}
<Image 
src={imgSource}
blurDataURL="data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw=="
placeholder="blur"
alt="Hero-Background" 
style={{objectFit:"cover"}}
fill
sizes={'(max-width: 1250px) 100vw, 1250px'}
priority
/>

<div className="absolute inset-0 bg-black backdrop-brightness-50 opacity-75"></div>
   <div>
    <div className="inset-0 absolute  top-[60%]  left-1/2 text-white" style={{ transform: 'translate(-50%, -50%)' }}>
<div className="flex flex-col gap-3 justify-center text-center">
<h2 className="capitalize text-3xl font-extrabold leading-9 tracking-tight sm:text-4xl md:text5xl">
{title}</h2>
<small>Home / <b className=" text-amber-500">{curL}</b></small>
</div>
</div>
</div>
</section>
);
};

export default Hero;
