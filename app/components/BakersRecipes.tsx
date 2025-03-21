'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const Section = styled.section`
  padding: 4rem 1rem;
  background: white;
`;

const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: bold;
  color: #27235C;
  text-align: center;
  margin-bottom: 1.5rem;
`;

const TabContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 0;
    right: 0;
    height: 1px;
    background: #E5E5E5;
  }
`;

interface TabProps {
  $active: boolean;
}

const Tab = styled.button<TabProps>`
  font-size: 1.25rem;
  color: ${props => props.$active ? '#27235C' : '#A5A5A5'};
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -1rem;
    left: 0;
    right: 0;
    height: 3px;
    background: ${props => props.$active ? '#B69D74' : 'transparent'};
    z-index: 1;
  }
`;

const RecipeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;
`;

const RecipeCard = styled.div`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease;

  &:hover {
    transform: translateY(-4px);
  }
`;

const RecipeImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const RecipeContent = styled.div`
  padding: 1.5rem;
`;

const RecipeName = styled.h3`
  font-size: 1.5rem;
  color: #27235C;
  margin-bottom: 1rem;
`;

const RecipeInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const InfoText = styled.p`
  color: #666;
  font-size: 1rem;

  span {
    color: #B69D74;
  }
`;

const ArrowButton = styled(Link)`
  width: 40px;
  height: 40px;
  background: #B69D74;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s ease;
  color: white;
  text-decoration: none;

  &:hover {
    background: #9a845f;
  }
`;

interface Recipe {
  id: number;
  name: string;
  image: string;
  prepTime: string;
  serves: string;
}

const recipes: { [key: string]: Recipe[] } = {
  kids: [
    {
      id: 1,
      name: 'Shwarma Sandwich',
      image: '/images/shwarma.png',
      prepTime: '20 min',
      serves: '6 people'
    },
    {
      id: 2,
      name: 'Shwarma Sandwich',
      image: '/images/shwarma.png',
      prepTime: '20 min',
      serves: '6 people'
    },
    {
      id: 3,
      name: 'Shwarma Sandwich',
      image: '/images/shwarma.png',
      prepTime: '20 min',
      serves: '6 people'
    }
  ],
  vegans: [
    {
      id: 1,
      name: 'Sweet Shortbread',
      image: '/images/shortbread.png',
      prepTime: '20 min',
      serves: '6 people'
    },
    {
      id: 2,
      name: 'Sweet Shortbread',
      image: '/images/shortbread.png',
      prepTime: '20 min',
      serves: '6 people'
    },
    {
      id: 3,
      name: 'Sweet Shortbread',
      image: '/images/shortbread.png',
      prepTime: '20 min',
      serves: '6 people'
    }
  ],
  family: [
    {
      id: 1,
      name: 'Salmon Strips',
      image: '/images/salmon.png',
      prepTime: '20 min',
      serves: '6 people'
    },
    {
      id: 2,
      name: 'Salmon Strips',
      image: '/images/salmon.png',
      prepTime: '20 min',
      serves: '6 people'
    },
    {
      id: 3,
      name: 'Salmon Strips',
      image: '/images/salmon.png',
      prepTime: '20 min',
      serves: '6 people'
    }
  ]
};

const BakersRecipes: React.FC = () => {
  const [activeTab, setActiveTab] = useState('kids');

  return (
    <Section>
      <Container>
        <Title>Baker's Recipes</Title>
        <TabContainer>
          <Tab 
            $active={activeTab === 'kids'} 
            onClick={() => setActiveTab('kids')}
          >
            For kids
          </Tab>
          <Tab 
            $active={activeTab === 'vegans'} 
            onClick={() => setActiveTab('vegans')}
          >
            For Vegans
          </Tab>
          <Tab 
            $active={activeTab === 'family'} 
            onClick={() => setActiveTab('family')}
          >
            For Family
          </Tab>
        </TabContainer>

        <RecipeGrid>
          {recipes[activeTab].map((recipe) => (
            <RecipeCard key={recipe.id}>
              <RecipeImage
                src={recipe.image}
                alt={recipe.name}
              />
              <RecipeContent>
                <RecipeName>{recipe.name}</RecipeName>
                <RecipeInfo>
                  <div>
                    <InfoText>Prep Time: <span>{recipe.prepTime}</span></InfoText>
                    <InfoText>Serves: <span>{recipe.serves}</span></InfoText>
                  </div>
                  <ArrowButton href={`/recipe/${recipe.name.toLowerCase().replace(/ /g, '-')}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z" fill="white"/>
                    </svg>
                  </ArrowButton>
                </RecipeInfo>
              </RecipeContent>
            </RecipeCard>
          ))}
        </RecipeGrid>
      </Container>
    </Section>
  );
};

export default BakersRecipes; 