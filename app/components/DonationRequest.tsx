'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import DonationRequestPopup from './DonationRequestPopup';

const Section = styled.section`
  padding: 4rem 1rem;
  background: white;
  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }
`;

const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  @media (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`;

const ContentContainer = styled.div`
  width: 100%;
  max-width: 36rem;
  @media (min-width: 768px) {
    width: 50%;
  }
`;

const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
  color: #27235C;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: #4A4A4A;
  margin-bottom: 2rem;
`;

const DonationButton = styled.button`
  background-color: #B69D74;
  color: white;
  padding: 1rem 3rem;
  font-size: 1.125rem;
  font-weight: 500;
  border-radius: 0.125rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  
  &:hover {
    background-color: #9a845f;
  }
`;

export default function DonationRequest() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <Section>
      <Container>
        <ImageContainer>
          <Image
            src="/images/donate .png"
            alt="People preparing food donations"
          />
        </ImageContainer>
        
        <ContentContainer>
          <Title>Request A Donation</Title>
          <Description>
            If you are holding an event that you wish to have us donate to we're more than glad to help. 
            Fill in the donation form for us to best understand how we can increase your event's impact in the local community.
          </Description>
          <DonationButton onClick={() => setIsPopupOpen(true)}>
            REQUEST DONATION
          </DonationButton>
        </ContentContainer>
      </Container>
      <DonationRequestPopup 
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </Section>
  );
} 