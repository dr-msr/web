
import { useAnim8 } from "@/lib/anim8";
import { listContent, useNavi } from "@/lib/navi";
import { ContentFooter, ContentHeader } from "./contentDeco";
import Image from 'next/image'


export default function Content() {
	const { currentContent, isMobile } = useNavi();
	const { contentStyle } = useAnim8();
	
	if (currentContent == listContent[0]) {
		return (
			<div style={{display:"flex", flexDirection:"column", justifyContent:"", gap:20, flexGrow:1, height:'80vh'}}>
			<div style={contentStyle}>
				<Image alt="" width="768" height="510" src="https://ghchart.rshah.org/374151/dr-msr" />	
			</div>
				<div className={'border p-5 bg-gray-50 transition-all dark:bg-gray-700'} 
				style={{
					borderRadius:5,
					borderColor:'white',
					maxHeight: !isMobile ? 512 : '',
					overflow:'scroll',
					...contentStyle }} >
					<ContentHeader />
						<div>{currentContent.content}</div>
					<ContentFooter />
				</div>
				</div>
		)

	} else {
		return (
				<div className={'border p-5 bg-gray-50 transition-all dark:bg-gray-700'} 
				style={{
					flexGrow:1,
					borderRadius:5,
					borderColor:'white',
					maxHeight: !isMobile ? 512 : '',
					height:'80vh',
					overflow:'hidden',
					...contentStyle }} >
					<ContentHeader />
						<div>{currentContent.content}</div>
					<ContentFooter />
				</div>
				
	)
}}