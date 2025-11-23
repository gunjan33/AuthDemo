import { useNavigation } from '@react-navigation/native';
import { STRINGS } from '../../utils/strings';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppParamList } from '../../types';
import { ScreenConstants } from '../../utils/constants';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthContext';

// Custom hook for Home screen functionality
const useHome = () => {
  const navigation = useNavigation<NativeStackNavigationProp<AppParamList>>();
  const auth = useContext(AuthContext);

  // Navigate to login screen by resetting navigation stack
  const navigateToLoginScreen = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: ScreenConstants.LOGIN_SCREEN }],
    });
  };

  // Check authentication state on mount and when auth changes
  useEffect(() => {
    if (!auth?.user) {
      navigateToLoginScreen(); // Redirect to login if not authenticated
    }
  }, [auth]);

  // Handle logout button press
  const onLogoutPress = () => {
    auth?.logout();
  };

  return {
    onLogoutPress,
    auth
  };
};

export default useHome;
