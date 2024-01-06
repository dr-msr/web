import FrontpageMenu from "@/components/frontpageMenu";
import { useAnim8 } from "@/lib/anim8";
import Image from 'next/image'

const Frontpage = () => {
	const { enterLeft, enterRight, contentStyle} = useAnim8();

	return (
	<div>
			<div style={{ color: "#6B7280" }}>
				
				<div style={enterLeft}>
				<p>import React, {'{'} useEffect {'}'} from 'react'; </p>
				<p>import {'{'} DailyRoutine, getTime, write {'}'} from '../Reality'; </p>
				</div>

				<div style={enterRight}>
				<p className="mt-5">const executeRoutine = {'('} routine: DailyRoutine{')'}: void ={'>'} {'{'}</p>
				<span style={{ paddingLeft: 40 }}>if (routine === 'day') {'{'} </span>
				<p><span style={{ paddingLeft: 80 }}>write.prescriptions();</span></p>
				<span style={{ paddingLeft: 40 }}>{'}'} else if (routine === 'night') {'{'} </span>
				<p><span style={{ paddingLeft: 80 }}>write.codes(); </span></p>
				<span style={{ paddingLeft: 40 }}> {'}'}{'}'}; </span>
				</div>

				<div style={enterLeft}>
				<p className="mt-5">const Drmsr: React.FC = () ={'>'} {'{'} </p>
				<p style={{ paddingLeft: 40 }}>useEffect(() ={'>'} {'{'} </p>
				<p style={{ paddingLeft: 80 }}>executeRoutine(getTime.now);</p>
				<p style={{ paddingLeft: 40 }}>{'}'}, []);</p>
				</div>

				<div style={enterRight}>
				<p>return( </p>
				<p style={{ paddingLeft: 40 }}> {'<'}menu{'>'}</p>

				<FrontpageMenu style={{ paddingLeft: 80 }} />
				</div>

				<div style={enterLeft}>
				<p style={{ paddingLeft: 40 }}> {'</'}menu{'>'}</p>
				<p style={{ paddingLeft: 40 }}>){'}'}; </p>
				<p className="mt-5">export default Drmsr; </p>
				</div>

			</div>

			<div style={{position:"absolute", width:'100%', top:0, left:0, display:"flex", justifyContent:"center"}}>
				<div>

	
				</div>

			</div>


		</div>

)}

export default Frontpage;