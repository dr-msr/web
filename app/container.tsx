import Content from "@/components/content";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useAnim8 } from "@/lib/anim8";
import { useNavi } from "@/lib/navi";
import { useEffect } from "react";


export default function Container() {
	const { swipe, leftright } = useNavi();
	const { anim8content, loopAnim8 } = useAnim8();


	useEffect(() => {
		anim8content();
		loopAnim8();

		document.addEventListener('keydown', leftright);
		return () => {
		  document.removeEventListener('keydown', leftright);
		};

		}, []);
	
	return (
		<div className='container mx-auto relative max-w-xl flex flex-col gap-5' {...swipe}>
			<Navbar />
			<Content />
			<Footer />
  		</div>
	)
}

function anim8content() {
	throw new Error("Function not implemented.");
}
function loopAnim8() {
	throw new Error("Function not implemented.");
}

