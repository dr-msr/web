'use client';

import Content from '@/components/content';
import Footer from '@/components/footer';
import Header from '@/components/header'
import MainCard from '@/components/mainCard'
import Navbar from '@/components/navbar';
import Top from '@/components/top'
import { Navi } from '@/lib/navi';
import Image from 'next/image'

	
export default function Home() {	
	
  return (

	<div className='container mx-auto relative max-w-xl'>
		<Navi>
			<Navbar />
			<Content />
			<Footer />
		</Navi>
  	</div>


  )
}
