'use client';

import React from 'react';
import styled from 'styled-components';

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 800px;
  position: relative;
  max-height: 90vh;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #27235C;
  color: white;
  border: none;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  
  &:hover {
    background: #1a1745;
  }
`;

const Title = styled.h2`
  color: #27235C;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
`;

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  input, select {
    width: 100%;
    padding: 0.8rem;
    border: 1px solid #ddd;
    border-radius: 4px;
    background-color: #faf7f2;
    font-size: 1rem;
    
    &:focus {
      outline: none;
      border-color: #B69D74;
    }
  }
`;

const CheckboxGroup = styled.div`
  grid-column: 1 / -1;
  display: flex;
  gap: 0.5rem;
  align-items: flex-start;
  margin-top: 1rem;

  input[type="checkbox"] {
    margin-top: 0.3rem;
  }

  label {
    color: #27235C;
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;

const TermsContainer = styled.div`
  grid-column: 1 / -1;
  text-align: center;
  margin: 1rem 0;
  
  a {
    color: #27235C;
    text-decoration: underline;
    margin: 0 0.5rem;
  }
`;

const SubmitButton = styled.button`
  grid-column: 1 / -1;
  background: #B69D74;
  color: white;
  padding: 1rem;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
  
  &:hover {
    background: #9a835f;
  }
`;

interface FactoryTourPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function FactoryTourPopup({ isOpen, onClose }: FactoryTourPopupProps) {
  if (!isOpen) return null;

  return (
    <PopupOverlay>
      <PopupContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Title>Book A Factory Tour</Title>
        <Form onSubmit={(e) => e.preventDefault()}>
          <FormGroup>
            <input 
              type="text" 
              placeholder="Name of Organisation"
              required
            />
          </FormGroup>
          <FormGroup>
            <input 
              type="text" 
              placeholder="Name of Contact Person"
              required
            />
          </FormGroup>
          <FormGroup>
            <input 
              type="text" 
              placeholder="Organization Address"
              required
            />
          </FormGroup>
          <FormGroup>
            <input 
              type="text" 
              placeholder="Organization's Resident Town"
              required
            />
          </FormGroup>
          <FormGroup>
            <input 
              type="tel" 
              placeholder="Contact Person's Telephone"
              required
            />
          </FormGroup>
          <FormGroup>
            <input 
              type="email" 
              placeholder="Contact Person's E-mail"
              required
            />
          </FormGroup>
          <FormGroup>
            <input 
              type="date" 
              placeholder="Date of Visit"
              required
            />
          </FormGroup>
          <FormGroup>
            <select required>
              <option value="">Number of participants</option>
              <option value="1-10">1-10</option>
              <option value="11-20">11-20</option>
              <option value="21-30">21-30</option>
              <option value="31-40">31-40</option>
              <option value="41-50">41-50</option>
            </select>
          </FormGroup>
          <FormGroup>
            <select required>
              <option value="">Age Range Of Participants</option>
              <option value="children">Children (5-12)</option>
              <option value="teenagers">Teenagers (13-17)</option>
              <option value="young-adults">Young Adults (18-25)</option>
              <option value="adults">Adults (26+)</option>
              <option value="mixed">Mixed Ages</option>
            </select>
          </FormGroup>

          <TermsContainer>
            Plant Visit
            <a href="/terms" target="_blank">Terms & Conditions</a>
            Plant Visit
            <a href="/safety" target="_blank">Safety Regulations</a>
          </TermsContainer>

          <CheckboxGroup>
            <input 
              type="checkbox" 
              id="authorization"
              required 
            />
            <label htmlFor="authorization">
              Your organisation has agreed to the submission of this application and you have authorisation to submit it. The information you have provided on behalf of your organisation is accurate, full and correct.
            </label>
          </CheckboxGroup>

          <CheckboxGroup>
            <input 
              type="checkbox" 
              id="safety"
              required 
            />
            <label htmlFor="safety">
              Have Read The Safety Regulations
            </label>
          </CheckboxGroup>

          <SubmitButton type="submit">Submit</SubmitButton>
        </Form>
      </PopupContent>
    </PopupOverlay>
  );
} 