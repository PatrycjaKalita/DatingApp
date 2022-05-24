import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../theme'

const styles = StyleSheet.create({
  // Styles for UserItem screen
  root: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionsItems: {
    flexDirection: 'row',
    position: 'absolute',
    right: 0,
    marginRight: 10,
  },
  button: {
    width: 50,
    height: 50,
    backgroundColor: colors.white,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  // Styles for HomeAdmin screen
  mainContainer: {
    backgroundColor: colors.white,
    flex: 1,
    flexDirection: 'column',
    paddingHorizontal: 10,
  },
  topContainer: {
    paddingTop: 50,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    paddingBottom: 10,
    fontSize: 22,
    color: colors.darkGrey,
    fontFamily: fonts.openSan.regular,
  },
  description: {
    paddingTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textDescription: {
    fontFamily: fonts.openSan.regular,
    color: colors.semiGrey,
    fontSize: 13,
  },
})

export default styles
