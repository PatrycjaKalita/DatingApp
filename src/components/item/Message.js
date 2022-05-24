import React from 'react'
import { Text, View, Image } from 'react-native'

// Styles for this screen
import styles from '../../scenes/chat/Style'

// Component used in Chat screen
// eslint-disable-next-line react/prop-types
const Message = ({ image, lastMessage, name }) => (
  <View style={styles.container}>
    <Image source={image} style={styles.avatar} />
    <View style={styles.content}>
      <Text>{name}</Text>
      <Text style={styles.message}>{lastMessage}</Text>
    </View>
  </View>
)

export default Message
