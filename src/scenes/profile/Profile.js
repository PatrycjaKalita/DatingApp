import React from 'react'
import PropTypes from 'prop-types'
import {
  Text, View, ImageBackground, Image,
} from 'react-native'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import Demo from '../../../assets/data/demo'
import { images } from '../../theme'

// Styles for this screen
import styles from './Style'

// Screen where is seen profile of log in user
const Profile = () => {
  const {
    age,
    image,
    description,
    message,
    hasztagi,
    instagram,
    name,
  } = Demo[1]
  return (
    <View style={styles.root}>
      <ImageBackground source={image} style={styles.photo} />
      <View style={styles.containerProfileItem}>
        <Text style={styles.name}>{name}</Text>

        <Text style={styles.age}>
          {age}
        </Text>

        <View style={styles.info}>
          <FontIcon name="user" style={styles.icon} />
          <Text style={styles.infoContent}>{description}</Text>
        </View>

        <View style={styles.info}>
          <FontIcon name="circle" style={styles.icon} />
          <Text style={styles.infoContent}>{message}</Text>
        </View>

        <View style={styles.info}>
          <FontIcon name="hashtag" style={styles.icon} />
          <Text style={styles.infoContent}>{hasztagi}</Text>
        </View>

        <View style={styles.info}>
          <Image style={styles.iconInsta} source={images.insta} />
          <Text style={styles.infoContent}>{instagram}</Text>
        </View>
      </View>
    </View>
  )
}

Profile.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
}

Profile.defaultProps = {
  navigation: { navigate: () => null },
}

export default Profile
