import { useEffect } from 'react';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';

const Home = () => {
	useEffect(() => {
		if (typeof window !== undefined)
			window.location.replace('https://nkemjikaobi.dev/');
	}, []);

	return (
		<Layout>
			<Section grid>
				<Hero />
				<BgAnimation />
			</Section>
			<Projects />
			<Technologies />
			<Timeline />
		</Layout>
	);
};

export default Home;
