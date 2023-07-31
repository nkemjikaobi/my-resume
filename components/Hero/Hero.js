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
					Innovative, confident and driven technical enthusiast with years of
					diversified career experience and a solid educational foundation.
					Skilled at partnering cross-departmentally with talented peer
					colleagues to develop and introduce scalable web applications created
					in accordance with exceptional standards. Leverage existing strategies
					and adapt robust yet dynamic technologies to overcome challenges as
					they emerge. Strive to be impactful when working on projects in order
					to create value for employers. Dedicated with a positive attitude and
					strong work ethic.
				</SectionText>
				<Button onClick={showName}>Mucho Gusto</Button>
			</LeftSection>
		</Section>
	</>
);

export default Hero;
