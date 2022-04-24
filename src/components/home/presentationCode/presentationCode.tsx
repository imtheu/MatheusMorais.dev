import React from 'react';
import Typewriter from 'typewriter-effect';

import useI18N from '../../../hooks/useI18N';
import Text from '../../text';

import * as Styled from './style';

const content: { [key: string]: Record<string, string> } = {
	'en-US': {
		greeting: 'Hello!',
		job: "I'm a front-end developer",
		graduation: 'and a comp sci student'
	},
	'pt-BR': {
		greeting: 'Olá!',
		job: 'Sou desenvolvedor front-end',
		graduation: 'e estudante de computação'
	}
};

const PresentationCode = () => {
	const { locale } = useI18N();

	return (
		<Text size={5} mobileSize={3} font="RobotoMono" tag="div">
			<>
				<Styled.LineNumber>1</Styled.LineNumber>
				<Text color="parrotPink" font="RobotoMono">
					const
				</Text>{' '}
				Matheus ={' '}
				<Text color="rockBlue" font="RobotoMono">
					&#123;
				</Text>
				<br />
				<Styled.LineNumber>2</Styled.LineNumber>
				<Text color="rockBlue" font="RobotoMono" weight="light">
					&nbsp;&nbsp;{'// '}
					{content[locale].greeting}{' '}
					<Styled.Typewriter>
						<Typewriter
							options={{
								strings: [
									':D',
									'(⌒_⌒)ノ”',
									'ʕ•ᴥ•ʔノ',
									'ヽ|･ω･|ゞ',
									'ヽ(･ω･)ノ'
								],
								autoStart: true,
								loop: true
							}}
						/>
					</Styled.Typewriter>
				</Text>
				<br />
				<Styled.LineNumber>3</Styled.LineNumber>
				<Text color="rockBlue" font="RobotoMono" weight="light">
					&nbsp;&nbsp;{'// '} {content[locale].job}
				</Text>
				<br />
				<Styled.LineNumber>4</Styled.LineNumber>
				&nbsp;&nbsp;passion: &quot;
				<Text color="primary" font="RobotoMono">
					Front-end &hearts;
				</Text>
				&quot;{';'}
				<br />
				<Styled.LineNumber>5</Styled.LineNumber>
				<Text color="rockBlue" font="RobotoMono" weight="light">
					&nbsp;&nbsp;{'// '} {content[locale].graduation}
				</Text>
				<br />
				<Styled.LineNumber>6</Styled.LineNumber>
				&nbsp;&nbsp;computerScientist:{' '}
				<Text color="link" font="RobotoMono">
					true
				</Text>
				{';'}
				<br />
				<Styled.LineNumber>7</Styled.LineNumber>
				<Text color="rockBlue" font="RobotoMono">
					&#125;
				</Text>
			</>
		</Text>
	);
};

export default PresentationCode;
