import { colors, fonts } from '../../../theme'

const styles = {
  root: {
    height: '100%',
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
    fontFamily: fonts.openSan.regular,
  },
  head: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  topContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.dancingScript.regularDS,
    color: colors.darkPink,
    fontSize: 18,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    marginTop: 30,
  },
  button: {
    borderColor: '#e6e5e5',
    borderTopWidth: 1,
    paddingTop: 10,
    height: 40,
    flexDirection: 'row',
  },
  buttonLogOut: {
    borderColor: '#e6e5e5',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingTop: 10,
    height: 40,
    flexDirection: 'row',
  },
  iconStyleEdit: {
    color: colors.lightPink,
    backgroundColor: colors.white,
    marginLeft: 20,
  },
  iconStyleInfo: {
    color: colors.lightPink,
    backgroundColor: colors.white,
    marginLeft: 25,
  },
  iconStyle: {
    color: colors.lightPink,
    backgroundColor: colors.white,
    marginLeft: 20,
  },
  textStyleEdit: {
    color: colors.darkGrey,
    fontFamily: fonts.openSan.regular,
    fontSize: 16,
    marginLeft: 10,
  },
  textStyleInfo: {
    color: colors.darkGrey,
    fontFamily: fonts.openSan.regular,
    fontSize: 16,
    marginLeft: 21,
  },
  textStyle: {
    color: colors.darkGrey,
    fontFamily: fonts.openSan.regular,
    fontSize: 16,
    marginLeft: 15,
  },
  author: {
    marginTop: 300,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textAuthorStyle: {
    color: colors.darkGrey,
    fontFamily: fonts.openSan.regular,
    fontSize: 13,
  },
}

export default styles
