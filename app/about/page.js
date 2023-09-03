'use client';


import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"
import { motion } from "framer-motion"
import Story from "../components/about/Story";
import Statement from "../components/about/Statement";
import Factscounter from "../components/about/Factscounter";
import Services from "../components/home/Services";
import Principles from "../components/about/Principles";
import Team from "../components/about/Team";


export default function About() {
  return (
    <motion.main initial={{ opacity : 0, translateX: -25}} 
    animate={{ opacity : 1, translateX: 0}} transition={{duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1]}} exit={{ opacity : 0, translateX: -25}}>
<Navbar/>
<PageHeader title='About Us' imgSource={"/assets/images/about-hero.webp"} curL='About Us'/>
<Story />
<Statement />
<Services />
<Factscounter />
<Principles />
<Team />
<Footer/>
    </motion.main>
  )
}
