// Import necessary modules and types
import React, { useState } from 'react';
import styles from './styles';
import {
  TextStyle,
  ViewStyle,
  TextInput,
  View,
  TouchableOpacity,
  TextInputProps,
  KeyboardType,
  StyleProp,
} from 'react-native';
import commonStyles from '../../../utils/commonStyles';
import { colors } from '../../../theme';
import { Visibility, VisibilityOff } from '../../../assets/icons';
import { Text } from '../Text';

// Define props for CustomTextInput component
interface CustomTextInputProps {
  placeholder: string;
  contentStyle?: ViewStyle;
  labelStyle?: TextStyle;
  textInputProps?: TextInputProps;
  leftIcon?: React.ReactNode;
  onChangeText?: (text: string) => void;
  value: string;
  secureTextEntry?: boolean;
  inputStyle?: StyleProp<TextStyle>;
  mainContainer?: StyleProp<ViewStyle>;
  leftIconContainer?: StyleProp<ViewStyle>;
  keyboardType?: KeyboardType;
  editable?: boolean;
  label?: string;
  error?: string;
  required?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters' | undefined;
}

// CustomTextInput component
export const CustomTextInput: React.FC<CustomTextInputProps> = ({
  placeholder,
  textInputProps,
  leftIcon,
  onChangeText,
  value,
  secureTextEntry = false,
  inputStyle,
  mainContainer,
  leftIconContainer = {},
  keyboardType = 'default',
  editable = true,
  label,
  error,
  required = false,
  autoCapitalize = undefined,
}) => {
  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState<boolean>(secureTextEntry);
  // State to handle focus styling
  const [isFocused, setIsFocused] = useState<boolean>(false);

  return (
    <View style={mainContainer}>
      {/* Label section */}
      <View>
        <View style={styles.labelView}>
          <Text
            size={'size_13'}
            color={error ? 'errorRed' : 'black'}
            type={'regular'}
            style={styles.labelStyle}
          >
            {`${label || placeholder}`}
            {required && (
              <Text
                size={'size_13'}
                color={'errorRed'}
                type={'regular'}
                label="*"
                style={styles.labelStyle}
              />
            )}
          </Text>
        </View>
      </View>

      {/* Input container */}
      <View
        style={[
          styles.mainContainer,
          isFocused && styles.focused, // Highlight when focused
          error && styles.errorBorder, // Highlight error state
        ]}
      >
        {/* Left icon container */}
        {leftIcon && (
          <View style={[styles.leftIconContainer, leftIconContainer]}>
            {leftIcon}
          </View>
        )}

        {/* Text input field */}
        <TextInput
          value={value}
          style={[
            styles.defaultInput,
            commonStyles.flex,
            inputStyle,
            !leftIcon && styles.normalInput,
            !editable && styles.disabled,
            !!leftIcon && styles.right20,
            secureTextEntry && styles.right10,
          ]}
          {...textInputProps}
          secureTextEntry={showPassword}
          onChangeText={onChangeText}
          placeholder={placeholder}
          placeholderTextColor={colors.placeholder}
          keyboardType={keyboardType}
          editable={editable}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          autoCapitalize={autoCapitalize}
        />

        {/* Password visibility toggle */}
        {secureTextEntry && (
          <View style={styles.rightIconContainer}>
            <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
              {!showPassword ? <Visibility /> : <VisibilityOff />}
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Error message */}
      {error && (
        <Text
          label={error}
          color={'errorRed'}
          style={styles.errorTxt}
          size="size_11"
        />
      )}
    </View>
  );
};
