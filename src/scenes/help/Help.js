import React from 'react'
import PropTypes from 'prop-types'
import {
  Text, View, Image, ImageBackground, ScrollView,
} from 'react-native'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { colors, images } from '../../theme'

import styles from './Style'

// Screen with help for user
const Help = () => (
  <View style={styles.root}>
    <ScrollView>
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
          <Text style={styles.infoTitle}>User help</Text>
          <Text style={styles.text}>Hi,</Text>
          <Text style={styles.text}>here you will find</Text>
          <Text style={styles.text}>how to use our app.</Text>
          <View style={{
            marginTop: 30,
            alignItems: 'center',
          }}
          >
            <Text style={styles.info}>In &#34;Explore&#34; window you can choose an user</Text>
            <Text style={styles.info}>you like or you reject which you do not like.</Text>
            <View style={styles.description}>
              <FontIcon name="heart" solid size={20} color={colors.pink} />
              <Text style={styles.textDescription}> - like </Text>

              <FontIcon name="times" solid size={20} color={colors.red} />
              <Text style={styles.textDescription}> - dislike</Text>
            </View>
          </View>

          <View style={{
            marginTop: 20,
            alignItems: 'center',
          }}
          >
            <Text style={styles.info}>In &#34;Chat&#34; window you can send message</Text>
            <Text style={styles.info}>to user that you gave the heart.</Text>
          </View>

          <View style={{
            marginTop: 20,
            alignItems: 'center',
          }}
          >
            <Text style={styles.info}>In &#34;Matches&#34; window you can check users</Text>
            <Text style={styles.info}>that got heart from you</Text>
            <Text style={styles.info}>and also you can check who is now online.</Text>
          </View>

          <View style={{
            marginTop: 20,
            alignItems: 'center',
          }}
          >
            <Text style={styles.info}>In &#34;Profile&#34; window you will see your profile.</Text>
            <Text style={styles.info}>In top-left corner there is menu.</Text>
            <Text style={styles.info}>After opening the menu you will see 4 options.</Text>
            <Text style={styles.info}>In top-left corner there is menu.</Text>
            <Text style={styles.info}>First &#34;Edit profile&#34; allows you</Text>
            <Text style={styles.info}>to edit your profile data.</Text>
            <Text style={styles.info}>Second is &#34;Help&#34; - you are here now.</Text>
            <Text style={styles.info}>Next is &#34;Delete account&#34; where you can</Text>
            <Text style={styles.info}>delete you account.</Text>
            <Text style={styles.info}>Last option is &#34;Log out&#34; which allows you</Text>
            <Text style={styles.info}>to log out of the app.</Text>
          </View>

          <View style={{
            marginTop: 30,
            alignItems: 'center',
          }}
          >
            <Text style={styles.info}>For more information</Text>
            <Text style={styles.info}>please contact us by e-mail:</Text>
            <Text style={styles.info}>example@findlove.com</Text>
          </View>

          <View style={{
            marginTop: 20,
            marginBottom: 20,
            alignItems: 'center',
          }}
          >
            <Text style={styles.infoBottom}>Thank you for choosing us!</Text>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  </View>
)

Help.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({ from: PropTypes.string }),
  }),
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
    goBack: PropTypes.func,
  }),
}

Help.defaultProps = {
  route: { params: { from: '' } },
  navigation: { goBack: () => null },
}

export default Help
