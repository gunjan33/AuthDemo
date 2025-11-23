import React, { FC } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';
import useLogin from './Signup.hook';
import commonStyles from '../../utils/commonStyles';

import { STRINGS } from '../../utils/strings';
import {
  AppButton,
  CustomTextInput,
  Text,
} from '../../components/common';
import { Lock, MailLogo, User } from '../../assets/icons';
import { RootStackParamList } from '../../types';
import { KeyboardAwareScrollView } from 'react-native-keyboard-controller';


const SignupScreen: FC<RootStackParamList> = () => {
  const {
    name,
    email,
    password,
    confirmPassword,
    onLoginPress,
    onSignupPress,
    error,
    onChangeEmail,
    onChangeName,
    onChangePassword,
    onChangeConfirmPassword,
  } = useLogin();
  const { login } = STRINGS;

  return (
    <SafeAreaView style={styles.container} edges={['right', 'top', 'left']}>
      <StatusBar barStyle={'dark-content'} />

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
          label={login.signUp}
          style={styles.signupLabel}
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
          value={name}
          onChangeText={onChangeName}
          placeholder={login.name}
          mainContainer={styles.input}
          label={login.name}
          error={error.name}
          required={true}
          keyboardType="email-address"
          autoCapitalize="none"
          leftIcon={<User />}
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

        <CustomTextInput
          value={confirmPassword}
          onChangeText={onChangeConfirmPassword}
          placeholder={login.confirmPassword}
          secureTextEntry
          mainContainer={styles.input}
          required={true}
          error={error.confirmPassword}
          leftIcon={<Lock />}
        />

        <AppButton
          title={login.signUp}
          onPress={onSignupPress}
          disabled={email === '' || password === '' || name === '' || confirmPassword === ''}
          style={styles.signupButton}
        />

        <AppButton
          title={login.AlreadyRegistered}
          onPress={onLoginPress}
          style={styles.signupButton}
          type='outline'
        />
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

export default SignupScreen;
