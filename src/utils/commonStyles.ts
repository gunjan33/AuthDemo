import { StyleSheet } from 'react-native';
import { scale } from '../theme';

export default StyleSheet.create({
  flex: {
    flex: 1,
  },
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
  },
  screnHorizontalPad: {
    paddingHorizontal: scale(16),
  },
});
