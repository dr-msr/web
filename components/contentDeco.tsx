import { useAnim8 } from "@/lib/anim8"
import { useNavi } from "@/lib/navi";
import React from "react";



export const ContentHeader = () => {
	const { enterLeft, enterRight} = useAnim8();
	const  { currentContent } = useNavi();

	if (currentContent.name != "Frontpage") {
	return (
		<div className="" style={{color:"#6B7280", ...enterLeft}}>
		<p>const {currentContent.name}   {' = () => {'}</p>
		<p className="pl-5">return {'('}</p>
	</div>)
	} else {
		return
	}
}

export const ContentFooter = () => {
	const { enterLeft, enterRight} = useAnim8();
	const  { currentContent } = useNavi();
	if (currentContent.name != "Frontpage") {
	return (
<div className="" style={{color:"#6B7280", ...enterRight}}>
			<p>{')};'}</p>
			<p>export default const {currentContent.name};</p>
		</div>)
	} else {
		return
	}
}

