'use client'

import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const ProductsSection = styled.section`
  padding: 4rem;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4rem;
`

const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  color: #36207F;
  text-align: center;
`

const ProductGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`

const ProductCard = styled.div`
  position: relative;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`

const ViewButton = styled(Link)`
  display: inline-block;
  background-color: #b2904c;
  color: white;
  padding: 1rem 2rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  margin-top: 2rem;
  
  &:hover {
    background: #9a7c42;
  }
`

export default function Products() {
  return (
    <ProductsSection>
      <Title>Our Product Range</Title>
      
      <ProductGrid>
        <ProductCard>
          <Image
            src="/images/breadslices.png"
            alt="Fresh sliced bread"
            fill
            style={{ objectFit: 'cover' }}
          />
        </ProductCard>
        <ProductCard>
          <Image
            src="/images/pie.png"
            alt="Delicious meat pie"
            fill
            style={{ objectFit: 'cover' }}
          />
        </ProductCard>
        <ProductCard>
          <Image
            src="/images/doughnut tea.png"
            alt="Sweet donut"
            fill
            style={{ objectFit: 'cover' }}
          />
        </ProductCard>
        <ProductCard>
          <Image
            src="/images/donut.png"
            alt="Classic donut"
            fill
            style={{ objectFit: 'cover' }}
          />
        </ProductCard>
      </ProductGrid>

      <ViewButton href="/products">
        VIEW COMPLETE RANGE
      </ViewButton>
    </ProductsSection>
  )
} 