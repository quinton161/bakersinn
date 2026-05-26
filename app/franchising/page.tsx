'use client'

import Image from 'next/image'
import {
  BorderTitle,
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

const items = [
  {
    title: 'Simbisa Franchise',
    text: 'Explore brand opportunities across the Simbisa portfolio.',
  },
  {
    title: 'Franchise Advantages',
    text: 'Build with established quick service and bakery brand systems.',
  },
  {
    title: 'Application',
    text: 'Start a franchise enquiry and prepare your application details.',
  },
]

export default function FranchisingPage() {
  return (
    <InnerPage
      eyebrow="Franchising"
      title="Franchising"
      intro="A Simbisa-inspired franchise page based on the sections available from the source website menu."
      heroImage="/images/simbisa/img_4194.jpg"
    >
      <Container>
        <Section>
          <BorderTitle>Opportunities</BorderTitle>
          <SectionTitle>Grow with Simbisa Brands.</SectionTitle>
          <Lead>
            The original Simbisa site includes franchising information,
            advantages of being a franchisee and franchise application routes.
          </Lead>
        </Section>
        <CardGrid>
          {items.map((item) => (
            <Card key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </Card>
          ))}
        </CardGrid>
        <Section>
          <ImageText>
            <ImagePanel>
              <Image
                src="/images/simbisa/brand-feed-images-ci.jpg"
                alt="Simbisa brand franchise"
                fill
                sizes="(max-width: 840px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </ImagePanel>
            <TextPanel>
              <h3>Portfolio strength</h3>
              <p>
                Simbisa's family of brands spans quick service, delivery,
                casual dining and confectionery concepts.
              </p>
            </TextPanel>
          </ImageText>
        </Section>
      </Container>
    </InnerPage>
  )
}
