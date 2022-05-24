import { StyleSheet } from 'react-native'
import { colors, fonts } from '../../theme'

const styles = StyleSheet.create({
  // Styles for MatchCard
  containerCardItem: {
    backgroundColor: colors.white,
    borderRadius: 8,
    alignItems: 'center',
    margin: 10,
  },
  descriptionCardItem: {
    color: colors.grey,
    fontFamily: fonts.openSan.regular,
    textAlign: 'center',
  },
  actionsCardItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 20,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: colors.white,
    marginHorizontal: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  // Styles for Explore
  topContainer: {
    marginTop: 35,
    flexDirection: 'column',
    alignItems: 'center',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
})

export default styles
