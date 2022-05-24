import { StyleSheet } from 'react-native'
import { fonts, colors } from '../../theme'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: colors.white,
  },
  contentImage: {
    marginTop: 90,
    alignItems: 'center',
  },
  imageStyle: {
    width: 100,
    height: 100,
    borderRadius: 200,
    borderWidth: 2,
    borderColor: colors.pink,
  },
  imageText: {
    fontFamily: fonts.openSan.semiBold,
    color: colors.pink,
    fontSize: 16,
    marginTop: 10,
  },
  content: {
    marginTop: 20,
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
    borderColor: colors.semiPink,
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
  logIn: {
    fontFamily: fonts.openSan.regular,
    fontSize: 16,
    color: colors.darkPink,
    textAlign: 'center',
    marginBottom: 20,
  },
})

export default styles
