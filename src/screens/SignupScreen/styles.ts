import { StyleSheet } from 'react-native';
import { scale } from '../../theme/scale';
import { colors, fontFamilyVariants, typography } from '../../theme';
export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: scale(16),
    backgroundColor: colors.softMist,
  },
  logo: {
    alignSelf: 'center',
    marginTop: scale(5),
  },
  signupLabel: {
    marginVertical: scale(30),
  },
  input: {
    marginBottom: scale(20),
  },
  signupButton: {
    marginTop: scale(10),
  },
  top20: {
    marginTop: scale(20),
  },
  top30: {
    marginTop: scale(30),
  },
  signupText: {
    fontFamily: typography.RobotoMedium,
  },
  top10: {
    marginTop: scale(10),
  },
  top2: {
    marginTop: scale(2),
  },
});
