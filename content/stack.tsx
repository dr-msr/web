import FrontpageMenu from "@/components/frontpageMenu";
import { useAnim8 } from "@/lib/anim8";
import { SiGithub, SiReact, SiTypescript, SiVisualstudiocode } from "react-icons/si";

const listStack = [
	{
		name : "React",
		desc : "React, React-Native, Expo, Next.js",
		icon : <SiReact />
	},
	{
		name : "Typescript",
		desc : ".tsx",
		icon : <SiTypescript />
	},
	{
		name : "Github",
		desc : 'git status | git add * | git commit -m "update" | git push',
		icon : <SiGithub />
	},
	{
		name : "VS Code",
		desc : "VSCode",
		icon : <SiVisualstudiocode />
	},
]

const Stack = () => {
	const {enterLeft, enterRight} = useAnim8();

	return (
	<div>


		<div style={{display:'flex', flexDirection:'column', justifyContent:'center', gap:20}}>
			<div style={{display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'center', gap:20}}>
				<div><SiReact size={50} /></div>
				<div style={{display:"flex", flexDirection:'column', justifyContent:'flex-start'}}>
						<div style={{'fontWeight':'bold'}}>React Based</div>
						<div>React, React-Native, Expo, Next.js</div></div>	
			</div>

			<div style={{display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'center', gap:20}}>
				<div><SiTypescript size={50} /></div>
				<div style={{display:"flex", flexDirection:'column', justifyContent:'flex-start'}}>
						<div style={{'fontWeight':'bold'}}>Typescript</div>
						<div>.tsx</div></div>	
			</div>

			<div style={{display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'center', gap:20}}>
				<div><SiGithub size={50} /></div>
				<div style={{display:"flex", flexDirection:'column', justifyContent:'flex-start'}}>
						<div style={{'fontWeight':'bold'}}>Github</div>
						<div>git status | git add * | git commit -m "update" | git push</div></div>	
			</div>

			<div style={{display:'flex', flexDirection:'row', justifyContent:'flex-start', alignItems:'center', gap:20}}>
				<div><SiVisualstudiocode size={50} /></div>
				<div style={{display:"flex", flexDirection:'column', justifyContent:'flex-start'}}>
						<div style={{'fontWeight':'bold'}}>VS Code</div>
						<div>VS Code</div></div>	
			</div>
				
				
					

			</div>

	</div>
)}

export default Stack;