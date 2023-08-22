import Image from "next/image"

const Welcome = () => {
return (
<div className="container mx-auto px-12">
<div className="py-32">
<div className="flex flex-col lg:flex-row justify-center items-center">
<div className="lg:max-w-lg">
<h1 className="font-bold text-2xl capitalize py-10">Elevating Excellence</h1>
<p>we channel our passion into every project, and our commitment to excellence is non-negotiable. From groundbreaking to finishing touches, our team's enthusiasm and expertise drive us to deliver unparalleled results. We thrive on challenges, innovate with purpose, and collaborate seamlessly to bring your vision to life.</p>
</div>
<div className="">
<Image src="/assets/images/construction-excellence.gif " alt="" width={500} height={500} />
</div>
</div>
</div>

</div>
)
}

export default Welcome