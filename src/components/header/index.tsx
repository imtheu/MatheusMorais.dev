import { useEffect, useState } from 'react';
import styles from './header.module.css';

const Header = () => {
	const [theme, setTheme] = useState('light');

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

	return (
		<header className={styles.header}>
			<div className="medium-weight heading-1">
				<a href="/">
					&#123; ...<span className="color-primary">MatheusMorais</span>[&quot;
					<span className="color-secondary">dev</span>&quot;] &#125;
				</a>
			</div>
			<nav className={styles.languageNav}>
				<ul>
					<li>
						<a className="color-grey-darker medium-weight" href="/">
							English
						</a>
					</li>
					<li>
						<a className="color-grey-darker medium-weight" href="/">
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
