import FrontpageMenu from "@/components/frontpageMenu";

const Frontpage = () => {
	return (
	<div>
		<div style={{color:"#6B7280"}}>
		<p>import React, {'{'} useEffect {'}'} from 'react'; </p>
		<p>import {'{'} DailyRoutine, getTime, write {'}'} from '../Reality'; </p>

		<p className="mt-5">const executeRoutine = {'('} routine: DailyRoutine{')'}: void ={'>'} {'{'}</p>
		<span style={{paddingLeft:40}}>if (routine === 'day') {'{'} </span>
		<p><span style={{paddingLeft:80}}>write.prescriptions();</span></p>
		<span style={{paddingLeft:40}}>{'}'} else if (routine === 'night') {'{'} </span>
		<p><span style={{paddingLeft:80}}>write.codes(); </span></p>
		<span style={{paddingLeft:40}}> {'}'}{'}'}; </span>

		<p className="mt-5">const Drmsr: React.FC = () ={'>'} {'{'} </p>
		<p style={{paddingLeft:40}}>useEffect(() ={'>'} {'{'} </p>
		<p style={{paddingLeft:80}}>executeRoutine(getTime.now);</p> 
		<p style={{paddingLeft:40}}>{'}'}, []);</p> 

		<p>return( </p>
		<p style={{paddingLeft:40}}> {'<'}menu{'>'}</p> 
	
		<FrontpageMenu style={{paddingLeft:80}}/>
	
		<p style={{paddingLeft:40}}> {'</'}menu{'>'}</p>
	  	<p style={{paddingLeft:40}}>){'}'}; </p>
		<p className="mt-5">export default Drmsr; </p>
		</div>
	</div>
)}

export default Frontpage;