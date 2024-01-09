import FrontpageMenu from "@/components/frontpageMenu";
import { useAnim8 } from "@/lib/anim8";
import Image from 'next/image'
import Avatar from '@/assets/avatar.png'


const Intro = {
	title : "Hi, I'm Syamirul.",
	content : "As I stitch together lines of code by day " + "\n" + "and wounds by night -" + "\n" +  "It's all about debugging life, one program or patient at a time!",
	avatar : "/../",
}

const Frontpage = () => {
	const { puls8 } = useAnim8();

	return (
		<div style={{display:"flex", flexDirection:"row", justifyContent:"space-between", alignItems:"center", paddingTop:20, paddingBottom:20}}>
			<div style={{flex:5,display:"flex", flexDirection:"column", gap:10}}>
				<div>{Intro.title}</div>
				<div>{Intro.content}</div>
			</div>
			<div style={{flex:1, margin:20, borderRadius:50, ...puls8 
			}}><Image alt="" width="150" height="150" src={Avatar} /></div>	
		</div>
		
	

)}

export default Frontpage;