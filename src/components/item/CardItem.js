import React from 'react'
import {
  Text, View, Image, Dimensions,
} from 'react-native'
import { colors, fonts } from '../../theme'

// Styles for this screen
import styles from '../../scenes/matches/Style'

// Component for screen Matches
const CardItem = ({
  // eslint-disable-next-line react/prop-types
  image, name, status, variant,
}) => {
  // Custom styling
  const fullWidth = Dimensions.get('window').width
  const imageStyle = [
    {
      borderRadius: 8,
      width: variant ? fullWidth / 2 - 30 : fullWidth - 80,
      height: variant ? 170 : 350,
      margin: variant ? 0 : 20,
    },
  ]

  const nameStyle = [
    {
      paddingTop: variant ? 10 : 15,
      paddingBottom: variant ? 5 : 7,
      color: colors.darkGrey,
      fontFamily: fonts.openSan.regular,
      fontSize: 15,
    },
  ]

  return (
    <View style={styles.containerCardItem}>
      {/* IMAGE */}
      <Image source={image} style={imageStyle} />

      {/* NAME */}
      <Text style={nameStyle}>{name}</Text>

      {/* STATUS */}
      {status && (
        <View style={styles.status}>
          <View style={status === 'Online' ? styles.online : styles.offline} />
          <Text style={styles.statusText}>{status}</Text>
        </View>
      )}
    </View>
  )
}

export default CardItem
