import React from 'react';
import { Text as RNText, TextProps, TextStyle } from 'react-native';
import styles from './styles';
import {
  FontFamilyVariant,
  fontFamilyVariants,
  FontSizeVariant,
  fontSizeVariants,
} from '../../../theme/typography';
import { colors, ColorsTypes } from '../../../theme';

type TextAlignVariant = 'auto' | 'left' | 'right' | 'center' | 'justify';
type TextDecorationVariant =
  | 'none'
  | 'underline'
  | 'line-through'
  | 'underline line-through';

// Props interface for AppText component
interface AppTextProps extends TextProps {
  size?: FontSizeVariant;
  type?: FontFamilyVariant;
  color?: ColorsTypes;
  style?: TextStyle | TextStyle[];
  label?: string;
  children?: React.ReactNode;
  align?: TextAlignVariant;
  decoration?: TextDecorationVariant;
}

// Text component definition
export const Text: React.FC<AppTextProps> = ({
  size = 'size_15',
  type = 'regular',
  color = 'black',
  style,
  label,
  children,
  align = 'left',
  decoration = 'none',
  ...rest
}) => {
  const computedStyle: TextStyle = {
    fontSize: fontSizeVariants[size],
    fontFamily: fontFamilyVariants[type],
    color: colors[color as keyof typeof colors],
    textAlign: align,
    textDecorationLine: decoration,
  };

  return (
    <RNText {...rest} style={[styles.base, computedStyle, style]}>
      {children ?? label}
    </RNText>
  );
};
