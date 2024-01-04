import React, { useEffect } from 'react';
import { DailyRoutine, getTime, write } from '../Reality';

const executeRoutine = (routine: DailyRoutine): void => {
	if (routine === 'day') {
		write.prescriptions();
	} else if (routine === 'night') {
		write.codes();
	}};


export function WhoAmI() {
		return (<div></div>)
	}

export function Stack() {
		return (<div></div>)
	}

const Drmsr: React.FC = () => {
	useEffect(() => {
	executeRoutine(getTime.now);
}, []);

return (
	<menu>
		<WhoAmI />
		<Stack />
	</menu>

)};

export default Drmsr; 