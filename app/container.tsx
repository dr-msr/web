import Content from "@/components/content";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useNavi } from "@/lib/navi";


export default function Container() {
	const { swipe } = useNavi();
	
	return (
		<div className='container mx-auto relative max-w-xl flex flex-col gap-5' {...swipe}>
			<Navbar />
			<Content />
			<Footer />
  		</div>
	)
}