'use client'

import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import styled from 'styled-components'

const brandLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Products', href: '/products' },
  { label: 'Recipes', href: '/recipes' },
  { label: 'Kids Corner', href: '/kids' },
  { label: 'Contact Us', href: '/contact' },
]

const simbisaLinks = [
  { label: 'Markets', href: '/markets' },
  { label: 'Franchising', href: '/franchising' },
  { label: 'Responsibility', href: '/responsibility' },
  { label: 'Careers', href: '/careers' },
]

const investorLinks = [
  { label: 'IR Home', href: '/investor-relations' },
  { label: 'About', href: '/investor-relations/about' },
  { label: 'News', href: '/investor-relations/news' },
  { label: 'Investor Center', href: '/investor-relations/investor-center' },
  { label: 'Governance', href: '/investor-relations/governance' },
  { label: 'Downloads', href: '/investor-relations/downloads' },
  { label: 'Contact', href: '/investor-relations/contact' },
]

const Header = styled.header`
  background: #a10c10;
  border-bottom: 1px solid rgba(255, 249, 236, 0.16);
  position: sticky;
  top: 0;
  z-index: 1000;
`

const Inner = styled.div`
  width: min(1220px, calc(100% - 48px));
  min-height: 62px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;

  @media (max-width: 900px) {
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;
    padding: 12px 0;
  }
`

const LogoLink = styled(Link)`
  display: inline-flex;
  align-items: center;
  flex: 0 0 auto;
`

const HeaderItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 12px;
  min-width: 0;

  @media (max-width: 900px) {
    align-items: flex-start;
    flex-wrap: wrap;
    width: 100%;
  }
`

const Navigation = styled.nav`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`

const navControlStyles = `
  align-items: center;
  background: transparent;
  border: 1px solid rgba(255, 249, 236, 0.5);
  border-radius: 999px;
  color: #fff9ec;
  cursor: pointer;
  display: inline-flex;
  font-family: 'Ronnia', Arial, sans-serif;
  font-size: 12px;
  font-weight: 700;
  gap: 8px;
  line-height: 1.2;
  padding: 7px 16px;
  text-decoration: none;
  white-space: nowrap;

  &:hover,
  &.active {
    background: #fff9ec;
    color: #a10c10;
  }
`

const TopLink = styled(Link)`
  ${navControlStyles}
`

const Dropdown = styled.div`
  position: relative;

  &:hover > div,
  &:focus-within > div {
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0);
    visibility: visible;
  }
`

const DropdownButton = styled.button`
  ${navControlStyles}

  &::after {
    content: '';
    border-left: 4px solid transparent;
    border-right: 4px solid transparent;
    border-top: 5px solid currentColor;
    margin-top: 2px;
  }
`

const DropdownMenu = styled.div`
  background: #fff9ec;
  border: 1px solid rgba(161, 12, 16, 0.16);
  border-radius: 18px;
  box-shadow: 0 22px 44px rgba(58, 12, 10, 0.2);
  display: grid;
  gap: 4px;
  left: 0;
  min-width: 235px;
  opacity: 0;
  padding: 10px;
  pointer-events: none;
  position: absolute;
  top: calc(100% + 10px);
  transform: translateY(8px);
  transition: opacity 160ms ease, transform 160ms ease, visibility 160ms ease;
  visibility: hidden;
  z-index: 1001;

  a {
    border-radius: 12px;
    color: #562018;
    font-family: 'Open Sans Simbisa', Arial, sans-serif;
    font-size: 13px;
    font-weight: 700;
    padding: 10px 12px;
    text-decoration: none;
    white-space: nowrap;
  }

  a:hover,
  a.active {
    background: #a10c10;
    color: #fff9ec;
  }

  @media (max-width: 900px) {
    left: auto;
    right: 0;
  }
`

const SearchButton = styled(Link)`
  width: 34px;
  height: 34px;
  border: 1px solid rgba(255, 249, 236, 0.5);
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  flex: 0 0 auto;
  position: relative;

  &:hover {
    background: #fff9ec;
  }

  &::before {
    content: '';
    width: 13px;
    height: 13px;
    border: 2px solid #fff9ec;
    border-radius: 50%;
    transform: translate(-2px, -2px);
  }

  &::after {
    content: '';
    width: 9px;
    height: 2px;
    background: #fff9ec;
    position: absolute;
    transform: translate(8px, 8px) rotate(45deg);
  }

  &:hover::before {
    border-color: #a10c10;
  }

  &:hover::after {
    background: #a10c10;
  }
`

const ContactLink = styled(Link)`
  ${navControlStyles}
`

function DropdownGroup({
  label,
  links,
  active,
}: {
  label: string
  links: Array<{ label: string; href: string }>
  active: boolean
}) {
  const pathname = usePathname()

  return (
    <Dropdown>
      <DropdownButton type="button" className={active ? 'active' : ''}>
        {label}
      </DropdownButton>
      <DropdownMenu>
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.href}
            className={pathname === link.href ? 'active' : ''}
          >
            {link.label}
          </Link>
        ))}
      </DropdownMenu>
    </Dropdown>
  )
}

export default function Nav() {
  const pathname = usePathname()
  const brandActive = brandLinks.some((item) => pathname === item.href)
  const simbisaActive = simbisaLinks.some((item) => pathname === item.href)
  const investorsActive = pathname.startsWith('/investor-relations')

  return (
    <Header>
      <Inner>
        <LogoLink href="/">
          <Image
            src="/images/simbisa/logo-white.svg"
            alt="Simbisa Brands logo"
            width={122}
            height={52}
            priority
          />
        </LogoLink>
        <HeaderItems>
          <Navigation aria-label="Primary navigation">
            <TopLink href="/" className={pathname === '/' ? 'active' : ''}>
              Home
            </TopLink>
            <DropdownGroup label="Brand Pages" links={brandLinks} active={brandActive} />
            <DropdownGroup label="Simbisa" links={simbisaLinks} active={simbisaActive} />
            <DropdownGroup
              label="Investors"
              links={investorLinks}
              active={investorsActive}
            />
          </Navigation>
          <ContactLink href="/contact" className={pathname === '/contact' ? 'active' : ''}>
            Contact
          </ContactLink>
          <SearchButton href="/" aria-label="Search" />
        </HeaderItems>
      </Inner>
    </Header>
  )
}
