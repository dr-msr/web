
import { useAnim8 } from "@/lib/anim8";
import { Content, listContent, useNavi } from "@/lib/navi";
import Link from "next/link";
import { CSSProperties, useState } from "react";
import { VscGithub, VscTwitter } from "react-icons/vsc";

export default function Navbar() {
	const { currentContent, setCurrentContent } = useNavi();
	const [hoverHome, setHoverHome] = useState(false);

	const { blurContent, trigEnterLeft, trigEnterRight } = useAnim8();


	const handleTopButton = (e: React.MouseEvent<HTMLDivElement>) => {
		const buttonElement = (e.currentTarget as HTMLDivElement).style;	
			buttonElement.color = 'white';
			buttonElement.transition = 'color 0.3s'
			buttonElement.borderWidth = '2',
			buttonElement.borderRadius = '10',
			buttonElement.borderStyle= 'solid,',
			buttonElement.backgroundColor = '#374151',
			buttonElement.padding = '10',
	
		(e.currentTarget as HTMLDivElement).addEventListener('mouseleave', () => {
			buttonElement.color = '#374151';
			buttonElement.transition = 'color 0.3s';
			buttonElement.borderWidth = '2';
			buttonElement.borderRadius = '10';
			buttonElement.backgroundColor = '';
			buttonElement.borderStyle= 'none';
			buttonElement.padding = '10';

		});
	  };

	const handleContent = (item : Content) => {
		setHoverHome(false),
		blurContent(),
		trigEnterRight(),
		trigEnterLeft(),
		setCurrentContent(item);

	}

	  
	if (currentContent.title == "drmsr.tsx") {
			return(
				<div className={'sticky top-0 left-0 right-0 border rounded mt-5 p-1 pl-5 pr-5 bg-gray-200 divide-gray-800 flex-row' } style={{display:'flex', gap:10, justifyContent:"space-between"}}>
					<div style={{display:"flex", flexDirection:"row", gap:10, alignItems:"center"}}>
						<div style={{color:"black"}}> {'>'} </div>
						<div 
							onMouseEnter={() => setHoverHome(true)}
							onMouseLeave={() => setHoverHome(false)}
							onClick={() => handleContent(listContent[0])}
							style={{ 
								color: hoverHome ? 'black' : 'white', 
								borderWidth:0,
								borderStyle: hoverHome? "none" : "solid",
								paddingLeft:10,
								paddingRight:10,
								borderRadius:10,
								backgroundColor: hoverHome? "" : "#374151",
								}}>
								drmsr.tsx
						</div>
					</div>
					<div style={TopButtonStyles}>
					<Link href="https://github.com/dr-msr/" target="_blank"><div style={{padding:5, borderRadius:10}} onMouseEnter={(e) => handleTopButton(e)}><VscGithub /></div></Link>
					<Link href="https://twitter.com/drmsr_dev" target="_blank"><div style={{padding:5, borderRadius:10}} onMouseEnter={(e) => handleTopButton(e)}><VscTwitter /></div></Link>
					</div>
				</div>		
			)
	} else {
			return (
				<div className={'sticky top-0 left-0 right-0 border rounded mt-5 p-1 pl-5 pr-5 bg-gray-200 divide-gray-800 flex-row' } style={{display:'flex', gap:10, justifyContent:"space-between"}}>
				<div style={{display:"flex", flexDirection:"row", gap:10, alignItems:"center"}}>
					<div style={{color:"black"}}> {'>'} </div>
					<div 
						onMouseEnter={() => setHoverHome(true)}
						onMouseLeave={() => setHoverHome(false)}
						onClick={() => 
							handleContent(listContent[0])
						}
						style={{ 
							color: hoverHome ? 'white' : 'black', 
							transition: 'color 0.3s,', 
							
							borderWidth:0,
							borderStyle: hoverHome? "solid" : "none",
							paddingLeft:10,
							paddingRight:10,
							borderRadius:10,
							backgroundColor: hoverHome? "#374151" : "",
							}}>
						drmsr
					</div>
					<div style={{display:"flex", flexDirection:"row", gap:10, alignItems:"center", color:"black"}}>
							<div>{'> '}</div>
							<div
							style={{ 
								transition: 'color 0.3s,', 
								paddingLeft:10,
								paddingRight:10,
								backgroundColor: "#374151",
								color: 'white', 
								borderRadius:10,
								borderWidth:0,
								borderStyle: "none",



								}}>
									{currentContent.title}</div>
							</div>

							
					</div>
					<div style={TopButtonStyles}>
					<Link href="https://github.com/dr-msr/" target="_blank"><div style={{padding:5, borderRadius:10}} onMouseEnter={(e) => handleTopButton(e)}><VscGithub /></div></Link>
					<Link href="https://twitter.com/drmsr_dev" target="_blank"><div style={{padding:5, borderRadius:10}} onMouseEnter={(e) => handleTopButton(e)}><VscTwitter /></div></Link>
					</div>
				</div>		
			)



	
		}
}

const TopButtonStyles : CSSProperties = {
	alignSelf:"center", 
	color:"#374151", 
	flexDirection: 'row', 
	display:"flex", 
}