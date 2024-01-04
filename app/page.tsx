'use client';

import Content from '@/components/content';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Navi } from '@/lib/navi';

export default function Home() {	
return (
	<div className='container mx-auto relative max-w-xl'>
		<Navi>
			<Navbar />
			<Content />
			<Footer />
		</Navi>
  	</div>
)}
