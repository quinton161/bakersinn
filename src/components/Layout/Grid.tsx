'use client'

import styled from 'styled-components'

interface GridProps {
  columns?: number;
  gap?: string;
  minWidth?: string;
}

const Grid = styled.div<GridProps>`
  display: grid;
  gap: ${props => props.gap || '1rem'};
  grid-template-columns: repeat(
    auto-fit,
    minmax(${props => props.minWidth || '280px'}, 1fr)
  );

  @media (min-width: 768px) {
    grid-template-columns: ${props => 
      props.columns ? `repeat(${props.columns}, 1fr)` : 'auto-fit'};
  }
`

export default Grid 