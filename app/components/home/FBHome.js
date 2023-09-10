"use client";

import Image from "next/image"
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const FBHome = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
return (

<div className=" ">
<div className="flex flex-col  py-20 justify-center items-center">
<h1 className=" text-4xl font-bold relative inline-block capitalize">
Latest <span className='text-color-primary'>News</span>
<div className="w-8 h-1.5 bg-amber-500 absolute  top-11 left-0 transform -translate-x-0"></div>
</h1>
</div>
<div className="p-5 grid mx-auto max-w-[1200px] grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5">
{/* <!--Card 1--> */}
<div className="rounded overflow-hidden max-w-[360px] shadow-lg">
<div className=" relative h-52 ">
<Image  src="/assets/images/blog1.webp" placeholder="blur" blurDataURL= "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" fill sizes={'(max-width: 1250px) 100vw, 1250px'} style={{objectFit:"cover"}}  alt="Blog Post 1"/>
</div>
<div className="px-6 py-4">
<div className="font-bold text-base mb-2">Designing Sustainable Homes: A Guide to Eco-Friendly Living</div>
<p className="text-gray-700 text-sm">
Explore the principles and practices of sustainable home design that seamlessly integrate environmental consciousness and comfort, creating spaces that are both stylish and eco-friendly.
</p>
</div>
<div className="px-6 pt-4 pb-2">
<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#construction</span>
<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#modern</span>
<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#exteriors</span>
</div>
</div>
{/* <!--Card 2--> */}
<div className="rounded overflow-hidden max-w-[360px] shadow-lg">
<div className=" relative h-52">
<Image  src="/assets/images/blog2.webp" placeholder="blur" blurDataURL= "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" fill sizes={'(max-width: 1250px) 100vw, 1250px'} style={{objectFit:"cover"}}  alt="Blog Post 2"/>
</div>
<div className="px-6 py-4">
<div className="font-bold text-base mb-2">Unlocking the Power of Renovation: Transforming Spaces, Enriching Lives</div>
<p className="text-gray-700 text-sm">
Discover the transformative potential of renovation as we delve into the art of rejuvenating interiors, revitalizing exteriors, and crafting spaces that reflect your unique lifestyle and aspirations.
</p>
</div>
<div className="px-6 pt-4 pb-2">
<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#lifestyle</span>
<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#creatvity</span>
<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#interiors</span>
</div>
</div>

{/* <!--Card 3--> */}
<div className="rounded overflow-hidden max-w-[360px] shadow-lg hidden xl:block">
<div className=" relative h-52">
<Image  src="/assets/images/blog3.webp" fill placeholder="blur" blurDataURL= "data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==" sizes={'(max-width: 1250px) 100vw, 1250px'} style={{objectFit:"cover"}}  alt="Blog Post 3"/>
</div>
<div className="px-6 py-4">
<div className="font-bold text-base mb-2">The Blueprint of Architectural Brilliance: Unveiling the Art of Design</div>
<p className="text-gray-700 text-sm">
Delve into the world of architectural design as we unravel the intricate process of creating awe-inspiring structures that harmonize innovation, functionality, and aesthetic appeal, reshaping skylines and stories alike.
</p>
</div>
<div className="px-6 pt-4 pb-2">
<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
<span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#fall</span>
</div>
</div>
</div>
</div>


)
}

export default FBHome