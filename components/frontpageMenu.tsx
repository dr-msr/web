import { listContent, useNavi } from "@/lib/navi";
import { useState } from "react";

const FrontpageMenu = () => {

	const [currentMenu, setCurrentMenu] = useState('')
	const { setCurrentContent } = useNavi();

	function setHoveredStates(item: string) {
		setCurrentMenu(item);
	}

	function hover(item: string) {
		if (currentMenu == item)
		return true
	}

	function clearHover() {
		setCurrentMenu('');
	}

	return (
		<div>
			{listContent.map((item, index) => (
				<p key={index}	onMouseEnter={() => setHoveredStates(item.name)}
				onMouseLeave={() => clearHover()}
				onClick={() => setCurrentContent(item)} className={`pl-20 ${hover(item.name) ? 'bg-gray-500' : null}`}>
				
				<span 
					style={{ color: hover(item.name) ? 'black' : 'white', transition: 'color 0.3s' }}> 
				
					{'<'}{item.name}{' />'}
				</span>
			</p>
			))}
			</div>
	);
  };

export default FrontpageMenu
