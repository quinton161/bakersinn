'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import BackToHome from '../components/BackToHome';

const PageContainer = styled.div`
  min-height: 100vh;
  background: #fff;
`;

const Hero = styled.div`
  position: relative;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-align: center;
  overflow: hidden;
  background: linear-gradient(135deg, #2B1B58 0%, #27235C 100%);
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 2rem;

  h1 {
    font-size: 4.5rem;
    margin-bottom: 1.5rem;
    color: white;
    font-weight: 800;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

    @media (max-width: 768px) {
      font-size: 3rem;
    }
  }

  p {
    color: white;
    font-family: black;
    font-size: 22.4px;
    font-weight: 400;
    line-height: 33.6px;
    opacity: 0.9;
  }
`;

const CategoryNav = styled.div`
  background: white;
  padding: 1.5rem 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 80px;
  z-index: 10;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05);
`;

const CategoryList = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  overflow-x: auto;

  &::-webkit-scrollbar {
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #C19A5B;
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    justify-content: flex-start;
  }
`;

interface CategoryButtonProps {
  $isActive: boolean;
}

const CategoryButton = styled.button<CategoryButtonProps>`
  color: ${props => props.$isActive ? '#2B1B58' : '#666'};
  font-family: black;
  font-size: 22.4px;
  font-weight: ${props => props.$isActive ? '600' : '400'};
  line-height: 33.6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem 1rem;
  position: relative;
  transition: all 0.3s ease;

  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    width: ${props => props.$isActive ? '100%' : '0'};
    height: 2px;
    background: #C19A5B;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #2B1B58;
    &::after {
      width: 100%;
    }
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1400px;
  margin: 4rem auto;
  padding: 0 2rem;
`;

const ProductCard = styled.div`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.15);
  }
`;

const ProductImage = styled.div`
  position: relative;
  height: 300px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }
`;

const ProductTag = styled.span`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #C19A5B;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 2rem;
  font-size: 0.875rem;
  font-weight: 500;
  z-index: 1;
`;

const ProductInfo = styled.div`
  padding: 2rem;

  h3 {
    color: #2B1B58;
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  p {
    color: rgb(38, 27, 108);
    font-family: black;
    font-size: 18px;
    font-weight: 400;
    line-height: 27px;
    opacity: 0.8;
  }
`;

const ProductsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'bread', name: 'Bread' },
    { id: 'rolls', name: 'Rolls' },
    { id: 'cakes', name: 'Cakes' },
    { id: 'pastries', name: 'Pastries' }
  ];

  const products = [
    {
      id: 1,
      name: 'Premium White Loaf',
      category: 'bread',
      description: 'Our signature white bread, soft and fluffy with a golden crust.',
      image: '/images/breadslices.png',
      tag: 'Best Seller'
    },
    {
      id: 2,
      name: 'Whole Wheat Bread',
      category: 'bread',
      description: 'Nutritious whole wheat bread packed with natural goodness.',
      image: '/images/high energy brown.png',
      tag: 'Healthy Choice'
    },
    {
      id: 3,
      name: 'Soft Rolls',
      category: 'rolls',
      description: 'Perfect for sandwiches and burgers, our soft rolls are baked fresh daily.',
      image: '/images/bun.png',
      tag: 'Fresh Daily'
    },
    {
      id: 4,
      name: 'Chocolate Cake',
      category: 'cakes',
      description: 'Rich chocolate cake with smooth ganache frosting.',
      image: '/images/cream donut.png',
      tag: 'Popular'
    },
    {
      id: 5,
      name: 'Butter Croissant',
      category: 'pastries',
      description: 'Flaky, buttery croissants made with premium ingredients.',
      image: '/images/donut.png',
      tag: 'Breakfast Favorite'
    },
    {
      id: 6,
      name: 'Milk Bread',
      category: 'bread',
      description: 'Extra soft and enriched with milk for a delicate texture.',
      image: '/images/breadslices.png',
      tag: 'Family Choice'
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <PageContainer>
      <BackToHome />
      <Hero>
        <Image
          src="/images/products banner.png"
          alt="Baker's Inn Products"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <HeroContent>
          <h1>Our Products</h1>
          <p>Discover our range of freshly baked goods made with premium ingredients and love</p>
        </HeroContent>
      </Hero>

      <CategoryNav>
        <CategoryList>
          {categories.map(category => (
            <CategoryButton
              key={category.id}
              $isActive={activeCategory === category.id}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.name}
            </CategoryButton>
          ))}
        </CategoryList>
      </CategoryNav>

      <ProductsGrid>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage>
              <Image
                src={product.image}
                alt={product.name}
                fill
                style={{ objectFit: 'cover' }}
              />
            </ProductImage>
            <ProductInfo>
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <ProductTag>{product.tag}</ProductTag>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductsGrid>
    </PageContainer>
  );
};

export default ProductsPage; 