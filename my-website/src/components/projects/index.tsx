import styled from 'styled-components';
import Image from 'next/image';

import TRpng from '@images/TRsmall.png';
import STSpng from '@images/STSsmall.png';
import Snakepng from '@images/Snakesmall.png';
import MFpng from '@images/MFsmall.png';
import FDSpng from '@images/FDSsmall.png';
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

  @media (max-width: 1007px) {
    flex: 1 1 calc(100% - 40px); /* Make the cards take up the full width while preserving their dimensions */
    max-width: 373px; /* Remove the max-width */
    min-height: 308px;
  }
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
`;

const CircleButton = styled.button<{ circleColor?: string }>`
  width: 35px;
  height: 35px;
  flex-shrink: 0;
  position: absolute;
  bottom: 15px;
  right: 15px;
  border-radius: 50%;
  background-color: ${(props) => props.circleColor || 'red'}; /* Use the provided color or default to red */
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
    title: 'Project 1',
    imageUrl: TRpng,
    color: '#628300', // Custom color for this card
    link: 'https://github.com/arslanbekzhaparov/Lovely-Tennis-Robot', // Custom link for this circle
  },
  {
    id: 2,
    title: 'Project 2',
    imageUrl: STSpng,
    color: '#164262', // Custom color for this card
    link: 'https://github.com/arslanbekzhaparov/Smart-Automatic-Recycling-Sorter', // Custom link for this circle
  },
  {
    id: 3,
    title: 'Project 3',
    imageUrl: Snakepng,
    color: '#FF7F50', // Custom color for this card
    link: 'https://github.com/arslanbekzhaparov/SNAKE-MATH-GAME', // Custom link for this circle
  },
  {
    id: 4,
    title: 'Project 4',
    imageUrl: MFpng,
    color: '#DEE4EC', // Custom color for this card
    link: 'https://github.com/arslanbekzhaparov/MyFridge', // Custom link for this circle
  },
  {
    id: 5,
    title: 'Project 5',
    imageUrl: FDSpng,
    color: '#656278', // Custom color for this card
    link: 'https://github.com/arslanbekzhaparov/Fraud-Detection-System', // Custom link for this circle
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
            <CardImage src={project.imageUrl} alt={project.title} fill style={{ objectFit: 'contain' }} />
            <CircleButton as="button" circleColor={project.color} onClick={() => window.location.href = project.link}>
              <CircleImage src={GithubIcon} alt={'Github Link'}  />
            </CircleButton>
          </Card>
        ))}
      </GridContainer>
    </ProjectSectionContainer>
  );
}

export default ProjectsSection;