"use client";

import Image from "next/image";
import { motion } from 'framer-motion';



const Banner = () => {
  return (
  //   <motion.div
  //   initial={{ x: '-100%' }}
  //   animate={{ x: '0%' }}
  //   className="md:flex items-center justify-center py-10  bg-yellow-500"
  //   transition={{ duration: 0.2, delay: 0.5, type: 'spring', stiffness: 80 }}
  // >
  <>
  
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: -0.0, type: 'spring', stiffness: 120 }}
        className="md:flex items-center justify-center py-10  bg-yellow-500"
      >
      <div className="text-center lg:flex md:gap-4 align-middle px-5 py-5 md:py-0">
        <p className=" pb-5 text-xl md:text-base text-amber-950">Need a consultation? Start planning building your dream by telling us about your project</p>
        <button className="p-3 md:p-1s text-sm bg-slate-100 text-black w-2/4 md:w-52">
            Enquire Here
          </button>
      </div>
      </motion.div>
      </>
  )
}

export default Banner