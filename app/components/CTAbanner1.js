import Image from "next/image"
import Slider from "./Slider"

const divStyle = {
    marginLeft: '16vw',
  };
  const banner2Syle = {
    bottom: '0',
    right: '3rem',
  };
  const primaryBTNwhite = {
    color: '#ffffff',
  };
const CTAbanner1 = () => {
return (

<div className="relative  w-full h-full lg:py-40 lg:my-40">
<Image 
src="/assets/images/layout-bg.webp"
blurDataURL="data:..."
placeholder="blur"
sizes="100vw"
alt="Hero-Background" 
objectFit="cover"
layout="fill"
/>
<div className="absolute inset-0 bg-black backdrop-brightness-50 opacity-75"></div>
<div className="flex  items-center flex-row gap-4 py-10  max-w-screen-lg">
<div className="hidden lg:block absolute inset-0" style={divStyle}>
<Image 
src="/assets/images/contractor.webp"
alt="Contruction-worker-Image"
width={'350'}
height={'350'}
className="absolute bottom-0  left-5"
/>
</div>
<div className="text-center justify-center px-5 mx-auto items-center lg:mr-90 xl:mr-52  lg:bottom-0 lg:-right-10  lg:text-start z-10 lg:absolute pr-5 py-24  lg:max-w-xl lg:pr-12  text-white">
<h2 className="uppercase text-3xl sm:px-5 lg:px-0  md:text-xl font-semibold mb-6">
Redefining spaces, <span className="text-color-primary">enriching lives</span>.</h2>
<p className="my-5 max-w-lg md:max-w-2xl lg:max-w-3xl text-sm md:text-base mb-12">
From revitalizing existing structures to shaping new horizons, we specialize in turning ambitious visions into tangible reality.
Explore the art of construction excellence and let your aspirations come to life with our expertise.</p>
<button className="quote-btn" style={primaryBTNwhite}>
            Discover More
          </button>
</div>
</div>



</div>
)
}

export default CTAbanner1