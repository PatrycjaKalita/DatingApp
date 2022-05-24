import React from 'react'
import PropTypes from 'prop-types'
import {
  Text, View, Image, ImageBackground, ScrollView,
} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import Button from '../../components/Button'
import { colors, images } from '../../theme'
import Demo from '../../../assets/data/demo'

import styles from './Style'

// Screen where log user can edit data of he's profile
const EditProfile = () => {
  const {
    image,
  } = Demo[1]
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
          <View style={styles.contentTop}>
            <Image
              source={image}
              style={styles.profilePicture}
            />
            <Text
              style={styles.changeText}
              onPress={() => {
              }}
            >Change picture
            </Text>
          </View>

          <View style={{ marginTop: 25 }}>
            <View style={styles.info}>
              <Text style={styles.inputTopText}>Name and surname
              </Text>
              <TextInput
                style={styles.input}
              />
            </View>
            <View style={styles.info}>
              <Text style={styles.inputTopText}>
                Age
              </Text>
              <TextInput
                style={styles.input}
              />
            </View>
            <View style={styles.info}>
              <Text style={styles.inputTopText}>
                Job
              </Text>
              <TextInput
                style={styles.input}
              />
            </View>
            <View style={styles.info}>
              <Text style={styles.inputTopText}>
                Motto
              </Text>
              <TextInput
                style={styles.inputMotto}
                multiline
              />
            </View>
            <View style={styles.info}>
              <Text style={styles.inputTopText}>
                Hasztags
              </Text>
              <TextInput
                style={styles.input}
              />
            </View>
            <View style={styles.info}>
              <Text style={styles.inputTopText}>
                Instagram
              </Text>
              <TextInput
                style={styles.input}
              />
            </View>
          </View>
          <Button
            title="SAVE"
            color="white"
            style={styles.button}
            backgroundColor={colors.darkPink}
          />
        </ImageBackground>
      </ScrollView>
    </View>
  )
}

EditProfile.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func,
  }),
}

EditProfile.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default EditProfile
