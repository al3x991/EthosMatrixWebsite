"use client";

import Image from "next/image"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const divStyle = {
    marginLeft: '16vw',
  };
  const banner2Syle = {
    bottom: '0',
    right: '3rem',
  };
  const primaryBTNwhite = {
    color: '#ffffff',
  };
const CTAbanner1 = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  
return (

<div className="relative  w-full h-full xl:h-2/6 py-16">
<Image 
src="/assets/images/layout-bg.webp"
blurDataURL="data:..."
placeholder="blur"
sizes={'(max-width: 1250px) 100vw, 1250px'}
alt="Hero-Background" 
style={{objectFit:"cover"}}
fill
/>
<div className="absolute inset-0 bg-black backdrop-brightness-50 opacity-75"></div>
<div className="flex  items-center xl:items-start flex-row gap-4 py-10 ">
<div className="hidden lg:block xinset-0" style={divStyle}>
<Image 
src="/assets/images/contractor.webp"
alt="Contruction-worker-Image"
width={'350'}
height={'350'}
className="absolute bottom-0  lg:left-[5vw]  xl:left-[20vw]"
/>
</div>
<div className="z-10 self-end  lg:pl-32 text-center  lg:mr-10  xl:mr-[8vw] items-center lg:ml-auto  lg:max-w-[680px]  lg:text-left px-12  text-white">
<h2 className="capitalize text-3xl sm:px-5 lg:px-0  md:text-3xl lg:text-4xl font-semibold mb-6">
Our Journey in <span className="text-color-primary">Craftsmanship</span>.</h2>
<p className="my-5  text-sm md:text-base mb-12">
Step into the heart of our company's evolution. Delve into the stories that have shaped our identity, from humble beginnings to becoming industry innovators. Explore our values, culture, and the team that fuels our passion for creating exceptional spaces.</p>
<button className="quote-btn" style={primaryBTNwhite}>
            Learn More
          </button>
</div>
</div>

</div>
)
}

export default CTAbanner1