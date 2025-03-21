'use client';

import React from 'react';
import styled from 'styled-components';
import BakersRecipes from '../components/BakersRecipes';

const HeroSection = styled.section`
  padding: 8rem 1rem 6rem;
  background: #2B1B58;
  color: white;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, rgba(43, 27, 88, 0.95), rgba(43, 27, 88, 0.8));
    z-index: 1;
  }
`;

const HeroContainer = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const Title = styled.h1`
  font-size: 4.5rem;
  margin-bottom: 1.5rem;
  color: white;
  font-weight: 800;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  color: white;
  font-family: black;
  font-size: 22.4px;
  font-weight: 400;
  line-height: 33.6px;
  max-width: 800px;
  margin: 0 auto;
  opacity: 0.9;
`;

const RecipesPage = () => {
  return (
    <>
      <HeroSection>
        <HeroContainer>
          <Title>Our Recipes</Title>
          <Description>
            Discover delicious recipes made with Baker's Inn bread. 
            From quick snacks to family meals, we've got something for everyone.
          </Description>
        </HeroContainer>
      </HeroSection>
      
      <BakersRecipes />
    </>
  );
};

export default RecipesPage; 