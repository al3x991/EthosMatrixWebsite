import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'EthosMatrix',
  description: 'Embark on a journey of transformation with EthosMatrix. Our passion lies in crafting extraordinary spaces that stand as testaments to creativity, innovation, and precision.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}




