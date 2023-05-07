import React from 'react';
import { ResponseContainer, ResponseNumber, ResponseText } from './styles';

interface responseProps {
  answer: string;
  nr: number;
  setAnswer: (i: number) => void;
}

const Response = ({ answer, nr, setAnswer }: responseProps) => (
  <ResponseContainer onClick={() => setAnswer(nr)}>
    <ResponseNumber>{nr}</ResponseNumber>
    <ResponseText>{answer}</ResponseText>
  </ResponseContainer>
);

export default Response;
