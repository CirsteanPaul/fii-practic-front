import { useState } from 'react';
import { AuthModalContainer, SideDesignContainer, AuthModalBackdrop, ModalLogo, DiamondsImage } from './styles';
import LoginForm from '../login';
import RegisterForm from '../register/RegisterForm';
import RoleSelector from '../register/role-selector';
import diamonds from './resources/diamonds.png';
import icon from './resources/icon.png';
import { useAppSelector } from '../../hooks/store-hooks';
import { isRegisterModalOpenAppStateSelector, isLoginModalOpenAppStateSelector, isRolesModalOpenAppStateSelector } from '../../store/selectors/app-selectors';

interface IProps {
  isOpen: boolean;
}

const AuthModal = ({ isOpen }: IProps) => {
  const [role, setRole] = useState<number>();

  return (
    <AuthModalBackdrop isOpen={isOpen}>
      <AuthModalContainer>
        <SideDesignContainer>
          <ModalLogo src={icon} />
          <h1>TURN YOUR</h1>
          <h1>INTERVIEW INTO</h1>
          <h1>A GAME</h1>
          <DiamondsImage src={diamonds} />
        </SideDesignContainer>
        <LoginForm isOpen={useAppSelector(isLoginModalOpenAppStateSelector)} setRole={setRole} />
        <RoleSelector isOpen={useAppSelector(isRolesModalOpenAppStateSelector)} setRole={setRole} />
        <RegisterForm isOpen={useAppSelector(isRegisterModalOpenAppStateSelector)} role={role} setRole={setRole} />
      </AuthModalContainer>
    </AuthModalBackdrop>
  );
};

export default AuthModal;
