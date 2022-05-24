import React from 'react'
import PropTypes from 'prop-types'
import {
  Text, View, ScrollView, TouchableOpacity, FlatList,
} from 'react-native'
import CardItem from '../../components/item/CardItem'
import Demo from '../../../assets/data/demo'

// Styles for this screen
import styles from './Style'

// Screen when log user can see, who was choose in explore as fav
const Matches = () => (
  <View style={styles.root}>
    <View style={styles.containerMatches}>
      <ScrollView>
        <View style={styles.top}>
          <Text style={styles.title}>Matches</Text>
        </View>
        <FlatList
          numColumns={2}
          data={Demo}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <CardItem
                image={item.image}
                name={item.name}
                status={item.status}
                variant
              />
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  </View>
)

Matches.propTypes = {
  navigation: PropTypes.shape({ navigate: PropTypes.func }),
}

Matches.defaultProps = {
  navigation: { navigate: () => null },
}

export default Matches
