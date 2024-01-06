'use client'

import { useAnim8 } from "@/lib/anim8";
import { Content, listContent, useNavi } from "@/lib/navi";
import Link from "next/link";
import router from "next/router";
import { CSSProperties, useState } from "react";
import { VscGithub, VscTwitter } from "react-icons/vsc";

export default function Navbar() {
	const { currentContent, setCurrentContent } = useNavi();
	const [hoverHome, setHoverHome] = useState(false);

	const { blurContent } = useAnim8();


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


	const handleNaviBreadcrumb = (e : React.MouseEvent) => {
		(e.currentTarget as HTMLDivElement).addEventListener('mouseenter', () => {

		});

		(e.currentTarget as HTMLDivElement).addEventListener('mouseleave', () => {
			
		});
	};

	const handleContent = (item : Content) => {
		setCurrentContent(item);
		blurContent();
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
								color: hoverHome ? 'white' : 'black', 
								transition: 'color 0.3s,', 
								
								borderWidth:0,
								borderStyle: hoverHome? "solid" : "none",
								paddingLeft:10,
								paddingRight:10,
								borderRadius:10,
								backgroundColor: hoverHome? "#374151" : "",
								}}>
								drmsr.tsx
						</div>
					</div>
					<div style={TopButtonStyles}>
					<Link href="https://github.com/dr-msr/" target="_blank"><div style={{padding:5, borderRadius:10}} onMouseEnter={(e) => handleTopButton(e)}><VscGithub /></div></Link>
					<Link href="https://twitter.com/drmsr_dev" target="_blank"></Link><div style={{padding:5, borderRadius:10}} onMouseEnter={(e) => handleTopButton(e)}><VscTwitter /></div>
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
								}}>
									{currentContent.title}</div>
							</div>

							
					</div>
					<div style={TopButtonStyles}>
					<Link href="https://github.com/dr-msr/" target="_blank"><div style={{padding:5, borderRadius:10}} onMouseEnter={(e) => handleTopButton(e)}><VscGithub /></div></Link>
					<Link href="https://twitter.com/drmsr_dev" target="_blank"></Link><div style={{padding:5, borderRadius:10}} onMouseEnter={(e) => handleTopButton(e)}><VscTwitter /></div>
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