import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ScreenConstants } from '../utils/constants';
import { LoginScreen, HomeScreen, SignupScreen } from '../screens';

const Stack = createNativeStackNavigator();

export default function RootNavigation() {
  
  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name={ScreenConstants.LOGIN_SCREEN}
            component={LoginScreen}
          />
          <Stack.Screen
            name={ScreenConstants.SIGNUP_SCREEN}
            component={SignupScreen}
          />
          <Stack.Screen
            name={ScreenConstants.HOME_SCREEN}
            component={HomeScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
