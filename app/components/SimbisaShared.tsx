'use client'

import Image from 'next/image'
import Link from 'next/link'
import type { ReactNode } from 'react'
import styled from 'styled-components'

type InnerPageProps = {
  eyebrow: string
  title: string
  intro: string
  heroImage: string
  children: ReactNode
}

export const Page = styled.div`
  --brand-red: #a10c10;
  --brand-bright-red: #d12a37;
  --brand-brown: #683020;
  --brand-orange: #f48230;
  --brand-cream: #fff9ec;
  --brand-soft: #f6ecd8;
  --brand-ink: #4a2118;

  background: var(--brand-cream);
  color: var(--brand-ink);
  font-family: 'Ronnia', Arial, sans-serif;
`

const Hero = styled.section`
  background: var(--brand-red);
  color: var(--brand-cream);
  min-height: 480px;
  overflow: hidden;
  position: relative;
`

const HeroContent = styled.div`
  width: min(1180px, calc(100% - 48px));
  margin: 0 auto;
  padding: 82px 0 150px;
  position: relative;
  text-align: center;
  z-index: 2;
`

const HeroImage = styled.div`
  width: min(520px, 78vw);
  height: 260px;
  margin: -120px auto 0;
  position: relative;
  z-index: 3;

  img {
    filter: drop-shadow(0 24px 30px rgba(0, 0, 0, 0.22));
  }

  @media (max-width: 720px) {
    height: 210px;
  }
`

const HeroPattern = styled.div`
  position: absolute;
  inset: auto -8% -80px -8%;
  height: 220px;
  opacity: 0.95;
  z-index: 1;

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: 340px;
    height: 180px;
    border: 1px solid rgba(255, 249, 236, 0.22);
    border-radius: 999px;
  }

  &::before {
    left: 7%;
    bottom: 30px;
    transform: rotate(-12deg);
  }

  &::after {
    right: 8%;
    bottom: 20px;
    transform: rotate(13deg);
  }
`

export const Container = styled.div`
  width: min(1180px, calc(100% - 48px));
  margin: 0 auto;
`

export const Section = styled.section`
  padding: 74px 0;
`

export const BorderTitle = styled.span`
  align-items: center;
  color: var(--brand-red);
  display: inline-flex;
  font-size: 18px;
  font-weight: 700;
  gap: 18px;
  letter-spacing: 0.04em;
  line-height: 1;
  text-transform: uppercase;

  &::after {
    background: currentColor;
    content: '';
    display: inline-block;
    height: 1px;
    width: 130px;
  }
`

const HeroEyebrow = styled(BorderTitle)`
  color: rgba(255, 249, 236, 0.88);
  justify-content: center;
  margin-bottom: 22px;

  &::after {
    display: none;
  }
`

export const PageTitle = styled.h1`
  color: inherit;
  font-size: clamp(54px, 9vw, 112px);
  font-weight: 300;
  letter-spacing: -0.04em;
  line-height: 0.9;
  margin: 0 0 18px;
  text-transform: uppercase;
`

export const SectionTitle = styled.h2`
  color: var(--brand-red);
  font-size: clamp(38px, 5vw, 72px);
  font-weight: 300;
  letter-spacing: -0.04em;
  line-height: 0.96;
  margin: 18px 0 24px;
  text-transform: uppercase;
`

export const Lead = styled.p`
  color: var(--brand-ink);
  font-family: 'Open Sans Simbisa', Arial, sans-serif;
  font-size: 16px;
  line-height: 1.8;
  max-width: 760px;
`

export const HeroLead = styled(Lead)`
  color: rgba(255, 249, 236, 0.9);
  margin: 0 auto;
`

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 34px;
`

export const Card = styled.article`
  background: rgba(255, 255, 255, 0.72);
  border: 1px solid rgba(161, 12, 16, 0.16);
  border-radius: 22px;
  padding: 30px;

  h3 {
    color: var(--brand-red);
    font-size: 28px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 12px;
    text-transform: uppercase;
  }

  p {
    color: var(--brand-ink);
    font-family: 'Open Sans Simbisa', Arial, sans-serif;
    font-size: 15px;
    line-height: 1.7;
  }
`

export const ImageCard = styled.article`
  text-align: center;
`

export const ImageFrame = styled.div`
  background: #dfb98c;
  border-radius: 18px;
  height: 250px;
  overflow: hidden;
  position: relative;
