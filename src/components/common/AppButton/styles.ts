import { StyleSheet } from 'react-native';
import { colors, normalize, scale } from '../../../theme';

export default StyleSheet.create({
  button: {
    backgroundColor: colors.primaryPurple,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: scale(10),
    borderRadius: normalize(4),
    paddingHorizontal:scale(20)
  },
});
