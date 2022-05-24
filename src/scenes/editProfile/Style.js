import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../theme'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
  },
  contentTop: {
    marginTop: 60,
  },
  profilePicture: {
    width: 120,
    height: 120,
    borderRadius: 200,
  },
  changeText: {
    color: colors.darkPink,
    fontSize: 16,
    marginTop: 5,
  },
  info: {
    marginTop: 15,
  },
  inputTopText: {
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
  inputMotto: {
    height: 100,
    width: 200,
    marginTop: 5,
    paddingLeft: 10,
    paddingTop: 10,
    paddingRight: 10,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderRadius: 30,
    borderColor: colors.semiPink,
  },
  button: {
    borderRadius: 30,
    marginTop: 20,
    marginBottom: 20,
    width: 200,
  },
})

export default styles
