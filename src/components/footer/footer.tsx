import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Container from '../container';
import Spacing from '../spacing';
import Text from '../text';

import * as Styled from './style';
import Grid from '../grid';

const Footer = () => {
	return (
		<Styled.Footer>
			<Container>
				<Grid>
					<Grid.Item size={6} tabletSize={12} mobileSize={12}>
						<Link href="/" passHref>
							<a>
								<Image
									src="/images/logo_mono.svg"
									width={457}
									height={40}
									alt="MatheusMorais.dev"
								/>
							</a>
						</Link>
						<Spacing size={3} />
						<Text size="3" color="white">
							oi@matheusmorais.dev
						</Text>
						<Spacing size={6} />
						<Styled.SocialIcons>
							<Styled.SocialIcon
								icon="linkedin"
								href="https://linkedin.com/in/imatheus"
								target="_blank"
								rel="noopener"
							>
								Linkedin
							</Styled.SocialIcon>
							<Styled.SocialIcon
								icon="github"
								href="https://github.com/imtheu"
								target="_blank"
								rel="noopener"
							>
								Github
							</Styled.SocialIcon>
							<Styled.SocialIcon
								icon="twitter"
								href="https://twitter.com/imtheu"
								target="_blank"
								rel="noopener"
							>
								Twitter
							</Styled.SocialIcon>
							<Styled.SocialIcon
								icon="instagram"
								href="https://instagram.com/imtheu"
								target="_blank"
								rel="noopener"
							>
								Instagram
							</Styled.SocialIcon>
							<Styled.SocialIcon
								icon="rss"
								href="https://linkedin.com/in/imatheus"
								target="_blank"
								rel="noopener"
							>
								RSS
							</Styled.SocialIcon>
						</Styled.SocialIcons>
					</Grid.Item>
					<Grid.Item size={6} tabletSize={12} mobileSize={12}>
						<Spacing tabletSize={6} mobileSize={6} />
						<Styled.Nav>
							<ul>
								<li>
									<Link href="/">
										<a>Home</a>
									</Link>
								</li>
								<li>
									<Link href="/blog">
										<a>Blog</a>
									</Link>
								</li>
								<li>
									<a href="/sitemap.xml">Sitemap</a>
								</li>
							</ul>
						</Styled.Nav>
					</Grid.Item>
				</Grid>

				<Spacing size={6} />
				<Spacing size={3} />
			</Container>
			<Styled.FooterFooter>
				<Container>
					<Text size="1" color="white" align="center">
						All rights reserved © Matheus Morais - {new Date().getFullYear()}
					</Text>
				</Container>
			</Styled.FooterFooter>
		</Styled.Footer>
	);
};

export default Footer;
