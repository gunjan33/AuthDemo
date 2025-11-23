import { useContext, useEffect, useState } from 'react';
import { hasSpecialChars, isValidEmail } from '../../utils/utils';
import { STRINGS } from '../../utils/strings';
import { Alert } from 'react-native';
import { ScreenConstants } from '../../utils/constants';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../types';
import { AuthContext } from '../../context/AuthContext';

type ValidationError = {
  email: string;
  password: string;
  name: string;
  confirmPassword: string;
};

const useSignup = () => {
  const { login } = STRINGS;
  const auth = useContext(AuthContext);
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState<ValidationError>({
    email: '',
    password: '',
    name: '',
    confirmPassword: '',
  });

  // Reset navigation to Login screen
  const resetToLogin = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: ScreenConstants.LOGIN_SCREEN }],
    });
  };

  // Handle SignUp call to register user
  const doSignUp = () => {
    const isRegistered = auth?.register({ email, name, password });
    if (isRegistered) {
      Alert.alert('User registered. Please login to continue');
      resetToLogin();
    } else {
      Alert.alert('User already registered. Please login to continue');
    }
  };

 // Handle Login go back
  const onLoginPress = () => {
    navigation.goBack();
  }

  // Validate fields and trigger signup
  const onSignupPress = () => {
    if (validateSubmit()) {
      doSignUp();
    }
  };

  // Placeholder for Forgot Password action
  const onForgotPasswordPress = () => {};

  // Navigate back to Login screen
  const navigateToLogin = () => {
    navigation.popTo(ScreenConstants.LOGIN_SCREEN);
  };

  // Handle email input change
  const onChangeEmail = (val: string) => {
    setError({ ...error, email: '' });
    setEmail(val.trim());
  };

  // Handle name input change
  const onChangeName = (val: string) => {
    setError({ ...error, name: '' });
    setName(val.trim());
  };

  // Handle password input change
  const onChangePassword = (val: string) => {
    setError({ ...error, password: '' });
    setPassword(val.trim());
  };

  // Handle confirm password input change
  const onChangeConfirmPassword = (val: string) => {
    setError({ ...error, confirmPassword: '' });
    setConfirmPassword(val.trim());
  };

  // Validate all form fields before submission
  const validateSubmit = (): boolean => {
    const newError: ValidationError = {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
    let isValid = true;

    if (!isValidEmail(email)) {
      newError.email = login.emailInvalid;
      isValid = false;
    }
    if (name.trim().length === 0) {
      newError.name = login.nameInvalid;
      isValid = false;
    }
    if (!hasSpecialChars(password)) {
      newError.password = login.specialCharsAllowed;
      isValid = false;
    } else if (password.length < 5) {
      newError.password = login.passwordMinimumLength;
      isValid = false;
    }
    if (password && confirmPassword && password !== confirmPassword) {
      newError.confirmPassword = login.confirmPasswordMismatch;
      isValid = false;
    }

    setError(newError);
    return isValid;
  };

  return {
    name,
    email,
    password,
    onChangeName,
    setEmail,
    setPassword,
    onLoginPress,
    onSignupPress,
    error,
    onForgotPasswordPress,
    navigateToLogin,
    onChangeEmail,
    onChangePassword,
    onChangeConfirmPassword,
    confirmPassword,
  };
};

export default useSignup;
