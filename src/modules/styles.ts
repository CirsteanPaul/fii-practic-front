import styled from '../theme';

export const HomeContainer = styled.main`
  display: flex;
  height: 100%;
  background-color: ${props => props.theme.colors.primary};
  align-items: center;
  justify-content: center;
`;
