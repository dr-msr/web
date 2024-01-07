import { useAnim8 } from "@/lib/anim8";
import { Content, listContent, useNavi } from "@/lib/navi";
import { CSSProperties, useState } from "react";


interface FrontMenuProps {
	style?: CSSProperties;
  }

const FrontpageMenu: React.FC<FrontMenuProps> = ({ style }) => {

	const { blurContent, trigEnterLeft, trigEnterRight, } = useAnim8();

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
		trigEnterRight(),
		trigEnterLeft(),
		setCurrentContent(item);

		
	}

	return (
		<div style={{display:'flex', flexDirection:"row", justifyContent:'space-between', overflow:"hidden", flexWrap:"nowrap"}}>
			{listContent.map((item, index) => (
				<div key={index}	onMouseEnter={() => setHoveredStates(item.name)}
				onMouseLeave={() => clearHover()}
				onClick={() => handleClick(item)} className={`${hover(item.name) ? 'bg-gray-500' : null}`} style={style}>
				
				<div 
					style={{ 
						color: 'white', 
						transition: 'background-color 0.3s',
						backgroundColor : hover(item.name) ? '#374151' : '',
						}}> 
				
					{'<'}{item.name}{' />'}
				</div>
			</div>
			))}
			</div>
	);
  };

export default FrontpageMenu
