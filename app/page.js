'use client';

import Navbar from './components/Navbar'
import Hero from './components/home/Hero'
import Services from './components/home/Services';
import Banner from './components/home/Banner'
import CTAbanner1 from './components/home/CTAbanner1'
import BeforeAfter from './components/home/BeforeAfter'
import Welcome from './components/home/Welcome'
import FPHome from './components/home/FPHome'
import FBHome from './components/home/FBHome'
import Footer from './components/Footer'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <motion.main initial={{ opacity : 0, translateX: -25}} 
    animate={{ opacity : 1, translateX: 0}} transition={{duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1]}} exit={{ opacity : 0, translateX: -25}}>
<Navbar/>
<Hero/>
<Banner/>
<Welcome/>
<Services/>
<CTAbanner1/>
<BeforeAfter />
<FPHome/>
<FBHome/>
<Footer/>
    </motion.main>
  )
}
