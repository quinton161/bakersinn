'use client';

import React from 'react';
import styled from 'styled-components';
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

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoCard = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  background: white;
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  color: #27235C;
  font-weight: 500;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #27235C;
  }
`;

const TextArea = styled.textarea`
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #27235C;
  }
`;

const SubmitButton = styled.button`
  background: #27235C;
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background: #1a1640;
  }
`;

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <>
      <BackToHome />
      <Hero>
        <HeroContent>
          <h1>Contact Us</h1>
          <p>Get in touch with us for any questions or concerns.</p>
        </HeroContent>
      </Hero>

      <Container>
        <ContentGrid>
          <InfoSection>
            <InfoCard>
              <h3>Visit Us</h3>
              <p>123 Baker Street<br />Harare, Zimbabwe</p>
            </InfoCard>
            <InfoCard>
              <h3>Call Us</h3>
              <p>+263 123 456 789<br />Mon-Fri: 8am - 6pm</p>
            </InfoCard>
            <InfoCard>
              <h3>Email Us</h3>
              <p>info@bakersinn.co.zw<br />support@bakersinn.co.zw</p>
            </InfoCard>
          </InfoSection>

          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label>Name</Label>
              <Input type="text" required />
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Input type="email" required />
            </FormGroup>
            <FormGroup>
              <Label>Subject</Label>
              <Input type="text" required />
            </FormGroup>
            <FormGroup>
              <Label>Message</Label>
              <TextArea required />
            </FormGroup>
            <SubmitButton type="submit">Send Message</SubmitButton>
          </Form>
        </ContentGrid>
      </Container>
    </>
  );
};

export default ContactPage; 