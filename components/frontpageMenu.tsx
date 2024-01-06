import { useAnim8 } from "@/lib/anim8";
import { Content, listContent, useNavi } from "@/lib/navi";
import { CSSProperties, useState } from "react";


interface FrontMenuProps {
	style?: CSSProperties;
  }

const FrontpageMenu: React.FC<FrontMenuProps> = ({ style }) => {

	const { blurContent } = useAnim8();

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

	function handleClick(item : Content) {
		blurContent(),
		setCurrentContent(item);

		
	}

	return (
		<div>
			{listContent.map((item, index) => (
				<p key={index}	onMouseEnter={() => setHoveredStates(item.name)}
				onMouseLeave={() => clearHover()}
				onClick={() => handleClick(item)} className={`${hover(item.name) ? 'bg-gray-500' : null}`} style={style}>
				
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
