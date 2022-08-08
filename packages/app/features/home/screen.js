import { useSx } from 'dripsy'
import { Animated, View, StyleSheet, Pressable, Platform } from 'react-native'
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
import Image from 'next/image'

const headers = [
  { title: 'Home', onPress: () => {} },
  { title: 'Solutions', onPress: () => {} },
  { title: 'Services', onPress: () => {} },
  { title: 'Partnership', onPress: () => {} },
  { title: 'About', onPress: () => {} },
  { title: 'Careers', onPress: () => {} },
  { title: 'Contact', onPress: () => {} },
]

export function HomeScreen() {
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

  const Headers = ({ title, onPress, style }) => {
    return (
      <MotiView
        from={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ type: 'timing', duration: 1000 }}
        style={style}
      >
        <MotiPressable>
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
              onPress={() => {}}
              style={{ marginLeft: index === 0 ? 0 : 16 }}
            />
          )
        })}
        <View style={{ marginLeft: 10 }}>
          <Image
            loader={() => {
              return 'http://vasfa.ir/wp-content/uploads/2020/03/Vasfa-Logo.png'
            }}
            src="Vasfa-Logo.png"
            width={180 / 1.5}
            height={49 / 1.5}

            // sx={{
            //   height: 86,
            //   aspectRatio: 2,
            //   ml: 10,
            // }}
            // resizeMode="contain"
            // source={{
            //   uri: 'http://vasfa.ir/wp-content/uploads/2020/03/Vasfa-Logo.png',
            // }}
          />
        </View>
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
          <View
            style={{
              // width: width * 0.4, //for full screen
              height: 86,
              position: ['absolute'],
              top: 16,
              left: 25,
              aspectRatio: 2,
            }}
          >
            <Image
              loader={() => {
                return 'http://vasfa.ir/wp-content/uploads/2020/03/Vasfa-Logo.png'
              }}
              src="Vasfa-Logo.png"
              width={180 / 1.5}
              height={49}
            />
          </View>
          {/* <Image
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
              uri: 'http://vasfa.ir/wp-content/uploads/2020/03/Vasfa-Logo.png',
            }}
          /> */}
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
                <MotiPressable key={`header-${index}`}>
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
      {/* <Animated.Image
        style={{
          height: heightBackgroundImage,
          width: width, //for full screen
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: -1,
        }}
        source={{
          uri: 'http://vasfa.ir/wp-content/themes/sydney/images/2.jpg',
        }}
      /> */}
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
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: offset } } }],
          { useNativeDriver: false }
        )}
      >
        {renderBlank()}
        <Solutions />
        <Services />
        <Partnership />
        <About />
        <Clients />
        <Careers />
        <Footer />
      </Animated.ScrollView>
    </View>
  )
}
