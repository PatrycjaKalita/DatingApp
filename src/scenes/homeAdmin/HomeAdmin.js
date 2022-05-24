import React from 'react'
import PropTypes from 'prop-types'
import {
  Text, View, ScrollView, TouchableOpacity, FlatList,
} from 'react-native'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import CardItem from '../../components/item/UserItem'
import Demo from '../../../assets/data/demo'
import { colors } from '../../theme'

// Styles for this screen
import styles from './Style'

// Screen for user admin
const HomeAdmin = ({ navigation }) => (
  <View style={styles.mainContainer}>
    <ScrollView>
      <View style={styles.topContainer}>
        <Text style={styles.title}>List of users:</Text>
        <TouchableOpacity onPress={() => {
          navigation.navigate('LoginForm', { from: 'HomeAdmin' })
        }}
        >
          <FontIcon name="sign-out-alt" solid size={20} color={colors.grey} />
        </TouchableOpacity>
      </View>

      <View style={styles.description}>
        <FontIcon name="clock" solid size={20} color={colors.blue} />
        <Text style={styles.textDescription}>- block user for 24h</Text>

        <FontIcon name="trash-alt" solid size={20} color={colors.red} />
        <Text style={styles.textDescription}>- delete user account</Text>
      </View>

      <FlatList
        numColumns={1}
        data={Demo}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <CardItem
            image={item.image}
            name={item.name}
            actions
          />
        )}
      />
    </ScrollView>
  </View>
)

HomeAdmin.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
}

HomeAdmin.defaultProps = {
  navigation: {
    navigate: () => null,
  }
  ,
}

export default HomeAdmin
