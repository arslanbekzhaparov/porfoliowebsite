import styled from 'styled-components';
import Image from 'next/image';

import TRpng from '@images/TRsmall.png';
import STSpng from '@images/STSsmall.png';
import Snakepng from '@images/Snakesmall.png';
import MFpng from '@images/MFsmall.png';
import FDSpng from '@images/FDSsmall.png';

const ProjectSectionContainer = styled.div`
  background-color: black;
`;

const GridContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center the cards horizontally */
  align-items: center; /* Center the cards vertically */
  gap: 20px;
  margin: 0 auto; /* Center the grid horizontally */
  max-width: 80%; /* Adjust the max-width to create space */
  padding: 20px; /* Add padding to create space between cards and border */
  background-color: black;
`;

const Card = styled.div`
  width: 373px;
  height: 308px;
  background: #161617; /* Change the background color to #161617 */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 40px;
  overflow: hidden;
  position: relative;

  @media (max-width: 1007px) {
    flex: 1 1 calc(100% - 40px); /* Make the cards take up the full width while preserving their dimensions */
    max-width: 373px; /* Remove the max-width */
    min-height: 308px;
  }

  @media (max-width: 525px) {
    
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


const projects = [
  {
    id: 1,
    title: 'Project 1',
    imageUrl: TRpng,
  },
  {
    id: 2,
    title: 'Project 2',
    imageUrl: STSpng,
  },
  {
    id: 3,
    title: 'Project 3',
    imageUrl: Snakepng,
  },
  {
    id: 4,
    title: 'Project 4',
    imageUrl: MFpng,
  },
  {
    id: 5,
    title: 'Project 5',
    imageUrl: FDSpng,
  },
  // Add more projects as needed
];

function ProjectsSection() {
  return (
    <ProjectSectionContainer>
      <CenteredText>Projects</CenteredText>
      <GridContainer>
        {projects.map((project) => (
          <Card key={project.id}>
            <CardImage
              src={project.imageUrl}
              alt={project.title}
              fill
              style={{objectFit: 'contain',}}
            />
          </Card>
        ))}
      </GridContainer>
    </ProjectSectionContainer>
  );
}

export default ProjectsSection;