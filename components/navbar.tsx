import { listContent, useNavi } from "@/lib/navi";
import { useState } from "react";

export default function Navbar() {
	const { currentContent, setCurrentContent } = useNavi();
	const [hoverHome, setHoverHome] = useState(false);

	if (currentContent.title == "drmsr.tsx") {
			return(
				<div className={'sticky top-0 left-0 right-0 border p-1 pl-5 bg-gray-50 flex-row' } style={{display:'flex', gap:10}}>
					<div 
						onMouseEnter={() => setHoverHome(true)}
						onMouseLeave={() => setHoverHome(false)}
						onClick={() => setCurrentContent(listContent[0])}
						style={{ color: hoverHome ? 'red' : 'black', transition: 'color 0.3s' }}>
							 {'>'} drmsr.tsx
					</div>
							</div>		
			)
	} else {
			return (
			
			<div className={'sticky top-0 left-0 right-0 border p-1 pl-5 bg-gray-50 flex-row'} style={{ display: 'flex', gap: 10 }}>
					<div
						onMouseEnter={() => setHoverHome(true)}
						onMouseLeave={() => setHoverHome(false)}
						onClick={() => setCurrentContent(listContent[0])}
						style={{ color: hoverHome ? 'red' : 'black', transition: 'color 0.3s' }}>
						{'>'} drmsr
					</div>
					<div>{'> '}{currentContent.title}</div></div>
				);
		}
}