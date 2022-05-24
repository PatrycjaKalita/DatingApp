import React from 'react'
import PropTypes from 'prop-types'
import {
  View, SafeAreaView, Text, Image, TouchableOpacity,
} from 'react-native'
import { DrawerActions } from '@react-navigation/native'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors, images } from '../../../theme'

// Styles fr drawer menu
import styles from './Style'

const DrawerMenu = ({ navigation }) => (
  <SafeAreaView style={styles.root}>
    <View style={styles.head}>
      <FontIcon.Button
        name="times"
        size={20}
        color={colors.grey}
        backgroundColor={colors.white}
        onPress={() => {
          navigation.dispatch(DrawerActions.closeDrawer())
        }}
      />
    </View>

    <View style={styles.topContainer}>
      <Image style={styles.tinyLogo} source={images.cats} />
      <Text style={styles.title}>Find love!</Text>
    </View>

    <View style={styles.content}>
      <TouchableOpacity
        onPress={() => {
          // eslint-disable-next-line react/prop-types
          navigation.navigate('EditProfile')
        }}
        style={styles.button}
      >
        <FontIcon
          name="edit"
          solid
          size={20}
          style={styles.iconStyleEdit}
        />
        <Text style={styles.textStyleEdit}>Edit profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          // eslint-disable-next-line react/prop-types
          navigation.navigate('Help')
        }}
        style={styles.button}
      >
        <FontIcon
          name="info"
          solid
          size={20}
          style={styles.iconStyleInfo}
        />
        <Text style={styles.textStyleInfo}>Help</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          // eslint-disable-next-line react/prop-types
          navigation.navigate('DeleteAccount')
        }}
        style={styles.button}
      >
        <FontIcon
          name="trash-alt"
          solid
          size={20}
          style={styles.iconStyle}
        />
        <Text style={styles.textStyle}>Delete account</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          // eslint-disable-next-line react/prop-types
          navigation.navigate('StartPage')
        }}
        style={styles.buttonLogOut}
      >
        <FontIcon
          name="sign-out-alt"
          size={20}
          solid
          style={styles.iconStyle}
        />
        <Text style={styles.textStyle}>Log out</Text>
      </TouchableOpacity>

      <View style={styles.author}>
        <Text style={styles.textAuthorStyle}>Author:</Text>
        <Text style={styles.textAuthorStyle}>Patrycja Kalita</Text>
        <Text style={styles.textAuthorStyle}>2022</Text>
      </View>
    </View>
  </SafeAreaView>
)

DrawerMenu.propTypes = {
  navigation: PropTypes.shape({
    dispatch: PropTypes.func,
  }),
}

DrawerMenu.defaultProps = {
  navigation: {
    dispatch: () => null,
  },
}

export default DrawerMenu
