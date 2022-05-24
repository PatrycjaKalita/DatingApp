import React from 'react'
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  FlatList,
} from 'react-native'
import Demo from '../../../assets/data/demo'
import Message from '../../components/item/Message'

// Styles for this screen
import styles from './Style'

// Chat is the windows where is list of chats with other users
const Chat = () => (
  <View style={styles.root}>
    <View style={styles.containerMessages}>
      <ScrollView>
        <View style={styles.top}>
          <Text style={styles.title}>Messages</Text>
        </View>

        {
          // Message is a component
        }
        <FlatList
          data={Demo}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <Message
                image={item.image}
                name={item.name}
                lastMessage={item.message}
              />
            </TouchableOpacity>
          )}
        />
      </ScrollView>
    </View>
  </View>
)

export default Chat
