import Content from "@/components/content";
import Footer from "@/components/footer";
import FrontpageMenu from "@/components/frontpageMenu";
import Navbar from "@/components/navbar";
import { useAnim8 } from "@/lib/anim8";
import { useNavi } from "@/lib/navi";
import { useEffect } from "react";


export default function Container() {
	const { swipe, setMobile, isMobile } = useNavi();
	const { anim8content, loopAnim8 } = useAnim8();

	useEffect(() => {
		anim8content();
		loopAnim8();

		if (window.innerWidth <= 768) {
			setMobile(true);
		} else {
			setMobile(false);
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
		}, []);
	
	return (
		<div {...swipe}>
		<div className='container mx-auto relative max-w-xl flex flex-col gap-5'>
			<Navbar />
			{ !isMobile && ( <FrontpageMenu />)}
			<Content />
			<Footer />

  		</div>
		  </div>
	)
}