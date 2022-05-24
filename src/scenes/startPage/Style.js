import { StyleSheet } from 'react-native'
import { fonts, colors } from '../../theme'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  contentTop: {
    alignItems: 'center',
  },
  tinyLogo: {
    marginTop: 100,
    width: 180,
    height: 180,
  },
  name: {
    fontFamily: fonts.dancingScript.regularDS,
    fontSize: 60,
    color: colors.white,
  },
  contentTitle: {
    marginTop: 20,
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.openSan.semiBold,
    fontSize: 20,
    color: colors.white,
  },
  contentText: {
    marginTop: 10,
    alignItems: 'center',
  },
  text: {
    fontFamily: fonts.openSan.regular,
    fontSize: 12,
    color: colors.white,
  },
  contentMain: {
    marginTop: 50,
    alignItems: 'center',
  },
  login: {
    backgroundColor: 'transparent',
    borderColor: colors.white,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 30,
    padding: 10,
    width: 200,
  },
  signup: {
    backgroundColor: colors.white,
    borderRadius: 30,
    marginTop: 15,
    padding: 10,
    width: 200,
  },
})

export default styles
