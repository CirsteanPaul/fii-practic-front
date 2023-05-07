import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks/store-hooks';
import { getUserActionAsync, postUserActionAsync } from '../../store/actions/user-actions';
import {
  avatarUserSelector,
  descriptionUserSelector,
  emailUserSelector,
  facebookUserSelector,
  idUserSelector,
  linkedinUserSelector,
  nameUserSelector,
  roleUserSelector,
  usernameUserSelector,
} from '../../store/selectors/user-selector';
import {
  AvatarContainer,
  AvatarImg,
  ChangeImg,
  FormsContainer,
  FormTextArea,
  FormTitle,
  FormWrapper,
  GroupFormWrapper,
  MiddleContainer,
  Submit,
  Title,
  UserContainer,
} from './styles';
import profilePicture from './profile_picture.png';
import {
  setEmailUserAction,
  setFacebookUserAction,
  setLinkedinUserAction,
  setNameUserAction,
  setRoleUserAction,
  setUsernameUserAction,
} from '../../store/actions/user-sync-actions';
import IUserState from '../../types/user/IUserState';

const Settings = (): JSX.Element => {
  const currentId = useAppSelector(idUserSelector);
  const currentAvatar = useAppSelector(avatarUserSelector);
  const currentUsername = useAppSelector(usernameUserSelector);
  const currentFacebook = useAppSelector(facebookUserSelector);
  const currentName = useAppSelector(nameUserSelector);
  const currentlinkedin = useAppSelector(linkedinUserSelector);
  const currentrole = useAppSelector(roleUserSelector);
  const currentemail = useAppSelector(emailUserSelector);
  const currentDescription = useAppSelector(descriptionUserSelector);
  const avatar = useAppSelector(avatarUserSelector);
  const pularole = useAppSelector(roleUserSelector);
  const [username, setUsername] = useState<string>(currentUsername);
  const [facebook, setFacebook] = useState<string>(currentFacebook);
  const [name, setName] = useState<string>(currentName);
  const [linkedin, setLinkedin] = useState<string>(currentlinkedin);
  function getRoleNumber(role: number): string | undefined {
    if (role === 1) return 'front';
    if (role === 2) return 'back';
    if (role === 3) return 'side';
    return '';
  }
  function getRoleString(role: string): number | undefined {
    if (role === 'front') return 1;
    if (role === 'back') return 2;
    if (role === 'side') return 3;
    return 0;
  }

  const [role, setPositionRole] = useState<string>(getRoleNumber(currentrole));
  const [email, setEmail] = useState<string>(currentemail);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getUserActionAsync());
  }, [dispatch]);

  const finalData: IUserState = {
    id: currentId,
    username,
    name,
    facebook,
    linkedin,
    positionRole: getRoleString(role),
    description: currentDescription,
    email,
    avatar: currentAvatar,
    loading: false,
    role: pularole,
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
  };

  const sendData = (): void => {
    dispatch(setUsernameUserAction(username));
    dispatch(setFacebookUserAction(facebook));
    dispatch(setNameUserAction(name));
    dispatch(setLinkedinUserAction(linkedin));
    dispatch(setRoleUserAction(getRoleString(role)));
    dispatch(setEmailUserAction(email));
    postUserActionAsync(finalData);
  };

  const handleUsernameChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => setUsername(e.target.value);
  const handleFacebookChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => setFacebook(e.target.value);
  const handleNameChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => setName(e.target.value);
  const handleLinkedinChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => setLinkedin(e.target.value);
  const handleRoleChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => setPositionRole(e.target.value);
  const handleEmailChanged = (e: React.ChangeEvent<HTMLTextAreaElement>) => setEmail(e.target.value);

  return (
    <UserContainer>
      <Title>User Profile</Title>
      <MiddleContainer>
        <AvatarContainer>
          <AvatarImg src={avatar} placeholder={profilePicture} />
          <ChangeImg>Change Image</ChangeImg>
          <Submit onClick={sendData}>Submit</Submit>
        </AvatarContainer>
        <FormsContainer onSubmit={handleSubmit}>
          <GroupFormWrapper>
            <FormWrapper>
              <FormTitle>Username</FormTitle>
              <FormTextArea value={username} onChange={handleUsernameChanged} />
            </FormWrapper>
            <FormWrapper>
              <FormTitle>Facebook</FormTitle>
              <FormTextArea value={facebook} onChange={handleFacebookChanged} />
            </FormWrapper>
          </GroupFormWrapper>
          <GroupFormWrapper>
            <FormWrapper>
              <FormTitle>Name</FormTitle>
              <FormTextArea value={name} onChange={handleNameChanged} />
            </FormWrapper>
            <FormWrapper>
              <FormTitle>LinkedIn</FormTitle>
              <FormTextArea value={linkedin} onChange={handleLinkedinChanged} />
            </FormWrapper>
          </GroupFormWrapper>
          <GroupFormWrapper>
            <FormWrapper>
              <FormTitle>Role</FormTitle>
              <FormTextArea value={role} onChange={handleRoleChanged} />
            </FormWrapper>
            <FormWrapper>
              <FormTitle>Email</FormTitle>
              <FormTextArea value={email} onChange={handleEmailChanged} />
            </FormWrapper>
          </GroupFormWrapper>
        </FormsContainer>
      </MiddleContainer>
    </UserContainer>
  );
};

export default Settings;
