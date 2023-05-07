import { useAppDispatch } from '../../../hooks/store-hooks';
import { setRegisterModalOpenAction, setRolesModalOpenAction } from '../../../store/slices/appSlice';
import { RoleSelectorContainer, CloseButton, SelectionButtons } from './styles';
import xIcon from '../../auth-modal/resources/x-symbol.png';

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

  const handleClose = () => {
    setRole(0);
    dispatch(setRolesModalOpenAction(false));
  };

  return (
    <RoleSelectorContainer isOpen={isOpen}>
      <CloseButton type="button" onClick={handleClose}>
        <img src={xIcon} alt="" />
      </CloseButton>
      <h1>Are you a company or an user?</h1>
      <SelectionButtons type="button" onClick={handleCompany}>
        Company
      </SelectionButtons>
      <p>- OR -</p>
      <SelectionButtons type="button" onClick={handleUser}>
        User
      </SelectionButtons>
    </RoleSelectorContainer>
  );
};

export default RoleSelector;
