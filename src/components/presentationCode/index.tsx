import React from 'react';
import { useMediaQuery } from 'react-responsive';
import Typewriter from 'typewriter-effect';

import styles from './presentationCode.module.css';

const typeWriterDelay = 30;

const PresentationCode = () => {
	const phoneOnly = useMediaQuery({ maxWidth: 576 });
	return (
		<div className={`heading-1 ${styles.presentationCode}`}>
			<Typewriter
				onInit={(tw) => {
					tw.changeDelay(typeWriterDelay)
						.typeString(
							`<span class="${styles.lineNumber} color-grey">1</span> <span class="color-purple">const</span> Matheus = <span class="color-grey-darker">&#123;</span><br /><span class="${styles.lineNumber} color-grey">2</span> &nbsp;&nbsp;<span class="color-grey-darker light-weight">// Hello! :D<br />`
						)
						.typeString(
							`<span class="${styles.lineNumber} color-grey">3</span> &nbsp;&nbsp;<span class="color-grey-darker light-weight">// I'm a front-end developer</span><br />`
						)
						.typeString(
							`<span class="${styles.lineNumber} color-grey">4</span> &nbsp;&nbsp;passion: "<span class="color-green">Front-end &hearts;</span>",<br />`
						)
						.typeString(
							`<span class="${
								styles.lineNumber
							} color-grey">5</span> &nbsp;&nbsp;<span class="color-grey-darker light-weight">// and a ${
								phoneOnly ? 'compSci' : 'computer science'
							} student</span><br />`
						)
						.typeString(
							`<span class="${styles.lineNumber} color-grey">6</span> &nbsp;&nbsp;computerScientist: <span class="color-red">true</span><br />`
						)
						.typeString(
							`<span class="${styles.lineNumber} color-grey">7</span> <span class="color-grey-darker">&#125;</span>&#59;`
						)
						.start();
				}}
			/>
		</div>
	);
};

export default PresentationCode;
