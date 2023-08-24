import Image from "next/image"

const Welcome = () => {
return (
<div className="container mx-auto px-12 ">
<div className="py-32">
<div className="flex flex-col lg:flex-row justify-center items-center">

<div className="">
<Image src="/assets/images/construction-excellence.gif " alt="" width={550} height={550} />
</div>

<div className='max-w-lg pb-20 xl:pb-0 lg:max-w-3xl xl:px-20'>
    <div className='py-5'>
<small className=''>Artistry in Every Corner</small>
<h1 className=" text-3xl  md:text-4xl font-bold relative">
Elevating Excellence
<span className="absolute ">
<span className="bg-amber-500 w-3 h-3 rounded-full block"></span>
</span>
</h1>
</div>
<p className='text-base'>We channel our passion into every project, and our commitment to excellence is non-negotiable. From groundbreaking to finishing touches, our team's enthusiasm and expertise drive us to deliver unparalleled results. We thrive on challenges, innovate with purpose, and collaborate seamlessly to bring your vision to life.</p>
</div>

</div>
</div>

</div>
)
}

export default Welcome