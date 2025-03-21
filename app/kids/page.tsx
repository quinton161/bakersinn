'use client';

import React, { useState } from 'react';
import styled from 'styled-components';
import KidsCorner from '../components/KidsCorner';
import BackToHome from '../components/BackToHome';

const Modal = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  display: ${props => props.$isOpen ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  z-index: 1000;
  cursor: pointer;
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 90%;
  max-height: 90vh;
  margin: auto;
  
  img {
    max-width: 100%;
    max-height: 90vh;
    object-fit: contain;
    border-radius: 8px;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -40px;
  right: 0;
  background: none;
  border: none;
  color: white;
  font-size: 30px;
  cursor: pointer;
  padding: 8px;
  
  &:hover {
    opacity: 0.8;
  }
`;

const GamesSection = styled.section`
  padding: 4rem 1rem;
  background: white;
`;

const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
`;

const GamesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 3rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const GameCard = styled.div`
  background: white;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }
`;

const GameImage = styled.div`
  position: relative;
  width: 100%;
  height: 200px;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  &:hover img {
    transform: scale(1.1);
  }
`;

const GameContent = styled.div`
  padding: 1.5rem;
  text-align: center;

  h3 {
    font-size: 1.5rem;
    color: #27235C;
    margin-bottom: 0.5rem;
  }

  p {
    color: #666;
    margin-bottom: 1rem;
  }
`;

const PlayButton = styled.button`
  background: #FF0000;
  color: white;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 4px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #E00000;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
  }
`;

const KidsPage = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const games = [
    {
      title: "Bread Jump",
      description: "Help the bread slice jump over obstacles and collect points!",
      image: "/images/breadslices.png"
    },
    {
      title: "Baker's Puzzle",
      description: "Match 3 or more bakery items to score points and clear the board!",
      image: "/images/maze.png"
    },
    {
      title: "Kitchen Rush",
      description: "Help the baker prepare orders in this fast-paced cooking game!",
      image: "/images/pacman.png"
    }
  ];

  return (
    <>
      <BackToHome />
      <Modal $isOpen={!!selectedImage} onClick={handleCloseModal}>
        <ModalContent>
          <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
          {selectedImage && (
            <img src={selectedImage} alt="Enlarged view" />
          )}
        </ModalContent>
      </Modal>

      <KidsCorner />
      
      <GamesSection>
        <Container>
          <GamesGrid>
            {games.map((game, index) => (
              <GameCard key={index}>
                <GameImage onClick={() => handleImageClick(game.image)}>
                  <img src={game.image} alt={game.title} />
                </GameImage>
                <GameContent>
                  <h3>{game.title}</h3>
                  <p>{game.description}</p>
                  <PlayButton>Play Now</PlayButton>
                </GameContent>
              </GameCard>
            ))}
          </GamesGrid>
        </Container>
      </GamesSection>
    </>
  );
};

export default KidsPage; 