import { colors } from './colors';
import { normalize } from './scale';

// Add/Update required font family
export const typography = {
  Roboto: 'Roboto',
  RobotoMedium: 'Roboto-Medium',
  RobotoBold: 'Roboto-Bold',
};

export const fontSizeVariants = {
  xs: normalize(10),
  sm: normalize(12),
  md: normalize(14),
  lg: normalize(16),
  la: normalize(18),
  xl: normalize(20),
  size_8: normalize(8),
  size_10: normalize(10),
  size_11: normalize(11),
  size_12: normalize(12),
  size_13: normalize(13),
  size_14: normalize(14),
  size_15: normalize(15),
  size_17: normalize(17),
  size_18: normalize(18),
  size_19: normalize(19),
  size_21: normalize(21),
  size_24: normalize(24),
} as const;

export const fontFamilyVariants = {
  regular: typography.Roboto,
  medium: typography.RobotoMedium,
  bold: typography.RobotoBold,
} as const;

export const fontColorVariants = {
  primary: colors.textPrimary,
  while: colors.white,
} as const;

export type FontSizeVariant = keyof typeof fontSizeVariants;
export type FontFamilyVariant = keyof typeof fontFamilyVariants;
export type FontColorVariant = keyof typeof fontColorVariants;
