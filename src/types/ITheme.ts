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
};
type fontSize = {
  medium: string;
  small: string;
  large: string;
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
