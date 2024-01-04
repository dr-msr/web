
import { useNavi } from "@/lib/navi";

export default function Content() {
	const { currentContent } = useNavi();
	return (
				<div className={'border p-5 bg-gray-50 transition-all dark:bg-gray-700'}>
					{currentContent.content}
				</div>
	)
}