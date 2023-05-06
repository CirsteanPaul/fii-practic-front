import { NotFoundPage, NotFoundContainer, NotFoundTitle, NotFoundText, NotFoundLink, TopLeftCorner, TopRightCorner, BottomLeftCorner, BottomRightCorner } from './styles';
import corner from './corner.png';

const NotFound = () => {
  return (
    <NotFoundPage>
      <NotFoundContainer>
        <TopLeftCorner src={corner} />
        <TopRightCorner src={corner} />
        <BottomLeftCorner src={corner} />
        <BottomRightCorner src={corner} />
        <NotFoundTitle>Oops!</NotFoundTitle>
        <NotFoundText>You are trying to access an invalid link</NotFoundText>
        <NotFoundLink to="/">Visit our home page</NotFoundLink>
      </NotFoundContainer>
    </NotFoundPage>
  );
};

export default NotFound;
