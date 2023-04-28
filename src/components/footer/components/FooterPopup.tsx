import { FpButton, FpContainer, FpLittleText, FpTitle } from './styles';

const FooterPopup = (): JSX.Element => {
  return (
    <FpContainer>
      <FpLittleText>are you ready?</FpLittleText>
      <FpTitle>be a part of the next big thing</FpTitle>
      <FpButton to="mint">Purchase A PERMIT NOW</FpButton>
    </FpContainer>
  );
};

export default FooterPopup;
