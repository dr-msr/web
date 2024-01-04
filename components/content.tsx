
import { useNavi } from "@/lib/navi";
import Image from 'next/image';



export default function Content() {
	const { currentContent } = useNavi();
	return (
				<div className={'border p-5 bg-gray-50 transition-all dark:bg-gray-700'} style={{position:"relative"}}>
					<div>{currentContent.content}</div>
				</div>
				
	)
}