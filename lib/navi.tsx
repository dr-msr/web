'use client'

import Frontpage from '@/content/frontpage';
import WhoAmI from '@/content/whoami';
import React, { createContext, useContext, useState } from 'react';

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
	}]

interface Content {
	title: string;
	name: string;
	content: React.JSX.Element;
}

interface NaviProps {
	currentContent: Content;
	setCurrentContent: (content : Content) => void;
}

const NaviContext = createContext<NaviProps | undefined>(undefined);

export const Navi: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentContent, setCurrentContent] = useState<Content>(listContent[0]);
	return (
    
	<NaviContext.Provider value={{ currentContent, setCurrentContent }}>
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

