import { StyleSheet } from 'react-native';
import { scale } from '../../theme/scale';
import { colors, typography } from '../../theme';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  signupText: {
    fontFamily: typography.RobotoMedium,
  },
  input: {
    marginBottom: scale(24),
  },
  loginButton: {
    marginTop: scale(6),
  },
  top20: {
    marginTop: scale(20),
  },
  loginLabel: {
    marginTop: scale(30),
    marginBottom: scale(39),
  },
});
