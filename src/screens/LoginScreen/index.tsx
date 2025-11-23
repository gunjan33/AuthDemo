import React, { FC } from 'react';
import { ActivityIndicator, ScrollView, StatusBar, Text as RNText } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';
import useLogin from './Login.hook';
import commonStyles from '../../utils/commonStyles';

import { STRINGS } from '../../utils/strings';
import { AppButton, CustomTextInput, Text } from '../../components/common';
import { Lock, MailLogo } from '../../assets/icons';
import { RootStackParamList } from '../../types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';

const LoginScreen: FC<RootStackParamList> = () => {
  const {
    email,
    password,
    onLoginPress,
    isAuthChecked,
    error,
    navigateToSignUp,
    onChangeEmail,
    onChangePassword,
  } = useLogin();
  const { login } = STRINGS;

  return (
    <SafeAreaView style={styles.container} edges={['right', 'top', 'left']}>
      <StatusBar barStyle={'dark-content'} />

      {isAuthChecked ? (
        <KeyboardAwareScrollView
          contentContainerStyle={[
            { flexGrow: 1 },
            commonStyles.screnHorizontalPad,
          ]}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
          bottomOffset={50}
        >
          <Text
            size={'size_24'}
            label={login.login}
            style={styles.loginLabel}
            color={'black'}
            type={'medium'}
          />

          <CustomTextInput
            value={email}
            onChangeText={onChangeEmail}
            placeholder={login.emailAddress}
            mainContainer={styles.input}
            label={login.email}
            error={error.email}
            required={true}
            keyboardType="email-address"
            autoCapitalize="none"
            leftIcon={<MailLogo />}
          />
          <CustomTextInput
            value={password}
            onChangeText={onChangePassword}
            placeholder={login.password}
            secureTextEntry
            mainContainer={styles.input}
            required={true}
            error={error.password}
            leftIcon={<Lock />}
          />

          <AppButton
            title={login.LOG_IN}
            onPress={onLoginPress}
            disabled={email === '' || password === ''}
            style={styles.loginButton}
          />
          <AppButton
            title={login.dontHaveAccount}
            subTitle={login.signUp}
            onPress={navigateToSignUp}
            style={styles.top20}
            type="outline"
            subLabelStyle={styles.signupText}
          />
        </KeyboardAwareScrollView>
      ) : (
        <ActivityIndicator size={'small'} />
      )}
    </SafeAreaView>
  );
};

export default LoginScreen;
