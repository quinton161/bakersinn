'use client'

import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'

const AboutSection = styled.section`
  padding: 4rem;
  margin: 2rem;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 4rem;
  width: 100%;
`

const TitleArea = styled.div`
  flex: 1;
`

const DescriptionArea = styled.div`
  flex: 1;
  padding-top: 1rem;
`

const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: 700;
  color: #36207F;
`

const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #36207F;
  margin-bottom: 2rem;
`

const ReadMoreButton = styled(Link)`
  display: inline-block;
  background-color: #b2904c;
  color: white;
  padding: 1rem 2rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  text-transform: uppercase;
  
  &:hover {
    background: #9a7c42;
  }
`

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  width: 100%;
`

const ImageWrapper = styled.div`
  position: relative;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
`

export default function About() {
  return (
    <AboutSection>
      <Content>
        <TitleArea>
          <Title>About Baker's Inn</Title>
        </TitleArea>
        <DescriptionArea>
          <Description>
            It all started in the eighties when Baker's Inn was just a small confectionery
            company that employed 40 people and produced about 30,000 loaves a
            day. We now aim to provide a nourishing, convinient and accessible answer
            to hunger's call.
          </Description>
          <ReadMoreButton href="/about">
            READ MORE
          </ReadMoreButton>
        </DescriptionArea>
      </Content>

      <ImageGrid>
        <ImageWrapper>
          <Image
            src="/images/sandwich.png"
            alt="Fresh sandwich with fries"
            fill
            style={{ objectFit: 'cover' }}
          />
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src="/images/pie.png"
            alt="Delicious meat pie"
            fill
            style={{ objectFit: 'cover' }}
          />
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src="/images/doughnut tea.png"
            alt="Sweet donut with coffee"
            fill
            style={{ objectFit: 'cover' }}
          />
        </ImageWrapper>
        <ImageWrapper>
          <Image
            src="/images/breadslices.png"
            alt="Fresh sliced bread"
            fill
            style={{ objectFit: 'cover' }}
          />
        </ImageWrapper>
      </ImageGrid>
    </AboutSection>
  )
} 