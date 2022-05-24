import React from 'react'
import {
  Text, View, Image, Dimensions, TouchableOpacity,
} from 'react-native'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { fonts, colors } from '../../theme'

// Styles for this screen
import styles from '../../scenes/explore/Style'

// Component for Explore screen
const MatchCard = ({
  // eslint-disable-next-line react/prop-types
  actions, description, image, name, onPressLeft, onPressRight, variant,
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
      fontFamily: fonts.openSan.semiBold,
      fontSize: variant ? 15 : 30,
    },
  ]

  return (
    <View style={styles.containerCardItem}>
      <Image source={image} style={imageStyle} />
      <Text style={nameStyle}>{name}</Text>

      {description && (
        <Text style={styles.descriptionCardItem}>{description}</Text>
      )}

      {/* ACTIONS */}
      {actions && (
        <View style={styles.actionsCardItem}>

          <TouchableOpacity
            style={styles.button}
            onPress={() => onPressLeft()}
          >
            <FontIcon name="times" solid size={40} color={colors.red} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => onPressRight()}>
            <FontIcon name="heart" solid size={45} color={colors.pink} />
          </TouchableOpacity>

        </View>
      )}
    </View>
  )
}

export default MatchCard
