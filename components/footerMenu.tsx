import { useAnim8 } from "@/lib/anim8";
import { listContent, useNavi } from "@/lib/navi";
import { useState } from "react";


const FooterMenu = () => {
	const [hovered, setHover] = useState('');
	const { setCurrentContent, currentContent } = useNavi();
	const { footerMenu, hidefootermenu, anim8content } = useAnim8();

	function checkHover(item : string) {
		if (hovered == item || currentContent.name == item ) 
		return true;
	}

	function handleClick(index : number){
		setCurrentContent(listContent[index]),
		anim8content(),
		hidefootermenu()
	}


	return (
		<div style={{position:"fixed", width:"100%", minHeight:"100%", top:0, display:"flex", ...footerMenu}}>
			<div style={{display:"flex", flexGrow:1, flexDirection:"column", justifyContent:"space-between", alignItems:"center"}}>
				<div style={{width:'100%', backgroundColor:"black", flexGrow:1, opacity:0.7}} onClick={() => hidefootermenu()}></div>
				<div style={{display:"flex", flexDirection:"column", width:'100%', backgroundColor:"#374151", borderStyle:"solid", borderWidth:2,borderColor:"white", borderRadius:10}}>
				{listContent.map((item, index) => (
					<div
					onMouseEnter={() => setHover(item.name)}
					onMouseLeave={() => setHover('')}
					onClick={() => handleClick(index)}
					style={{
						backgroundColor: checkHover(item.name) ? "white" : "#374151",
						color : checkHover(item.name) ? "black" : "white"
 
					}}
					key={index}>{'<'}{item.name}{' />'}</div>
				))}
				</div>
			</div>
			
		</div>
	)

} 

export default FooterMenu;