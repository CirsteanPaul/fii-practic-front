import styled from '../../theme';

export const AuthModalContainer = styled.div`
  z-index: 100;
  position: fixed;
  top: 50%;
  bottom: 50%;
  left: 50%;
  right: 50%;
  transform: translate(-50%, -50%);
  width: 1152px;
  height: 700px;
  display: flex;
  flex-direction: row;
  background: linear-gradient(223.58deg, #8146ff 31.18%, #b3cdcd 101.35%);
`;

export const AuthModalBackdrop = styled.div<{ isOpen: boolean }>`
  display: ${props => (props.isOpen ? 'block' : 'none')};
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
`;

export const ModalLogo = styled.img`
  width: 50px;
  margin-bottom: 20px;
`;

export const DiamondsImage = styled.img`
  position: absolute;
  bottom: 20px;
  left: 80px;
  object-fit: contain;
`;

export const SideDesignContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  flex-grow: 1;
  padding: 40px;

  h1 {
    font-family: 'Inter Bold';
    font-size: ${props => props.theme.fontSize.large};
    color: ${props => props.theme.colors.white};
    text-justify: start;
  }
`;
