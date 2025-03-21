'use client'

import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const HeroSection = styled.section`
  background-color: #36207F;
  background-image: url('/images/african pattern 2.png');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 4rem;
  border-radius: 20px;
  margin: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  overflow: hidden;
`

const ContentWrapper = styled.div`
  width: 50%;
  color: white;
  position: relative;
  z-index: 2;
`

const Title = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  line-height: 1.2;

  .highlight {
    background: linear-gradient(to bottom, transparent 35%, #b2904c 35%);
    padding: 0 0.5rem 0.3rem 0.5rem;
  }
`

const Subtitle = styled.p`
  font-size: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.5;
`

const ReadMoreButton = styled(Link)`
  display: inline-block;
  background-color: #b2904c;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  font-size: 0.9rem;
  
  &:hover {
    background: #9a7c42;
  }
`

const ProductsWrapper = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  z-index: 2;

  img {
    object-fit: contain;
    max-width: 100%;
    height: auto;
  }
`

export default function Hero() {
  return (
    <HeroSection>
      <ContentWrapper>
        <Title>
          Bringing you the <span className="highlight">best value</span><br />at the <span className="highlight">best prices.</span>
        </Title>
        <Subtitle>
          The freshest sandwiches you can make are with Baker's inn soft white loaf.
        </Subtitle>
        <ReadMoreButton href="/products">
          READ MORE
        </ReadMoreButton>
      </ContentWrapper>
      
      <ProductsWrapper>
        <Image 
          src="/images/group.png"
          alt="Baker's Inn Bread Products"
          width={1000}
          height={600}
          priority
          style={{ marginRight: '-3rem', transform: 'scale(1.2)' }}
        />
      </ProductsWrapper>
    </HeroSection>
  )
}