"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const FPHome = () => {
const cardsData = [
{
imageSrc: 'chapelhill.webp',
title: 'Chapel Hill',
subtitle: 'Construction - Office Building',
description: 'Discover our noteworthy office building project, where design brilliance meets construction expertise. A collaborative effort that delivers a modern, functional space, tailored to our client`s vision',
},
{
imageSrc: 'houserenovation.webp',
title: 'House Renovation',
subtitle: 'Renovation - Private property',
description: 'Revived a Lekki residence with meticulous reconstruction, blending modern amenities while retaining its distinctive charm.',
},
{
imageSrc: 'lab1.webp',
title: 'Engineering Lab',
subtitle: 'Construction - School Lab',
description: 'We proudly constructed a state-of-the-art engineering lab for a renowned university in Ondo State. This achievement showcases our dedication to creating advanced learning spaces that inspire and support academic growth.',
},
];

const [hoveredCard, setHoveredCard] = useState(null);

return (
<div
className="flex justify-center items-center  bg-gray-100 relative overflow-hidden"
style={{
backgroundImage: `url('/assets/images/background2.webp')`,
backgroundSize: 'cover',
backgroundPosition: 'center',
}}
>

<div className="absolute inset-0 bg-black backdrop-brightness-50 opacity-75"></div>
<div className="container mx-auto px-20 relative z-10 py-10">
<div className=' ml-5 pt-20 pb-5 text-white'>
<h1 className=" text-4xl font-bold relative inline-block capitalize">
Featured <span className='text-color-primary'>Projects</span>
<div className="w-8 h-1.5 bg-amber-500 absolute  top-11 left-0 transform -translate-x-0"></div>
</h1>
</div>
<div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 pb-20">
{cardsData.map((card, index) => (
<div
key={index}
className="relative  w-auto p-4 transition duration-300 transform hover:scale-105"
onMouseEnter={() => setHoveredCard(index)}
onMouseLeave={() => setHoveredCard(null)}
>
<div className="relative h-0 pb-[100%]">
<Image
src={`/assets/images/${card.imageSrc}`}
alt={card.title}
layout="fill"
objectFit="cover"
className=' '
/>
<div className={`absolute inset-0 flex flex-col justify-center  text-white text-center transition-opacity duration-300 ${
hoveredCard === index ? 'opacity-0' : 'opacity-100'
}`}>
<p className="text-sm font-semibold">{card.subtitle}</p>
<h2 className="text-xl font-bold mt-2">{card.title}</h2>
</div>
{hoveredCard === index && (
<div className="absolute inset-0 bg-amber-600 opacity-80"></div>
)}
</div>
<div
className={`absolute inset-0 flex flex-col justify-center max-w-lg mx-auto items-center text-white text-center transition-opacity duration-300 ${
hoveredCard === index ? 'opacity-100' : 'opacity-0'
}`}
>
<p className="text-sm font-semibold">{card.subtitle}</p>
<h2 className="text-xl font-bold mt-2">{card.title}</h2>
{hoveredCard === index ? (
<div className='mx-auto px-10'>
<p className="mt-2  text-xs hidden xl:block">{card.description}</p>
<button className="mt-4 border border-white  bg-transparent text-white py-1 px-4  hover:border-none hover:text-black hover:bg-white focus:outline-none">
View More
</button>
</div>
) : null}
</div>
</div>
))}
</div>
</div>
</div>
);
};

export default FPHome;
