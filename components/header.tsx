import React, { ReactNode } from "react";

interface headerProps {
	isSticky: boolean;
  }



const Header: React.FC<headerProps> = ({ isSticky }) => {


const Hidden = () => {

	return (
	<div 
	style={{
		opacity: isSticky ? 0 : 1,
		transition: 'opacity 10s linear',
	  }}
	>
	<p>import React, {'{'} useEffect {'}'} from 'react'; </p>
	<p>import {'{'} DailyRoutine, getTime, write {'}'} from '../Reality'; </p>


	<p className="mt-5"><span style={{color:'#2e95d3'}}>const</span> executeRoutine = {'('}<span style={{color:'#df3079'}}>routine</span>: <span style={{color:'#f22c3d'}}>DailyRoutine</span>{')'}: void ={'>'} {'{'}</p>
	  <span className="p-10"><span style={{color:'#2e95d3'}}>if</span> (routine === <span style={{color:'#00a67d'}}>'day'</span>) {'{'} </span>
	   <p><span className="p-20"><span style={{color:'#df3079'}}>write</span>.prescriptions();</span></p>
	<span className="p-10">{'}'} <span style={{color:'#2e95d3'}}>else if</span> (routine === <span style={{color:'#00a67d'}}>'night'</span>) {'{'} </span>
	<p><span className="p-20"><span style={{color:'#df3079'}}>write</span>.codes(); </span></p>
	<span className="p-10"> {'}'}{'}'}; </span>

	<p className="mt-5">const drmsr: React.FC = () ={'>'} {'{'} </p>
	  <p className="pl-10">useEffect(() ={'>'} {'{'} </p>
	<p className="pl-20">executeRoutine(getTime.now);</p> 
	  <p className="pl-10">{'}'}, []);</p> 

	<p className="">  return ( </p></div>
)}


	return (
				<div className={'border p-5 mt-5 aspect bg-gray-50'}>
				<code>
									<Hidden/>

				<p className="pl-10"> {'<'}menu{'>'}</p> 
				<p className="pl-20"> {'<'}WhoAmI /{'>'}</p>
				<p className="pl-20"> {'<'}Stack /{'>'}</p>
				<p className="pl-10"> {'</'}menu{'>'}</p>

  				<p className="pl-10">){'}'}; </p>
				<p className="mt-5">export default drmsr; </p>
				<p></p>

			</code>
			</div>
	)
}

export default Header;