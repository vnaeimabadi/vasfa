import { Animated, View, StyleSheet, LayoutRectangle } from 'react-native'
import { height, width } from 'app/constants/theme'
import { Solutions } from './solutions/Solutions'
import { Services } from './services/Services'
import { Partnership } from './partnership/Partnership'
import { About } from './about/About'
import { Clients } from './clients/Clients'
import { Careers } from './careers/Careers'
import { Footer } from './footer/Footer'
import { useRef, useState } from 'react'
import { Anchorable } from 'app/components/Anchorable'
import { Header } from 'app/components/Header'
import { ScrollToTop } from 'app/components/ScrollToTop'
import { Banner } from 'app/features/home/Banner/Banner'

const anchorsMap = new Map()

export function HomeScreen() {
  const offset = new Animated.Value(0)
  const [animateProgressbar, setAnimateProgressbar] = useState(false)
  const [animateNumber, setAnimateNumber] = useState(false)
  const sections = [
    { title: 'Home', page: null },
    { title: 'Solutions', page: <Solutions /> },
    { title: 'Services', page: <Services /> },
    {
      title: 'Partnership',
      page: (
        <Partnership
          animateProgressbar={animateProgressbar}
          animateNumber={animateNumber}
        />
      ),
    },
    { title: 'About', page: <About /> },
    { title: 'Clients', page: <Clients /> },
    { title: 'Careers', page: <Careers /> },
  ]
  const scrollViewRef = useRef()
  let partnerShipY = 0


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
        <Banner offset={offset} />
        {/* {offset && scrollViewRef && anchorsMap && (

        )} */}
        <Header
          offset={offset}
          scrollViewRef={scrollViewRef}
          anchorsMap={anchorsMap}
        />

        <Animated.ScrollView
          ref={scrollViewRef}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: offset } } }],
            {
              useNativeDriver: true,
              listener: (event) => {
                try {
                  if (
                    partnerShipY - height / 2 <=
                    event?.nativeEvent?.contentOffset.y
                  ) {
                    if (!animateProgressbar) setAnimateProgressbar(true)
                  }
                  if (
                    partnerShipY - height / 2 <=
                    event.nativeEvent.contentOffset.y
                  ) {
                    if (!animateNumber) setAnimateNumber(true)
                  }
                } catch (e) {}
              },
            }
          )}
        >
          {sections.map((ele, index) => {
            return (
              <Anchorable
                layoutEvents={(layout) => {
                  if (ele.title === 'Partnership') partnerShipY = layout.y
                  anchorsMap.set(ele.title, layout.y - 56)
                }}
              >
                {ele.page === null ? renderBlank() : ele.page}
              </Anchorable>
            )
          })}
          {/* <Anchorable
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
          </Anchorable> */}

          <Footer />
        </Animated.ScrollView>
        <ScrollToTop offset={offset} scrollViewRef={scrollViewRef} />
      </View>
    </View>
  )
}
