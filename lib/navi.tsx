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


interface NavigationContextProps {
  currentContent: Content;
  setCurrentContent: (content : Content) => void;
}

const NavigationContext = createContext<NavigationContextProps | undefined>(undefined);

export const Navi: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentContent, setCurrentContent] = useState<Content>(listContent[0]);

  return (
    <NavigationContext.Provider value={{ currentContent, setCurrentContent }}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

