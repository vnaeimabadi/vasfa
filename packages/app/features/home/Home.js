import { Image, useSx } from 'dripsy'
import { Animated, View, StyleSheet, Pressable } from 'react-native'
import { MotiView, useAnimationState } from 'moti'
import { MotiPressable } from 'moti/interactions'
import { height, width } from 'app/constants/theme'
import { Solutions } from './solutions/Solutions'
import { PressableChild } from 'app/components/PressableChild'
import { Services } from './services/Services'
import { Partnership } from './partnership/Partnership'
import { About } from './about/About'
import { Clients } from './clients/Clients'
import { Careers } from './careers/Careers'
import { Footer } from './footer/Footer'
import { useEffect, useRef, useState } from 'react'
import { Anchorable } from 'app/components/Anchorable'
import { FontAwesome } from '@expo/vector-icons'

const headers = [
  { title: 'Home', onPress: () => {} },
  { title: 'Solutions', onPress: () => {} },
  { title: 'Services', onPress: () => {} },
  { title: 'Partnership', onPress: () => {} },
  { title: 'About', onPress: () => {} },
  { title: 'Careers', onPress: () => {} },
  { title: 'Contact', onPress: () => {} },
]
const anchorsMap = new Map()
export function HomeScreen() {
  const scrollViewRef = useRef()
  let partnerShipY = 0
  const [animateProgressbar, setAnimateProgressbar] = useState(false)
  const [animateNumber, setAnimateNumber] = useState(false)
  
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

  const offset = new Animated.Value(0)
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
  const heightBackgroundImage = offset.interpolate({
    inputRange: [0, height + 100],
    outputRange: [height, 0],
    extrapolate: 'clamp',
  })
  const showGoToTop = offset.interpolate({
    inputRange: [height / 1.3, height + 100],
    outputRange: [-100, 20],
    extrapolate: 'clamp',
  })
  const showGoToTopOpacity = offset.interpolate({
    inputRange: [height / 1.3, height + 100],
    outputRange: [0, 1],
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
                if (element.title !== 'Contact')
                  scrollViewRef.current.scrollTo(anchorsMap.get(element.title))
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
                    if (ele.title !== 'Contact') {
                      animationDropModeState.transitionTo('from')
                      setTimeout(() => {
                        animationState.transitionTo('from')
                      }, 500)
                      setTimeout(() => {
                        scrollViewRef.current.scrollTo(
                          anchorsMap.get(ele.title)
                        )
                      }, 700)
                    }
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
  const renderBlank = () => {
    return (
      <View
        style={{
          width, //for full screen
          height: '100vh',
        }}
      />
    )
  }

  return (
    <View style={[StyleSheet.absoluteFill]}>
      <View style={{ flex: 1, overflow: 'hidden' }}>
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

        <Animated.ScrollView
          ref={scrollViewRef}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: offset } } }],
            {
              useNativeDriver: true,
              listener: (event) => {
                if (
                  partnerShipY - height / 2 <=
                  event.nativeEvent.contentOffset.y
                ) {
                  if (!animateProgressbar) setAnimateProgressbar(true)
                }
                if (
                  partnerShipY - height / 2 <=
                  event.nativeEvent.contentOffset.y
                ) {
                  if (!animateNumber) setAnimateNumber(true)
                }
              },
            }
          )}
        >
          <Anchorable
            layoutEvents={(layout) => {
              anchorsMap.set('Home', layout.y - 56)
            }}
          >
            {renderBlank()}
          </Anchorable>
          <Anchorable
            layoutEvents={(layout) => {
              anchorsMap.set('Solutions', layout.y - 56)
            }}
          >
            <Solutions />
          </Anchorable>
          <Anchorable
            layoutEvents={(layout) => {
              anchorsMap.set('Services', layout.y - 56)
            }}
          >
            <Services />
          </Anchorable>
          <Anchorable
            layoutEvents={(layout) => {
              partnerShipY = layout.y
              anchorsMap.set('Partnership', layout.y - 56)
            }}
          >
            <Partnership
              animateProgressbar={animateProgressbar}
              animateNumber={animateNumber}
            />
          </Anchorable>
          <Anchorable
            layoutEvents={(layout) => {
              anchorsMap.set('About', layout.y - 56)
            }}
          >
            <About />
          </Anchorable>
          <Anchorable
            layoutEvents={(layout) => {
              anchorsMap.set('Clients', layout.y - 56)
            }}
          >
            <Clients />
          </Anchorable>
          <Anchorable
            layoutEvents={(layout) => {
              anchorsMap.set('Careers', layout.y - 56)
            }}
          >
            <Careers />
          </Anchorable>

          <Footer />
        </Animated.ScrollView>
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
              scrollViewRef.current.scrollTo(0)
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
      </View>
    </View>
  )
}
