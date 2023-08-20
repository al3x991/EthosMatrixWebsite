"use client";


import Image from "next/image";
import { motion, useTransform, useScroll } from 'framer-motion';
import "./hero.css"



const Hero = () => {
    const { scrollY } = useScroll();
    const translateY = useTransform(scrollY, [0, 400], [0, -100]); // Adjust values for desired parallax effect
  

return (
<section className="relative flex w-full h-[100vh] md:h-[80vh] flex-1">
 
{/* className="object-cover w-full h-full"  */}
<Image 
src="/assets/images/home1.jpg"
blurDataURL="data:..."
placeholder="blur"
alt="Hero-Background" 
objectFit="cover"
layout="fill"
/>

<div className="absolute inset-0 bg-black backdrop-brightness-50 opacity-75"></div>
   <motion.div
   style={{ translateY }}
   className="absolute top-0 left-0 right-0 bottom-0"
   
 ><div className="absolute inset-0 mt-48  flex gap-10  text-white">

<div className="ml-10 mr-10 portrait:md:mt-24  h-2/3 flex flex-row lg:h-full gap-20 justify-between  mb-40 md:pl-3">
<div className="hidden lg:flex  md:ml-40  md:flex-row md:space-x-2 md:transform md:-rotate-90 align-middle  w-1/3">
{/* Facebook social link */}
<a href="#" className="flex flex-row gap-2">
<svg xmlns="http://www.w3.org/2000/svg" fill="#94a3b8" width="30px" height="30px" viewBox="0 0 32 32">

<g id="SVGRepo_bgCarrier" stroke-width="0"/>

<g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

<g id="SVGRepo_iconCarrier">

<path d="M21.95 5.005l-3.306-.004c-3.206 0-5.277 2.124-5.277 5.415v2.495H10.05v4.515h3.317l-.004 9.575h4.641l.004-9.575h3.806l-.003-4.514h-3.803v-2.117c0-1.018.241-1.533 1.566-1.533l2.366-.001.01-4.256z"/>

</g>

</svg>

<span className=" text-slate-400">Facebook</span>
</a>
{/* Twitter Social Link */}
<a href="#" className="flex flex-row gap-6">
<svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="25px" height="25px" viewBox="0 -2 20 20" version="1.1">
    <g id="Page-1" stroke="none" stroke-width="1" fill="none">
        <g id="Dribbble-Light-Preview" transform="translate(-60.000000, -7521.000000)" fill="#94a3b8">
            <g id="icons" transform="translate(56.000000, 160.000000)">
                <path d="M10.29,7377 C17.837,7377 21.965,7370.84365 21.965,7365.50546 C21.965,7365.33021 21.965,7365.15595 21.953,7364.98267 C22.756,7364.41163 23.449,7363.70276 24,7362.8915 C23.252,7363.21837 22.457,7363.433 21.644,7363.52751 C22.5,7363.02244 23.141,7362.2289 23.448,7361.2926 C22.642,7361.76321 21.761,7362.095 20.842,7362.27321 C19.288,7360.64674 16.689,7360.56798 15.036,7362.09796 C13.971,7363.08447 13.518,7364.55538 13.849,7365.95835 C10.55,7365.79492 7.476,7364.261 5.392,7361.73762 C4.303,7363.58363 4.86,7365.94457 6.663,7367.12996 C6.01,7367.11125 5.371,7366.93797 4.8,7366.62489 L4.8,7366.67608 C4.801,7368.5989 6.178,7370.2549 8.092,7370.63591 C7.488,7370.79836 6.854,7370.82199 6.24,7370.70483 C6.777,7372.35099 8.318,7373.47829 10.073,7373.51078 C8.62,7374.63513 6.825,7375.24554 4.977,7375.24358 C4.651,7375.24259 4.325,7375.22388 4,7375.18549 C5.877,7376.37088 8.06,7377 10.29,7376.99705" id="twitter-[#154]">

</path>
            </g>
        </g>
    </g>
</svg>
      
          <span className=" text-slate-400">Twitter</span>
          </a>

{/* Twitter Social Link */}
<a href="#" className="flex flex-row gap-6">
<svg xmlns="http://www.w3.org/2000/svg" width="25px" height="25px" viewBox="0 0 24 24" fill="#94a3b8">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="#94a3b8"/>
<path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" stroke="#94a3b8" fill="#94a3b8"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" fill="#94a3b8"/>
</svg>
      
          <span className=" text-slate-400">Instagram</span>
          </a>


</div>
<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex-grow lg:absolute" style={{ left: '15%' }} transition={{ delay: 0.0 }}>
<p className=" text-xs md:text-base mb-3">Building Beyond Boundaries</p>
<h2 className="uppercase text-2xl max-w-xl md:max-w-6xl md:text-4xl font-semibold mb-6">
<span className="text-color-primary">Redefining</span> spaces, enriching lives.</h2>
<motion.p initial={{ opacity: 0 }} className="my-5 max-w-lg md:max-w-3xl text-sm md:text-base mb-12" animate={{ opacity: 1 }} transition={{ delay: 0.2}}>
From revitalizing existing structures to shaping new horizons, we specialize in turning ambitious visions into tangible reality.
Explore the art of construction excellence and let your aspirations come to life with our expertise.</motion.p>
<motion.button initial={{ opacity: 0 }} className="border-btn" animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>Discover More</motion.button>
</motion.div>
</div>
</div>
</motion.div>
</section>
);
};

export default Hero;