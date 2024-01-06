import { useAnim8 } from "@/lib/anim8";
import { Content, listContent, useNavi } from "@/lib/navi";
import { useEffect, useRef } from "react";

export default function Footer() {

	const { anim8content, styleSwipeLeft, loopAnim8, styleSwipeRight } = useAnim8();



	return (
				<div className={'text-center'}>
					<div style={{display:'flex', flexDirection:'row', justifyContent:'center', color:'gray'}}>
						<div style={styleSwipeLeft}>{'<< '}</div> 
						<div style={{paddingLeft:5, paddingRight:5}}>{window.innerWidth <= 768 ? 'swipe' : 'left | right'}</div> 
						<div style={styleSwipeRight}>{' >>'}</div>
					</div>
					<h1>drmsr.dev</h1>
				</div>
	)
}