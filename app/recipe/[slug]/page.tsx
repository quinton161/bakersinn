'use client'

import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'
import { useState } from 'react'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import AccessTimeIcon from '@mui/icons-material/AccessTime'
import PeopleIcon from '@mui/icons-material/People'
import PrintIcon from '@mui/icons-material/Print'
import ShareIcon from '@mui/icons-material/Share'
import FavoriteIcon from '@mui/icons-material/Favorite'
import RestaurantIcon from '@mui/icons-material/Restaurant'
import ListAltIcon from '@mui/icons-material/ListAlt'
import HomeIcon from '@mui/icons-material/Home'
import CakeIcon from '@mui/icons-material/Cake'
import SetMealIcon from '@mui/icons-material/SetMeal'

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  min-height: 100vh;
  background: #FAFAFA;
  position: relative;
`

const HeroSection = styled.div`
  position: relative;
  height: 60vh;
  min-height: 500px;
  width: 100%;
  background: #2B1B58;
  overflow: hidden;
`

const HeroImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.6;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 30%;
    background: linear-gradient(to bottom, transparent, #2B1B58);
  }
`

const ButtonGroup = styled.div`
  position: absolute;
  top: 2rem;
  left: 2rem;
  display: flex;
  gap: 1rem;
  z-index: 10;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`

const NavButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: white;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 2rem;
  transition: all 0.3s;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateX(-5px);
  }
`

const ContentWrapper = styled.div`
  max-width: 1200px;
  margin: -200px auto 4rem;
  padding: 0 2rem;
  position: relative;
  z-index: 10;

  @media (max-width: 768px) {
    margin-top: -150px;
    padding: 0 1rem;
  }
`

const RecipeHeader = styled.div`
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  margin-bottom: 2rem;
`

const Title = styled.h1`
  color: #2B1B58;
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`

const Description = styled.p`
  color: rgb(38, 27, 108);
  font-family: black;
  font-size: 22.4px;
  font-weight: 400;
  line-height: 33.6px;
  margin-bottom: 2rem;
`

const Stats = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  background: #FAF7F2;
  padding: 1.5rem;
  border-radius: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const StatItem = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: white;
  border-radius: 1rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }
`

const StatIcon = styled.div`
  color: white;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #C19A5B;
  border-radius: 1rem;
  box-shadow: 0 2px 8px rgba(193, 154, 91, 0.3);

  svg {
    font-size: 1.75rem;
  }
`

const StatInfo = styled.div`
  flex: 1;
`

const StatLabel = styled.div`
  color: #666666;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
`

const StatValue = styled.div`
  color: rgb(38, 27, 108);
  font-family: black;
  font-size: 22.4px;
  font-weight: 400;
  line-height: 33.6px;
`

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`

const Section = styled.div`
  background: white;
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
`

const SectionTitle = styled.h2`
  color: #2B1B58;
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;

  svg {
    color: #C19A5B;
  }
`

const IngredientsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

const IngredientItem = styled.div`
  color: rgb(38, 27, 108);
  font-family: black;
  font-size: 22.4px;
  font-weight: 400;
  line-height: 33.6px;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: #FAF7F2;
  border-radius: 1rem;
  transition: all 0.3s;

  &:hover {
    transform: translateX(10px);
    background: #f0e9e0;
  }

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    background: #C19A5B;
    border-radius: 50%;
  }
`

const StepsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`

const StepItem = styled.div`
  display: flex;
  gap: 1.5rem;
  padding: 1.5rem;
  background: #FAF7F2;
  border-radius: 1rem;
  transition: all 0.3s;

  &:hover {
    transform: translateX(10px);
    background: #f0e9e0;
  }
`

const StepNumber = styled.div`
  width: 50px;
  height: 50px;
  background: #C19A5B;
  color: white;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 1.5rem;
  flex-shrink: 0;
  box-shadow: 0 2px 8px rgba(193, 154, 91, 0.3);
`

const StepContent = styled.div`
  flex: 1;
`

const StepTitle = styled.h3`
  color: #2B1B58;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`

const StepDescription = styled.p`
  color: rgb(38, 27, 108);
  font-family: black;
  font-size: 22.4px;
  font-weight: 400;
  line-height: 33.6px;
`

