import FrontpageMenu from "@/components/frontpageMenu";

const FrontpageColored = () => {
	return (
	<div>
		<p><span style={{color: '#2e95d3'}}>import</span> <span style={{color:'#f22c3d'}}>React</span>, {'{'} useEffect {'}'} <span style={{color: '#2e95d3'}}>from</span> <span style={{color:'#00a67d'}}>'react'</span>; </p>
		<p><span style={{color:'#2e95d3'}}>import</span> {'{'} <span style={{color:'#f22c3d'}}>DailyRoutine</span>, getTime, write {'}'} <span style={{color: '#2e95d3'}}>from</span> <span style={{color:'#00a67d'}}>'../Reality'</span>; </p>

		<p className="mt-5"><span style={{color:'#2e95d3'}}>const</span> executeRoutine = {'('}<span style={{color:'#df3079'}}>routine</span>: <span style={{color:'#f22c3d'}}>DailyRoutine</span>{')'}: void ={'>'} {'{'}</p>
		<span className="p-10"><span style={{color:'#2e95d3'}}>if</span> (routine === <span style={{color:'#00a67d'}}>'day'</span>) {'{'} </span>
		<p><span className="p-20"><span style={{color:'#df3079'}}>write</span>.<span style={{color:'#f22c3d'}}>prescriptions</span>();</span></p>
		<span className="p-10">{'}'} <span style={{color:'#2e95d3'}}>else if</span> (routine === <span style={{color:'#00a67d'}}>'night'</span>) {'{'} </span>
		<p><span className="p-20"><span style={{color:'#df3079'}}>write</span>.<span style={{color:'#f22c3d'}}>codes</span>(); </span></p>
		<span className="p-10"> {'}'}{'}'}; </span>

		<p className="mt-5"><span style={{color: '#2e95d3'}}>const</span> <span style={{color:'#f22c3d'}}>Drmsr</span>: <span style={{color:'#f22c3d'}}>React</span>.FC = () ={'>'} {'{'} </p>
		<p className="pl-10"><span style={{color:'#f22c3d'}}>useEffect</span>(() ={'>'} {'{'} </p>
		<p className="pl-20"><span style={{color:'#f22c3d'}}>executeRoutine</span>(getTime.<span style={{color:'#f22c3d'}}>now</span>);</p> 
		<p className="pl-10">{'}'}, []);</p> 

		<p className="">  <span style={{color: '#2e95d3'}}>return</span> ( </p>
		<p className="pl-10"> {'<'}menu{'>'}</p> 
	
			<FrontpageMenu/>
	
		<p className="pl-10"> {'</'}menu{'>'}</p>
	  	<p className="pl-10">){'}'}; </p>
		<p className="mt-5"><span style={{color: '#2e95d3'}}>export default</span> <span style={{color:'#f22c3d'}}>Drmsr</span>; </p>
	</div>
)}

export default FrontpageColored;