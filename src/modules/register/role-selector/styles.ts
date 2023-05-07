import styled from '../../../theme';

export const RoleSelectorContainer = styled.div<{ isOpen: boolean }>`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2em;
  padding: 2rem 3rem;
  background-color: ${props => props.theme.colors.white};
  border-radius: 14px 0 0 14px;
  width: 740px;

  @media (max-width: 1193px) {
    width: 100%;
  }

  h1 {
    font-family: 'Inter Bold';
    font-size: ${props => props.theme.fontSize.large};
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.formsTitleGray};

    @media (max-width: 419px) {
      font-size: ${props => props.theme.fontSize.medium};
    }
  }

  p {
    font-family: 'Inter Bold';
    color: ${props => props.theme.colors.formsTextGray};
    font-size: ${props => props.theme.fontSize.small};
  }
`;

export const SelectionButtons = styled.button`
  font-family: 'Inter Bold';
  border-radius: 5px;
  width: 80%;
  border: none;
  background-color: ${props => props.theme.colors.logoPurple};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSize.small};
  padding: 0.5rem;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.hoverPurple};
    transition: background-color 0.2s ease;
  }

  @media (max-width: 721px) {
    width: 100%;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
    transition: 0.2s ease;
  }

  img {
    width: 25px;
  }
`;
