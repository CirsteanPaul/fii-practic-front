import styled from '../../theme';

export const LoginFormContainer = styled.div<{ isOpen: boolean }>`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 3rem;
  background-color: ${props => props.theme.colors.white};
  border-radius: 14px 0 0 14px;
  width: 740px;

  & button[type='button'] {
    font-family: 'Inter Bold';
    background: none;
    border: none;
    color: ${props => props.theme.colors.logoPurple};
    font-size: ${props => props.theme.fontSize.small};
    margin-top: 1rem;
    cursor: pointer;
  }

  & button[type='button']:hover {
    color: ${props => props.theme.colors.hoverPurple};
    transition: color 0.2s ease;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;

  &:hover {
    opacity: 0.5;
    transition: 0.2s ease;
  }

  img {
    width: 25px;
  }
`;

export const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;

  h1 {
    font-family: 'Inter Bold';
    font-size: ${props => props.theme.fontSize.large};
    text-justify: start;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.formsTitleGray};
  }

  & input {
    font-family: 'Inter Bold';
    border: 2px solid ${props => props.theme.colors.borderGray};
    font-size: ${props => props.theme.fontSize.small};
    color: ${props => props.theme.colors.formsTextGray};
    border-radius: 5px;
    padding: 0.5rem;
    margin-bottom: 1rem;
  }

  & button[type='submit'] {
    font-family: 'Inter Bold';
    border-radius: 5px;
    border: none;
    background-color: ${props => props.theme.colors.logoPurple};
    color: ${props => props.theme.colors.white};
    font-size: ${props => props.theme.fontSize.small};
    padding: 0.5rem;
    margin-top: 1rem;
    cursor: pointer;
  }

  & button:hover {
    background-color: ${props => props.theme.colors.hoverPurple};
    transition: background-color 0.2s ease;
  }
`;
