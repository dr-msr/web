
import { useNavi } from "@/lib/navi";
import Image from 'next/image';



export default function Content() {
	const { currentContent } = useNavi();

	function loadSplash() {
		return (
			<Image
			src="@/assets/dp.jpg"
			alt="Picture of the author"
			width={100}
			height={100}
		  />
		)
	}




	return (
				<div className={'border p-5 bg-gray-50 transition-all dark:bg-gray-700'} style={{position:"relative"}}>
					<div>{currentContent.content}</div>
					<div style={{position:"absolute", width:"100%", height:400, left:0, top:0, display:"flex", alignItems:"center", justifyContent:"center"}}>
					{loadSplash()}</div>
				</div>
				
	)
}