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
  Lead,
  Section,
  SectionTitle,
  TextPanel,
} from '../components/SimbisaShared'

const careerLinks = [
  {
    title: 'Careers - Zimbabwe',
    text: 'A route for Zimbabwe career opportunities.',
  },
  {
    title: 'Regional Markets',
    text: 'A route for career opportunities across regional markets.',
  },
]

export default function CareersPage() {
  return (
    <InnerPage
      eyebrow="Careers"
      title="Careers"
      intro="A careers page based on the Simbisa website menu, styled to match the new bakery landing-page direction."
      heroImage="/images/simbisa/vida-brand-feed.jpg"
    >
      <Container>
        <Section>
          <BorderTitle>Join the team</BorderTitle>
          <SectionTitle>Build your path with Simbisa.</SectionTitle>
          <Lead>
            This page keeps careers content available inside the app and can be
            edited with specific vacancies, requirements and application links.
          </Lead>
        </Section>
        <CardGrid>
          {careerLinks.map((item) => (
            <Card key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Card>
          ))}
        </CardGrid>
        <Section>
          <ImageText>
            <TextPanel>
              <h3>People behind the brands</h3>
              <p>
                Simbisa Brands brings together teams across quick service,
                delivery, bakery, casual dining and confectionery operations.
              </p>
              <ButtonLink href="/contact">Contact us</ButtonLink>
            </TextPanel>
            <ImagePanel>
              <Image
                src="/images/simbisa/g-brand-feed.jpg"
                alt="Simbisa careers"
                fill
                sizes="(max-width: 840px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </ImagePanel>
          </ImageText>
        </Section>
      </Container>
    </InnerPage>
  )
}
