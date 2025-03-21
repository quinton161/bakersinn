'use client'

import React, { useState } from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import FactoryTourPopup from './FactoryTourPopup'

const Section = styled.section`
  padding: 4rem 1rem;
  background: white;
  @media (min-width: 768px) {
    padding: 4rem 2rem;
  }
`

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
`

const ImageContainer = styled.div`
  width: 100%;
  position: relative;
  height: 500px;
  @media (min-width: 768px) {
    width: 50%;
  }
`

const StyledImage = styled(Image)`
  object-fit: cover;
`

const ContentContainer = styled.div`
  width: 100%;
  max-width: 36rem;
  @media (min-width: 768px) {
    width: 50%;
  }
`

const Title = styled.h2`
  font-size: 40px;
  font-weight: bold;
  color: #27235C;
  margin-bottom: 1.5rem;
`

const Description = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: #4A4A4A;
  margin-bottom: 2rem;
`

const TourButton = styled.button`
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
`

export default function FactoryTour() {
  const [isPopupOpen, setIsPopupOpen] = useState(false)

  return (
    <Section>
      <Container>
        <ContentContainer>
          <Title>Factory Tour</Title>
          <Description>
            Keep on seeing how Baker's Inn products are made? Are you interested in a field visit to our factory? Book a tour to our factory and we will be happy to show you around our world class facility.
          </Description>
          <TourButton onClick={() => setIsPopupOpen(true)}>
            BOOK FACTORY TOUR
          </TourButton>
        </ContentContainer>

        <ImageContainer>
          <Image
            src="/images/contactusheader.png"
            alt="Baker's Inn Factory Tour"
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </ImageContainer>
      </Container>
      <FactoryTourPopup 
        isOpen={isPopupOpen}
        onClose={() => setIsPopupOpen(false)}
      />
    </Section>
  )
} 