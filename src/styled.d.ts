import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      building: string;
      idle: string;
      grey: string;
      primary: string;
    };
    fontSizes: {
      normal: string;
      large: string;
    };
    mediaQueries: {
      isDesktop: string;
      isTablet: string;
      isMobile: string;
    }
  }
}
