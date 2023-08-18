import Image from "next/image";
import "./hero.css"
const Hero = () => {
return (
<section className="relative w-full h-[100vh] md:h-[80vh] bg-fixed">
{/* className="object-cover w-full h-full"  */}
<Image 
src="/assets/images/home1.jpg"
blurDataURL="data:..."
placeholder="blur"
sizes="100vw"
alt="Hero-Background" 
objectFit="cover"
layout="fill"
/>
<div className="absolute inset-0 bg-black backdrop-brightness-50 opacity-75"></div>
<div className="absolute inset-0 mt-20 md:mt-40 lg:mt-44 flex  text-white">
{/* max-w-3xl mx-auto ml-10 */}
<div className="ml-10 mr-10  h-2/3 flex flex-col  items-start justify-center mb-40 md:px-10 lg:px-52">
<p className=" text-xs md:text-base mb-3">Building Beyond Boundaries</p>
<h2 className="uppercase text-2xl max-w-xl md:max-w-6xl md:text-4xl font-semibold mb-6">
<span className="text-color-primary">Redefining</span> spaces, enriching lives.</h2>
<p className="my-5 max-w-lg md:max-w-3xl text-sm md:text-base mb-12">
From revitalizing existing structures to shaping new horizons, we specialize in turning ambitious visions into tangible reality.
Explore the art of construction excellence and let your aspirations come to life with our expertise.</p>
<button className="border-btn">
Discover More
</button>
</div>
</div>
</section>
);
};

export default Hero;