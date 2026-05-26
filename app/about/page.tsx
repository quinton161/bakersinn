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
  YellowPanel,
} from '../components/SimbisaShared'

const values = [
  {
    title: 'Freshness',
    text: 'Products are baked and distributed quickly so customers can count on freshness every day.',
  },
  {
    title: 'Accessibility',
    text: "Baker's Inn outlets are placed around daily commuter routes and high-access customer locations.",
  },
  {
    title: 'Quality',
    text: 'Recipes use premium products and locally sourced ingredients wherever possible.',
  },
]

export default function AboutPage() {
  return (
    <InnerPage
      eyebrow="About Us"
      title="About Baker's Inn"
      intro="Baker's Inn is part of the Simbisa Brands portfolio and serves fresh baked products across Zimbabwe, Zambia and Kenya."
      heroImage="/images/simbisa/baker-inn-d-1.jpg"
    >
      <Container>
        <Section>
          <BorderTitle>At a glance</BorderTitle>
          <SectionTitle>Fresh products made in-store daily.</SectionTitle>
          <Lead>
            Baker's Inn has been established as the go-to brand for the
            commuting customer, committed to providing quality, hot and freshly
            baked goods from our ovens to the customer.
          </Lead>
        </Section>

        <ImageText>
          <ImagePanel>
            <Image
              src="/images/simbisa/img_7154.jpg"
              alt="Baker's Inn fresh products"
              fill
              sizes="(max-width: 780px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </ImagePanel>
          <YellowPanel>
            <h3>Home-grown goodness</h3>
            <p>
              Baker's Inn focuses on fresh and locally sourced ingredients. By
              using premium products in our recipes, we can ensure a memorable
              taste experience.
            </p>
            <p>
              Customers can expect a tempting assortment of sliced breads,
              rolls, pies, doughnuts, scones, buns, birthday cakes and queen
              cakes.
            </p>
          </YellowPanel>
        </ImageText>

        <Section>
          <BorderTitle>What we believe</BorderTitle>
          <CardGrid>
            {values.map((value) => (
              <Card key={value.title}>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </Card>
            ))}
          </CardGrid>
        </Section>

        <ImageText>
          <TextPanel>
            <h3>Part of Simbisa Brands</h3>
            <p>
              The Baker's Inn brand sits in the Simbisa Brands family alongside
              other quick service, delivery, casual dining and confectionery
              brands.
            </p>
          </TextPanel>
          <ImagePanel>
            <Image
              src="/images/simbisa/logo-color.svg"
              alt="Simbisa Brands"
              fill
              sizes="(max-width: 780px) 100vw, 50vw"
              style={{ objectFit: 'contain', padding: '72px' }}
            />
          </ImagePanel>
        </ImageText>
      </Container>
    </InnerPage>
  )
}
