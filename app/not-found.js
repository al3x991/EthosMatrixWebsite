import Link from 'next/link'
import Image from 'next/image'

export default function NotFound() {
  return <div className='container mx-auto'>
    <div className=" flex flex-col items-center justify-center pt-20">
    <img 
src="https://i.giphy.com/media/PvcOp93XdMoQ6S6IiV/giphy.webp"
alt="404 Not Found" 
width={650}
height={650}
/>
<div className=''>
        <Link className='border-btn2' href="/">Go back to Home</Link>
      </div>
</div>
      
  </div>
}