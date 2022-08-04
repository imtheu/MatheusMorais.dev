import React, { useState } from 'react';

import Button from 'components/button';
import TikTok from 'components/tiktok';
import Reels from 'components/reels';

import useI18N from 'hooks/useI18N';

import * as Styled from './style';

export enum SocialNetworks {
	TIKTOK = 'TIKTOK',
	INSTAGRAM = 'INSTAGRAM'
}

type PropsType = {
	instagramId: string;
	tiktokId: string;
};

const Video = ({
	socialNetwork,
	instagramId,
	tiktokId
}: { socialNetwork: SocialNetworks } & PropsType) => {
	const { locale } = useI18N();

	return (
		<Styled.Video display={socialNetwork} key={locale}>
			<div className={SocialNetworks.TIKTOK}>
				<TikTok id={tiktokId} />
			</div>
			<div className={SocialNetworks.INSTAGRAM}>
				<br />
				<Reels id={instagramId} />
			</div>
		</Styled.Video>
	);
};

const i18n: { [key: string]: string } = {
	'en-US': 'Watch on',
	'pt-BR': 'Assista no'
};

const SocialVideos = ({ instagramId, tiktokId }: PropsType) => {
	const [socialNetwork, setSocialNetwork] = useState(SocialNetworks.TIKTOK);
	const { locale } = useI18N();

	const toggleSocialNetwork = (network: SocialNetworks) =>
		setSocialNetwork(network);

	return (
		<Styled.SocialVideos>
			{i18n[locale]}{' '}
			<Button onClick={() => toggleSocialNetwork(SocialNetworks.TIKTOK)}>
				TikTok
			</Button>{' '}
			<Button onClick={() => toggleSocialNetwork(SocialNetworks.INSTAGRAM)}>
				Instagram
			</Button>
			<Video
				socialNetwork={socialNetwork}
				tiktokId={tiktokId}
				instagramId={instagramId}
			/>
		</Styled.SocialVideos>
	);
};

export default SocialVideos;
