import FrontpageMenu from "@/components/frontpageMenu";
import { useAnim8 } from "@/lib/anim8";
import { useState } from "react";
import { SiC, SiCloudflarepages, SiFirebase, SiGithub, SiReact, SiTypescript, SiVisualstudiocode } from "react-icons/si";

const listStack = [
	{
		name : "React, React-Native, Expo, Next.js",
		desc : "After HTML, CSS comes Javascript.",
		icon : <SiReact size="30" />
	},
	{
		name : "Firebase, Firestore",
		desc : "My database of choice.",
		icon : <SiFirebase size="30" />
	},
	{
		name : "Cloudflare, Cloudflare Pages",
		desc : "Handles my domains and also this website.",
		icon : <SiCloudflarepages size = "30"/>
	},
	{
		name : "Typescript",
		desc : ".tsx is so much easier to visualize!",
		icon : <SiTypescript  size="30" />
	},
	{
		name : "Github",
		desc : 'git commit -m "update" | git push',
		icon : <SiGithub  size="30"  />
	},
	{
		name : "C, C++",
		desc : "Currently learning this in 42KL",
		icon : <SiC size="30" />

	},
	{
		name : "VS Code",
		desc : "VSCode Pets, Project Manager ",
		icon : <SiVisualstudiocode  size="30" />
	},

]

const Stack = () => {
	const [hovered, setHovered ] = useState('');

	function handleHover(item : string) {
		if (hovered == item) {
			return true
		}
	}

	return (
		<div style={{display:"flex", flexDirection:"column", gap:10, padding:20}}>
		{ listStack.map((item, index) => (

			<div
			 onMouseEnter={() => setHovered(item.name)}
			 onMouseLeave={() => setHovered('')}
			 key={index} 
			 style={{display:"flex", flexDirection:"row", justifyContent:"flex-start", alignItems:"center", gap:10,}}>
					<div>{item.icon}</div>
					<div style={{ 
						transition:'padding 0.3s',
						paddingLeft: handleHover(item.name) ? 10 : 0
						}}>
						{handleHover(item.name) ? (item.desc) : (item.name)}</div>
			</div>

		))}
		</div>
	)


}

export default Stack;