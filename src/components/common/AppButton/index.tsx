// Import necessary modules and types
import React from 'react';
import { TextStyle, Pressable, ViewStyle } from 'react-native';
import styles from './styles';
import { Text } from '../Text';
import { colors, normalize, typography } from '../../../theme';

// Define allowed button types
type ButtonType = 'default' | 'outline';

// Props interface for AppButton component
interface AppButtonProps {
  onPress: () => void;
  title: string;
  subTitle?: string;
  contentStyle?: ViewStyle;
  labelStyle?: TextStyle;
  subLabelStyle?: TextStyle;
  style?: ViewStyle;
  disabled?: boolean;
  type?: ButtonType;
}

// Button container styles for each type
const buttonTypeStyles: Record<ButtonType, ViewStyle> = {
  default: {
    backgroundColor: colors.primaryPurple,
  },
  outline: {
    backgroundColor: colors.white,
    borderColor: colors.primaryPurple,
    borderWidth: 1,
  },
};

// Text styles for each button type
const labelTypeStyles: Record<ButtonType, TextStyle> = {
  default: {
    color: colors.white,
  },
  outline: {
    color: colors.primaryPurple,
    fontFamily: typography.Roboto,
    fontSize: normalize(15),
  },
};

// AppButton component
export const AppButton: React.FC<AppButtonProps> = ({
  onPress,
  title,
  labelStyle,
  subLabelStyle,
  style,
  disabled = false,
  type = 'default',
  subTitle,
}) => {
  // Determine styles based on button type
  const buttonStyle = buttonTypeStyles[type];
  const titleStyle = labelTypeStyles[type];

  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={({ pressed }) => [
        {
          ...styles.button,
          ...buttonStyle,
          ...style,
          opacity: disabled || pressed ? 0.6 : 1,
        },
      ]}
    >
      <Text>
        <Text
          label={title}
          color="white"
          type="medium"
          size={'size_17'}
          style={{ ...titleStyle, ...labelStyle }}
        />
        {!!subTitle && (
          <Text
            label={` ${subTitle}`}
            color="white"
            type="medium"
            size={'size_17'}
            style={{ ...titleStyle, ...subLabelStyle }}
          />
        )}
      </Text>
    </Pressable>
  );
};
