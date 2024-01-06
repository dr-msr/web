import { CSSProperties, ReactNode, createContext, useContext, useState } from "react";

interface Anim8Props {
	contentStyle : CSSProperties,
	enterLeft : CSSProperties,
	enterRight : CSSProperties,
	styleSwipeLeft : CSSProperties,
	styleSwipeRight : CSSProperties,

	blurContent : () => void;
	trigEnterLeft : () => void;
	trigEnterRight : () => void;
	anim8content : () => void;
	loopAnim8 : () => void

};



const Anim8Context = createContext<Anim8Props | undefined>(undefined);

interface Anim8ProviderProps {
	children: ReactNode;
  }

export const Anim8: React.FC<Anim8ProviderProps> = ({ children }) => {



  

	const [contentStyle, setContentStyle] = useState({
		filter:'blur(0px)',
		transition:'',
	})

	function blurContent() {
		setContentStyle({
			filter:'blur(5px)',
			transition:'filter 1s',
		});
		setTimeout(function () {
			setContentStyle({
			filter:'blur(0px)',
			transition:'',
			})
		},300);
	}

	const [enterRight, setEnterRight] = useState({
		transform:'translate(50px,0px)',
		opacity:'0',
		transition:'transform 0.1s, opacity 0.1s',
	})

	function trigEnterRight() {
		setEnterRight({
			transform:'translate(50px,0px)',
			opacity:'0',
			transition:'transform 0.1s, opacity 0.1s',
		});
		setTimeout(function () {
			setEnterRight({
				transform:'translate(0px,0px)',
				opacity:'1',
				transition:'transform 0.1s, opacity 0.1s',
			})
		},300)
	}

	const [enterLeft, setEnterLeft] = useState({
		transform:'translate(-50px,0px)',
		opacity:'0',
		transition:'transform 0.1s, opacity 0.1s',
	})

	function trigEnterLeft() {
		setEnterLeft({
			transform:'translate(-50px,0px)',
			opacity:'0',
			transition:'transform 0.1s, opacity 0.1s',
		});
		setTimeout(function () {
			setEnterLeft({
				transform:'translate(0px,0px)',
				opacity:'1',
				transition:'transform 0.1s, opacity 0.1s',
			})
		},100)
	}

	function anim8content() {
		trigEnterLeft();
		trigEnterRight();
		blurContent();
	}

	const [styleSwipeLeft, setStyleSwipeLeft] = useState({
		transform:'translate(0px,0px)',
		opacity:'1',
		transition:'transform 2s, opacity 2s',
	})

	const [styleSwipeBlinkLeft, setStyleSwipeBlinkLeft] = useState(false)

	const [styleSwipeRight, setStyleSwipeRight] = useState({
		transform:'translate(0px,0px)',
		opacity:'1',
		transition:'transform 2s, opacity 2s',
	})

	const [styleSwipeBlinkRight, setStyleSwipeBlinkRight] = useState(false)



			function loopAnim8() {

				if (styleSwipeBlinkLeft == false) {
					setStyleSwipeLeft({
						transform:'translate(-50px,0px)',
						opacity:'0',
						transition:'transform 2s, opacity 2s',
					})
				} else {
					setStyleSwipeLeft({
						transform:'translate(0px,0px)',
						opacity:'',
						transition:'',
					})

				}
				setStyleSwipeBlinkLeft(!styleSwipeBlinkLeft)

				if (styleSwipeBlinkRight == false) {
					setStyleSwipeRight({
						transform:'translate(50px,0px)',
						opacity:'0',
						transition:'transform 2s, opacity 2s',
					})
				} else {
					setStyleSwipeRight({
						transform:'translate(0px,0px)',
						opacity:'',
						transition:'',
					})

				}
				setStyleSwipeBlinkRight(!styleSwipeBlinkRight)


			}

			setTimeout(loopAnim8,2000);



	const contextValue: Anim8Props = {
		contentStyle,
		enterLeft,
		enterRight,
		styleSwipeLeft,
		styleSwipeRight,
	
		blurContent,
		trigEnterLeft,
		trigEnterRight,
		anim8content,
		loopAnim8
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