import FrontpageMenu from "@/components/frontpageMenu";
import { useAnim8 } from "@/lib/anim8";

const Stack = () => {
	const {enterLeft, enterRight} = useAnim8();

	return (
	<div>

		<div className="" style={{color:"#6B7280", ...enterLeft}}>
			<p>const Stack   {' = () => {'}</p>
			<p className="pl-5">return {'('}</p>
		</div>
			
		<div className="pl-10 mt-5" style={{marginBottom:40}}>
		</div>

		<FrontpageMenu style={{paddingLeft:40}}/>
			
		<div className="" style={{color:"#6B7280", ...enterRight}}>
			<p>{')};'}</p>
			<p>export default const Stack;</p>
		</div>
	</div>
)}

export default Stack;