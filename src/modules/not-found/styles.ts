import { Link } from 'react-router-dom';
import styled from '../../theme/styled';

export const NotFoundContainer = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.primary};
  align-items: center;
  justify-content: center;
`;

export const NotFoundTitle = styled.h1`
  font-size: ${props => props.theme.fontSize.large};
  text-justify: center;
  margin: 1rem 0;
`;

export const NotFoundText = styled.h1`
  font-size: ${props => props.theme.fontSize.medium};
  margin: 1rem 0;
`;

export const NotFoundLink = styled(Link)`
  color: ${props => props.theme.colors.accent};
  text-decoration: none;

  &:hover {
    color: #2b4069;
    transition: color 0.2s ease;
  }
`;
