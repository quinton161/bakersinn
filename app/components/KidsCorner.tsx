'use client';

import React, { useState } from 'react';
import styled from 'styled-components';

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

const Section = styled.section`
  position: relative;
  width: 100%;
  min-height: 500px;
  background: #27235C;
  overflow: hidden;
  margin: 6rem 0;
`;

const Container = styled.div`
  max-width: 80rem;
  margin: 0 auto;
  padding: 4rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageContainer = styled.div`
  flex: 1;
  position: relative;
  height: 100%;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const MarioImage = styled.img`
  max-width: 600px;
  height: auto;
  object-fit: contain;
`;

const Content = styled.div`
  flex: 1;
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 1rem;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const TitleImage = styled.img`
  height: 80px;
  width: auto;
  filter: drop-shadow(2px 2px 0 rgba(0,0,0,0.2))
         drop-shadow(-2px -2px 0 rgba(255,255,255,0.1));
`;

const Description = styled.p`
  font-size: 1.125rem;
  line-height: 1.7;
  color: white;
  max-width: 600px;
  text-align: center;
`;

const PlayButton = styled.button`
  background-color: #FF0000;
  color: white;
  padding: 1rem 3rem;
  font-size: 1.125rem;
  font-weight: bold;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.05);
    background-color: #E00000;
  }
`;

const BackgroundPattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url('/images/Rectangle for kids corner.png');
  background-repeat: repeat;
  opacity: 0.1;
  z-index: 1;
`;

const KidsCorner: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageSrc: string) => {
    setSelectedImage(imageSrc);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <Modal $isOpen={!!selectedImage} onClick={handleCloseModal}>
        <ModalContent>
          <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
          {selectedImage && (
            <img src={selectedImage} alt="Enlarged view" />
          )}
        </ModalContent>
      </Modal>

      <Section>
        <BackgroundPattern />
        <Container>
          <ImageContainer onClick={() => handleImageClick("/images/mariofinal.png")}>
            <MarioImage
              src="/images/mariofinal.png"
              alt="Super Mario character"
            />
          </ImageContainer>
          <Content>
            <TitleContainer onClick={() => handleImageClick("/images/Kids Corner.png")}>
              <TitleImage src="/images/Kids.png" alt="Kids" />
              <TitleImage src="/images/Corner.png" alt="Corner" />
            </TitleContainer>
            <Description>
              Let your children join the fun. Explore a place with exciting games and the top winners
              stand a chance to win exciting monthly prizes!
            </Description>
            <PlayButton>
              PLAY GAMES
            </PlayButton>
          </Content>
        </Container>
      </Section>
    </>
  );
};

export default KidsCorner; 