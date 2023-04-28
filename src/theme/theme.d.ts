import 'styled-components';
import ITheme from '../types/ITheme';

declare module 'styled-components' {
  type DefaultTheme = ITheme;
}
