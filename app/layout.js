'use client';

import './globals.css'
import { Inter } from 'next/font/google'
import { motion, AnimatePresence } from 'framer-motion'



const inter = Inter({ subsets: ['latin'] })


export const metadata = {
  title: 'EthosMatrix',
  description: 'Embark on a journey of transformation with EthosMatrix. Our passion lies in crafting extraordinary spaces that stand as testaments to creativity, innovation, and precision.',
}

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




