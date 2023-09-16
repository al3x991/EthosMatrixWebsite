'use client';

import './globals.css'
import { Nunito } from 'next/font/google'
import { motion, AnimatePresence } from 'framer-motion'



const nunito_sans = Nunito({
  subsets: ['latin'],
  variable: "--font-nunito-sans",
  weight: "variable",
});




export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <AnimatePresence mode='wait'>
      <motion.body  className={`${nunito_sans.variable} font-sans selection:bg-amber-500 selection:text-white`}>
      <div id="__next">{children}</div>
      </motion.body>
        </AnimatePresence>
    </html>
  )
}




