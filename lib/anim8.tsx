import { CSSProperties, ReactNode, createContext, useContext, useState } from "react";

interface Anim8Props {
	contentStyle : CSSProperties,
	enterLeft : CSSProperties,
	enterRight : CSSProperties,
	styleSwipeLeft : CSSProperties,
	styleSwipeRight : CSSProperties,
	footerMenu : CSSProperties,
	puls8 : CSSProperties,

	blurContent : () => void;
	trigEnterLeft : () => void;
	trigEnterRight : () => void;
	anim8content : () => void;
	loopAnim8 : () => void
	hidefootermenu : () => void;
	showfootermenu : () => void;

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
	const [ puls8, setPuls8 ] = useState({
		transition:'box-shadow 2s',
		boxShadow:'0 0 6px 3px #fff, 0 0 8px 5px #fff'
	})

	const [oscillate, setOsccilate] = useState(false)

			function loopAnim8() {

				if (oscillate) {
					setPuls8({
						transition:'box-shadow 2s',
						boxShadow:''
					})
				} else {
					setPuls8({
						transition:'box-shadow 2s',
						boxShadow:'0 0 6px 3px #fff, 0 0 8px 5px #fff'
					})
				}

				setOsccilate(!oscillate);



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


		
		const [footerMenu, setFooterMenu] = useState({
			display:'none',
			opacity:'0',
			transform:'translate(0px,-100px)',
			transition:'display 0.3s opacity 0.3s transform 0.3s'
		});

		function hidefootermenu() {
			setFooterMenu({
				display:'none',
				opacity:'0',
				transform:'translate(0px,-100px)',
				transition:'display 0.3s opacity 0.3s transform 0.3s'

			})
			return
		}

		function showfootermenu() {
			setFooterMenu({
				display:'flex',
				opacity:'1',
				transform:'translate(0px,0px)',
				transition:'display 0.3s opacity 0.3s transform 0.3s'

			})
			return
		}



	const contextValue: Anim8Props = {
		contentStyle,
		enterLeft,
		enterRight,
		styleSwipeLeft,
		styleSwipeRight,
		footerMenu,
		puls8,
	
		blurContent,
		trigEnterLeft,
		trigEnterRight,
		anim8content,
		loopAnim8,
		hidefootermenu,
		showfootermenu,
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