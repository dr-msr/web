'use client';

import Content from '@/components/content';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import { Anim8 } from '@/lib/anim8';
import { Navi } from '@/lib/navi';

export default function Home() {	
return (
	<div className='container mx-auto relative max-w-xl flex flex-col gap-5'>
		<Anim8>
			<Navi>
				<Navbar />
				<Content />
				<Footer />
			</Navi>
		</Anim8>
  	</div>
)}
