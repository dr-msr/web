import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
  } from "@/components/ui/card"
import React from "react";


function RenderDay() {
    const time = new Date();
    const currentHour = time.getHours();

    if (currentHour >= 6 && currentHour < 18) {
        return (<p><span style={{color:'#f22c3d'}}>executeRoutine</span>(<span style={{color:'#00a67d'}}>'day'</span>); </p>);
    } else {
        return (<p><span style={{color:'#f22c3d'}}>executeRoutine</span>(<span style={{color:'#00a67d'}}>'night'</span>); </p>);
    }
}



  export default function MainCard() {

	  
	return (
		<Card className="mt-10 bg-gray aspect-square">
			<div className="p-10">
			<code>
				<p><span style={{color:'#2e95d3'}}>type</span> <span style={{color:'#f22c3d'}}>DailyRoutine</span> = <span style={{color:'#00a67d'}}>'day'</span> | <span style={{color:'#00a67d'}}>'night'</span>;</p>
				<br></br>
				<p><span style={{color:'#2e95d3'}}>const</span> executeRoutine = {'('}<span style={{color:'#df3079'}}>routine</span>: <span style={{color:'#f22c3d'}}>DailyRoutine</span>{')'}: void ={'>'} {'{'}</p>
  				<span className="p-10"><span style={{color:'#2e95d3'}}>if</span> (routine === <span style={{color:'#00a67d'}}>'day'</span>) {'{'} </span>
   				<p><span className="p-20"><span style={{color:'#df3079'}}>write</span>.prescriptions();</span></p>
				<span className="p-10">{'}'} <span style={{color:'#2e95d3'}}>else if</span> (routine === <span style={{color:'#00a67d'}}>'night'</span>) {'{'} </span>
				<p><span className="p-20"><span style={{color:'#df3079'}}>write</span>.codes(); </span></p>
				<span className="p-10"> {'}'} </span>
				<p>
				{'}'}; </p>
				<br></br>
				<RenderDay/>
				</code>
			</div>

	  </Card>

	)
  }

