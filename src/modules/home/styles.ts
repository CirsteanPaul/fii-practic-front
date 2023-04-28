import styled from '../../theme';

export const HomeContainer = styled.main`
  display: flex;
  min-height: 100vh;
  background-color: ${props => props.theme.colors.primary};
  align-items: center;
  justify-content: center;
`;
