import React from 'react'
import {
  Text, View, Image, TouchableOpacity,
} from 'react-native'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors, fonts } from '../../theme'

// Styles for this screen
import styles from '../../scenes/homeAdmin/Style'

// Component for screen HomeAdmin
const CardItem = ({
  // eslint-disable-next-line react/prop-types
  actions, image, name, variant,
}) => {
  // Custom styling
  const imageStyle = [
    {
      borderRadius: 200,
      width: 65,
      height: 65,
      margin: variant ? 0 : 10,
    },
  ]

  const nameStyle = [
    {
      fontFamily: fonts.openSan.semiBold,
      color: colors.darkGrey,
      fontSize: 16,
    },
  ]

  return (
    <View style={styles.root}>
      <View style={styles.container}>
        <Image source={image} style={imageStyle} />
        <Text style={nameStyle}>{name}</Text>
      </View>

      {actions && (
        <View style={styles.actionsItems}>

          <TouchableOpacity style={styles.button}>
            <FontIcon name="clock" solid size={20} color={colors.blue} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <FontIcon name="trash-alt" solid size={20} color={colors.red} />
          </TouchableOpacity>

        </View>
      )}
    </View>
  )
}

export default CardItem
