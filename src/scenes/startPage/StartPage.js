import React from 'react'
import PropTypes from 'prop-types'
import {
  Text, View, Image, ImageBackground,
} from 'react-native'
import Button from '../../components/Button'
import { colors, images } from '../../theme'

// Styles for this screen
import styles from './Style'

// StartPage is the first screen after opening app
const StartPage = ({ navigation }) => (
  <View style={styles.root}>
    <ImageBackground
      source={images.background}
      resizeMode="cover"
      style={{
        alignItems: 'center',
        flex: 1,
      }}
    >
      {
        // Displaying the logo, name and description
        // and two buttons: first "Log In" - go to the login screen
        // second "Sing Up" - go to the registration screen
      }
      <View style={styles.contentTop}>
        <Image style={styles.tinyLogo} source={images.cats_white} />
        <Text style={styles.name}> Find love!</Text>
        <View style={styles.contentTitle}>
          <Text style={styles.title}>Find Your Partner</Text>
          <Text style={styles.title}>With Us</Text>
        </View>
        <View style={styles.contentText}>
          <Text style={styles.text}>Join us and socialize with</Text>
          <Text style={styles.text}>millions of people</Text>
        </View>
      </View>
      <View style={styles.contentMain}>
        <Button
          style={styles.login}
          variant="outline"
          color={colors.white}
          title="Log In"
          onPress={() => {
            navigation.navigate('LoginForm', { from: 'StartPage' })
          }}
        />
        <Button
          style={styles.signup}
          title="Sign Up"
          color={colors.pink}
          onPress={() => {
            navigation.navigate('SignUpForm', { from: 'StartPage' })
          }}
        />
      </View>
    </ImageBackground>
  </View>
)

StartPage.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }),
}

StartPage.defaultProps = {
  navigation: { navigate: () => null },
}

export default StartPage
