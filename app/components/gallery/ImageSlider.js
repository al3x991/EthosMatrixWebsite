import React, { useState, useEffect } from 'react';
import Image from 'next/image';


const ImageSlider = () => {
const images = [
'/assets/images/gallery/office01.webp',
'/assets/images/gallery/office02.webp',
'/assets/images/gallery/office03.webp',
'/assets/images/gallery/office04.webp',
];

const [currentIndex, setCurrentIndex] = useState(0);

const goToPrevImage = () => {
setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
};

const goToNextImage = () => {
setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
};

useEffect(() => {
const interval = setInterval(goToNextImage, 3000); // Auto slide every 5 seconds

return () => clearInterval(interval);
}, []);

return (
<div className="relative w-full h-96 overflow-hidden xl:w-[500px]">
<Image
src={images[currentIndex]}
alt={`Image ${currentIndex + 1}`}
style={{objectFit:"cover"}}
fill
blurDataURL={images[currentIndex]}
placeholder="blur"
priority
/>
<div className="absolute inset-0 flex items-center justify-between">
<div
className="text-white opacity-50 hover:opacity-75 p-2"
onClick={goToPrevImage} as="image"
>
<Image 
src='/assets/images/chevLeft.svg' 
width={45} 
height={45}
placeholder="blur"
blurDataURL={'/assets/images/chevLeft.svg'}
priority
sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
alt="Previous" />
</div>
<div
className="text-white opacity-50 hover:opacity-75 p-2"
onClick={goToNextImage} as="image"
>
<Image src='/assets/images/chevRight.svg'
width={60}
placeholder="blur"
blurDataURL={'/assets/images/chevRight.svg'}
priority
sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
height={60}
alt="Next" />
</div>
</div>
</div>
);
};

export default ImageSlider;