export const RED_SCALE = {
  100: '#fef6f6',
  200: '#f9c9c9',
  300: '#f39b9b',
  400: '#ee6e6e',
  500: '#EB5757',
  600: '#e62929',
  700: '#c51717',
  800: '#971212',
  900: '#690d0d'
};

export const BLUE_SCALE = {
  100: '#ebf3fd',
  200: '#bcd6f9',
  300: '#8db9f5',
  400: '#5e9df1',
  500: '#2F80ED',
  600: '#1366d6',
  700: '#0e50a7',
  800: '#0a3979',
  900: '#082e61'
};

export const GREEN_SCALE = {
  100: '#d2edd3',
  200: '#addfaf',
  300: '#89d08c',
  400: '#64c268',
  500: '#45AE49',
  600: '#37893a',
  700: '#28652a',
  800: '#1a401b',
  900: '#0b1c0c'
};

export const GRAY_SCALE = {
  100: '#F6F6F7',
  200: '#E9E8EC',
  300: '#DCDAE0',
  400: '#D0CCD4',
  500: '#C3BEC9',
  600: '#B6B0BD',
  700: '#A9A2B1',
  800: '#9C95A6',
  900: '#8F879A',
  1000: '#0B0D17'
};

export const YELLOW_SCALE = {
  500: '#F2C94C'
};

export const COLORS = {
  blue: BLUE_SCALE[500],
  blueWhite: '#56CCF2',
  purple: '#9B51E0',
  red: BLUE_SCALE[500],
  orange: '#fd7e14',
  yellow: YELLOW_SCALE[500],
  green: GREEN_SCALE[500],
  white: '#fff',
  black: '#433E4A'
};

export const GRADIENTS_COLORS = {
  green1: `linear-gradient(90deg, ${GREEN_SCALE[500]} 0%, ${GREEN_SCALE[700]} 100%)`,
  blue1: `linear-gradient(90deg, ${COLORS.blueWhite} 0%, ${COLORS.blue} 92.5%)`,
  yellow1: `linear-gradient(65.42deg, ${YELLOW_SCALE[500]} 8.32%, ${COLORS.orange} 86.31%)`
};

export const FONTS = {
  titillium: '"Titillium Web", sans-serif',
  inter: '"Inter", sans-serif'
};

export const SHADOWS = {
  sm: '3px 3px 8px 5px rgba(233, 232, 236, 0.3)',
  base: '6px 6px 10px 8px rgba(233, 232, 236, 0.3)'
};

export const FONTS_SIZES = {
  sm: '0.75rem',
  medium: '0.875rem',
  button: '0.9375rem',
  base: '1rem',
  lead: '1.125rem',
  large: '1.5625rem',
  xlarge: '2rem'
};

export const GRID_BREAKPOINTS = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
};

export const MEDIA_BREAKPOINTS = {
  mobile: `@media (min-width: ${GRID_BREAKPOINTS.sm}px)`,
  tablet: `@media (min-width: ${GRID_BREAKPOINTS.md}px)`,
  laptop: `@media (min-width: ${GRID_BREAKPOINTS.lg}px)`,
  desktop: `@media (min-width: ${GRID_BREAKPOINTS.xl}px)`,
  desktopL: `@media (min-width: ${GRID_BREAKPOINTS.xxl}px)`
};

export const CONTAINER_MAX_WIDTHS = {
  sm: '540px',
  md: '720px',
  lg: '1000px',
  xl: '1140px',
  xxl: '1320px'
};

export const TRANSITIONS = {
  base: '0.3s ease'
};

export const Z_INDEXS = {
  header: {
    sticky: 500,
    nav: 1000
  },
  modal: {
    overlay: 1500,
    content: 200
  }
};
