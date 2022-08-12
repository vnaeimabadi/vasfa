import { height, width } from 'app/constants/theme'
import { Image, useSx, View } from 'dripsy'
import { MotiView, useAnimationState } from 'moti'
import { MotiPressable } from 'moti/interactions'
import { Animated, Pressable, StyleSheet } from 'react-native'
import { useRouter } from 'solito/router'
import { PressableChild } from './PressableChild'
const headers = [
  { title: 'Home', onPress: () => {} },
  { title: 'Solutions', onPress: () => {} },
  { title: 'Services', onPress: () => {} },
  { title: 'Partnership', onPress: () => {} },
  { title: 'About', onPress: () => {} },
  { title: 'Careers', onPress: () => {} },
  { title: 'Contact', onPress: () => {} },
]
export const Header = ({ offset, scrollViewRef, anchorsMap, page }) => {
  const { push } = useRouter()
  const sx = useSx()
  const animationState = useAnimationState({
    from: {
      translateX: -width,
      borderTopRightRadius: '100%',
      borderBottomRightRadius: '50%',
    },
    active: {
      translateX: 0,
      borderTopRightRadius: '10%',
      borderBottomRightRadius: '130%',
    },
  })
  const animationDropModeState = useAnimationState({
    from: {
      opacity: 0,
      zIndex: -100,
    },

    active: {
      opacity: 1,
      zIndex: 100,
    },
  })
  const backgroundColorHeader = offset.interpolate({
    inputRange: [0, 100],
    outputRange: ['transparent', 'rgba(0,0,0,.92)'],
    extrapolate: 'clamp',
  })
  const heightHeader = offset.interpolate({
    inputRange: [0, 400],
    outputRange: [86, 66],
    extrapolate: 'clamp',
  })
  const Headers = ({ title, onPress, style }) => {
    return (
      <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'timing', duration: 1000 }}
        style={style}
      >
        <MotiPressable onPress={onPress}>
          <PressableChild key="A2" label={title} />
        </MotiPressable>
      </MotiView>
    )
  }
  const onPressMenuItems = ({ title }) => {
    if (page === title && page === 'Contact') {
      return
    }
    
    if (page === 'Contact' && title !== 'Contact') {
      push(
        {
          pathname: '/',
          query: { type: title },
        },
        '/'
      )
    } else if (title !== 'Contact') {
      scrollViewRef.current.scrollTo(anchorsMap.get(title))
    } else {
      push('/contact')
    }
  }
  const renderDefaultMenu = () => {
    return (
      <Animated.View
        style={[
          sx({
            width: width,
            zIndex: [-10, -10, 10],
            height: [0, 0, 89],
            top: 0,
            position: 'fixed',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: ['row'],
          }),
          {
            backgroundColor: backgroundColorHeader,
            height: heightHeader,
          },
        ]}
      >
        {headers.map((element, index) => {
          return (
            <Headers
              key={`head-${index}`}
              title={element.title}
              onPress={() => {
                onPressMenuItems({ title: element.title })
              }}
              style={{ marginLeft: index === 0 ? 0 : 16 }}
            />
          )
        })}
        <Image
          sx={{
            // width: width * 0.4, //for full screen
            height: 86,
            // flex: 1,
            aspectRatio: 2,
            ml: 10,
          }}
          resizeMode="contain"
          source={{ uri: '/images/Vasfa-Logo.png' }}
        />
      </Animated.View>
    )
  }
  const renderMobileMenu = () => {
    return (
      <MotiView
        state={animationState}
        transition={{ type: 'timing', duration: 500 }}
        style={sx({
          width: width,
          height: height + 56,
          position: ['absolute'],
          zIndex: 101,
        })}
      >
        <MotiView
          state={animationState}
          transition={{
            type: 'timing',
            duration: 500,
          }}
          style={sx({
            width: width,
            height: height * 0.8,
            backgroundColor: 'rgba(255,255,255,.98)',
            position: ['absolute'],
            justifyContent: 'center',
            zIndex: 101,
          })}
        >
          <MotiPressable
            onPress={() => {
              animationDropModeState.transitionTo('from')
              setTimeout(() => {
                animationState.transitionTo('from')
              }, 500)
            }}
            style={sx({
              position: ['absolute'],
              top: -70,
              right: 2,
              justifyContent: 'center',
              alignItems: 'center',
              width: 50,
              height: 50,
            })}
          >
            <PressableChild
              key="A3"
              primeryColor="black"
              secondaryColor="#d65050"
              icon={{ name: 'close', size: 24 }}
            />
          </MotiPressable>
          <Image
            sx={{
              // width: width * 0.4, //for full screen
              height: 86,
              position: ['absolute'],
              top: -2,
              left: 25,
              aspectRatio: 2,
            }}
            resizeMode="contain"
            source={{
              uri: '/images/Vasfa-Logo.png',
            }}
          />
          <MotiView
            style={{
              justifyContent: 'space-between',
              height: '70%',
              marginLeft: 50,
              width: '50%',
            }}
          >
            {headers.map((ele, index) => {
              return (
                <MotiPressable
                  key={`header-${index}`}
                  onPress={() => {
                    animationDropModeState.transitionTo('from')
                    setTimeout(() => {
                      animationState.transitionTo('from')
                    }, 500)
                    setTimeout(() => {
                      onPressMenuItems({ title: ele.title })
                      // if (ele.title !== 'Contact') {
                      //   scrollViewRef.current.scrollTo(
                      //     anchorsMap.get(ele.title)
                      //   )
                      // } else {
                      //   push('/contact')
                      // }
                    }, 700)
                  }}
                >
                  <PressableChild
                    key={`mobile-menu-${index}`}
                    label={ele.title}
                    primeryColor="black"
                    secondaryColor="#d65050"
                    textStyle={{ fontWeight: 'bold' }}
                  />
                </MotiPressable>
              )
            })}
          </MotiView>
        </MotiView>

        <MotiView
          state={animationDropModeState}
          transition={{
            opacity: {
              type: 'timing',
              delay: 300,
            },
            repeatReverse: true,
          }}
          style={[
            StyleSheet.absoluteFill,
            { backgroundColor: 'rgba(1,1,1,0.1)' },
          ]}
        >
          <Pressable
            onPress={() => {
              animationDropModeState.transitionTo('from')
              setTimeout(() => {
                animationState.transitionTo('from')
              }, 500)
            }}
            style={[
              StyleSheet.absoluteFill,
              { backgroundColor: 'rgba(1,1,1,0.1)' },
            ]}
          />
        </MotiView>
      </MotiView>
    )
  }
  return (
    <View sx={{ zIndex: 100 }}>
      {width > 767 && renderDefaultMenu()}
      <Pressable
        style={sx({
          position: 'fixed',
          top: 16,
          left: 16,
          visibility: ['visible', 'visible', 'hidden'],
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: 'rgba(0,0,0,.3)',
          borderRadius: 5,
          width: 50,
          height: 50,
          zIndex: 100,
        })}
      >
        <MotiPressable
          onPress={() => {
            animationState.transitionTo('active')
            setTimeout(() => {
              animationDropModeState.transitionTo('active')
            }, 500)
          }}
        >
          <PressableChild
            key="a1"
            primeryColor="white"
            secondaryColor="#d65050"
            icon={{ name: 'menu-outline', size: 34 }}
          />
        </MotiPressable>
      </Pressable>

      {renderMobileMenu()}
    </View>
  )
}
