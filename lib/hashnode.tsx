'use client'

import { gql } from '@apollo/client';
import React, { ReactNode, createContext, useContext, useState } from 'react';

export const GET_PUBLICATION = gql`
  query Publication {
    publication(host: "drmsr.hashnode.dev") {
      isTeam
      title
      posts(first: 5) {
        edges {
          node {
            title
            url
            publishedAt
            content {
              markdown
            }
          }
        }
      }
    }
  }
`;

export type post = 
	{ 
		"title": string,
		"url": string,
		"updatedAt": string,
		"content" : string, // later tukar MD
	}


interface hashnodeProps {
	posts : post[];
	setPosts : (item : post[]) => void
}

const HnContext = createContext<hashnodeProps | undefined>(undefined);


export const HnProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

	const [posts, setPosts ] = useState([
		{ 
			title : "Satu",
			url : "https://test.satu",
			updatedAt : "2024-01-03T06:24:34.975Z",
			content : ""
		},
		{ 
			title : "Dua",
			url : "https://test.dua",
			updatedAt : "2024-01-03T06:24:34.975Z",
			content : ""
		}

	])
	const contextValue: hashnodeProps = {
		posts,
		setPosts
	};
  
	return (
	  <HnContext.Provider value={contextValue}>
		{children}
	  </HnContext.Provider>
	);
  };

export const useHN = () => {
  const context = useContext(HnContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

