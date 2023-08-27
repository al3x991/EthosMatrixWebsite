'use client';


import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"
import { motion } from "framer-motion"
import Story from "../components/about/Story";
import Statement from "../components/about/Statement";


export default function Home() {
  return (
    <motion.main initial={{ opacity : 0, translateX: -25}} 
    animate={{ opacity : 1, translateX: 0}} transition={{duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1]}} exit={{ opacity : 0, translateX: -25}}>
<Navbar/>
<PageHeader title='About Us' imgSource={"/assets/images/home1.webp"} curL='About Us'/>
<Story />
<Statement />
<Footer/>
    </motion.main>
  )
}
