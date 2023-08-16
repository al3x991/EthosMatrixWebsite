import Image from "next/image";

const Hero = () => {
return (
<section className="relative w-full h-[80vh] bg-fixed">
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
<div className="absolute inset-0 flex items-center justify-center text-white text-center">
<h1 className="text-4xl font-bold">Your Title Here</h1>
<p className="mt-2 text-lg">Your subtitle goes here.</p>
</div>
</section>
);
};

export default Hero;