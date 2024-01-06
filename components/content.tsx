
import { useAnim8 } from "@/lib/anim8";
import { useNavi } from "@/lib/navi";

export default function Content() {
	const { currentContent } = useNavi();
	const { contentStyle } = useAnim8();
		
	return (
				<div className={'border p-5 bg-gray-50 transition-all dark:bg-gray-700'} 
				style={{
					borderRadius:5,
					borderColor:'white',
					...contentStyle }} >
					<div>{currentContent.content}</div>
				</div>
				
	)
}