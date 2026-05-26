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
} from '../components/SimbisaShared'

const products = [
  {
    name: 'Sliced Breads',
    text: 'White, brown, whole wheat, seed bread and low GI bread for daily family meals.',
    image: '/images/breadslices.png',
  },
  {
    name: 'Bread Rolls',
    text: 'Soft rolls baked for sandwiches, lunch boxes and quick meals on the go.',
    image: '/images/bun.png',
  },
  {
    name: 'Pies',
    text: 'Hot savoury pies made for commuters and customers looking for convenient meals.',
    image: '/images/pie.png',
  },
  {
    name: 'Doughnuts',
    text: 'Sweet baked treats including jam doughnuts and classic doughnut favourites.',
    image: '/images/simbisa/jam-donuts-d.jpg',
  },
  {
    name: 'Scones & Buns',
    text: 'Fresh baked scones and buns for breakfast, tea time and everyday snacking.',
    image: '/images/scone.png',
  },
  {
    name: 'Cakes',
    text: "Birthday cakes and queen cakes from the Baker's Inn baked goods range.",
    image: '/images/cream donut.png',
  },
]

export default function ProductsPage() {
  return (
    <InnerPage
      eyebrow="Our Products"
      title="Product Range"
      intro="Each day Baker's Inn customers can expect sliced breads, bread rolls, pies, doughnuts, scones, buns, birthday cakes and queen cakes."
      heroImage="/images/simbisa/img_7107.jpg"
    >
      <Container>
        <Section>
          <BorderTitle>Freshly baked</BorderTitle>
          <SectionTitle>Premium products for everyday customers.</SectionTitle>
          <Lead>
            Baker's Inn goods are baked at a central bakery and distributed to
            outlets straight away to guarantee freshness.
          </Lead>
        </Section>

        <CardGrid>
          {products.map((product) => (
            <ImageCard key={product.name}>
              <ImageFrame>
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  sizes="(max-width: 760px) 100vw, 33vw"
                  style={{ objectFit: 'cover' }}
                />
              </ImageFrame>
              <CardBody>
                <h3>{product.name}</h3>
                <p>{product.text}</p>
              </CardBody>
            </ImageCard>
          ))}
        </CardGrid>

        <Section>
          <ImageText>
            <ImagePanel>
              <Image
                src="/images/simbisa/baker-inn-d-1.jpg"
                alt="Baker's Inn outlet"
                fill
                sizes="(max-width: 780px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </ImagePanel>
            <TextPanel>
              <h3>24 hours in selected locations</h3>
              <p>
                Baker's Inn opens from 6am and operates for 24 hours in selected
                locations, making freshly baked products accessible to customers
                throughout the day.
              </p>
            </TextPanel>
          </ImageText>
        </Section>
      </Container>
    </InnerPage>
  )
}
