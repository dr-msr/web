import FrontpageMenu from "@/components/frontpageMenu";

const Frontpage = () => {
	return (
	<div>
		<div style={{color:"#6B7280"}}>
		<p>import React, {'{'} useEffect {'}'} from 'react'; </p>
		<p>import {'{'} DailyRoutine, getTime, write {'}'} from '../Reality'; </p>

		<p className="mt-5">const executeRoutine = {'('} routine: DailyRoutine{')'}: void ={'>'} {'{'}</p>
		<span className="p-10">if (routine === 'day') {'{'} </span>
		<p><span className="p-20">write.prescriptions();</span></p>
		<span className="p-10">{'}'} else if (routine === 'night') {'{'} </span>
		<p><span className="p-20">write.codes(); </span></p>
		<span className="p-10"> {'}'}{'}'}; </span>

		<p className="mt-5">const Drmsr: React.FC = () ={'>'} {'{'} </p>
		<p className="pl-10">useEffect(() ={'>'} {'{'} </p>
		<p className="pl-20">executeRoutine(getTime.now);</p> 
		<p className="pl-10">{'}'}, []);</p> 

		<p className="">return( </p>
		<p className="pl-10"> {'<'}menu{'>'}</p> 
	
		<FrontpageMenu style={{paddingLeft:80}}/>
	
		<p className="pl-10"> {'</'}menu{'>'}</p>
	  	<p className="pl-10">){'}'}; </p>
		<p className="mt-5">export default Drmsr; </p>
		</div>
	</div>
)}

export default Frontpage;