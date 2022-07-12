import { PostMetaFile } from 'src/types/Post';

export const Metadata: PostMetaFile = {
	['en-US']: {
		slug: 'fixing-cls-anchor-ads-adsense',
		title: 'How to fix Cumulative Layout Shift in Adsense anchor ads',
		author: 'Matheus Francisco',
		description:
			'Google introduced mobile anchor ads for Adsense (FINALLY!!), but it moves the page content down and causes too much CLS',
		date: '2021-10-12'
	},
	['pt-BR']: {
		slug: 'fixing-cls-anchor-ads-adsense',
		title:
			'Como corrigir o Cumulative Layout Shift nos anúncios de âncora do Adsense',
		author: 'Matheus Francisco',
		description:
			'O Google começou a adotar anúncios de âncora no Adsense (FINALMENTE!!!), mas ele move a página para baixo e causa muito CLS',
		date: '2021-10-12'
	}
};
