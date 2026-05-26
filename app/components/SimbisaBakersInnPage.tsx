'use client'

import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const heroProducts = [
  '/images/bunfinal.png',
  '/images/groupheader bread.png',
  '/images/HOTBUN.png',
]

const bestSellers = [
  {
    name: 'White Loaf',
    image: '/images/breadslices.png',
    text: 'Soft sliced bread baked fresh for everyday meals.',
  },
  {
    name: 'Bread Rolls',
    image: '/images/bun.png',
    text: 'Fresh rolls for sandwiches, burgers and quick bites.',
  },
  {
    name: 'Pies',
    image: '/images/pie.png',
    text: 'Hot savoury favourites for customers on the go.',
  },
  {
    name: 'Doughnuts',
    image: '/images/simbisa/jam-donuts-d.jpg',
    text: "Sweet treats from the Baker's Inn baked goods range.",
  },
]

const Page = styled.div`
  --red: #a10c10;
  --deep-red: #7e0b0d;
  --cream: #fff9ec;
  --soft-cream: #f7edda;
  --ink: #562018;
  --brown: #683020;

  background: var(--cream);
  color: var(--ink);
  font-family: 'Ronnia', Arial, sans-serif;
`

const Container = styled.div`
  width: min(1160px, calc(100% - 48px));
  margin: 0 auto;
`

const Hero = styled.section`
  background: var(--red);
  color: var(--cream);
  min-height: 520px;
  overflow: hidden;
  padding: 58px 0 0;
  text-align: center;
`

const SmallText = styled.p`
  color: rgba(255, 249, 236, 0.88);
  font-family: 'Open Sans Simbisa', Arial, sans-serif;
  font-size: 14px;
  line-height: 1.7;
  margin: 0 auto;
  max-width: 590px;
`

const HeroTitle = styled.h1`
  color: var(--cream);
  font-size: clamp(66px, 11vw, 128px);
  font-weight: 300;
  letter-spacing: -0.055em;
  line-height: 0.86;
  margin: 18px 0 14px;
  text-transform: uppercase;
`

const HeroProducts = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin: 12px auto -18px;
  max-width: 1120px;

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
    max-width: 420px;
  }
`

const HeroProduct = styled.div`
  height: 265px;
  position: relative;

  img {
    filter: drop-shadow(0 24px 22px rgba(0, 0, 0, 0.24));
  }
`

const ProofSection = styled.section`
  background: var(--cream);
  padding: 88px 0 72px;
`

const ProofGrid = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  gap: 88px;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
    gap: 36px;
  }
`

const ProofImage = styled.div`
  border-radius: 22px;
  height: 315px;
  overflow: hidden;
  position: relative;
`

const ProofCopy = styled.div`
  h2 {
    color: var(--red);
    font-size: clamp(38px, 5vw, 62px);
    font-weight: 300;
    letter-spacing: -0.045em;
    line-height: 0.94;
    margin-bottom: 22px;
    text-transform: uppercase;
  }

  em {
    font-style: italic;
    text-transform: none;
  }

  p {
    color: var(--ink);
    font-family: 'Open Sans Simbisa', Arial, sans-serif;
    font-size: 15px;
    line-height: 1.78;
    margin-bottom: 16px;
    max-width: 520px;
  }
`

const SectionHeading = styled.div`
  align-items: center;
  display: flex;
  gap: 20px;
  margin-bottom: 36px;

  h2 {
    color: var(--red);
    font-size: clamp(30px, 4vw, 44px);
    font-weight: 300;
    line-height: 1;
    text-transform: uppercase;
    white-space: nowrap;
  }

  span {
    background: var(--red);
    flex: 1;
    height: 1px;
    opacity: 0.75;
  }
`

const BestSection = styled.section`
  background: var(--cream);
  padding: 42px 0 76px;
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 46px;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`

const ProductCard = styled.article`
  text-align: center;
`

const ProductImage = styled.div`
  background: #d9b68a;
  border-radius: 18px;
  height: 230px;
  overflow: hidden;
  position: relative;
`

const ProductInfo = styled.div`
  padding-top: 18px;

  h3 {
    border: 1px solid var(--red);
    border-radius: 999px;
    color: var(--red);
    display: inline-flex;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.06em;
    margin-bottom: 9px;
    padding: 6px 18px;
    text-transform: uppercase;
  }

  p {
    color: var(--ink);
    font-family: 'Open Sans Simbisa', Arial, sans-serif;
    font-size: 13px;
    line-height: 1.45;
    margin: 0 auto;
    max-width: 210px;
  }
`

const MagicBand = styled.section`
  background: var(--red);
  color: var(--cream);
  padding: 40px 0 64px;
  text-align: center;
`

const MagicTitle = styled.h2`
  color: var(--cream);
  font-size: clamp(34px, 5vw, 56px);
  font-weight: 300;
  letter-spacing: -0.045em;
  line-height: 1;
  margin-bottom: 34px;
  text-transform: uppercase;

  em {
    font-style: italic;
    text-transform: none;
  }
`

