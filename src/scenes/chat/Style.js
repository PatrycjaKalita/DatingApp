import { StyleSheet, Dimensions } from 'react-native'
import { colors, fonts } from '../../theme'

const DIMENSION_WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
  // Style for Message
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: 10,
    width: DIMENSION_WIDTH - 100,
  },
  avatar: {
    borderRadius: 30,
    width: 60,
    height: 60,
    marginRight: 20,
    marginVertical: 15,
  },
  message: {
    color: colors.grey,
    fontSize: 12,
    fontFamily: fonts.openSan.regular,
    paddingTop: 5,
  },
  // Style for Chat
  root: {
    flex: 1,
    resizeMode: 'cover',
  },
  containerMessages: {
    justifyContent: 'space-between',
    flex: 1,
    paddingHorizontal: 10,
  },
  top: {
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
})

export default styles
