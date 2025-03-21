'use client';

import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import BackToHome from '../components/BackToHome';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const Hero = styled.section`
  background: linear-gradient(135deg, #27235C 0%, #E94560 100%);
  padding: 6rem 2rem;
  text-align: center;
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 1;

  h1 {
    color: white;
    font-size: 3.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: rgba(255, 255, 255, 0.9);
    font-size: 1.2rem;
    max-width: 600px;
    margin: 0 auto;
  }
`;

const Section = styled.section`
  padding: 4rem 0;
`;

const SectionTitle = styled.h2`
  color: #27235C;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
`;

const StoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-bottom: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StoryCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-10px);
  }

  h3 {
    color: #27235C;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const TeamMember = styled.div`
  text-align: center;
`;

const TeamImageWrapper = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto 1.5rem;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const TeamInfo = styled.div`
  h3 {
    color: #27235C;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
  }
`;

const AboutPage = () => {
  const storyItems = [
    {
      title: "The Beginning",
      content: "Our story began in 1995 with a small family-owned bakery. Armed with traditional recipes and a passion for baking, we set out to create the finest breads and pastries in the city."
    },
    {
      title: "Growing Together",
      content: "As word spread about our delicious treats, we grew from a small bakery into a beloved local institution. We've maintained our commitment to quality while expanding our offerings."
    },
    {
      title: "Today",
      content: "Now, we're proud to serve our community with multiple locations, while still baking everything fresh daily using the same care and attention to detail as when we first began."
    }
  ];

  const teamMembers = [
    {
      name: "John Baker",
      role: "Master Baker",
      image: "/images/team/baker1.jpg"
    },
    {
      name: "Sarah Mills",
      role: "Pastry Chef",
      image: "/images/team/baker2.jpg"
    },
    {
      name: "Michael Chen",
      role: "Head of Operations",
      image: "/images/team/baker3.jpg"
    },
    {
      name: "Emma Wilson",
      role: "Customer Relations",
      image: "/images/team/baker4.jpg"
    }
  ];

  return (
    <>
      <BackToHome />
      <Hero>
        <HeroContent>
          <h1>Our Story</h1>
          <p>Discover the passion and tradition behind every loaf we bake.</p>
        </HeroContent>
      </Hero>

      <Container>
        <Section>
          <SectionTitle>Our Journey</SectionTitle>
          <StoryGrid>
            {storyItems.map((item) => (
              <StoryCard key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.content}</p>
              </StoryCard>
            ))}
          </StoryGrid>
        </Section>

        <Section>
          <SectionTitle>Meet Our Team</SectionTitle>
          <TeamGrid>
            {teamMembers.map((member) => (
              <TeamMember key={member.name}>
                <TeamImageWrapper>
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    style={{ objectFit: 'cover' }}
                    sizes="200px"
                  />
                </TeamImageWrapper>
                <TeamInfo>
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </TeamInfo>
              </TeamMember>
            ))}
          </TeamGrid>
        </Section>
      </Container>
    </>
  );
};

export default AboutPage; 