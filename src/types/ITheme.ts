type colors = {
  primary: string;
  accent: string;
  logoPurple: string;
  white: string;
  backgroundGray: string;
  hoverGray: string;
  borderGray: string;
  textGray: string;
  darkBlue: string;
  lighterGray: string;
  lightGray: string;
  delimitatorGray: string;
  violet: string;
  lightBlue: string;
  purple: string;
  green: string;
  orange: string;
  lightPink: string;
  activeGreen: string;
  inactiveRed: string;
  hoverPurple: string;
  formsTextGray: string;
  formsTitleGray: string;
  backgroundBlue: string;
  textBlue: string;
};
type fontSize = {
  medium: string;
  xLarge: string;
  xSmall: string;
  small: string;
  mSmall: string;
  large: string;
  xxLarge: string;
  gigant: string;
  xGigant: string;
  mxSmall: string;
  xxGigant: string;
};
type fonts = {
  normal: string;
};

interface ITheme {
  colors: colors;
  fontSize: fontSize;
  fonts: fonts;
}
export default ITheme;
