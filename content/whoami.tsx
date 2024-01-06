import FrontpageMenu from "@/components/frontpageMenu";
import { useAnim8 } from "@/lib/anim8";

const WhoAmI = () => {
	const { enterLeft, enterRight} = useAnim8();

	return (
	<div>

		<div className="" style={{color:"#6B7280", ...enterLeft}}>
			<p>const WhoAmI   {' = () => {'}</p>
			<p className="pl-5">return {'('}</p>
		</div>
			
		<div style={{marginBottom:40, paddingLeft:10, marginTop:20}}>
			<p>Hi, I'm Syamirul.</p>
			<p style={{marginTop:20}}>I'm a budding developer based in Kuala Lumpur.</p>
			<p>My favourite techstack is React, React-Native.</p>
			<p></p>
			<p style={{marginTop:20}}>I'm also currently practicing as a doctor.</p>
			<p>And a student in 42 Kuala Lumpur.</p>
		</div>

		<FrontpageMenu style={{paddingLeft:10}}/>
			
		<div className="" style={{color:"#6B7280", marginTop:5, ...enterRight}}>
			<p>{')};'}</p>
			<p>export default const WhoAmI;</p>
		</div>
	</div>
)}

export default WhoAmI;