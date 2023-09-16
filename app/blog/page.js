'use client';


import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import PageHeader from "../components/PageHeader"
import { motion } from "framer-motion"
import BlogList from '../components/blog/blogList'


export default function About() {
  return (
    <motion.main initial={{ opacity : 0, translateX: -25}} 
    animate={{ opacity : 1, translateX: 0}} transition={{duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1]}} exit={{ opacity : 0, translateX: -25}}>
<Navbar/>
<PageHeader title='Our Blog' imgSource={"/assets/images/blog.webp"} curL='Blog'/>

<BlogList />
<Footer/>
    </motion.main>
  )
}
