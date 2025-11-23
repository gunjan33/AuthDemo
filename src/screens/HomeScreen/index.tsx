import React, { FC } from 'react';
import { ScrollView, StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from './styles';
import commonStyles from '../../utils/commonStyles';
import { RootStackParamList } from '../../types';
import { AppButton, Text } from '../../components/common';
import useHome from './Home.hook';
import { STRINGS } from '../../utils/strings';

// Home screen component
const HomeScreen: FC<RootStackParamList> = () => {
  const { onLogoutPress, auth } = useHome();
  const { Home } = STRINGS;

  return (
    <SafeAreaView style={styles.container} edges={['right', 'top', 'left']}>
      <StatusBar barStyle={'dark-content'} />
      <View style={styles.subContainer}>
        <Text label={`${Home.Welcome} ${auth?.user?.name}`}></Text>
        <Text label={`${Home.Email} ${auth?.user?.email}`}></Text>
        <AppButton
          onPress={onLogoutPress}
          title={Home.Logout}
          style={styles.logoutButton}
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
