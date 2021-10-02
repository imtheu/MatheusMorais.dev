import { useEffect, useState } from 'react';
import Link from 'next/link';

import styles from './header.module.css';
import { useRouter } from 'next/dist/client/router';

const Header = () => {
	const [theme, setTheme] = useState('light');
	const router = useRouter();

	useEffect(() => {
		const savedTheme = localStorage.getItem('mm_dev_theme') ?? 'light';
		setTheme(savedTheme);
		document.body.dataset.theme = savedTheme;
	}, []);

	const toggleTheme = () => {
		const selectedTheme = theme === 'light' ? 'dark' : 'light';
		setTheme(selectedTheme);
		document.body.dataset.theme = selectedTheme;
		localStorage.setItem('mm_dev_theme', selectedTheme);
	};

	const toggleLanguage = async (
		event: React.FormEvent<HTMLAnchorElement>,
		language: string
	) => {
		event.preventDefault();
		await router.push(router.pathname, undefined, { locale: language });
		router.reload();
	};

	return (
		<header className={styles.header}>
			<div className={`medium-weight heading-1 ${styles.logo}`}>
				<Link href="/">
					<a>
						&#123; ...<span className="color-primary">MatheusMorais</span>
						[&quot;
						<span className="color-secondary">dev</span>&quot;] &#125;
					</a>
				</Link>
			</div>
			<nav className={styles.languageNav}>
				<ul>
					<li>
						{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
						<a
							onClick={(event) => toggleLanguage(event, 'en-US')}
							href="#"
							className="color-grey-darker medium-weight"
						>
							English
						</a>
					</li>
					<li>
						{/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
						<a
							onClick={(event) => toggleLanguage(event, 'pt-BR')}
							href="#"
							className="color-grey-darker medium-weight"
						>
							Português
						</a>
					</li>
				</ul>
			</nav>

			<button
				className={`${styles.themeSwitch} ${
					theme === 'light' ? styles['-toDark'] : styles['-toLight']
				}`}
				onClick={toggleTheme}
			>
				Dark Mode
			</button>
		</header>
	);
};

export default Header;
