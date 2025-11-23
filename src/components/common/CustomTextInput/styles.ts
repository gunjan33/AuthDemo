import { StyleSheet } from 'react-native';
import { normalize, scale } from '../../../theme/scale';
import { colors, typography } from '../../../theme';

export default StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.boarderGray,
    backgroundColor: colors.white,
    borderRadius: scale(4),
  },
  leftIconContainer: {
    marginLeft: scale(20),
    marginRight: scale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  normalInput: {
    marginHorizontal: scale(19),
  },
  disabled: {
    color: colors.placeholder,
  },
  rightIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: scale(15),
  },
  defaultInput: {
    flex: 1,
    paddingVertical: scale(15),
    fontSize: normalize(15),
    fontFamily: typography.Roboto,
    color: colors.black,
  },
  right10: {
    marginRight: scale(10),
  },
  right20: {
    marginRight: scale(20),
  },
  labelStyle: {
    marginTop: -normalize(7.5),
  },
  labelView: {
    zIndex: 1,
    marginLeft: normalize(12),
    paddingHorizontal: normalize(10),
    backgroundColor: colors.white,
    flexWrap: 'wrap',
    alignSelf: 'flex-start',
    position:'absolute'
  },
  focused: {
    borderColor: colors.primaryPurple,
  },
  errorBorder: {
    borderColor: colors.errorRed,
  },
  errorTxt: {
    marginTop: scale(3),
  },
});
