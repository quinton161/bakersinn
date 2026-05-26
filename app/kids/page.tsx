'use client'

import Image from 'next/image'
import {
  BorderTitle,
  CardBody,
  CardGrid,
  Container,
  ImageCard,
  ImageFrame,
  ImagePanel,
  ImageText,
  InnerPage,
  Lead,
  Section,
  SectionTitle,
  TextPanel,
  YellowPanel,
} from '../components/SimbisaShared'

const activities = [
  {
    title: 'Maze Challenge',
    text: "A fun printable activity for children to explore the Baker's Inn world.",
    image: '/images/maze.png',
  },
  {
    title: 'Pacman Game',
    text: "A playful arcade-style corner for younger Baker's Inn fans.",
    image: '/images/pacman.png',
  },
  {
    title: 'Super Mario Fun',
    text: 'Bright character-led activities from the existing kids corner assets.',
    image: '/images/mariofinal.png',
  },
]

export default function KidsPage() {
  return (
    <InnerPage
      eyebrow="Kids Corner"
      title="Kids Corner"
      intro="The kids area remains part of the app, now styled with the Simbisa page layout and brand colours."
      heroImage="/images/Kids Corner.png"
    >
      <Container>
        <Section>
          <BorderTitle>Activities</BorderTitle>
          <SectionTitle>Fun for the young Baker's Inn audience.</SectionTitle>
          <Lead>
            This page keeps the original kids route and content area while
            aligning the visuals to the Simbisa corporate style.
          </Lead>
        </Section>

        <ImageText>
          <ImagePanel>
            <Image
              src="/images/kids group.png"
              alt="Baker's Inn kids corner"
              fill
              sizes="(max-width: 780px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </ImagePanel>
          <YellowPanel>
            <h3>Games and learning</h3>
            <p>
              Use this space for games, puzzles, colouring pages and family
              friendly Baker's Inn activities.
            </p>
          </YellowPanel>
        </ImageText>

        <Section>
          <CardGrid>
            {activities.map((activity) => (
              <ImageCard key={activity.title}>
                <ImageFrame>
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    fill
                    sizes="(max-width: 760px) 100vw, 33vw"
                    style={{ objectFit: 'cover' }}
                  />
                </ImageFrame>
                <CardBody>
                  <h3>{activity.title}</h3>
                  <p>{activity.text}</p>
                </CardBody>
              </ImageCard>
            ))}
          </CardGrid>
        </Section>

        <ImageText>
          <TextPanel>
            <h3>Designed to be editable</h3>
            <p>
              The page is ready for you to edit activity names, images and
              descriptions after reviewing the running site.
            </p>
          </TextPanel>
          <ImagePanel>
            <Image
              src="/images/Corner.png"
              alt="Kids activity corner"
              fill
              sizes="(max-width: 780px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </ImagePanel>
        </ImageText>
      </Container>
    </InnerPage>
  )
}
