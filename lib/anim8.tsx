import { CSSProperties, ReactNode, createContext, useContext, useState } from "react";

interface Anim8Props {
	contentStyle : CSSProperties,
	blurContent : () => void;
};

const Anim8Context = createContext<Anim8Props | undefined>(undefined);

interface Anim8ProviderProps {
	children: ReactNode;
  }

export const Anim8: React.FC<Anim8ProviderProps> = ({ children }) => {

	const [contentStyle, setContentStyle] = useState({
		filter:'blur(0px)',
		transition:'filter 1s',
	})

	function blurContent() {
		setContentStyle({
			filter:'blur(5px)',
			transition:'filter 1s',
		});
		setTimeout(function () {
			setContentStyle({
				filter:'blur(0px)',
			transition:'filter 1s',
			})
		},300);
	}
  
	
  
	const contextValue: Anim8Props = {
		contentStyle,
		blurContent
	};
  
	return (
	  <Anim8Context.Provider value={contextValue}>
		{children}
	  </Anim8Context.Provider>
	);
  };
  
  export const useAnim8 = (): Anim8Props => {
	const context = useContext(Anim8Context);
	if (!context) {
	  throw new Error('useAnimation must be used within an AnimationProvider');
	}
	return context;
  };