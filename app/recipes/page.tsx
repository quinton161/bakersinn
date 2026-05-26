'use client'

import Image from 'next/image'
import {
  BorderTitle,
  ButtonLink,
  CardBody,
  CardGrid,
  Container,
  ImageCard,
  ImageFrame,
  InnerPage,
  Lead,
  Section,
  SectionTitle,
} from '../components/SimbisaShared'

const recipes = [
  {
    name: 'Classic White Bread Sandwich',
    image: '/images/breadslices.png',
    prep: '10 mins',
    serves: '1 person',
    href: '/recipe/classic-white-bread-sandwich',
  },
  {
    name: 'Shwarma Sandwich',
    image: '/images/shwarma.png',
    prep: '20 mins',
    serves: '2 people',
    href: '/recipe/classic-white-bread-sandwich',
  },
  {
    name: 'Sweet Shortbread',
    image: '/images/shortbread.png',
    prep: '20 mins',
    serves: '6 people',
    href: '/recipe/classic-white-bread-sandwich',
  },
  {
    name: 'Salmon Strips',
    image: '/images/salmon.png',
    prep: '20 mins',
    serves: '6 people',
    href: '/recipe/classic-white-bread-sandwich',
  },
]

export default function RecipesPage() {
  return (
    <InnerPage
      eyebrow="Recipes"
      title="Baker's Recipes"
      intro="Recipe ideas using Baker's Inn products, from quick snacks to family meals."
      heroImage="/images/recipes banner.png"
    >
      <Container>
        <Section>
          <BorderTitle>Meal ideas</BorderTitle>
          <SectionTitle>Simple recipes made with fresh bread.</SectionTitle>
          <Lead>
            Keep the app routes working while presenting the recipes in the
            clean Simbisa visual language.
          </Lead>
        </Section>

        <CardGrid>
          {recipes.map((recipe) => (
            <ImageCard key={recipe.name}>
              <ImageFrame>
                <Image
                  src={recipe.image}
                  alt={recipe.name}
                  fill
                  sizes="(max-width: 760px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </ImageFrame>
              <CardBody>
                <h3>{recipe.name}</h3>
                <p>
                  Prep Time: {recipe.prep}
                  <br />
                  Serves: {recipe.serves}
                </p>
                <ButtonLink href={recipe.href}>View recipe</ButtonLink>
              </CardBody>
            </ImageCard>
          ))}
        </CardGrid>
      </Container>
    </InnerPage>
  )
}
