import React from 'react';
import { ResponseContainer, ResponseNumber, ResponseText } from './styles';

interface responseProps {
  answer: string;
  nr: number;
}

const Response = ({ answer, nr }: responseProps) => (
  <ResponseContainer>
    <ResponseNumber>{nr}</ResponseNumber>
    <ResponseText>{answer}</ResponseText>
  </ResponseContainer>
);

export default Response;
