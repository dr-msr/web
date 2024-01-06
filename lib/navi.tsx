'use client'

import Frontpage from '@/content/frontpage';
import Stack from '@/content/stack';
import WhoAmI from '@/content/whoami';
import React, { createContext, useContext, useState } from 'react';
import { SwipeableHandlers, useSwipeable } from 'react-swipeable';
import { useAnim8 } from './anim8';

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
	}]

export interface Content {
	title: string;
	name: string;
	content: React.JSX.Element;
}

interface NaviProps {
	currentContent: Content;
	setCurrentContent: (content : Content) => void;
	swipe : SwipeableHandlers;
	leftright : (event : KeyboardEvent) => void
}

const NaviContext = createContext<NaviProps | undefined>(undefined);



export const Navi: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentContent, setCurrentContent] = useState<Content>(listContent[0]);

  const { anim8content } = useAnim8();

  function getNextContent() {
	const sekarang = listContent.findIndex((item) => item.name == currentContent.name);
	if (sekarang == listContent.length - 1) {
		setCurrentContent(listContent[0]);
	} else {
		setCurrentContent(listContent[sekarang + 1]);
	}
	anim8content();
}

function getPrevContent() {
	const sekarang = listContent.findIndex((item) => item.name == currentContent.name);
	if (sekarang == 0) {
		setCurrentContent(listContent[listContent.length - 1]);
	} else {
		setCurrentContent(listContent[sekarang - 1]);
	}
	anim8content();
}

const swipe = useSwipeable({
	onSwipedRight : () => getPrevContent(),
	onSwipedLeft : () => getNextContent(),
  });


  const leftright = (event: KeyboardEvent) => {
	if (event.key === 'ArrowLeft') {
		getPrevContent();
	} else if (event.key === 'ArrowRight') {
		getNextContent()
	}
  };


	return (
    
	<NaviContext.Provider value={{ currentContent, setCurrentContent, swipe, leftright }}>
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

