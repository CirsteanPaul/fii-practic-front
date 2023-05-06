type colors = {
  primary: string;
  accent: string;
  purple: string;
  darkerGray: string;
};
type fontSize = {
  medium: string;
  small: string;
  large: string;
};
type fonts = {
  normal: string;
  inter: string;
};

interface ITheme {
  colors: colors;
  fontSize: fontSize;
  fonts: fonts;
}
export default ITheme;
