import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Text, View, Image, ImageBackground, ScrollView,
} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Snackbar } from 'react-native-paper'
import Button from '../../components/Button'
import { colors, images } from '../../theme'

// Styles for this screen
import styles from './Style'

// Screen for creating new account
const SignUpForm = ({ navigation }) => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [age, setAge] = useState('')
  const [confirmPassword, setconfirmPassword] = useState('')
  const [visible, setVisible] = React.useState(false)

  const onDismissSnackBar = () => setVisible(false)

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('signup', 'true')
    } catch (e) {
      console.log('error')
    }
  }

  const checkSignUp = () => {
    if (login && password && confirmPassword && name && age
      && (password === confirmPassword)) {
      storeData()
        .then(() => {
          navigation.navigate('')
        })
    } else {
      setVisible(true)
    }
  }

  return (

    <View style={styles.root}>
      <ScrollView>
        <ImageBackground
          source={images.background_hearts}
          resizeMode="cover"
          style={{
            alignItems: 'center',
            flex: 1,
          }}
        >
          <Snackbar
            visible={visible}
            onDismiss={onDismissSnackBar}
            style={{ backgroundColor: colors.darkPink }}
          >Something is wrong. Please check.
          </Snackbar>

          <View style={styles.contentImage}>
            <Image
              source={images.camera}
              style={styles.imageStyle}
            />
            <Text
              style={styles.imageText}
              onPress={() => {
                navigation.navigate('Aparat', { from: 'TakeSelfie' })
              }}
            >Take a picture
            </Text>
          </View>

          <View style={styles.content}>
            <Text style={styles.inputTopText}>Login:</Text>
            <TextInput
              placeholder="user123"
              style={styles.input}
              onChangeText={setLogin}
              value={login}
            />
          </View>
          <View>
            <Text style={styles.inputTopText}>Name and Surname:</Text>
            <TextInput
              style={styles.input}
              placeholder="Anna Smith"
              onChangeText={setName}
              value={name}
            />
          </View>
          <View>
            <Text style={styles.inputTopText}>Age:</Text>
            <TextInput
              style={styles.input}
              placeholder="25"
              onChangeText={setAge}
              value={age}
            />
          </View>
          <View>
            <Text style={styles.inputTopText}>Password:</Text>
            <TextInput
              secureTextEntry
              style={styles.input}
              placeholder="****"
              onChangeText={setPassword}
              value={password}
            />
          </View>
          <View>
            <Text style={styles.inputTopText}>Confirm Password:</Text>
            <TextInput
              secureTextEntry
              style={styles.input}
              placeholder="****"
              onChangeText={setconfirmPassword}
              value={confirmPassword}
            />
          </View>
          <Button
            title="Sign Up"
            color="white"
            style={styles.button}
            backgroundColor={colors.darkPink}
            onPress={() => {
              checkSignUp()
            }}
          />
          <View>
            <Text
              style={styles.text}
            > Do you have account?
            </Text>
            <Text
              style={styles.logIn}
              onPress={() => {
                navigation.navigate('LoginForm', { from: 'SignUpForm' })
              }}
            >Log In
            </Text>
          </View>

        </ImageBackground>
      </ScrollView>
    </View>
  )
}

SignUpForm.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func,
  }),
}

SignUpForm.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default SignUpForm
