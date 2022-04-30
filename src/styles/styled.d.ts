import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    mode: 'light' | 'dark',
    colors: {
      primary: string,
      secondary: string,
      accent: string,
      info: string,
      warning: string,
      danger: string,
      success: string
      link: string,
      backgroundBody: string,
      textBody: string,
    },
    fonts: {
      fontPrimary: string,
      fontSecondary: string
    },
    fontSizes: {
      body: string
    },
    shadows: {
      small: string,
      default: string
    }
  }
}