const ActionButtons = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  z-index: 100;
`

const ActionButton = styled.button`
  background: #C19A5B;
  color: white;
  border: none;
  border-radius: 1rem;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  transition: all 0.3s;

  &:hover {
    background: #A88347;
    transform: translateX(-5px);
  }

  svg {
    font-size: 1.5rem;
  }
`

interface RecipeDetailProps {
  params: {
    slug: string;
  }
}

const recipeData = {
  'shwarma-sandwich': {
    title: 'Shwarma Sandwich',
    description: 'A delicious Middle Eastern sandwich filled with marinated grilled chicken and fresh vegetables. Perfect for lunch or dinner!',
    image: '/images/shwarma.png',
    prepTime: '5 Minutes',
    serves: '6 people',
    category: 'Middle Eastern',
    ingredients: [
      '½ cup olive oil',
      '½ cup ranch dressing',
      '3 tablespoons Worcestershire sauce',
      '1 tablespoon minced fresh rosemary',
      '2 teaspoons salt',
      '1 teaspoon lemon juice',
      '1 teaspoon white vinegar',
      '¼ teaspoon ground black pepper'
    ],
    steps: [
      {
        title: 'Prepare the Marinade',
        description: 'In a medium bowl, stir together the olive oil, ranch dressing, Worcestershire sauce, rosemary, salt, lemon juice, white vinegar, pepper, and sugar. Let stand for 5 minutes. Place chicken in the bowl, and stir to coat with the marinade. Cover and refrigerate for 30 minutes.'
      },
      {
        title: 'Prepare for Grilling',
        description: 'Preheat the grill for medium-high heat. Thread chicken onto skewers and discard marinade.'
      },
      {
        title: 'Grill the Chicken',
        description: 'Lightly oil the grill grate. Grill skewers for 8 to 12 minutes, or until the chicken is no longer pink in the center, and the juices run clear.'
      }
    ]
  },
  'sweet-shortbread': {
    title: 'Sweet Shortbread',
    description: 'A classic buttery shortbread cookie that melts in your mouth. Perfect for tea time or as a sweet treat any time of day!',
    image: '/images/shortbread.png',
    prepTime: '20 Minutes',
    serves: '6 people',
    category: 'Vegan Dessert',
    ingredients: [
      '½ cup olive oil',
      '½ cup ranch dressing',
      '3 tablespoons Worcestershire sauce',
      '1 tablespoon minced fresh rosemary',
      '2 teaspoons salt',
      '1 teaspoon lemon juice',
      '1 teaspoon white vinegar',
      '¼ teaspoon ground black pepper'
    ],
    steps: [
      {
        title: 'Prepare the Mixture',
        description: 'In a medium bowl, stir together the olive oil, ranch dressing, Worcestershire sauce, rosemary, salt, lemon juice, white vinegar, pepper, and sugar. Let stand for 5 minutes. Place chicken in the bowl, and stir to coat with the marinade. Cover and refrigerate for 30 minutes.'
      },
      {
        title: 'Prepare for Baking',
        description: 'Preheat the grill for medium-high heat. Thread chicken onto skewers and discard marinade.'
      },
      {
        title: 'Bake to Perfection',
        description: 'Lightly oil the grill grate. Grill skewers for 8 to 12 minutes, or until the chicken is no longer pink in the center, and the juices run clear.'
      }
    ]
  },
  'salmon-strips': {
    title: 'Salmon Strips',
    description: 'Delicious and healthy salmon strips, perfectly seasoned and grilled to perfection. A family favorite that\'s both nutritious and easy to prepare!',
    image: '/images/salmon.png',
    prepTime: '20 Minutes',
    serves: '6 people',
    category: 'Family Meal',
    ingredients: [
      '½ cup olive oil',
      '½ cup ranch dressing',
      '3 tablespoons Worcestershire sauce',
      '1 tablespoon minced fresh rosemary',
      '2 teaspoons salt',
      '1 teaspoon lemon juice',
      '1 teaspoon white vinegar',
      '¼ teaspoon ground black pepper'
    ],
    steps: [
      {
        title: 'Prepare the Marinade',
        description: 'In a medium bowl, stir together the olive oil, ranch dressing, Worcestershire sauce, rosemary, salt, lemon juice, white vinegar, pepper, and sugar. Let stand for 5 minutes. Place chicken in the bowl, and stir to coat with the marinade. Cover and refrigerate for 30 minutes.'
      },
      {
        title: 'Prepare for Grilling',
        description: 'Preheat the grill for medium-high heat. Thread chicken onto skewers and discard marinade.'
      },
      {
        title: 'Grill the Salmon',
        description: 'Lightly oil the grill grate. Grill skewers for 8 to 12 minutes, or until the chicken is no longer pink in the center, and the juices run clear.'
      }
    ]
  }
};

const RecipeDetail = ({ params }: RecipeDetailProps) => {
  const recipe = recipeData[params.slug as keyof typeof recipeData];
  
  const handlePrint = () => {
    window.print();
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: `${recipe.title} Recipe`,
        text: `Check out this delicious ${recipe.title} recipe!`,
        url: window.location.href,
      });
    }
  };

  if (!recipe) {
    return <div>Recipe not found</div>;
  }

  return (
    <Container>
      <HeroSection>
        <HeroImage>
          <Image
            src={recipe.image}
            alt={recipe.title}
            fill
            style={{ objectFit: 'cover' }}
            priority
          />
        </HeroImage>
        <ButtonGroup>
          <NavButton href="/">
            <HomeIcon /> Back to Home
          </NavButton>
          <NavButton href="/recipes">
            <ArrowBackIcon /> Back to Recipes
          </NavButton>
        </ButtonGroup>
      </HeroSection>

      <ContentWrapper>
        <RecipeHeader>
          <Title>{recipe.title}</Title>
          <Description>{recipe.description}</Description>
          <Stats>
            <StatItem>
              <StatIcon>
                <AccessTimeIcon />
              </StatIcon>
              <StatInfo>
                <StatLabel>Prep Time</StatLabel>
                <StatValue>{recipe.prepTime}</StatValue>
              </StatInfo>
            </StatItem>
            <StatItem>
              <StatIcon>
                <PeopleIcon />
              </StatIcon>
              <StatInfo>
                <StatLabel>Serves</StatLabel>
                <StatValue>{recipe.serves}</StatValue>
              </StatInfo>
            </StatItem>
            <StatItem>
              <StatIcon>
                {recipe.category === 'Vegan Dessert' ? <CakeIcon /> : 
                 recipe.category === 'Family Meal' ? <SetMealIcon /> : 
                 <RestaurantIcon />}
              </StatIcon>
              <StatInfo>
                <StatLabel>Category</StatLabel>
                <StatValue>{recipe.category}</StatValue>
              </StatInfo>
            </StatItem>
          </Stats>
        </RecipeHeader>

        <ContentGrid>
          <Section>
            <SectionTitle>
              <ListAltIcon /> Ingredients
            </SectionTitle>
            <IngredientsList>
              {recipe.ingredients.map((ingredient, index) => (
                <IngredientItem key={index}>{ingredient}</IngredientItem>
              ))}
            </IngredientsList>
          </Section>

          <Section>
            <SectionTitle>
              <RestaurantIcon /> Directions
            </SectionTitle>
            <StepsList>
              {recipe.steps.map((step, index) => (
                <StepItem key={index}>
                  <StepNumber>{index + 1}</StepNumber>
                  <StepContent>
                    <StepTitle>{step.title}</StepTitle>
                    <StepDescription>{step.description}</StepDescription>
                  </StepContent>
                </StepItem>
              ))}
            </StepsList>
          </Section>
        </ContentGrid>
      </ContentWrapper>

      <ActionButtons>
        <ActionButton onClick={() => {}} title="Save Recipe">
          <FavoriteIcon />
        </ActionButton>
        <ActionButton onClick={handleShare} title="Share Recipe">
          <ShareIcon />
        </ActionButton>
        <ActionButton onClick={handlePrint} title="Print Recipe">
          <PrintIcon />
        </ActionButton>
      </ActionButtons>
    </Container>
  );
};

export default RecipeDetail; 