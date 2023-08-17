import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Banner from './components/Banner'

export default function Home() {
  return (
    <main>
<Navbar/>
<Hero/>
<Banner/>
<Services/>
    </main>
  )
}
