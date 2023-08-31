'use client';

import './globals.css'
import { Inter } from 'next/font/google'
import { motion, AnimatePresence } from 'framer-motion'



const inter = Inter({ subsets: ['latin'] })




export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <AnimatePresence mode='wait'>
      <motion.body className={inter.className}>
      <div id="__next">{children}</div>
      </motion.body>
        </AnimatePresence>
    </html>
  )
}




