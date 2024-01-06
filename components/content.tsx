
import { useAnim8 } from "@/lib/anim8";
import { useNavi } from "@/lib/navi";
import { useEffect } from "react";



export default function Content() {
	const { currentContent } = useNavi();
	const { contentStyle, anim8content, loopAnim8 } = useAnim8();

	const { leftright } = useNavi();









	useEffect(() => {
		anim8content();
		loopAnim8();

		document.addEventListener('keydown', leftright);

		return () => {
		  document.removeEventListener('keydown', leftright);
		};

		}, []);
		
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