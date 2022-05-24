import React from 'react'
import PropTypes from 'prop-types'
import {
  Text, View, Image, ImageBackground,
} from 'react-native'
import { colors, images } from '../../theme'

import styles from './Style'
import Button from '../../components/Button'

// DeleteAccount is screen where log user can delete he's own account with data
const DeleteAccount = () => (
  <View style={styles.root}>
    <ImageBackground
      source={images.background_hearts}
      resizeMode="cover"
      style={styles.background}
    >
      <View style={styles.contentTop}>
        <Image style={styles.tinyLogo} source={images.cats} />
        <Text style={styles.title}>Find love!</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.infoTitle}>Delete Your Account</Text>
        <Text style={styles.text}>Hi,</Text>
        <Text style={styles.text}>we are sorry to hear that</Text>
        <Text style={styles.text}>you are deleting your account.</Text>
        <View style={{ marginTop: 15, alignItems: 'center' }}>
          <Text style={styles.text}>All your matches, chats and data</Text>
          <Text style={styles.text}>will be removed forever.</Text>
        </View>
        <View style={{ marginTop: 30, alignItems: 'center' }}>
          <Text style={styles.info}>Are you sure</Text>
          <Text style={styles.info}>you want to delete the account?</Text>
        </View>
      </View>
      <Button
        title="DELETE"
        color="white"
        style={styles.button}
        backgroundColor={colors.darkPink}
      />
    </ImageBackground>
  </View>
)

DeleteAccount.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func,
  }),
}

DeleteAccount.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default DeleteAccount
