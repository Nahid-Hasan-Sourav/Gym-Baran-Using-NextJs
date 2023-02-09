import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '@/components/navbar/Navbar'
import Banner from '@/components/Banner/Banner'
import Healthy from '@/components/Healthy/Healthy'
import Routine from '@/components/Routine/Routine'
import GetStarted from '@/components/GetStarted/GetStarted'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className=''>
     <Navbar/>
     <Banner/>
     <Healthy/>
     <Routine/>
     <GetStarted/>
    </div>
  )
}
