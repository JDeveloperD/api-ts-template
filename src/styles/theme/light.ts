import type { DefaultTheme } from 'styled-components';
import { COLORS, FONTS, FONTS_SIZES, GRAY_SCALE, GREEN_SCALE, SHADOWS } from '../constants';

const THEME_LIGHT: DefaultTheme = {
  mode: 'light',
  colors: {
    primary: COLORS.green,
    secondary: GREEN_SCALE[700],
    accent: '#FFBA42',
    info: COLORS.blue,
    warning: COLORS.orange,
    danger: COLORS.red,
    success: COLORS.green,
    gray: GRAY_SCALE[900],
    light: GRAY_SCALE[100],
    link: COLORS.green,
    backgroundBody: COLORS.white,
    textBody: COLORS.black
  },
  fonts: {
    fontPrimary: FONTS.titillium,
    fontSecondary: FONTS.inter
  },
  fontSizes: {
    body: FONTS_SIZES.base
  },
  shadows: {
    small: SHADOWS.sm,
    default: SHADOWS.base
  }
};

export default THEME_LIGHT;
