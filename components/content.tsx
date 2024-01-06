
import { useAnim8 } from "@/lib/anim8";
import { useNavi } from "@/lib/navi";
import Image from 'next/image';



export default function Content() {
	const { currentContent } = useNavi();
	const { contentStyle } = useAnim8();
	return (
				<div className={'border p-5 bg-gray-50 transition-all dark:bg-gray-700'} style={contentStyle}>
					<div>{currentContent.content}</div>
				</div>
				
	)
}