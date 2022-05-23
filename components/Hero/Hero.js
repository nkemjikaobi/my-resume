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
					An energetic and imaginative Software Engineer who is able to work
					alongside other talented engineers in creating scalable web
					applications to the very highest standards. I have a high awareness of
					industry issues and trends. I am a very dedicated engineer that has
					the drive and massive energy needed to really make a difference to a
					project and create value to my employers.
				</SectionText>
				<Button onClick={showName}>Mucho Gusto</Button>
			</LeftSection>
		</Section>
	</>
);

export default Hero;
