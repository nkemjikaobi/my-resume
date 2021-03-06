import React from 'react';
import {
	BlogCard,
	CardInfo,
	ExternalLinks,
	GridContainer,
	HeaderThree,
	Hr,
	Tag,
	TagList,
	TitleContent,
	UtilityList,
	Img,
} from './ProjectsStyles';
import {
	Section,
	SectionDivider,
	SectionTitle,
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import { v4 as uuidv4 } from 'uuid';

const Projects = () => (
	<Section nopadding id='projects'>
		<SectionDivider />
		<SectionTitle main>Projects</SectionTitle>
		<GridContainer>
			{projects.map((project, uniqueIdentifier) => {
				return (
					<BlogCard key={uniqueIdentifier}>
						<Img src={project.image} />
						<TitleContent>
							<HeaderThree title>{project.title}</HeaderThree>
							<Hr />
						</TitleContent>
						<CardInfo className='card-info'>{project.description}</CardInfo>
						<div>
							<TitleContent>Stack</TitleContent>
							<TagList>
								{project.tags.map((tags, tagsId) => {
									return <Tag key={uuidv4()}>{tags}</Tag>;
								})}
							</TagList>
						</div>
						<UtilityList>
							<ExternalLinks href={project.visit}>Code</ExternalLinks>
							<ExternalLinks href={project.source}>Visit</ExternalLinks>
						</UtilityList>
					</BlogCard>
				);
			})}
		</GridContainer>
	</Section>
);

export default Projects;
