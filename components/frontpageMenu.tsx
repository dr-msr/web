import { listContent, useNavigation } from "@/lib/navi";
import { FC, useContext, useState } from "react";


const FrontpageMenu = () => {

	const [currentMenu, setCurrentMenu] = useState('')

	const { setCurrentContent } = useNavigation();

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
			{listContent.map((item) => (
				<p	onMouseEnter={() => setHoveredStates(item.name)}
				onMouseLeave={() => clearHover()}
				onClick={() => setCurrentContent(item)} className={`pl-20 ${hover(item.name) ? 'bg-gray-500' : null}`}>
				
				<span 
					style={{ color: hover(item.name) ? 'white' : 'black', transition: 'color 0.3s' }}> 
				
					{'<'}{item.name}{' />'}
				</span>
			</p>
			))}

		
		
			

			</div>
	);
  };


export default FrontpageMenu
