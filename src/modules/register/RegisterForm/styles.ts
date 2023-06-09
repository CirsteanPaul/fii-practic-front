import styled from '../../../theme';

export const RegisterFormContainer = styled.div<{ isOpen: boolean }>`
  display: ${props => (props.isOpen ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem 3rem;
  background-color: ${props => props.theme.colors.white};
  border-radius: 14px 0 0 14px;
  width: 740px;

  @media (max-width: 1193px) {
    width: 100%;
    border-radius: none;
  }

  & button[type='button'] {
    font-family: 'Inter Bold';
    background: none;
    border: none;
    font-size: ${props => props.theme.fontSize.small};
    color: ${props => props.theme.colors.logoPurple};
    cursor: pointer;
  }

  & button[type='button']:hover {
    color: ${props => props.theme.colors.hoverPurple};
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

export const RegisterFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;

  h1 {
    font-family: 'Inter Bold';
    width: 100%;
    text-justify: start;
    font-size: ${props => props.theme.fontSize.large};
    margin-bottom: 2rem;
    color: ${props => props.theme.colors.formsTitleGray};
  }
  & input {
    font-family: 'Inter Bold';
    border: none;
    border-bottom: 2px solid ${props => props.theme.colors.borderGray};
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

  & button[type='submit']:hover {
    background-color: ${props => props.theme.colors.hoverPurple};
    transition: background-color 0.2s ease;
  }
`;

export const LoginLinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 10px;
  margin-top: 2rem;

  & p {
    font-family: 'Inter Bold';
    color: ${props => props.theme.colors.formsTextGray};
    font-size: ${props => props.theme.fontSize.small};
  }
`;
