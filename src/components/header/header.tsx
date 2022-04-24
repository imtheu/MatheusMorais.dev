import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import Spacing from '../spacing';

import * as Styled from './style';

const Header = () => {
	const { push, asPath } = useRouter();

	const toggleLanguage = async (
		event: React.FormEvent<HTMLAnchorElement>,
		language: 'en-US' | 'pt-BR'
	) => {
		event.preventDefault();
		await push(asPath, undefined, { locale: language });
	};

	return (
		<header>
			<Spacing size={6} />
			<Link href="/" passHref>
				<a>
					<Image
						src="/images/logo.svg"
						width={457}
						height={40}
						alt="MatheusMorais.dev"
					/>
				</a>
			</Link>

			<Spacing size={4} />

			<Styled.Nav>
				<ul>
					{/* eslint-disable jsx-a11y/anchor-is-valid */}
					<li>
						<a
							onClick={(event) => toggleLanguage(event, 'en-US')}
							href="#"
							className="color-grey-darker medium-weight"
						>
							English
						</a>
					</li>
					<li>
						<a
							onClick={(event) => toggleLanguage(event, 'pt-BR')}
							href="#"
							className="color-grey-darker medium-weight"
						>
							Português
						</a>
					</li>
					{/* eslint-enable jsx-a11y/anchor-is-valid */}
				</ul>
			</Styled.Nav>
		</header>
	);
};

export default Header;
