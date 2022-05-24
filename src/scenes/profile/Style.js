import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../theme'

const styles = StyleSheet.create({
  root: {
    flex: 1,
    flexDirection: 'column',
  },
  photo: {
    width: '100%',
    height: 300,
  },
  containerProfileItem: {
    height: 350,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
    paddingBottom: 25,
    margin: 20,
    borderRadius: 8,
    marginTop: -55,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  name: {
    paddingTop: 25,
    paddingBottom: 5,
    color: colors.darkGrey,
    fontFamily: fonts.openSan.boldItalic,
    fontSize: 25,
    textAlign: 'center',
  },
  age: {
    color: colors.pink,
    textAlign: 'center',
    fontFamily: fonts.openSan.bold,
    paddingBottom: 20,
    fontSize: 20,
  },
  info: {
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    fontFamily: fonts.openSan.regular,
    fontSize: 18,
    color: colors.darkGrey,
    paddingHorizontal: 10,
  },
  iconInsta: {
    width: 18,
    height: 20,
    paddingHorizontal: 10,
    marginLeft: 8,
    marginRight: 8,
  },
  infoContent: {
    color: colors.semiGrey,
    fontSize: 14,
    fontFamily: fonts.openSan.regular,
  },
})

export default styles
