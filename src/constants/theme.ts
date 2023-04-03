import { DefaultTheme } from 'styled-components';

const screenSize = {
  lg: '992px',
  sm: '576px',
};

const theme: DefaultTheme = {
  colors: {
    building: '#f4bb41',
    idle: '#8cb94f',
    grey: '#d9d9d9',
    primary: '#68afc9',
  },
  fontSizes: {
    normal: '1rem',
    large: '2.375rem',
  },
  mediaQueries: {
    isDesktop: `@media (min-width: ${screenSize.lg})`,
    isTablet: `@media (min-width: ${screenSize.sm}) and (max-width: ${screenSize.lg})`,
    isMobile: `@media (max-width: ${screenSize.sm})`,
  },
};

export default theme;
