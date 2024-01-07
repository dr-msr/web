import { useAnim8 } from "@/lib/anim8";
import { useNavi } from "@/lib/navi";

export default function Footer() {

	const { styleSwipeLeft, styleSwipeRight } = useAnim8();
	const { isMobile } = useNavi();



	return (
				<div className={'text-center'}>
					{ isMobile && (<div style={{display:'flex', flexDirection:'row', justifyContent:'center', color:'gray'}}>
						<div style={styleSwipeLeft}>{'<< '}</div> 
						<div style={{paddingLeft:5, paddingRight:5}}>swipe</div> 
						<div style={styleSwipeRight}>{' >>'}</div>
					</div>)}
					<h1>drmsr.dev</h1>
				</div>
	)
}