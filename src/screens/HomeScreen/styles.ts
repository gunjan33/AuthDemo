import { StyleSheet } from 'react-native';
import { scale } from '../../theme/scale';
import { colors, typography } from '../../theme';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  logoutButton: {
    alignSelf: 'center',
    marginTop: scale(20),
  },
  subContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: scale(16),
  },
});
