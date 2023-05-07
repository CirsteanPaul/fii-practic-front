import styled from '../../theme';

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1100px) {
    align-self: flex-start;
    margin-left: 40px;
  }
  @media (max-width: 900px) {
    justify-content: center;
    margin-left: 0;
    width: 100%;
  }
`;

export const MiddleContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AvatarImg = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 10px;
  margin-top: 30px;
`;

export const ChangeImg = styled.p`
  font-size: ${props => props.theme.fontSize.small};
  font-family: ${props => props.theme.fonts.inter};
  color: ${props => props.theme.colors.formsTitleGray};
  margin-top: 35px;
  padding-left: 40px;
`;

export const Title = styled.p`
  font-size: ${props => props.theme.fontSize.medium};
  font-family: ${props => props.theme.fonts.inter};
  color: ${props => props.theme.colors.formsTitleGray};
  margin-top: 30px;
  padding-left: 5px;
  @media (max-width: 900px) {
    text-align: center;
  }
`;

export const Submit = styled.button`
  border-radius: 10px;
  padding: 10px 15px 10px 15px;
  border-style: none;
  border-color: ${props => props.theme.colors.purple};
  background-color: ${props => props.theme.colors.purple};
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSize.medium};
  font-family: ${props => props.theme.fonts.inter};
  &:hover {
    cursor: pointer;
    background-color: black;
    border-color: black;
  }
  margin-top: 30px;
  margin-left: 5px;
  @media (max-width: 900px) {
    margin-bottom: 50px;
  }
`;

export const FormsContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  padding-left: 100px;
  width: 100%;
  @media (max-width: 1150px) {
    padding-left: 50px;
  }
  margin-bottom: 20px;
`;

export const FormWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  gap: 20px;
`;

export const GroupFormWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-right: 50px;
  @media (max-width: 1098px) {
    gap: 150px;
  }
  @media (max-width: 1000px) {
    gap: 100px;
  }
  @media (max-width: 950px) {
    gap: 50px;
  }
`;

export const FormTitle = styled.p`
  text-align: start;
  color: ${props => props.theme.colors.formsTextGray};
  font-size: ${props => props.theme.fontSize.small};
  font-family: ${props => props.theme.fonts.inter};
`;
export const FormTextArea = styled.textarea`
  width: 300px;
  font-family: 'Inter Bold';
  color: black;
  min-height: 50px;
  border-radius: 8px;
  border: 2px solid rgba(0, 0, 0, 0.1);
  padding: 0.8em;
  resize: none;
  justify-content: center;
  align-items: center;
  @media (max-width: 1400px) {
    width: 250px;
  }
  @media (max-width: 1250px) {
    width: 200px;
  }
  @media (max-width: 1099px) {
    width: 250px;
  }
  @media (max-width: 630px) {
    width: 200px;
  }
  @media (max-width: 565px) {
    width: 150px;
  }
  @media (max-width: 430px) {
    width: 130px;
  }
`;
