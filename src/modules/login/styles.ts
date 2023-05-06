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
    background: none;
    border: none;
    color: ${props => props.theme.colors.logoPurple};
    font-size: ${props => props.theme.fontSize.small};
    margin-top: 1rem;
    cursor: pointer;
  }

  & button[type='button']:hover {
    color: ${props => props.theme.colors.hoverPurple};
  }
`;

export const LoginFormStyled = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;

  h1 {
    font-size: ${props => props.theme.fontSize.large};
    text-justify: start;
    margin-bottom: 1rem;
    color: ${props => props.theme.colors.formsTitleGray};
  }

  & input {
    border: 2px solid ${props => props.theme.colors.borderGray};
    font-size: ${props => props.theme.fontSize.small};
    color: ${props => props.theme.colors.formsTextGray};
    border-radius: 5px;
    padding: 0.5rem;
    margin-bottom: 1rem;
  }

  & button[type='submit'] {
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
