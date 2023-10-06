import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';

import Githubsvg from '@images/GithubContact.svg';
import Resumesvg from '@images/Resume.svg';
import Homesvg from '@images/Home.svg';
import Gmailsvg from '@images/Gmail.svg';
import LinkedINsvg from '@images/LinkedIn.svg';

const ContactSectionContainer = styled.div`
  background-color: #161617; /* Change the background color to #161617 */
  width: 100%;
  height: 100%;
  margin-top: 10px;
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
  overflow-x: hidden; /* Hide horizontal overflow */
`;

const GridItem = styled.div`
  
  border-radius: 90px;
  width: 77px;
  height: 77px;
  flex-shrink: 0;
  transition: transform 0.3s ease-in-out;
  display: flex;
  justify-content: center;
  align-items: center; /* Center the content vertically */

  &:hover {
    transform: scale(1.01);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const GridImageContainer = styled.div`
  background-color: #161617; /* Set the fill color here */
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center; /* Center the content vertically */
`;

const GridImage = styled(Image)`
  width: 80%;
  height: 80%;
  object-fit: contain;
`;

const GridLink = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  text-decoration: none;
`;

const CenteredText = styled.div`
  width: 100%;
  flex-shrink: 0;
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

export const contact = [
  {
    id: 1,
    name: "Github",
    imageUrl: Githubsvg, // Replace with your image path
    link: 'https://github.com/arslanbekzhaparov', // Replace with your link
  },
  {
    id: 2,
    name: "Resume",
    imageUrl: Resumesvg, // Replace with your image path
    link: 'https://drive.google.com/file/d/14JYyVCB2Gq1ubK9V6MacBnkT5giyH_As/view?usp=sharing', // Replace with your link
  },
  {
    id: 3,
    name: "Home",
    imageUrl: Homesvg, // Replace with your image path
    link: 'https://www.arslanbekzhaparov.com/', // Replace with your link
  },
  {
    id: 4,
    name: "Gmail",
    imageUrl: Gmailsvg, // Replace with your image path
    link: 'mailto:arslanbekzhaparov@gmail.com', // Replace with your link
  },
  {
    id: 5,
    name: "LinkedIn",
    imageUrl: LinkedINsvg, // Replace with your image path
    link: 'https://www.linkedin.com/in/arslanbek-zhaparov/', // Replace with your link
  },
  // Add more contacts as needed
];

const ContactCont = () => {
  return (
    <ContactSectionContainer>
      <CenteredText>Contacts</CenteredText>
      <GridContainer>
        {contact.map((contact) => (
          <GridItem key={contact.id}>
            <Link href={contact.link}>
              <GridLink>
                <GridImageContainer>
                  <GridImage
                    src={contact.imageUrl}
                    alt={contact.name}
                  />
                </GridImageContainer>
              </GridLink>
            </Link>
          </GridItem>
        ))}
      </GridContainer>
    </ContactSectionContainer>
  );
};

export default ContactCont;