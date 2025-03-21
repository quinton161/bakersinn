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

const Description = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 2rem;
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
  input, select, textarea {
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

interface DonationRequestPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function DonationRequestPopup({ isOpen, onClose }: DonationRequestPopupProps) {
  if (!isOpen) return null;

  return (
    <PopupOverlay>
      <PopupContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Title>Request Product Donations</Title>
        <Description>
          You can apply for product donations by completing this form, we will contact you should your application be successful. Please bear in mind that we will need at least 3 weeks' notice to the date of your event
        </Description>
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
              placeholder="Contact Person Position"
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
              placeholder="Date of Event"
              required
            />
          </FormGroup>
          <FormGroup>
            <select required>
              <option value="">Number of Attendants</option>
              <option value="0-50">0-50</option>
              <option value="51-100">51-100</option>
              <option value="101-200">101-200</option>
              <option value="201-500">201-500</option>
              <option value="500+">500+</option>
            </select>
          </FormGroup>
          <FormGroup>
            <select required>
              <option value="">Intended use of Donations</option>
              <option value="charity">Charity Event</option>
              <option value="fundraising">Fundraising</option>
              <option value="community">Community Event</option>
              <option value="other">Other</option>
            </select>
          </FormGroup>
          <FormGroup>
            <select required>
              <option value="">What Product Are Specifically Looking For?</option>
              <option value="bread">Bread</option>
              <option value="confectionery">Confectionery</option>
              <option value="both">Both</option>
            </select>
          </FormGroup>
          <SubmitButton type="submit">Proceed to next step</SubmitButton>
        </Form>
      </PopupContent>
    </PopupOverlay>
  );
} 