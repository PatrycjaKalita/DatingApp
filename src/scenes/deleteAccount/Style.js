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
    fontSize: 18,
    fontFamily: fonts.openSan.bold,
    marginBottom: 20,
  },
  text: {
    color: colors.darkGrey,
    fontSize: 16,
    fontFamily: fonts.openSan.regular,
  },
  info: {
    color: colors.darkGrey,
    fontSize: 16,
    fontFamily: fonts.openSan.semiBold,
  },
  button: {
    borderRadius: 30,
    marginTop: 20,
    marginBottom: 20,
    width: 200,
  },
})

export default styles
