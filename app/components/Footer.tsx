'use client'

import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const FooterWrapper = styled.footer`
  background: #27235C;
  color: white;
  padding: 4rem 0 0;
`

const LogoDivider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
  
  &::before, &::after {
    content: '';
    height: 1px;
    background: #B69D74;
    flex: 1;
    margin: 0 2rem;
  }
`

const LogoImage = styled.img`
  width: 120px;
  height: auto;
`

const MainContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 968px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 576px) {
    grid-template-columns: 1fr;
  }
`

const Section = styled.div`
  h3 {
    color: white;
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
    font-weight: 600;
  }
`

const InstagramGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
`

const InstagramImage = styled.img`
  width: 100%;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
`

const ContactInfo = styled.div`
  p {
    margin-bottom: 0.5rem;
    color: rgba(255, 255, 255, 0.8);
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      font-size: 1.2rem;
      color: #B69D74;
    }
  }
`

const SitemapLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  a {
    color: rgba(255, 255, 255, 0.8);
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #B69D74;
    }
  }
`

const BottomBar = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem 1rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
`

const SubsidiaryLogo = styled.img`
  height: 40px;
  width: auto;
  filter: brightness(0) invert(1);
`

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 0.875rem;

  a {
    color: #B69D74;
    text-decoration: none;
  }
`

const Icon = styled.svg`
  width: 1.2rem;
  height: 1.2rem;
  fill: #B69D74;
`;

const SocialIcon = styled.svg`
  width: 1.5rem;
  height: 1.5rem;
  fill: #B69D74;
  transition: opacity 0.2s;
  
  &:hover {
    opacity: 0.8;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    color: #B69D74;
    transition: opacity 0.2s;
    
    &:hover {
      opacity: 0.8;
    }

    svg {
      font-size: 1.5rem;
    }
  }
`

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <LogoDivider>
        <LogoImage src="/images/footer logo.png" alt="Baker's Inn Logo" />
      </LogoDivider>
      
      <MainContent>
        <Section>
          <h3>Instagram Feed</h3>
          <InstagramGrid>
            <InstagramImage src="/images/instafeed.png" alt="Instagram post - Food platter" />
            <InstagramImage src="/images/insta feed.png" alt="Instagram post - Sandwich" />
            <InstagramImage src="/images/plate.png" alt="Instagram post - Food" />
          </InstagramGrid>
          <SocialIcons>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <SocialIcon viewBox="0 0 24 24">
                <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
              </SocialIcon>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <SocialIcon viewBox="0 0 24 24">
                <path d="M22.46 6C21.69 6.35 20.86 6.58 20 6.69C20.88 6.16 21.56 5.32 21.88 4.31C21.05 4.81 20.13 5.16 19.16 5.36C18.37 4.5 17.26 4 16 4C13.65 4 11.73 5.92 11.73 8.29C11.73 8.63 11.77 8.96 11.84 9.27C8.28 9.09 5.11 7.38 3 4.79C2.63 5.42 2.42 6.16 2.42 6.94C2.42 8.43 3.17 9.75 4.33 10.5C3.62 10.5 2.96 10.3 2.38 10C2.38 10 2.38 10 2.38 10.03C2.38 12.11 3.86 13.85 5.82 14.24C5.46 14.34 5.08 14.39 4.69 14.39C4.42 14.39 4.15 14.36 3.89 14.31C4.43 16 6 17.26 7.89 17.29C6.43 18.45 4.58 19.13 2.56 19.13C2.22 19.13 1.88 19.11 1.54 19.07C3.44 20.29 5.7 21 8.12 21C16 21 20.33 14.46 20.33 8.79C20.33 8.6 20.33 8.42 20.32 8.23C21.16 7.63 21.88 6.87 22.46 6Z"/>
              </SocialIcon>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <SocialIcon viewBox="0 0 24 24">
                <path d="M19 3A2 2 0 0 1 21 5V19A2 2 0 0 1 19 21H5A2 2 0 0 1 3 19V5A2 2 0 0 1 5 3H19M18.5 18.5V13.2A3.26 3.26 0 0 0 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17A1.4 1.4 0 0 1 15.71 13.57V18.5H18.5M6.88 8.56A1.68 1.68 0 0 0 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19A1.69 1.69 0 0 0 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56M8.27 18.5V10.13H5.5V18.5H8.27Z"/>
              </SocialIcon>
            </a>
          </SocialIcons>
        </Section>

        <Section>
          <h3>Our Location</h3>
          <ContactInfo>
            <p>
              <Icon viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </Icon>
              1 Sheperton Road,
            </p>
            <p>Graniteside,</p>
            <p>Harare,</p>
            <p>Zimbabwe.</p>
          </ContactInfo>
        </Section>

        <Section>
          <h3>Get In Touch With Us</h3>
          <ContactInfo>
            <p>
              <Icon viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </Icon>
              08080151
            </p>
            <p>08080152</p>
            <p>+263 242 751 481</p>
            <p>+263 242 710 334</p>
            <p>
              <Icon viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </Icon>
              marketing@bakersinnzim.com
            </p>
          </ContactInfo>
        </Section>

        <Section>
          <h3>Sitemap</h3>
          <SitemapLinks>
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/recipes">Recipes</Link>
            <Link href="/kids">Kid's Corner</Link>
          </SitemapLinks>
        </Section>
      </MainContent>

      <BottomBar>
        <SubsidiaryLogo src="/images/inscor_logo@2x 1.png" alt="Subsidiary of Innscor" />
        <Copyright>
          Copyright © 2022 Bakers Inn. All rights reserved. Site by{' '}
          <a href="https://bryanvengwa.com" target="_blank" rel="noopener noreferrer">
            Bryan Vengwa
          </a>
        </Copyright>
      </BottomBar>
    </FooterWrapper>
  )
}

export default Footer
