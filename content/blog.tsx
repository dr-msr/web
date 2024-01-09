import FrontpageMenu from "@/components/frontpageMenu";
import { useAnim8 } from "@/lib/anim8";
import { GET_PUBLICATION } from "@/lib/hashnode";
import { useQuery, gql, DocumentNode } from '@apollo/client';
import Link from "next/link";
import { CSSProperties, useState } from "react";


const Blog = () => {
	const { loading, error, data } = useQuery(GET_PUBLICATION);
	const { enterLeft, enterRight, trigEnterLeft } = useAnim8();
	const [ isHovered, setHover ] = useState('');

	function clearHover() {
		setHover('');
	}

	function renderHover(item : string) {
		if (isHovered == item) {
			return true
		}
	}

	function converDate(input : Date) {
		var newDate = new Date(input);
		return ("  [" + newDate.getDate() + "-" + newDate.toLocaleString('en-MY', { month: 'short' }) + "]  ")
		 
	}

	function renderAction(item : any, index : number) : CSSProperties {

		if (index % 2 === 0) {
			return { 
				color : renderHover(item.node.title) ? "black" : "white",
				backgroundColor : renderHover(item.node.title) ? "white" : "#374151",
				paddingLeft:15,
				paddingRight:5,
				display:"flex",
				flexDirection:"row",
				justifyContent:"space-between",
				alignItems:"flex-start",
				...enterLeft,
			 }
		} else {
			return { 
				color : renderHover(item.node.title) ? "black" : "white",
				backgroundColor : renderHover(item.node.title) ? "white" : "#374151",
				paddingLeft:15,
				paddingRight:5,
				display:"flex",
				flexDirection:"row",
				justifyContent:"space-between",
				alignItems:"flex-start",
				...enterRight
			 }
		}
		

	}

	if (loading) {
		return (<div className="pl-10 mt-5" style={{marginBottom:40}}><div>Loading</div></div>)
	} else {
		var listPost = new Array
		listPost = data.publication.posts.edges;
		return (	
			<div className="pl-10 mt-5" style={{marginBottom:40}}>
				<div>Blog <span style={{fontStyle:"italic", color:"green", opacity:0.9}}><Link href="https://drmsr.hashnode.dev" target="_blank">{'["https://drmsr.hashnode.dev"]'}</Link></span>
				<p style={{marginTop:10, marginBottom:10}}> Check out my Hashnode blog, where I regularly share my programming journey, coding tips, and thoughts on career growth.</p></div>
				<div style={{display:"flex", flexDirection:"column", gap:0}}>
				{ listPost.map((item, index) => (
					<Link href={item.node.url} target="_blank">
					<div 
					key={index}
					style={renderAction(item, index)}
					onMouseEnter={() => setHover(item.node.title)}
					onMouseLeave={() => clearHover()}					
					
					>
						<div>{item.node.title}</div>
						<div style={{flexShrink:0}}>{converDate(item.node.publishedAt)}</div></div></Link>
				))}
				</div>
			</div>)
	}}

export default Blog;