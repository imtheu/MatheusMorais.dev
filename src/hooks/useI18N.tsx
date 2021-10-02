import { useRouter } from 'next/dist/client/router';

const useI18N = () => {
	const { locale, locales } = useRouter();
	return { locale: locale ?? 'en-US', locales };
};

export default useI18N;
