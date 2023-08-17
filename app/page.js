import Image from 'next/image'
import Navbar from './components/Navbar'
import Hero from './components/hero'
import Services from './components/Services'

export default function Home() {
  return (
    <main>
<Navbar/>
<Hero/>
<Services/>
    </main>
  )
}
