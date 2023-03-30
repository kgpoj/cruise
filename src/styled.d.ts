import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      building: string;
      idle: string;
    };
    fontSizes: {
      normal: string;
      large: string;
    };
    breakpoints: {
      lg: string;
      sm: string;
    }
  }
}
