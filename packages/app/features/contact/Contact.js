import { CustomButton } from 'app/components/customButton/CustomButton'
import { CustomInput } from 'app/components/CustomInput/CustomInput'
import { Footer } from 'app/components/footer/Footer'
import { Header } from 'app/components/Header'
import { ScrollToTop } from 'app/components/ScrollToTop'
import { containerStyle, height, width } from 'app/constants/theme'
import { Image, View } from 'dripsy'
import { useRef } from 'react'
import { Animated, StyleSheet } from 'react-native'
export function ContactScreen() {
  const offset = new Animated.Value(0)
  const scrollViewRef = useRef()
  return (
    <View style={[StyleSheet.absoluteFill]}>
      <View style={{ flex: 1, overflow: 'hidden' }}>
        <Header
          offset={offset}
          scrollViewRef={scrollViewRef}
          anchorsMap={null}
          page="Contact"
        />
        <Animated.ScrollView
          ref={scrollViewRef}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: offset } } }],
            {
              useNativeDriver: true,
            }
          )}
        >
          <View
            sx={{
              ...containerStyle,
              backgroundColor: '#EDEDED',
              justifyContent: 'flex-start',
            }}
          >
            <View sx={{ width: width, height: height }}>
              <Image
                sx={{
                  position: ['absolute'],
                  width: width, //for full screen
                  height: height,
                }}
                source={{
                  uri: '/images/contact/contact.jpeg',
                }}
              />
              <View
                sx={{
                  position: ['absolute'],
                  width: width,
                  minHeight: height,
                  backgroundColor: 'rgba(0,0,0,.5)',
                  justifyContent: ['center'],
                  alignItems: ['center'],
                  flexDirection: ['column', 'column', 'row'],
                  zIndex: 10,
                }}
              >
                <View
                  sx={{
                    height: '100%',
                    width: width * 0.5,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <View
                    sx={{
                      width: [width * 0.95, width * 0.65, width * 0.45],
                      minHeight: [width * 0.15, height * 0.6, height * 0.6],
                      backgroundColor: 'rgba(0,0,0,.7)',
                      borderRadius: 5,
                      // ml:width,
                      px: 20,
                      py: 20,
                    }}
                  >
                    <CustomInput label="Your Name" />
                    <CustomInput label="Your Email" />
                    <CustomInput label="Subject" />
                    <CustomInput
                      label="Your Message"
                      inputStyle={{ height: [80, 80, 120] }}
                      props={{ multiline: true }}
                    />
                    <CustomButton
                      title="SEND"
                      containerStyle={{ width: '100%', mt: 0, mb: 0 }}
                    />
                  </View>
                </View>
                <View
                  sx={{
                    width: width * 0.5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    px:100
                  }}
               />
              </View>
            </View>
          </View>
          <Footer />
        </Animated.ScrollView>
        <ScrollToTop offset={offset} scrollViewRef={scrollViewRef} />
      </View>
    </View>
  )
}
