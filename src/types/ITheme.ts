type colors = {
  primary: string;
  accent: string;
  logoPurple: string;
  white: string;
  backgroundGray: string;
  hoverGray: string;
  borderGray: string;
  textGray: string;
  formsTextGray: string;
  formsTitleGray: string;
  lighterGray: string;
  darkBlue: string;
  lightGray: string;
  veryLightGray: string;
  delimitatorGray: string;
  violet: string;
  lightBlue: string;
  purple: string;
  green: string;
  orange: string;
  backgroundBlue: string;
  lightPink: string;
  activeGreen: string;
  textBlue: string;
  inactiveRed: string;
  hoverPurple: string;
  darkerGray: string;
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
  interLight: string;
  interRegular: string;
  interBold: string;
  inter: string;
};

interface ITheme {
  colors: colors;
  fontSize: fontSize;
  fonts: fonts;
}
export default ITheme;
