'use client'

import {
  BorderTitle,
  Card,
  CardGrid,
  Container,
  InnerPage,
  Lead,
  Section,
  SectionTitle,
} from '../components/SimbisaShared'

const markets = [
  'Zimbabwe',
  'Kenya',
  'Zambia',
  'Ghana',
  'Mauritius',
  'Namibia',
  'DRC - Lubumbashi',
  'DRC - Kinshasa',
  'Eswatini',
  'Malawi',
]

export default function MarketsPage() {
  return (
    <InnerPage
      eyebrow="Our Markets"
      title="Markets"
      intro="Simbisa Brands operates across multiple African markets, with Baker's Inn present in Zimbabwe, Zambia and Kenya."
      heroImage="/images/simbisa/baker-inn-d-1.jpg"
    >
      <Container>
        <Section>
          <BorderTitle>Across Africa</BorderTitle>
          <SectionTitle>Accessible brands for everyday customers.</SectionTitle>
          <Lead>
            Baker's Inn outlets are strategically placed to be highly accessible
            to commuting customers and communities.
          </Lead>
        </Section>
        <CardGrid>
          {markets.map((market) => (
            <Card key={market}>
              <h3>{market}</h3>
              <p>Simbisa market presence and brand accessibility.</p>
            </Card>
          ))}
        </CardGrid>
      </Container>
    </InnerPage>
  )
}
