"use client";

import Image from "next/image"
import { motion } from 'framer-motion';


const FBHome = () => {
return (

<div className="container py-10  mx-auto">
<div className="flex flex-col py-20 justify-center items-center">
<h1 className=" text-4xl font-bold relative inline-block capitalize">
Latest <span className='text-color-primary'>News</span>
<div className="w-8 h-1.5 bg-amber-500 absolute  top-11 left-0 transform -translate-x-0"></div>
</h1>
</div>
<div class="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
{/* <!--Card 1--> */}
<div class="rounded overflow-hidden shadow-lg">
<div className=" relative h-80">
<Image  src="/assets/images/blog1.webp" layout='fill' objectFit='contain' alt="Blog Post 1"/>
</div>
<div class="px-6 py-4">
<div class="font-bold text-xl mb-2">Designing Sustainable Homes: A Guide to Eco-Friendly Living</div>
<p class="text-gray-700 text-base">
Explore the principles and practices of sustainable home design that seamlessly integrate environmental consciousness and comfort, creating spaces that are both stylish and eco-friendly.
</p>
</div>
<div class="px-6 pt-4 pb-2">
<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#construction</span>
<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#modern</span>
<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#exteriors</span>
</div>
</div>
{/* <!--Card 2--> */}
<div class="rounded overflow-hidden shadow-lg">
<div className=" relative h-80">
<Image  src="/assets/images/blog2.webp" layout='fill' objectFit='contain' alt="Blog Post 2"/>
</div>
<div class="px-6 py-4">
<div class="font-bold text-xl mb-2">Unlocking the Power of Renovation: Transforming Spaces, Enriching Lives</div>
<p class="text-gray-700 text-base">
Discover the transformative potential of renovation as we delve into the art of rejuvenating interiors, revitalizing exteriors, and crafting spaces that reflect your unique lifestyle and aspirations.
</p>
</div>
<div class="px-6 pt-4 pb-2">
<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#lifestyle</span>
<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#creatvity</span>
<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#interiors</span>
</div>
</div>

{/* <!--Card 3--> */}
<div class="rounded overflow-hidden shadow-lg hidden xl:block">
<div className=" relative h-80">
<Image  src="/assets/images/blog3.webp" layout='fill' objectFit='contain' alt="Blog Post 3"/>
</div>
<div class="px-6 py-4">
<div class="font-bold text-xl mb-2">The Blueprint of Architectural Brilliance: Unveiling the Art of Design</div>
<p class="text-gray-700 text-base">
Delve into the world of architectural design as we unravel the intricate process of creating awe-inspiring structures that harmonize innovation, functionality, and aesthetic appeal, reshaping skylines and stories alike.
</p>
</div>
<div class="px-6 pt-4 pb-2">
<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
<span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
</div>
</div>
</div>
</div>


)
}

export default FBHome