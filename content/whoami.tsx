import FrontpageMenu from "@/components/frontpageMenu";

const WhoAmI = () => {
	return (
	<div>

		<div className="" style={{color:"#6B7280"}}>
			<p>const WhoAmI   {' = () => {'}</p>
			<p className="pl-5">return {'('}</p>
		</div>
			
		<div style={{marginBottom:40, paddingLeft:40, marginTop:20}}>
			<p>Hi, I'm Syamirul.</p>
			<p style={{marginTop:20}}>I'm a budding developer based in Kuala Lumpur.</p>
			<p>My favourite techstack is React, React-Native.</p>
			<p></p>
			<p style={{marginTop:20}}>I'm also currently practicing as a doctor.</p>
			<p>And a student in 42 Kuala Lumpur.</p>
		</div>

		<FrontpageMenu style={{paddingLeft:40}}/>
			
		<div className="" style={{color:"#6B7280"}}>
			<p>{')};'}</p>
			<p>export default const WhoAmI;</p>
		</div>
	</div>
)}

export default WhoAmI;