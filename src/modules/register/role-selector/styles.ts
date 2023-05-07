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

  h1 {
    font-family: 'Inter Bold';
    font-size: ${props => props.theme.fontSize.large};
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.formsTitleGray};
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
