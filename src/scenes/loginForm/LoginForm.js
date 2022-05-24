import React, { useState } from 'react'
import PropTypes from 'prop-types'
import {
  Text, View, Image, ImageBackground,
} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { Snackbar } from 'react-native-paper'
import { colors, images } from '../../theme'
import Button from '../../components/Button'

// Styles for this screen
import styles from './Style'

// Login screen
const LoginForm = ({ navigation }) => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [visible, setVisible] = React.useState(false)

  const onDismissSnackBar = () => setVisible(false)

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('login', 'true')
    } catch (e) {
      console.log('error')
    }
  }

  const checkLogin = () => {
    if (login && password) {
      if ((login === 'user') && (password === 'user')) {
        storeData()
          .then(() => {
            navigation.navigate('Explore')
          })
      }
      if ((login === 'admin') && (password === 'admin')) {
        storeData()
          .then(() => {
            navigation.navigate('HomeAdmin')
          })
      }
    } else {
      setVisible(true)
    }
  }

  return (
    <View style={styles.root}>
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
        >
          Login or Password is incorrect.
        </Snackbar>
        <View style={styles.contentLogo}>
          <Image style={styles.tinyLogo} source={images.cats} />
          <Text style={styles.title}>Find love!</Text>
        </View>
        <View style={styles.content}>
          <Text style={styles.inputTopText}>Login:</Text>
          <TextInput
            style={styles.input}
            placeholder="user"
            onChangeText={setLogin}
            value={login}
          />
        </View>
        <View>
          <Text style={styles.inputTopText}>Password:</Text>
          <TextInput
            secureTextEntry
            placeholder="****"
            style={styles.input}
            onChangeText={setPassword}
            value={password}
          />
        </View>
        <Button
          title="Log In"
          color="white"
          style={styles.button}
          backgroundColor={colors.darkPink}
          onPress={() => checkLogin()}
        />
        <View>
          <Text
            style={styles.text}
          >If you want to join us
          </Text>
          <Text
            style={styles.signUp}
            onPress={() => {
              navigation.navigate('SignUpForm', { from: 'LoginForm' })
            }}
          >Sign Up
          </Text>
        </View>
      </ImageBackground>
    </View>
  )
}

LoginForm.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func,
  }),
}

LoginForm.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default LoginForm
