'use client'

import Image from 'next/image'
import Link from 'next/link'
import styled from 'styled-components'

const quickLinks = [
  { label: 'Careers', href: '/careers' },
  { label: 'Markets', href: '/markets' },
  { label: 'Investor Relations', href: '/investor-relations' },
  { label: 'Franchising', href: '/franchising' },
]

const additionalLinks = [
  { label: 'Responsibility', href: '/responsibility' },
  { label: 'Products', href: '/products' },
  { label: 'Recipes', href: '/recipes' },
]

const socialLinks = ['in', 'tw', 'fb', 'ig']

const FooterWrapper = styled.footer`
  background: #a10c10;
  color: #fff9ec;
  font-family: 'Ronnia', Arial, sans-serif;
`

const Container = styled.div`
  width: min(1220px, calc(100% - 48px));
  margin: 0 auto;
`

const FooterUp = styled.div`
  display: grid;
  grid-template-columns: 1.25fr 0.9fr repeat(3, 1fr);
  gap: 44px;
  padding: 64px 0 46px;

  @media (max-width: 980px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 620px) {
    grid-template-columns: 1fr;
  }
`

const FooterCol = styled.div`
  span.heading {
    color: #fff9ec;
    display: block;
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
  }

  li {
    margin-bottom: 12px;
  }

  a,
  p,
  span.f-number {
    color: rgba(255, 249, 236, 0.78);
    font-family: 'Open Sans Simbisa', Arial, sans-serif;
    font-size: 14px;
    line-height: 1.8;
    text-decoration: none;
  }

  a:hover {
    color: #fff9ec;
  }
`

const AppColumn = styled(FooterCol)`
  img {
    display: block;
    margin-bottom: 14px;
  }
`

const FooterDown = styled.div`
  border-top: 1px solid rgba(255, 249, 236, 0.18);
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 24px 0 34px;

  @media (max-width: 700px) {
    align-items: flex-start;
    flex-direction: column;
  }
`

const SocialLinks = styled.ul`
  display: flex;
  gap: 12px;
  list-style: none;

  a {
    width: 38px;
    height: 38px;
    border: 1px solid rgba(255, 249, 236, 0.5);
    border-radius: 50%;
    color: #fff9ec;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.04em;
    text-decoration: none;
  }

  a:hover {
    background: #fff9ec;
    border-color: #fff9ec;
    color: #a10c10;
  }
`

const Copyright = styled.span`
  color: rgba(255, 249, 236, 0.78);
  font-family: 'Open Sans Simbisa', Arial, sans-serif;
  font-size: 14px;
`

export default function Footer() {
  return (
    <FooterWrapper id="contact">
      <Container>
        <FooterUp>
          <FooterCol>
            <Link href="/">
              <Image
                src="/images/simbisa/logo-footer.svg"
                alt="Simbisa Brands logo"
                width={210}
                height={43}
              />
            </Link>
          </FooterCol>

          <AppColumn>
            <Image
              src="/images/simbisa/DAD-Footer-Download-500x500.png"
              alt="Dial a Delivery app"
              width={120}
              height={120}
            />
            <Image
              src="/images/simbisa/play-store.png"
              alt="Android"
              width={120}
              height={36}
              style={{ height: 'auto' }}
            />
            <Image
              src="/images/simbisa/istore.png"
              alt="IOS"
              width={120}
              height={36}
              style={{ height: 'auto' }}
            />
          </AppColumn>

          <FooterCol>
            <span className="heading">Quick Links</span>
            <ul>
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </FooterCol>

          <FooterCol>
            <span className="heading">Additional Links</span>
            <ul>
              {additionalLinks.map((link) => (
                <li key={link.label}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </FooterCol>

          <FooterCol>
            <span className="heading">Contact us</span>
            <p>
              17 Morningside Drive,
              <br />
              Mount Pleasant,
              <br />
              Harare,
              <br />
              Zimbabwe
            </p>
            <span className="f-number">
              Email <a href="mailto:admin@zw-simbisa.com">admin@zw-simbisa.com</a>
            </span>
          </FooterCol>
        </FooterUp>

        <FooterDown>
          <SocialLinks>
            {socialLinks.map((link) => (
              <li key={link}>
                <a href="/" aria-label={link}>
                  {link}
                </a>
              </li>
            ))}
          </SocialLinks>
          <Copyright>&copy; Simbisa Brands Limited 2018.</Copyright>
        </FooterDown>
      </Container>
    </FooterWrapper>
  )
}
