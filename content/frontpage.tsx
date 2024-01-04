import NaviItem from "@/components/frontpageMenu";
import FrontpageMenu from "@/components/frontpageMenu";
import Menu from "@/components/frontpageMenu";
import { FC } from "react";



const Frontpage = () => {


	return (
<div>
	<p>import React, {'{'} useEffect {'}'} from 'react'; </p>
	<p>import {'{'} DailyRoutine, getTime, write {'}'} from '../Reality'; </p>


	<p className="mt-5"><span style={{color:'#2e95d3'}}>const</span> executeRoutine = {'('}<span style={{color:'#df3079'}}>routine</span>: <span style={{color:'#f22c3d'}}>DailyRoutine</span>{')'}: void ={'>'} {'{'}</p>
	  <span className="p-10"><span style={{color:'#2e95d3'}}>if</span> (routine === <span style={{color:'#00a67d'}}>'day'</span>) {'{'} </span>
	   <p><span className="p-20"><span style={{color:'#df3079'}}>write</span>.prescriptions();</span></p>
	<span className="p-10">{'}'} <span style={{color:'#2e95d3'}}>else if</span> (routine === <span style={{color:'#00a67d'}}>'night'</span>) {'{'} </span>
	<p><span className="p-20"><span style={{color:'#df3079'}}>write</span>.codes(); </span></p>
	<span className="p-10"> {'}'}{'}'}; </span>

	<p className="mt-5">const Drmsr: React.FC = () ={'>'} {'{'} </p>
	  <p className="pl-10">useEffect(() ={'>'} {'{'} </p>
	<p className="pl-20">executeRoutine(getTime.now);</p> 
	  <p className="pl-10">{'}'}, []);</p> 

	<p className="">  return ( </p>
	
	<p className="pl-10"> {'<'}menu{'>'}</p> 
		<FrontpageMenu/>
	<p className="pl-10"> {'</'}menu{'>'}</p>

  				<p className="pl-10">){'}'}; </p>
				<p className="mt-5">export default Drmsr; </p>
				<p></p>
				</div>
)}

export default Frontpage;