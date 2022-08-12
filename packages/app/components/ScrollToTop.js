import { height } from 'app/constants/theme'
import { useSx } from 'dripsy'
import { MotiPressable } from 'moti/interactions'
import { Animated } from 'react-native'
import { PressableChild } from './PressableChild'

export const ScrollToTop = (props) => {
  const { offset, scrollViewRef } = props
  const sx = useSx()
  const showGoToTop = offset.interpolate({
    inputRange: [height/3 , height/1.7],
    outputRange: [-100, 20],
    extrapolate: 'clamp',
  })
  const showGoToTopOpacity = offset.interpolate({
    inputRange: [height/2 , height/1.5],
    outputRange: [0, 1],
    extrapolate: 'clamp',
  })
  // const showGoToTop = offset.interpolate({
  //   inputRange: [height / 1.3, height + 100],
  //   outputRange: [-100, 20],
  //   extrapolate: 'clamp',
  // })
  // const showGoToTopOpacity = offset.interpolate({
  //   inputRange: [height / 1.3, height + 100],
  //   outputRange: [0, 1],
  //   extrapolate: 'clamp',
  // })
  return (
    <Animated.View
      style={{
        position: 'fixed',
        right: 16,
        bottom: showGoToTop,
        opacity: showGoToTopOpacity,
      }}
    >
      <MotiPressable
        onPress={() => {
          if (scrollViewRef.current) {
            scrollViewRef.current.scrollTo(0)
          }
        }}
        style={sx({
          width: 40,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 5,
          mt: 4,
          mb: [20, 20, 0],
        })}
        animate={({ hovered, pressed }) => {
          'worklet'

          return {
            backgroundColor: hovered || pressed ? 'white' : '#d65050',
            borderColor: hovered || pressed ? '#d65050' : 'white',
            borderWidth: 1,
          }
        }}
        transition={({ hovered, pressed }) => {
          'worklet'

          return {
            delay: hovered || pressed ? 0 : 100,
          }
        }}
      >
        <PressableChild
          key="A2"
          primeryColor="white"
          secondaryColor="#d65050"
          icon={{ name: 'chevron-up', size: 24 }}
        />
      </MotiPressable>
    </Animated.View>
  )
}
