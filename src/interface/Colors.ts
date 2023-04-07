import { DefaultTheme, ThemeProps } from 'styled-components';

export interface Colors {
  GREY?: (props: ThemeProps<DefaultTheme>) => string;
  PRIMARY?: (props: ThemeProps<DefaultTheme>) => string;
  IDLE?: (props: ThemeProps<DefaultTheme>) => string;
  BUILDING?: (props: ThemeProps<DefaultTheme>) => string;
}
