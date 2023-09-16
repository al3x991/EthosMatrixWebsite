"use client";


import Image from "next/image"
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import images from "../../data/images.js"
import { useState } from "react";
import Lightbox from "../Lightbox.js";

const Story = () => {

const [ref, inView] = useInView({
triggerOnce: true,
threshold: 0.5,
});

const [clickedImg, setClickedImg] = useState(null);
const [currentIndex, setCurrentIndex] = useState(null);

const handleClick = (image, index) =>{
setCurrentIndex(index);
setClickedImg(image);
}

const handleRotationRight= () => {
    const totalength = images.length;
    if(currentIndex + 1 >= totalength){
        setCurrentIndex(0);
        const newUrl = images[0];
        setClickedImg(newUrl);
        return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = images.filter((item) => {

        return images.indexOf(item) === newIndex;

    });
    const newItem = newUrl[0];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
}

const handelRotationLeft = () => {
    const totalLength = images.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = images[totalLength - 1];
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = images.filter((item) => {
      return images.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };


return (
<div className="container mx-auto px-12 ">
<div className="py-16">
<div className="flex flex-col xl:flex-row justify-center items-center">
<div className=' pb-20 xl:pb-0 lg:max-w-3xl xl:px-20'>
<div className='py-5'>
<small className=''>Our Story</small>
<h1 className=" text-3xl  md:text-4xl font-bold relative text-gray-700">
Elevating Excellence
<span className="absolute ">
<span className="bg-amber-500 w-3 h-3 rounded-full block"></span>
</span>
</h1>
</div>
<p className='text-base max-w-lg text-gray-700'>We channel our passion into every project, and our commitment to excellence is non-negotiable. From groundbreaking to finishing touches, our team's enthusiasm and expertise drive us to deliver unparalleled results. We thrive on challenges, innovate with purpose, and collaborate seamlessly to bring your vision to life.</p>
</div>
<div className="flex flex-col  gap-3">
<div className="relative sm:w-[310px]  md:w-[520px] xl:w-[500px] 2xl:w-[630px] h-48 lg:h-80">
<Image 
src="/assets/images/gallery/11.webp"
alt="About Image"
blurDataURL=" "
placeholder="blur"
style={{objectFit:"cover"}}
priority
fill/>
</div>
<div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 2xl:grid-cols-6 gap-x-1 gap-y-1  2xl:gap-x-[106px] 2xl:gap-y-2 max-w-lg">
{images.map((image, index) => (
<motion.div 
key={index}
whileHover={{ scale: 1.05 }}
initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 1, scale: 1 }}
exit={{ opacity: 0, scale: 0.9 }}
transition={{ duration: 0.3, ease: 'easeInOut' }}
className="relative cursor-pointer w-[80px] h-[60px] 2xl:w-[100px] 2xl:h-[80px] overflow-hidden">
<Image 
src={image} 
alt={'About Image'}  
blurDataURL=" "
placeholder="blur"
style={{objectFit:"cover"}}
sizes={'(max-width: 1250px) 100vw, 1250px'}
priority
onClick={()=>handleClick(image, index)}
fill/>
</motion.div>
))}
{clickedImg && <Lightbox clickedImg={clickedImg} handleRotationRight={handleRotationRight} setClickedImg={setClickedImg} handelRotationLeft={handelRotationLeft}/>}
</div>
</div>


</div>
</div>

</div>
)
}

export default Story