import styled, { css } from 'styled-components';
import Image from 'next/image';

import TRpng from '@images/TRsmall.svg';
import STSpng from '@images/STSsmall.svg';
import Snakepng from '@images/Snakesmall.svg';
import MFpng from '@images/MFsmall.svg';
import FDSpng from '@images/FDSsmall.svg';
import WeMeetpng from '@images/WeMeet.svg'

import GithubIcon from '@images/Githublink.svg';


const ProjectSectionContainer = styled.div`
  background-color: black;
  width: 100%;
  height: 100%;
  overflow-x: hidden; /* Hide horizontal overflow */
`;

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin: 0 auto;
  max-width: 80%; /* Ensure the grid container doesn't exceed the container's width */
  padding: 20px;
  background-color: black;
  overflow-x: hidden; /* Hide horizontal overflow */

  @media (max-width: 525px) {
    gap: 15px;
    padding: 0px;
    max-width: 95%; /* Adjust the max-width to create space */
  }
`;

const Card = styled.div`
  width: 373px;
  height: 308px;
  background: #161617; /* Change the background color to #161617 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 30px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column; /* Arrange title and tags vertically */
  padding: 20px; /* Add padding to create space for title and tags */
  justify-content: space-between; /* Align content at the top and bottom of the card */

  &:hover {
    transform: scale(1.01); /* Scale up on hover */
  }

  &:active {
    transform: scale(0.99); /* Scale down on press */
  }

  @media (max-width: 1007px) {
    flex: 1 1 calc(100% - 40px); /* Make the cards take up the full width while preserving their dimensions */
    max-width: 373px; /* Remove the max-width */
    min-height: 308px;
  }
  
`;

const CardLink = styled.a`
  text-decoration: none; /* Remove underline from the anchor */
  color: inherit; /* Inherit the text color from parent */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  
`;

const TitleAndTagsContainer = styled.div`
  width: 70%;
  flex-shrink: 0;
  position: absolute;
  bottom: 5px;
  left: 0px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end; /* Align the container at the bottom */
  margin-left: 20px; /* Add 20px spacing on the left */
  margin-bottom: 20px; /* Add 20px spacing from the bottom */
`;

const TitleText = styled.div`
  color: rgba(240, 240, 240, 0.65);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Inter, sans-serif;
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 16px; /* Add spacing between title and tags */
  `;

const TagsText = styled.div`
  color: rgba(240, 240, 240, 0.65);
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Inter, sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;


const CardImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CenteredText = styled.div`
  width: 100%;
  flex-shrink: 0;
  background: #000;
  padding-top: 20px;
  color: #fff;
  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 48px;
  font-weight: 600;
  line-height: normal;

  @media (max-width: 525px) {
    margin-bottom: 20px;
  }
`;

const CircleButton = styled.button<{
  $backgroundColor?: string; // Define $backgroundColor as a transient prop
}>`
  width: 35px;
  height: 35px;
  flex-shrink: 0;
  position: absolute;
  bottom: 15px;
  right: 15px;
  border-radius: 50%;
  background-color: ${(props) => props.$backgroundColor};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: none;
  outline: none;
  
  &:hover {
    transform: scale(1.1); /* Scale up on hover */
  }

  &:active {
    transform: scale(0.9); /* Scale down on press */
  }
`;

const CircleImage = styled(Image)`
  width: 24.88px;
  height: 24px;
  // padding-top: 6px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

`;

const projects = [
  {
    id: 1,
    title: 'WeMeet',
    imageUrl: WeMeetpng,
    color: '#1C6D54', // Custom color for this card
    link: 'https://github.com/arslanbekzhaparov/meetWe-when2meet-alternative-', // Custom link for this circle
    tags: ['Software Development', "UI"], // Add tags for Project 1
    website: 'https://cpen441-prototypes.vercel.app/',
  },
  {
    id: 2,
    title: 'Tennis Robot',
    imageUrl: TRpng,
    color: '#628300', // Custom color for this card
    link: 'https://github.com/arslanbekzhaparov/Lovely-Tennis-Robot', // Custom link for this circle
    tags: ['Integrated Engineering'],
    website: 'https://lovely-tennis-robot.vercel.app/',
  },
  {
    id: 3,
    title: 'Smart Trash Sorter',
    imageUrl: STSpng,
    color: '#164262', // Custom color for this card
    link: 'https://github.com/arslanbekzhaparov/Smart-Automatic-Recycling-Sorter', // Custom link for this circle
    tags: ['Integrated Engineering'],
    website: 'https://github.com/arslanbekzhaparov/Smart-Automatic-Recycling-Sorter',
  },
  {
    id: 4,
    title: 'Snake Game',
    imageUrl: Snakepng,
    color: '#FF7F50', // Custom color for this card
    link: 'https://github.com/arslanbekzhaparov/SNAKE-MATH-GAME', // Custom link for this circle
    tags: ['Software Development'],
    website: 'https://github.com/arslanbekzhaparov/SNAKE-MATH-GAME',
  },
  {
    id: 5,
    title: 'MyFridge',
    imageUrl: MFpng,
    color: '#DEE4EC', // Custom color for this card
    link: 'https://github.com/arslanbekzhaparov/MyFridge', // Custom link for this circle
    tags: ['Design', 'Software Development'],
    website: 'https://github.com/arslanbekzhaparov/MyFridge',
  },
  {
    id: 6,
    title: 'Fraud Detection System',
    imageUrl: FDSpng,
    color: '#656278', // Custom color for this card
    link: 'https://github.com/arslanbekzhaparov/Fraud-Detection-System', // Custom link for this circle
    tags: ['Machine Learning'], // Add tags for Project 1
    website: 'https://github.com/arslanbekzhaparov/Fraud-Detection-System',
  },
  // Add more projects as needed
];

function ProjectsSection() {
  return (
    <ProjectSectionContainer>
      <CenteredText>Projects</CenteredText>
      <GridContainer>
        {projects.map((project) => (
          <Card key={project.id} color={project.color}>
            <CardLink href={project.website} target="_blank">
              <CardImage src={project.imageUrl} alt={project.title} fill style={{ objectFit: 'contain' }} />
              <TitleAndTagsContainer>
                <TitleText>{project.title}</TitleText>
                <TagsText>{project.tags.join(', ')}</TagsText>
              </TitleAndTagsContainer>
              <CircleButton $backgroundColor={project.color}>
                <CircleImage src={GithubIcon} alt={'Github Link'} />
              </CircleButton>
            </CardLink>
          </Card>
        ))}
      </GridContainer>
    </ProjectSectionContainer>
  );
}

export default ProjectsSection;