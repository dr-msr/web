'use client';

import Content from '@/components/content';
import Footer from '@/components/footer';
import Header from '@/components/header'
import MainCard from '@/components/mainCard'
import Navbar from '@/components/navbar';
import Top from '@/components/top'
import Image from 'next/image'
import { useEffect, useState } from 'react';

export default function Home() {
	
  return (
	<div className='container mx-auto relative'>
		<Navbar />
		<Content />
		<Footer />
  	</div>
  )
}
