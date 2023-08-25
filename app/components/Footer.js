"use client";


import Image from 'next/image';

const Footer = () => {
return (
<div className=" mt-80 bottom-0">
<div className="bg-amber-400 text-center py-12 md:py-4">
<div className="container flex justify-center gap-4 xl:gap-20 items-center flex-col md:flex-row  mx-auto">
<p className=" px-5 text-sm md:text-base font-medium text-amber-950">Stay up to date with the latest news. Subscribe to our newsletter:</p>
<div className="mt-0 md:mt-2 flex ">
<input
type="email"
placeholder="Enter your email"
className="border border-white rounded-l px-4 py-2 focus:outline-none"
/>
<button className=" bg-amber-500 text-amber-950  px-4 py-2 hover:bg-gray-300 transition duration-300">
Subscribe
</button>
</div>
</div>
</div>
<footer className=" text-white bg-[#1f1e1e]" >

<div
className="bg-cover bg-center relative"
style={{ backgroundImage: "url('/assets/images/fbackground.webp')" }}
>
<div className="bg-black bg-opacity-70 py-24 xl:py-40">
<div className="container mx-auto px-5 flex flex-col lg:flex-row items-center justify-center gap-12 xl:gap-48">
<div className="max-w-md md:text-left">
<Image
src={'/assets/images/logoW.svg'}
alt="Logo"
width={250}
height={250}
/>
<p className='py-5 text-sm'>We are creators of exceptional spaces that inspire and transform. With a passionate commitment to excellence, we embark on every project with a vision to elevate standards and redefine what's possible.</p>
</div>
<div className='grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4'>
<div className="col-span-1 mb-12 md:mb-0 max-w-md md:text-left">
<h3 className="relative text-lg font-semibold mb-6">Quick Links
<div className="w-4 h-1 bg-amber-500 absolute   top-8 left-0 transform -translate-x-0"></div></h3>
<ul className="list-none text-base xl:text-sm">
<li className="py-2">
<a href="#" className="text-gray-300 hover:text-white">
Home
</a>
</li>
<li className="py-2">
<a href="#" className="text-gray-300 hover:text-white">
Gallery
</a>
</li>
<li className="py-2">
<a href="#" className="text-gray-300 hover:text-white">
FAQ
</a>
</li>
<li className="py-2">
<a href="#" className="text-gray-300 hover:text-white">
Blog
</a>
</li>
<li className="py-2">
<a href="#" className="text-gray-300 hover:text-white">
Contact
</a>
</li>
</ul>
</div>
<div className="col-span-1 max-w-md md:text-left">
<h3 className="relative opacity-0 text-lg font-semibold mb-6">Company
<div className="w-4 h-1 bg-amber-500 absolute   top-8 left-0 transform -translate-x-0"></div>
</h3>
<ul className="list-none text-base xl:text-sm align-bottom justify-end">
<li className="py-2">
<a href="#" className="text-gray-300 hover:text-white">
About Us
</a>
</li>
<li className="py-2">
<a href="#" className="text-gray-300 hover:text-white">
Our Services
</a>
</li>
<li className="py-2">
<a href="#" className="text-gray-300 hover:text-white">
Our Work
</a>
</li>
</ul>
</div>
<div className="col-span-2 w-full  md:text-left">
<h3 className="relative text-lg font-semibold mb-6">Contact Us
<div className="w-4 h-1 bg-amber-500 absolute   top-8 left-0 transform -translate-x-0"></div>
</h3>
<ul className="list-none text-base xl:text-sm">
<li className="py-2">Address: 123 Street, Vctoria Island, Lagos</li>
<li className="py-2">Email: info@ethosmatrix.com</li>
<li className="py-2">Phone: +234 807 695 00000</li>
</ul>
</div>
</div>
</div>
</div>
</div>
<div className="text-center py-4 container mx-auto">
<p className="text-left text-slate-300 pl-4 text-sm">&copy; 2023 EthosMatrix </p>
</div>
</footer>
</div>
);
};

export default Footer;
