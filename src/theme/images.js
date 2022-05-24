import { Asset } from 'expo-asset'

// png/jpeg
export const images = {
  logo_sm: require('../../assets/images/logo-sm.png'),
  logo_lg: require('../../assets/images/logo-lg.png'),
  cats: require('../../assets/images/cats.png'),
  cats_white: require('../../assets/images/cats-white.png'),
  background: require('../../assets/images/background.png'),
  background_hearts: require('../../assets/images/background-hearts.png'),
  camera: require('../../assets/images/camera.png'),
  insta: require('../../assets/images/instagram.png'),
}

// image preloading
export const imageAssets = Object.keys(images).map((key) => Asset.fromModule(images[key]).downloadAsync())
