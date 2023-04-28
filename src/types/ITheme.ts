type colors = {
  primary: string;
  accent: string;
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
