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
  YellowPanel,
} from '../components/SimbisaShared'

const regions = ['Zimbabwe', 'Kenya', 'Mauritius']

export default function ResponsibilityPage() {
  return (
    <InnerPage
      eyebrow="Social Responsibility"
      title="Responsibility"
      intro="A dedicated social responsibility page inspired by the Simbisa website sections."
      heroImage="/images/simbisa/img_7154.jpg"
    >
      <Container>
        <Section>
          <BorderTitle>Community</BorderTitle>
          <SectionTitle>Serving more than meals.</SectionTitle>
          <Lead>
            Simbisa's website includes social responsibility areas for key
            markets. This page is ready for local programme content.
          </Lead>
        </Section>
        <ImageText>
          <ImagePanel>
            <Image
              src="/images/simbisa/brand-feed-images-dad.jpg"
              alt="Simbisa social responsibility"
              fill
              sizes="(max-width: 840px) 100vw, 50vw"
              style={{ objectFit: 'cover' }}
            />
          </ImagePanel>
          <YellowPanel>
            <h3>Regional responsibility</h3>
            <p>
              Add impact stories, donation work, community programmes and
              market-specific responsibility updates here.
            </p>
          </YellowPanel>
        </ImageText>
        <Section>
          <CardGrid>
            {regions.map((region) => (
              <Card key={region}>
                <h3>{region}</h3>
                <p>Social responsibility information and regional initiatives.</p>
              </Card>
            ))}
          </CardGrid>
        </Section>
      </Container>
    </InnerPage>
  )
}
