
import { useAnim8 } from "@/lib/anim8";
import { useNavi } from "@/lib/navi";
import { ContentFooter, ContentHeader } from "./contentDeco";

export default function Content() {
	const { currentContent, isMobile } = useNavi();
	const { contentStyle } = useAnim8();
		
	return (
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
				
	)
}