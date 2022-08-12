import { height, width } from 'app/constants/theme'
import { Animated } from 'react-native'

export const Banner = ({ offset }) => {
  const heightBackgroundImage = offset.interpolate({
    inputRange: [0, height + 100],
    outputRange: [height, 0],
    extrapolate: 'clamp',
  })

  return (
    <Animated.Image
      style={{
        height: heightBackgroundImage,
        width: width, //for full screen
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
      }}
      source={{
        uri: '/images/2.jpeg',
      }}
    />
  )
}
