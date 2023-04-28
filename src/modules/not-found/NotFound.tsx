import { NotFoundContainer, NotFoundTitle, NotFoundText, NotFoundLink } from './styles';

const NotFound = () => {
  return (
    <NotFoundContainer>
      <NotFoundTitle>Oops!</NotFoundTitle>
      <NotFoundText>You are trying to access an invalid link</NotFoundText>
      <NotFoundLink to="/">Visit our home page</NotFoundLink>
    </NotFoundContainer>
  );
};

export default NotFound;
