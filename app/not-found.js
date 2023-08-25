import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return <div className='container mx-auto'>
    <div className=" flex flex-col items-center justify-center pt-20">
    <Image 
src="/assets/images/undercnstruction.gif"
blurDataURL="data:..."
placeholder="blur"
alt="Hero-Background" 
width={650}
height={650}
/>
<div className=''>
        <Link className='border-btn2' href="/">Go back to Home</Link>
      </div>
</div>
      
  </div>
}