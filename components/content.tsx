'use client'

import Frontpage from "@/content/frontpage";
import { listContent, useNavigation } from "@/lib/navi";
import { useEffect, useState } from "react";



export default function Content() {

	const { setCurrentContent, currentContent } = useNavigation();




	useEffect(() => {
		setCurrentContent(listContent[0]);
	},[])




	return (
				<div className={'border p-5 bg-gray-50 transition-all'}>
					{currentContent.content}
				</div>
	)
}