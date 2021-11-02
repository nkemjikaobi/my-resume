import React from 'react';
import {
	Section,
	SectionText,
	SectionTitle,
} from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const showName = () => {
	alert('Obi Nkemjika Derick');
};

const Hero = props => (
	<>
		<Section row nopadding>
			<LeftSection>
				<SectionTitle main center>
					Hello This Is <br />
					Obi Nkemjika Derick
				</SectionTitle>
				<SectionText>
					I am a Software Engineer. I love to solve problems and create new web
					experiences for the people.
				</SectionText>
				<Button onClick={showName}>Mucho Gusto</Button>
			</LeftSection>
		</Section>
	</>
);

export default Hero;
