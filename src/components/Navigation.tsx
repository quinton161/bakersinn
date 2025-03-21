'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styled from 'styled-components'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: white;
  padding: 1rem 2rem;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  z-index: 1000;
`

const NavContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled(Link)`
  position: relative;
  width: 150px;
  height: 50px;
`

const DesktopMenu = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }
`

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  color: #2B1B58;
  cursor: pointer;
  padding: 0.5rem;
  transition: color 0.3s;

  &:hover {
    color: #C19A5B;
  }

  @media (max-width: 768px) {
    display: block;
  }
`

const MobileMenu = styled.div<{ isOpen: boolean }>`
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: white;
  padding: 2rem;
  transform: translateX(${props => props.isOpen ? '0' : '100%'});
  transition: transform 0.3s ease-in-out;
  z-index: 999;

  @media (max-width: 768px) {
    display: block;
  }
`

const MobileMenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`

const MobileMenuItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 3rem;
`

const NavLink = styled(Link)`
  color: #2B1B58;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  transition: color 0.3s;

  &:hover {
    color: #C19A5B;
  }

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`

const NavButton = styled(Link)`
  background: #C19A5B;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 2rem;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s;

  &:hover {
    background: #A88347;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
    margin-top: 2rem;
    padding: 1rem 2rem;
  }
`

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      <Nav>
        <NavContainer>
          <Logo href="/">
            <Image
              src="/images/logo.png"
              alt="Baker's Inn Logo"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </Logo>

          <DesktopMenu>
            <NavLink href="/">Home</NavLink>
            <NavLink href="/about">About</NavLink>
            <NavLink href="/products">Products</NavLink>
            <NavLink href="/recipes">Recipes</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavButton href="/contact">Contact Us</NavButton>
          </DesktopMenu>

          <MobileMenuButton onClick={toggleMobileMenu}>
            <MenuIcon style={{ fontSize: '2rem' }} />
          </MobileMenuButton>
        </NavContainer>
      </Nav>

      <MobileMenu isOpen={isMobileMenuOpen}>
        <MobileMenuHeader>
          <Logo href="/" onClick={closeMobileMenu}>
            <Image
              src="/images/logo.png"
              alt="Baker's Inn Logo"
              fill
              style={{ objectFit: 'contain' }}
              priority
            />
          </Logo>
          <MobileMenuButton onClick={toggleMobileMenu}>
            <CloseIcon style={{ fontSize: '2rem' }} />
          </MobileMenuButton>
        </MobileMenuHeader>

        <MobileMenuItems>
          <NavLink href="/" onClick={closeMobileMenu}>Home</NavLink>
          <NavLink href="/about" onClick={closeMobileMenu}>About</NavLink>
          <NavLink href="/products" onClick={closeMobileMenu}>Products</NavLink>
          <NavLink href="/recipes" onClick={closeMobileMenu}>Recipes</NavLink>
          <NavLink href="/kids" onClick={closeMobileMenu}>Kids</NavLink>
          <NavButton href="/contact" onClick={closeMobileMenu}>Contact Us</NavButton>
        </MobileMenuItems>
      </MobileMenu>
    </>
  )
} 