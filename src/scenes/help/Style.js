import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../theme'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  background: {
    alignItems: 'center',
    flex: 1,
  },
  contentTop: {
    marginTop: 50,
    alignItems: 'center',
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  title: {
    fontFamily: fonts.dancingScript.regularDS,
    fontSize: 20,
    textAlign: 'center',
    color: colors.darkPink,
  },
  content: {
    marginTop: 30,
    alignItems: 'center',
  },
  infoTitle: {
    color: colors.darkGrey,
    fontSize: 20,
    fontFamily: fonts.openSan.bold,
    marginBottom: 20,
  },
  text: {
    color: colors.darkGrey,
    fontSize: 18,
    fontFamily: fonts.openSan.regular,
  },
  info: {
    color: colors.darkGrey,
    fontSize: 15,
    fontFamily: fonts.openSan.regular,
  },
  description: {
    paddingTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textDescription: {
    fontFamily: fonts.openSan.regular,
    color: colors.semiGrey,
    fontSize: 13,
  },
  infoBottom: {
    color: colors.darkGrey,
    fontSize: 15,
    fontFamily: fonts.openSan.semiBold,
  },
})

export default styles
