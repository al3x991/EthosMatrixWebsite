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
<div className="absolute inset-0 mt-44 flex items-left center text-white">
<div className="max-w-3xl mx-auto ml-10">
        <p className="text-xs">Subtext Here</p>
        <h2 className="text-3xl font-semibold mb-4">Section Title</h2>
        <p className="text-sm">
          Section body content goes here. You can provide more information about your services or company.
        </p>
        <button className="border border-white text-white mt-4 px-6 py-2 rounded-md font-medium hover:bg-white hover:text-blue-500">
          Discover More
        </button>
      </div>
</div>
</section>
);
};

export default Hero;