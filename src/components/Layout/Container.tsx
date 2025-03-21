'use client'

import styled from 'styled-components'
import { containerWidths } from '@/styles/responsive'

interface ContainerProps {
  size?: 'small' | 'medium' | 'large' | 'xlarge';
  noPadding?: boolean;
}

const Container = styled.div<ContainerProps>`
  width: 100%;
  max-width: ${props => containerWidths[props.size || 'large']};
  margin: 0 auto;
  padding: ${props => props.noPadding ? '0' : '0 1rem'};

  @media (min-width: 768px) {
    padding: ${props => props.noPadding ? '0' : '0 2rem'};
  }
`

export default Container 