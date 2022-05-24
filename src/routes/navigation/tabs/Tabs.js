import React from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import FontIcon from 'react-native-vector-icons/FontAwesome5'
import { getFocusedRouteNameFromRoute } from '@react-navigation/native'
import { colors } from '../../../theme'

// stack navigators
import {
  HomeNavigator, ChatNavigator, MatchesNavigator, ProfileNavigator,
// eslint-disable-next-line import/named
} from '../stacks'

const Tab = createBottomTabNavigator()

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      // eslint-disable-next-line react/prop-types
      tabBarIcon: ({ focused }) => {
        switch (route.name) {
          case 'Explore':
            return (
              <FontIcon
                name="search"
                color={focused ? colors.semiPink : colors.grey}
                size={20}
                solid
              />
            )
          case 'Chat':
            return (
              <FontIcon
                name="comments"
                color={focused ? colors.semiPink : colors.grey}
                size={20}
                solid
              />
            )
          case 'Matches':
            return (
              <FontIcon
                name="hand-holding-heart"
                color={focused ? colors.semiPink : colors.grey}
                size={20}
                solid
              />
            )
          case 'Profile':
            return (
              <FontIcon
                name="user"
                color={focused ? colors.semiPink : colors.grey}
                size={20}
                solid
              />
            )
          default:
            return <View />
        }
      },
    })}
    tabBarOptions={{
      activeTintColor: colors.semiOrange,
      inactiveTintColor: colors.grey,
    }}
    initialRouteName="Explore"
    swipeEnabled={false}
  >
    <Tab.Screen
      name="Explore"
      component={HomeNavigator}
      options={({ route }) => ({
        // eslint-disable-next-line no-shadow
        tabBarVisible: ((route) => {
          const routeName = getFocusedRouteNameFromRoute(route)

          return !(routeName === 'StartPage'
            || routeName === 'LoginForm' || routeName === 'SignUpForm'
            || routeName === 'HomeAdmin')
        })(route),
      })}
    />
    <Tab.Screen name="Chat" component={ChatNavigator} />
    <Tab.Screen name="Matches" component={MatchesNavigator} />
    <Tab.Screen
      name="Profile"
      component={ProfileNavigator}
      options={({ route }) => ({
        // eslint-disable-next-line no-shadow
        tabBarVisible: ((route) => {
          const routeName = getFocusedRouteNameFromRoute(route)

          return !(routeName === 'EditProfile' || routeName === 'DeleteAccount' || routeName === 'Help')
        })(route),
      })}
    />
  </Tab.Navigator>
)

export default TabNavigator
