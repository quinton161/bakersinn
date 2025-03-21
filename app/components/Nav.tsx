'use client'

import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import { usePathname } from 'next/navigation'

const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 4rem;
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`

const Logo = styled.div`
  width: 150px;
  height: auto;
  transition: transform 0.2s ease;

  &:hover {
    transform: scale(1.05);
  }
`

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`

interface StyledLinkProps {
  $isActive: boolean;
}

const StyledLink = styled(Link)<StyledLinkProps>`
  text-decoration: none;
  color: ${props => props.$isActive ? '#b2904c' : '#00008B'};
  font-family: black;
  font-size: 22.4px;
  font-weight: 700;
  line-height: 33.6px;
  position: relative;
  transition: color 0.3s ease;
  
  &:hover {
    color: #b2904c;
  }

  &::after {
    content: '';
    position: absolute;
    width: ${props => props.$isActive ? '100%' : '0'};
    height: 2px;
    bottom: -4px;
    left: 0;
    background-color: #b2904c;
    transition: width 0.3s ease;
  }

  &:hover::after {
    width: 100%;
  }
`

const ContactButton = styled(Link)`
  background: #b2904c;
  color: white;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: #9a7c42;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(178, 144, 76, 0.2);
  }

  &:active {
    transform: translateY(0);
  }
`

export default function Nav() {
  const pathname = usePathname();

  return (
    <NavContainer>
      <Logo>
        <Link href="/">
          <Image 
            src="/images/logo.webp" 
            alt="Baker's Inn Logo" 
            width={150}
            height={60}
            priority
          />
        </Link>
      </Logo>
      
      <NavLinks>
        <StyledLink href="/about" $isActive={pathname === '/about'}>
          About Us
        </StyledLink>
        <StyledLink href="/products" $isActive={pathname === '/products'}>
          Products
        </StyledLink>
        <StyledLink href="/recipes" $isActive={pathname === '/recipes'}>
          Recipes
        </StyledLink>
        <StyledLink href="/kids" $isActive={pathname === '/kids'}>
          Kid's Corner
        </StyledLink>
        <ContactButton href="/contact">
          CONTACT US
        </ContactButton>
      </NavLinks>
    </NavContainer>
  )
} 