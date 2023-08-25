import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Banner from './components/Banner'
import CTAbanner1 from './components/CTAbanner1'
import BeforeAfter from './components/BeforeAfter'
import Welcome from './components/Welcome'
import FPHome from './components/FPHome'
import FBHome from './components/FBHome'
import Footer from './components/Footer'

export default function Home() {
  return (
    <main>
<Navbar/>
<Hero/>
<Banner/>
<Services/>
<CTAbanner1/>
<BeforeAfter />
<FPHome/>
<Welcome/>
<FBHome/>
<Footer/>
    </main>
  )
}
