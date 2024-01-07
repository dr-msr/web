'use client'

import Frontpage from '@/content/frontpage';
import Stack from '@/content/stack';
import WhoAmI from '@/content/whoami';
import React, { createContext, useContext, useState } from 'react';
import { SwipeableHandlers, useSwipeable } from 'react-swipeable';
import { useAnim8 } from './anim8';
import Blog from '@/content/blog';
import A42KL from '@/content/42';
import Projects from '@/content/projects';

export const listContent = [
	{ 
		title : "drmsr.tsx",
		name : "Frontpage",
		content : <Frontpage />
	},
	{ 
		title : "whoami.tsx",
		name : "WhoAmI",
		content : <WhoAmI />
	},
	{ 
		title : "stack.tsx",
		name : "Stack",
		content : <Stack />
	},
	{ 
		title : "blog.tsx",
		name : "Blog",
		content : <Blog />
	},	{ 
		title : "42.tsx",
		name : "42",
		content : <A42KL />
	},
	{ 
		title : "projects.tsx",
		name : "Projects",
		content : <Projects />
	}
]

export interface Content {
	title: string;
	name: string;
	content: React.JSX.Element;
}

interface NaviProps {
	isMobile : boolean;
	setMobile : (item : boolean) => void;
	currentContent: Content;
	setCurrentContent: (content : Content) => void;
	swipe : SwipeableHandlers;
	leftright : (event : KeyboardEvent) => void
}

const NaviContext = createContext<NaviProps | undefined>(undefined);
var sekarang;


export const Navi: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentContent, setCurrentContent] = useState<Content>(listContent[0]);
  var newIndex;

  const { anim8content } = useAnim8();

  function getNextContent() {
	sekarang = listContent.findIndex((item) => item.name == currentContent.name);
	if (sekarang == listContent.length - 1) {
		newIndex = 0;
	} else {
		newIndex = sekarang + 1;
	}
	anim8content();
	return listContent[newIndex];
}

function getPrevContent() {
	sekarang = listContent.findIndex((item) => item.name == currentContent.name);
	console.log(listContent);
	console.log(sekarang);
	console.log(listContent.length)
	if (sekarang == 0) {
		newIndex = listContent.length - 1;
	} else {
		newIndex = sekarang - 1;
	}
	
	anim8content();
	return listContent[newIndex];
}

const swipe = useSwipeable({
	onSwipedRight : () => setCurrentContent(getPrevContent()),
	onSwipedLeft : () => setCurrentContent(getNextContent()),
  });


  const leftright = (event: KeyboardEvent) => {
	if (event.key === 'ArrowLeft') {
		setCurrentContent(getPrevContent());
	} else if (event.key === 'ArrowRight') {
		setCurrentContent(getNextContent());
	}
  };

  const [isMobile, setMobile] = useState(false);


	return (
    
	<NaviContext.Provider value={{ currentContent, setCurrentContent, swipe, leftright, isMobile, setMobile }}>
      {children}
    </NaviContext.Provider>
	);
};

export const useNavi = () => {
  const context = useContext(NaviContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

