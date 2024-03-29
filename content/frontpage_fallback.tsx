import FrontpageMenu from "@/components/frontpageMenu";
import { useAnim8 } from "@/lib/anim8";
import Image from 'next/image'

const Frontpage = () => {
	const { enterLeft, enterRight, contentStyle} = useAnim8();

	return (
	<div>
			<div style={{ color: "#6B7280",}}>
				
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
				<p>return() </p>
				
				<p>{'}'}; </p>
				<p className="mt-5">export default Drmsr; </p>
				</div>

				<div>
					<Image alt="" width="512" height="340" src="https://raw.githubusercontent.com/dr-msr/dr-msr/5994afac8bbe5ad9e9208498d68e5848f53a831b/profile-3d-contrib/profile-night-green.svg" />	
				</div>




			</div>

			


		</div>

)}

export default Frontpage;