import { useAppDispatch } from '../../../hooks/store-hooks';
import { setRegisterModalOpenAction, setRolesModalOpenAction } from '../../../store/slices/appSlice';
import { RoleSelectorContainer } from './styles';

interface IProps {
  isOpen: boolean;
  setRole: (value: React.SetStateAction<number>) => void;
}

const RoleSelector = ({ isOpen, setRole }: IProps): JSX.Element => {
  const dispatch = useAppDispatch();

  const handleCompany = () => {
    setRole(2);
    dispatch(setRolesModalOpenAction(false));
    dispatch(setRegisterModalOpenAction(true));
  };

  const handleUser = () => {
    setRole(1);
    dispatch(setRolesModalOpenAction(false));
    dispatch(setRegisterModalOpenAction(true));
  };

  return (
    <RoleSelectorContainer isOpen={isOpen}>
      <h1>Are you a company or an user?</h1>
      <button type="button" onClick={handleCompany}>
        Company
      </button>
      <p>- OR -</p>
      <button type="button" onClick={handleUser}>
        User
      </button>
    </RoleSelectorContainer>
  );
};

export default RoleSelector;
