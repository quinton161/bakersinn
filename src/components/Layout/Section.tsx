'use client'

import styled from 'styled-components'

interface SectionProps {
  bgColor?: string;
  fullWidth?: boolean;
  minHeight?: string;
  padding?: string;
}

const Section = styled.section<SectionProps>`
  width: 100%;
  min-height: ${props => props.minHeight || 'auto'};
  background-color: ${props => props.bgColor || 'transparent'};
  padding: ${props => props.padding || 'clamp(2rem, 5vw, 5rem) 0'};
  
  ${props => props.fullWidth && `
    margin-left: calc(-50vw + 50%);
    margin-right: calc(-50vw + 50%);
    width: 100vw;
  `}
`

export default Section 