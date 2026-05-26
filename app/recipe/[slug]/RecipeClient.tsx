'use client'

import Image from 'next/image'
import {
  BorderTitle,
  ButtonLink,
  Card,
  CardGrid,
  Container,
  ImagePanel,
  ImageText,
  InnerPage,
  Section,
  SectionTitle,
  TextPanel,
  YellowPanel,
} from '../../components/SimbisaShared'

type Recipe = {
  title: string
  description: string
  prepTime: string
  cookTime: string
  servings: string
  image: string
  ingredients: string[]
  instructions: string[]
}

const recipes: Record<string, Recipe> = {
  'classic-white-bread-sandwich': {
    title: 'Classic White Bread Sandwich',
    description:
      "A simple sandwich made with fresh Baker's Inn white bread, perfect for any time of day.",
    prepTime: '10 mins',
    cookTime: '5 mins',
    servings: '1 person',
    image: '/images/breadslices.png',
    ingredients: [
      "2 slices of Baker's Inn White Bread",
      'Fresh lettuce',
      'Sliced tomato',
      'Cheese',
      'Ham or turkey',
      'Mayonnaise',
      'Mustard, optional',
    ],
    instructions: [
      "Start with two fresh slices of Baker's Inn White Bread.",
      'Spread mayonnaise and mustard on both slices.',
      'Layer lettuce, tomato, cheese and meat.',
      'Close the sandwich and cut diagonally.',
      'Serve immediately and enjoy.',
    ],
  },
}

type RecipeClientProps = {
  slug: string
}

export default function RecipeClient({ slug }: RecipeClientProps) {
  const recipe = recipes[slug] || recipes['classic-white-bread-sandwich']

  return (
    <InnerPage
      eyebrow="Recipe"
      title={recipe.title}
      intro={recipe.description}
      heroImage={recipe.image}
    >
      <Container>
        <Section>
          <BorderTitle>Recipe Details</BorderTitle>
          <SectionTitle>Make it with Baker's Inn.</SectionTitle>
          <CardGrid>
            <Card>
              <h3>Prep Time</h3>
              <p>{recipe.prepTime}</p>
            </Card>
            <Card>
              <h3>Cook Time</h3>
              <p>{recipe.cookTime}</p>
            </Card>
            <Card>
              <h3>Servings</h3>
              <p>{recipe.servings}</p>
            </Card>
          </CardGrid>
        </Section>

        <ImageText>
          <ImagePanel>
            <Image
              src={recipe.image}
              alt={recipe.title}
              fill
              sizes="(max-width: 780px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </ImagePanel>
          <YellowPanel>
            <h3>Ingredients</h3>
            <ul>
              {recipe.ingredients.map((ingredient) => (
                <li key={ingredient}>{ingredient}</li>
              ))}
            </ul>
          </YellowPanel>
        </ImageText>

        <Section>
          <ImageText>
            <TextPanel>
              <h3>Instructions</h3>
              <ul>
                {recipe.instructions.map((instruction) => (
                  <li key={instruction}>{instruction}</li>
                ))}
              </ul>
              <ButtonLink href="/recipes">Back to recipes</ButtonLink>
            </TextPanel>
            <ImagePanel>
              <Image
                src="/images/simbisa/img_7154.jpg"
                alt="Fresh Baker's Inn products"
                fill
                sizes="(max-width: 780px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </ImagePanel>
          </ImageText>
        </Section>
      </Container>
    </InnerPage>
  )
}
