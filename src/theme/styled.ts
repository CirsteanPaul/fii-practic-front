import * as styledComponents from 'styled-components';
import ITheme from '../types/ITheme';

const { default: styled, css, ThemeProvider, withTheme, useTheme } = styledComponents as unknown as styledComponents.ThemedStyledComponentsModule<ITheme>;

export { css, ThemeProvider, withTheme, useTheme };
export default styled;
