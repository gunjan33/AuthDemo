import { useContext, useEffect, useState } from 'react';
import { isValidEmail } from '../../utils/utils';
import { STRINGS } from '../../utils/strings';
import { Alert } from 'react-native';
import { ScreenConstants } from '../../utils/constants';
import { useNavigation } from '@react-navigation/native';
import { AppParamList } from '../../types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AuthContext } from '../../context/AuthContext';

type ValidationError = {
  email: string;
  password: string;
};

const useLogin = () => {
  const { login } = STRINGS;
  const auth = useContext(AuthContext);
  const navigation = useNavigation<NativeStackNavigationProp<AppParamList>>();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<ValidationError>({
    email: '',
    password: '',
  });
  const [isAuthChecked, setIsAuthChecked] = useState(false);

  // Navigate to SignUp screen
  const navigateToSignUp = () => {
    navigation.navigate(ScreenConstants.SIGNUP_SCREEN);
  };

  // Navigate to Home screen and reset navigation history
  const navigateToHomeScreen = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: ScreenConstants.HOME_SCREEN }],
    });
  };

  // Check authentication status and redirect if already logged in
  const getAuthStatus = async () => {
    if (auth?.user) {
      navigateToHomeScreen();
    }
    setIsAuthChecked(true);
  };

  // Run auth check on AuthContext change
  useEffect(() => {
    getAuthStatus();
  }, [auth]);

  // Attempt login and show alert on failure
  const doLogin = () => {
    const success = auth?.login(email, password);
    if (!success) {
      Alert.alert('Invalid credentials');
    }
  };

  // Handle login button press
  const onLoginPress = () => {
    if (validateSubmit()) {
      doLogin();
    }
  };

  // Handle email input change and reset error
  const onChangeEmail = (val: string) => {
    setError({ ...error, email: '' });
    setEmail(val.trim());
  };

  // Handle password input change and reset error
  const onChangePassword = (val: string) => {
    setError({ ...error, password: '' });
    setPassword(val.trim());
  };

  // Validate email format before login
  const validateSubmit = () => {
    if (email && !isValidEmail(email)) {
      setError({ ...error, email: login.emailInvalid });
      return false;
    }
    return true;
  };

  return {
    email,
    password,
    setEmail,
    setPassword,
    onLoginPress,
    isAuthChecked,
    error,
    navigateToSignUp,
    onChangeEmail,
    onChangePassword,
  };
};

export default useLogin;
