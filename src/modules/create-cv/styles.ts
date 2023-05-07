import styled from '../../theme';

export const CreateCvContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background-color: ${props => props.theme.colors.backgroundGray};
  padding: 3rem;
`;

export const CvForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CreateCvTitle = styled.h1`
  font-family: 'Inter Bold';
  color: ${props => props.theme.colors.formsTitleGray};
  font-size: ${props => props.theme.fontSize.large};
  margin-bottom: 2rem;
`;

export const CvTextArea = styled.textarea`
  width: 100%;
  font-family: 'Inter Bold';
  color: ${props => props.theme.colors.formsTextGray};
  min-height: 200px;
  border-radius: 8px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 1px 1px rgba(255, 255, 255, 0.06);
  padding: 0.8em;
  resize: none;
`;

export const FormsTitle = styled.h2`
  font-family: 'Inter Bold';
  color: ${props => props.theme.colors.formsTextGray};
  font-size: ${props => props.theme.fontSize.small};
`;

export const CvSubmitButton = styled.button`
  font-family: 'Inter Bold';
  width: 200px;
  border-radius: 10px;
  border: none;
  background-color: ${props => props.theme.colors.logoPurple};
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSize.small};
  padding: 1rem;
  margin-top: 2rem;
  cursor: pointer;

  &:hover {
    background-color: ${props => props.theme.colors.hoverPurple};
    transition: background-color 0.2s ease;
  }
`;
