import ImageSlider from './ImageSlider';
import Image from 'next/image';
import { useState } from "react";
import Lightbox from '../Lightbox';
import slide2 from '@/app/data/gallery2';
import { motion
 } from 'framer-motion';
const ImageGallery = () => {
const sections = [
{
title: 'Modern Spaces',
subheading: 'Building Dreams, One Structure at a Time',
images: [
'/assets/images/gallery/office01.webp',
],
layout: 'grid',
},
{
title: 'Events & Awards',
subheading: 'Lagos Real Estate Event',
images: [
'/assets/images/gallery/1.webp',
'/assets/images/gallery/2.webp',
'/assets/images/gallery/3.webp',
'/assets/images/gallery/4.webp',
'/assets/images/gallery/5.webp',
'/assets/images/gallery/6.webp',
],
layout: 'staggered',
},
{
title: 'Hostel & Lab Construction Projects',
subheading: 'Building the Foundations of Progress',
images: [
'/assets/images/gallery/maw01.webp',
'/assets/images/gallery/maw02.webp',
'/assets/images/gallery/maw03.webp',
'/assets/images/gallery/maw04.webp',
'/assets/images/gallery/maw05.webp',
'/assets/images/gallery/maw06.webp',
'/assets/images/gallery/maw07.webp',
'/assets/images/gallery/maw08.webp',
],
layout: 'mosaic',
},
];

const getImageLayout = (layout, index) => {

if (layout === 'staggered') {
return index % 2 === 0 ? 'w-full lg:w-1/2' : 'w-full lg:w-1/3';
} else if (layout === 'mosaic') {
return index === 0 ? 'w-full h-full' : 'w-full h-1/2';
}
return 'w-full md:w-1/2 lg:w-1/3';
};

const [clickedImg, setClickedImg] = useState(null);
const [currentIndex, setCurrentIndex] = useState(null);

const handleClick = (image, index) =>{
setCurrentIndex(index);
setClickedImg(image);
}

const handleRotationRight= () => {
    const totalength = slide2.length;
    if(currentIndex + 1 >= totalength){
        setCurrentIndex(0);
        const newUrl = slide2[0];
        setClickedImg(newUrl);
        return;
    }
    const newIndex = currentIndex + 1;
    const newUrl = slide2.filter((item) => {

        return slide2.indexOf(item) === newIndex;

    });
    const newItem = newUrl[0];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
}

const handelRotationLeft = () => {
    const totalLength = slide2.length;
    if (currentIndex === 0) {
      setCurrentIndex(totalLength - 1);
      const newUrl = slide2[totalLength - 1];
      setClickedImg(newUrl);
      return;
    }
    const newIndex = currentIndex - 1;
    const newUrl = slide2.filter((item) => {
      return slide2.indexOf(item) === newIndex;
    });
    const newItem = newUrl[0];
    setClickedImg(newItem);
    setCurrentIndex(newIndex);
  };

return (
<div className="min-h-screen py-8 mx-auto container px-6">
<div className="max-w-[1320px] mx-auto">
<div className="flex flex-col xl:flex-row  justify-between gap-x-10 xl:gap-x-32">
<div className="">
<section className="mb-10">
<div className="text-center xl:text-left mb-4">
<h2 className="text-2xl font-semibold">{sections[0].title}</h2>
<p className="text-gray-600">{sections[0].subheading}</p>
</div>
<div className="flex lg:mx-auto xl:mx-0 flex-wrap gap-4 max-w-xl">
<ImageSlider />
</div>
</section>
</div>
<div className=" ">
<section className="mb-10">
<div className="text-center xl:text-left mb-4">
<h2 className="text-2xl font-semibold">{sections[1].title}</h2>
<p className="text-gray-600">{sections[1].subheading}</p>
</div>
<div className="flex flex-wrap gap-4  ">
{sections[1].images.map((image, imageIndex) => (
<div
key={imageIndex}
className={`flex flex-row relative md:mx-auto lg:mx-0 w-full h-[300px] md:w-[300px] md:h-[280px] lg:w-[300px] lg:h-[280px] xl:w-[150px] xl:h-[150px] 2xl:w-[200px] 2xl:h-[200px] rounded overflow-hidden`}
>
<Image src={image} 
alt={`Image ${imageIndex + 1}`} 
style={{objectFit:"cover"}}
fill
blurDataURL={image}
placeholder="blur"
sizes={'(max-width: 1250px) 100vw, 1250px'}
priority />
</div>
))}
</div>
</section>
</div>
</div>
<section className="mt-10 mb-10">
<div className="text-center mb-4">
<h2 className="text-2xl font-semibold">{sections[2].title}</h2>
<p className="text-gray-600">{sections[2].subheading}</p>
</div>
<div className="flex items-start flex-col md:flex-row flex-wrap gap-x-4 gap-y-4">
{sections[2].images.map((image, imageIndex) => (
<motion.div
key={imageIndex}
whileHover={{ scale: 1.05 }}
initial={{ opacity: 0, scale: 0.9 }}
animate={{ opacity: 1, scale: 1 }}
exit={{ opacity: 0, scale: 0.9 }}
transition={{ duration: 0.3, ease: 'easeInOut' }}
className={`rounded mx-auto lg:mx-0 cursor-pointer relative overflow-hidden w-full h-[300px] md:w-[300px] lg:h-[250px] xl:w-[230px] xl:h-[200px] 2xl:w-[250px] 2xl:h-[200px]`}
>
<Image src={image} 
alt={`Image ${imageIndex + 1}`} 
style={{objectFit:"cover"}}
fill
blurDataURL={image}
onClick={()=>handleClick(image, imageIndex)}
placeholder="blur"
sizes={'(max-width: 1250px) 100vw, 1250px'}/>
</motion.div>
))}
{clickedImg && <Lightbox clickedImg={clickedImg} handleRotationRight={handleRotationRight} setClickedImg={setClickedImg} handelRotationLeft={handelRotationLeft}/>}
</div>
</section>
</div>
</div>
);
};

export default ImageGallery;
