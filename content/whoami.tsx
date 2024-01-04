import FrontpageMenu from "@/components/frontpageMenu";

const WhoAmI = () => {
	return (
	<div>

		<div className="" style={{color:"#6B7280"}}>
			<p>const WhoAmI   {' = () => {'}</p>
			<p className="pl-5">return {'('}</p>
		</div>
			
		<div className="pl-10 mt-5" style={{marginBottom:40}}>
			<p>Hi, I'm Syamirul.</p>
			<p>I'm a budding developer based in Kuala Lumpur.</p>
			<p>My favourite techstack is React, React-Native.</p>
		</div>

		<FrontpageMenu style={{paddingLeft:40}}/>
			
		<div className="" style={{color:"#6B7280"}}>
			<p>{')};'}</p>
			<p>export default const WhoAmI;</p>
		</div>
	</div>
)}

export default WhoAmI;