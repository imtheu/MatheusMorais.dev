import React from 'react';
import useI18N from '../../hooks/useI18N';

import styles from './footer.module.css';

const content: { [key: string]: Record<string, string | JSX.Element> } = {
	'en-US': {
		contactLabel: (
			<p className={`color-grey-darker ${styles.contactLabel}`}>
				send me an email
				<br />
				...or send me a message at:
			</p>
		)
	},
	'pt-BR': {
		contactLabel: (
			<p className={`color-grey-darker ${styles.contactLabel}`}>
				me manda um email
				<br />
				...ou me manda uma mensagem:
			</p>
		)
	}
};

const Footer = () => {
	const { locale } = useI18N();

	return (
		<footer className="text-center">
			<div className={`medium-weight ${styles.email}`}>
				<span className="color-secondary">oi</span>@
				<span className="color-primary">matheusmorais</span>.dev
			</div>
			{content[locale].contactLabel}
			<div className={styles.socialContainer}>
				<a
					className={`${styles.social} ${styles['-linkedin']}`}
					href="https://linkedin.com/in/imatheus"
					target="_blank"
					rel="noopener noreferrer"
				>
					Linkedin
				</a>
				<a
					className={`${styles.social} ${styles['-github']}`}
					href="https://github.com/imtheu"
					target="_blank"
					rel="noopener noreferrer"
				>
					Github
				</a>
				<a
					className={`${styles.social} ${styles['-twitter']}`}
					href="https://twitter.com/imtheu"
					target="_blank"
					rel="noopener noreferrer"
				>
					Twitter
				</a>
				<a
					className={`${styles.social} ${styles['-instagram']}`}
					href="https://instagram.com/imtheu"
					target="_blank"
					rel="noopener noreferrer"
				>
					Instagram
				</a>
			</div>
		</footer>
	);
};

export default Footer;