const MagicImages = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

const MagicImage = styled.div`
  border-radius: 18px;
  height: 330px;
  overflow: hidden;
  position: relative;
`

const Cta = styled.section`
  display: grid;
  grid-template-columns: 0.9fr 1.1fr;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`

const CtaText = styled.div`
  align-items: flex-start;
  background: var(--cream);
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 430px;
  padding: 70px max(24px, calc((100vw - 1160px) / 2));
  padding-left: max(24px, calc((100vw - 1160px) / 2));

  h2 {
    color: var(--red);
    font-size: clamp(38px, 5vw, 66px);
    font-weight: 300;
    letter-spacing: -0.045em;
    line-height: 0.95;
    margin-bottom: 22px;
    text-transform: uppercase;
  }

  p {
    color: var(--ink);
    font-family: 'Open Sans Simbisa', Arial, sans-serif;
    font-size: 15px;
    line-height: 1.75;
    max-width: 470px;
  }
`

const CtaLink = styled(Link)`
  border: 1px solid var(--red);
  border-radius: 999px;
  color: var(--red);
  display: inline-flex;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.06em;
  margin-top: 24px;
  padding: 10px 22px;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    background: var(--red);
    color: var(--cream);
  }
`

const CtaImage = styled.div`
  min-height: 430px;
  position: relative;
`

export default function SimbisaBakersInnPage() {
  return (
    <Page>
      <Hero>
        <Container>
          <HeroTitle>Baker's Inn</HeroTitle>
          <SmallText>
            Fresh products made in-store daily. Baker's Inn serves quality,
            hot, freshly baked goods from our ovens to customers across
            Zimbabwe, Zambia and Kenya.
          </SmallText>
          <HeroProducts>
            {heroProducts.map((src) => (
              <HeroProduct key={src}>
                <Image
                  src={src}
                  alt="Baker's Inn baked product"
                  fill
                  priority
                  sizes="(max-width: 780px) 90vw, 33vw"
                  style={{ objectFit: 'contain' }}
                />
              </HeroProduct>
            ))}
          </HeroProducts>
        </Container>
      </Hero>

      <ProofSection>
        <Container>
          <ProofGrid>
            <ProofImage>
              <Image
                src="/images/simbisa/baker-inn-d-1.jpg"
                alt="Fresh Baker's Inn products"
                fill
                sizes="(max-width: 860px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </ProofImage>
            <ProofCopy>
              <h2>
                The proof
                <br />
                is in the <em>pastry</em>
              </h2>
              <p>
                Baker's Inn is known for its home-grown goodness and focuses on
                using fresh and locally sourced ingredients.
              </p>
              <p>
                By using only premium products in our recipes, customers enjoy a
                memorable taste experience with freshness delivered daily.
              </p>
            </ProofCopy>
          </ProofGrid>
        </Container>
      </ProofSection>

      <BestSection>
        <Container>
          <SectionHeading>
            <h2>Best sellers</h2>
            <span />
          </SectionHeading>
          <ProductGrid>
            {bestSellers.map((product) => (
              <ProductCard key={product.name}>
                <ProductImage>
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 540px) 100vw, (max-width: 960px) 50vw, 25vw"
                    style={{ objectFit: 'cover' }}
                  />
                </ProductImage>
                <ProductInfo>
                  <h3>{product.name}</h3>
                  <p>{product.text}</p>
                </ProductInfo>
              </ProductCard>
            ))}
          </ProductGrid>
        </Container>
      </BestSection>

      <MagicBand>
        <Container>
          <MagicTitle>
            The <em>magic</em> behind the crumbs
          </MagicTitle>
          <MagicImages>
            <MagicImage>
              <Image
                src="/images/simbisa/img_7154.jpg"
                alt="Fresh bakery ingredients"
                fill
                sizes="(max-width: 720px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </MagicImage>
            <MagicImage>
              <Image
                src="/images/simbisa/jam-donuts-d.jpg"
                alt="Fresh baked goods"
                fill
                sizes="(max-width: 720px) 100vw, 50vw"
                style={{ objectFit: 'cover' }}
              />
            </MagicImage>
          </MagicImages>
        </Container>
      </MagicBand>

      <Cta>
        <CtaText>
          <h2>
            Ready to collect
            <br />
            the crumbs?
          </h2>
          <p>
            Baker's Inn opens from 6am and operates for 24 hours in selected
            locations. Explore our markets and discover where the brand is
            growing across Africa.
          </p>
          <CtaLink href="/markets">Explore markets</CtaLink>
        </CtaText>
        <CtaImage>
          <Image
            src="/images/simbisa/img_4194.jpg"
            alt="Baker's Inn baked goods display"
            fill
            sizes="(max-width: 820px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
          />
        </CtaImage>
      </Cta>
    </Page>
  )
}
