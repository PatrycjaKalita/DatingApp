import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../theme'

const styles = StyleSheet.create({
  // Style dla CardItem
  containerCardItem: {
    backgroundColor: colors.white,
    borderRadius: 8,
    alignItems: 'center',
    margin: 10,
    shadowOpacity: 0.05,
    shadowRadius: 10,
    shadowColor: colors.black,
    shadowOffset: {
      height: 0,
      width: 0,
    },
  },
  status: {
    paddingBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  statusText: {
    color: colors.grey,
    fontSize: 12,
    fontFamily: fonts.openSan.regular,
  },
  online: {
    width: 6,
    height: 6,
    backgroundColor: '#46A575',
    borderRadius: 3,
    marginRight: 4,
  },
  offline: {
    width: 6,
    height: 6,
    backgroundColor: '#D04949',
    borderRadius: 3,
    marginRight: 4,
  },
  // Style dla Matches
  root: {
    backgroundColor: colors.white,
    flex: 1,
    flexDirection: 'column',
  },
  containerMatches: {
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
