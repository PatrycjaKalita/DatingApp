import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { colors } from '../../../theme'
import Profile from '../../../scenes/profile'
import StartPage from '../../../scenes/startPage'
import SignUpForm from '../../../scenes/signUpForm'
import LoginForm from '../../../scenes/loginForm'
import HomeAdmin from '../../../scenes/homeAdmin'
import Explore from '../../../scenes/explore'
import EditProfile from '../../../scenes/editProfile'
import Help from '../../../scenes/help'
import DeleteAccount from '../../../scenes/deleteAccount'
import Matches from '../../../scenes/matches'
import HeaderLeft from './HeaderLeft'
import Chat from '../../../scenes/chat'

// ------------------------------------
// Constants
// ------------------------------------

const Stack = createStackNavigator()

const navigationProps = {
  headerTintColor: colors.darkGrey,
  headerStyle: { backgroundColor: colors.white },
  headerTitleStyle: { fontSize: 18 },
}

// ------------------------------------
// Navigators
// ------------------------------------

export const HomeNavigator = () => (
  <Stack.Navigator
    initialRouteName="StartPage"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="StartPage"
      component={StartPage}
      options={() => ({
        title: 'StartPage',
        headerShown: false,
      })}
    />
    <Stack.Screen
      name="SignUpForm"
      component={SignUpForm}
      options={() => ({
        title: 'SignUpForm',
        headerShown: false,
      })}
    />
    <Stack.Screen
      name="LoginForm"
      component={LoginForm}
      options={() => ({
        title: 'LoginForm',
        headerShown: false,
      })}
    />
    <Stack.Screen
      name="HomeAdmin"
      component={HomeAdmin}
      options={() => ({
        title: 'HomeAdmin',
        headerShown: false,
      })}
    />
    <Stack.Screen
      name="Explore"
      component={Explore}
      options={() => ({
        title: 'Explore',
        headerShown: false,
      })}
    />
  </Stack.Navigator>
)

export const ChatNavigator = () => (
  <Stack.Navigator
    initialRouteName="Chat"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Chat"
      component={Chat}
      options={() => ({
        title: 'Chat',
        headerShown: false,
      })}
    />
  </Stack.Navigator>
)

export const MatchesNavigator = () => (
  <Stack.Navigator
    initialRouteName="Matches"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Matches"
      component={Matches}
      options={() => ({
        title: 'Matches',
        headerShown: false,
      })}
    />
  </Stack.Navigator>
)

export const ProfileNavigator = () => (
  <Stack.Navigator
    initialRouteName="Profile"
    headerMode="screen"
    screenOptions={navigationProps}
  >
    <Stack.Screen
      name="Profile"
      component={Profile}
      options={({ navigation }) => ({
        title: 'Profile',
        headerLeft: () => <HeaderLeft navigation={navigation} />,
        headerTitle: false,
        headerTransparent: true,
      })}
    />
    <Stack.Screen
      name="EditProfile"
      component={EditProfile}
      options={() => ({
        title: 'EditProfile',
        headerShown: true,
        headerTransparent: true,
        headerTitle: false,
      })}
    />
    <Stack.Screen
      name="Help"
      component={Help}
      options={() => ({
        title: 'Help',
        headerShown: true,
        headerTransparent: true,
        headerTitle: false,
      })}
    />
    <Stack.Screen
      name="DeleteAccount"
      component={DeleteAccount}
      options={() => ({
        title: 'DeleteAccount',
        headerShown: true,
        headerTransparent: true,
        headerTitle: false,
      })}
    />
  </Stack.Navigator>
)
