import React from 'react';
import styled from 'styled-components';
import Image from 'next/image'; // Import next/image

import Card1Pic from '@images/culture_card1.svg'
import Card2Pic from '@images/culture_card2.svg'
import Card3Pic from '@images/culture_card3.svg'
import Card4Pic from '@images/culture_card4.svg'
import Card5Pic from '@images/culture_card5.png'

const CultureSec = styled.div`
  width: 100%;
  height: 100%;
  background-color: #161617;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 985px) {
    display: none;
  }
`;

const CenteredText = styled.div`
  width: 100%;
  height: 48px;
  flex-shrink: 0;
  margin-top: 20px;

  color: #FFF;
  text-align: center;
  font-family: Inter, sans-serif;
  font-size: 48px;
  font-weight: 600;
  line-height: normal;
`;

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 24px;
  margin-top: 27px;
`;

const Card1 = styled.div`
  width: 366px;
  height: 251px;
  background-color: black;
  border-radius: 20px;
  justify-content: center;
  
`;

const Card1Txt = styled.div`
display: flex;
width: 365px;
height: 72px;
flex-direction: column;
justify-content: center;
text-align: center;

text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
font-family: Inter;
font-size: 40px;
font-style: normal;
font-weight: 600;
line-height: normal;
background: linear-gradient(180deg, #DDEBF3 0%, #2990D7 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;

`

const Card2 = styled.div`
  width: 366px;
  height: 308px;
  background-color: black;
  border-radius: 20px;
`;

const Card2Txt = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Align content to the bottom */
  align-items: center; /* Center content horizontally */
  width: 100%; /* Make the text take up the full width of the card */
  height: 100%px;
  position: relative;
  margin: 10px;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-family: Inter;
  font-size: 33px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  background: linear-gradient(180deg, #DDEBF3 0%, #2990D7 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const Card3 = styled.div`
  width: 522px;
  height: 583px;
  background-color: black;
  border-radius: 20px;

  @media (max-width: 985px) {
    display: none;
  }
`;

const Card3Txt = styled.div`
display: flex;
width: 365px;
height: 100px;
flex-direction: column;
justify-content: center;
text-align: center;
margin-left: 15%;

text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
font-family: Inter;
font-size: 40px;
font-style: normal;
font-weight: 600;
line-height: normal;
background: linear-gradient(180deg, #DDEBF3 0%, #2990D7 100%);
background-clip: text;
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`

const Card4 = styled.div`
  width: 587px;
  height: 301px;
  background-color: black;
  border-radius: 20px;
  margin-bottom: 24px;

  @media (max-width: 985px) {
    display: none;
  }
`;

const Card4Txt = styled.div`
display: flex;
width: 585.875px;
height: 98px;
flex-direction: column;
justify-content: center;
flex-shrink: 0;
color: rgba(240, 240, 240, 0.65);
text-align: center;
text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
font-family: Inter;
font-size: 40px;
font-style: normal;
font-weight: 600;
line-height: normal;
`

const Card5 = styled.div`
  width: 301px;
  height: 301px;
  background-color: black;
  border-radius: 20px;

  @media (max-width: 985px) {
    display: none;
  }
`;

const Card1ImageWrapper = styled.div`
  position: relative;
  width: 100%; /* Set your desired width */
  height: 70%; /* Set your desired height */
  margin-bottom: 10px;
`;

const Card2ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 65%; /* Adjust the height as needed */
  margin-bottom: 10px;
`;


const Card3ImageWrapper = styled.div`
  position: relative;
  width: 100%; /* Set your desired width */
  height: 80%; /* Set your desired height */
  margin-bottom: 10px;
`;

const Card4ImageWrapper = styled.div`
  position: relative;
  width: 100%; /* Set your desired width */
  height: 100%; /* Set your desired height */
`;

const Card5ImageWrapper = styled.div`
  position: relative;
  width: 100%; /* Set your desired width */
  height: 100%; /* Set your desired height */
  margin-bottom: 10px;
`;

function CultureDiv() {
  return (
    <CultureSec>
      <CenteredText>Culture</CenteredText>
      <CardsContainer>
        <Column>
          <Card1>
            <Card1Txt>from Love</Card1Txt>           
            <Card1ImageWrapper>
              {/* Use next/image for optimizing and loading the image */}
              <Image src={Card1Pic} alt="Card 1" fill style={{objectFit: 'contain',}} />
            </Card1ImageWrapper></Card1>
            <Card2>        
            <Card2ImageWrapper>
              {/* Use next/image for optimizing and loading the image */}
              <Image src={Card2Pic} alt="Card 2" fill style={{objectFit: 'contain',}}  />
            </Card2ImageWrapper>
            <Card2Txt>that comes from the Hearts of Two Lovers</Card2Txt></Card2>
        </Column>
        <Card3>
            <Card3Txt>that forms the Unity of a Nation</Card3Txt>           
            <Card3ImageWrapper>
              {/* Use next/image for optimizing and loading the image */}
              <Image src={Card3Pic} alt="Card 3" fill style={{objectFit: 'contain',}}  />
            </Card3ImageWrapper></Card3>
      </CardsContainer>
      <CardsContainer>
        <Column><Card4>
                      
            <Card4ImageWrapper>
            {/* TODO: fix this issues the text should appear */}
              {/* <Card4Txt>Kyrgyz Ornament is a Rich Heritage</Card4Txt> */}
              <Image src={Card4Pic} alt="Card 4" fill style={{objectFit: 'contain',}}  />
            </Card4ImageWrapper> </Card4></Column>
            <Card5>   
            <Card5ImageWrapper>
              {/* Use next/image for optimizing and loading the image */}
              <Image src={Card5Pic} alt="Card 5" fill style={{objectFit: 'contain',}}  />
            </Card5ImageWrapper></Card5>
      </CardsContainer>
    </CultureSec>
  );
}

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export default CultureDiv;