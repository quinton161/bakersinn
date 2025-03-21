'use client';

import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';

const BackButton = styled.div`
  position: fixed;
  top: 100px;
  left: 30px;
  z-index: 100;

  @media (max-width: 768px) {
    top: 80px;
    left: 20px;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: #2B1B58;
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-weight: 500;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    background: #3d2a75;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
  }

  svg {
    width: 20px;
    height: 20px;
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(-3px);
  }
`;

const BackToHome = () => {
  return (
    <BackButton>
      <StyledLink href="/">
        <svg 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Back to Home
      </StyledLink>
    </BackButton>
  );
};

export default BackToHome; 