`

export const CardBody = styled.div`
  padding: 20px 10px 0;

  h3 {
    border: 1px solid var(--brand-red);
    border-radius: 999px;
    color: var(--brand-red);
    display: inline-flex;
    font-size: 13px;
    font-weight: 700;
    letter-spacing: 0.05em;
    margin-bottom: 10px;
    padding: 6px 20px;
    text-transform: uppercase;
  }

  p {
    color: var(--brand-ink);
    font-family: 'Open Sans Simbisa', Arial, sans-serif;
    font-size: 14px;
    line-height: 1.45;
  }
`

export const ImageText = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  gap: 76px;

  @media (max-width: 840px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`

export const ImagePanel = styled.div`
  border-radius: 28px;
  min-height: 390px;
  overflow: hidden;
  position: relative;

  @media (max-width: 780px) {
    min-height: 290px;
  }
`

export const TextPanel = styled.div`
  background: transparent;

  h3 {
    color: var(--brand-red);
    font-size: clamp(34px, 5vw, 64px);
    font-weight: 300;
    letter-spacing: -0.04em;
    line-height: 0.95;
    margin-bottom: 22px;
    text-transform: uppercase;
  }

  p,
  li {
    color: var(--brand-ink);
    font-family: 'Open Sans Simbisa', Arial, sans-serif;
    font-size: 16px;
    line-height: 1.8;
  }

  ul {
    padding-left: 18px;
  }
`

export const YellowPanel = styled(TextPanel)`
  background: var(--brand-soft);
  border-radius: 28px;
  padding: 44px;

  h3 {
    color: var(--brand-red);
  }

  @media (max-width: 780px) {
    padding: 30px;
  }
`

export const ButtonLink = styled(Link)`
  border: 1px solid var(--brand-red);
  border-radius: 999px;
  color: var(--brand-red);
  display: inline-flex;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.06em;
  margin-top: 22px;
  padding: 10px 22px;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    background: var(--brand-red);
    color: var(--brand-cream);
  }
`

export const FormShell = styled.form`
  background: var(--brand-soft);
  border-radius: 28px;
  display: grid;
  gap: 18px;
  padding: 36px;
`

export const Field = styled.label`
  color: var(--brand-red);
  display: grid;
  font-size: 14px;
  font-weight: 700;
  gap: 8px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
`

export const Input = styled.input`
  background: var(--brand-cream);
  border: 1px solid rgba(161, 12, 16, 0.24);
  border-radius: 999px;
  color: var(--brand-ink);
  font: inherit;
  padding: 14px 18px;

  &:focus {
    border-color: var(--brand-red);
    outline: none;
  }
`

export const TextArea = styled.textarea`
  background: var(--brand-cream);
  border: 1px solid rgba(161, 12, 16, 0.24);
  border-radius: 22px;
  color: var(--brand-ink);
  font: inherit;
  min-height: 150px;
  padding: 14px 18px;
  resize: vertical;

  &:focus {
    border-color: var(--brand-red);
    outline: none;
  }
`

export const SubmitButton = styled.button`
  background: var(--brand-red);
  border: 0;
  border-radius: 999px;
  color: var(--brand-cream);
  cursor: pointer;
  font: inherit;
  font-weight: 700;
  letter-spacing: 0.06em;
  padding: 14px 22px;
  text-transform: uppercase;

  &:hover {
    background: var(--brand-brown);
  }
`

export const RedBand = styled.section`
  background: var(--brand-red);
  color: var(--brand-cream);
  padding: 64px 0;

  h2,
  h3,
  p {
    color: inherit;
  }
`

export function InnerPage({
  eyebrow,
  title,
  intro,
  heroImage,
  children,
}: InnerPageProps) {
  return (
    <Page>
      <Hero>
        <HeroPattern />
        <HeroContent>
          <HeroEyebrow>{eyebrow}</HeroEyebrow>
          <PageTitle>{title}</PageTitle>
          <HeroLead>{intro}</HeroLead>
        </HeroContent>
        <HeroImage>
          <Image
            src={heroImage}
            alt={title}
            fill
            priority
            sizes="(max-width: 760px) 78vw, 520px"
            style={{ objectFit: 'contain' }}
          />
        </HeroImage>
      </Hero>
      {children}
    </Page>
  )
}
