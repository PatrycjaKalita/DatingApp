import { StyleSheet } from 'react-native'
import { fonts, colors } from '../../theme'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  contentLogo: {
    marginTop: 80,
    alignItems: 'center',
  },
  tinyLogo: {
    width: 150,
    height: 150,
  },
  title: {
    fontFamily: fonts.dancingScript.regularDS,
    fontSize: 25,
    textAlign: 'center',
    color: colors.darkPink,
  },
  content: {
    marginTop: 30,
  },
  inputTopText: {
    marginTop: 15,
    fontFamily: fonts.openSan.regular,
    fontSize: 12,
    color: colors.grey,
  },
  input: {
    height: 40,
    width: 200,
    marginTop: 5,
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
    borderColor: colors.pink,
  },
  button: {
    borderRadius: 30,
    marginTop: 30,
    padding: 10,
    width: 200,
  },
  text: {
    marginTop: 10,
    fontFamily: fonts.openSan.regular,
    fontSize: 12,
    color: colors.darkGrey,
    textAlign: 'center',
  },
  signUp: {
    fontFamily: fonts.openSan.regular,
    fontSize: 16,
    color: colors.darkPink,
    textAlign: 'center',
    marginBottom: 20,
  },
})

export default styles
