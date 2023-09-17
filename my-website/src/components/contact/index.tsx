import React from 'react';
import styled from 'styled-components';
import Spline from '@splinetool/react-spline';
import Image from 'next/image';

const ContactDiv = styled.div`
  width: 100%;
  height: 350px;
  background-color: #161617;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function ContactSec() {
  return (
    <ContactDiv>
      {/* Spline Component */}
      <Spline scene="https://prod.spline.design/c7TnsZRHoG2Z-zDG/scene.splinecode" />

      {/* Other content for your contact section */}
    </ContactDiv>
  );
}

export default ContactSec;