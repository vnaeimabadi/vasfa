import { PressableChild } from 'app/components/PressableChild'
import { containerStyle, height } from 'app/constants/theme'
import { H3, H4, View } from 'dripsy'
import { FontAwesome } from '@expo/vector-icons'
import { MotiPressable } from 'moti/interactions'
import { MotiLink } from 'solito/moti'

const socialMedias = [
  {
    title: 'facebook',
    icon: 'logo-facebook',
    url: 'https://facebook.com',
    secondaryColor: '#4267B2',
  },
  {
    title: 'twitter',
    icon: 'logo-twitter',
    url: 'https://twitter.com',
    secondaryColor: '#1DA1F2',
  },
  {
    title: 'instagram',
    icon: 'logo-instagram',
    url: 'https://instagram.com',
    secondaryColor: '#8a3ab9',
  },
  {
    title: 'LinkedIn',
    icon: 'logo-linkedin',
    url: 'https://linkedin.com',
    secondaryColor: '#0072b1',
  },
]
export const Footer = () => {
  return (
    <View
      sx={{ ...containerStyle}}
    >
      <View
        sx={{
          flex: 1,
          alignItems: 'center',
          width: ['100%'],
        }}
      >
        <View
          sx={{
            justifyContent: 'center',
            flex: 2,
            width: '100%',
          }}
        >
          <View
            sx={{
              flexDirection: ['row'],
              justifyContent: ['center'],
              alignContent: ['center'],
              alignSelf: ['center'],
              flex: 1,
              flexWrap: ['wrap'],
              backgroundColor: '#d65050',
              width: '100%',
            }}
          >
            {socialMedias.map((ele, index) => {
              return (
                <View
                  key={`ourClients-${index}`}
                  sx={{
                    px: [10, 20, 30],
                  }}
                >
                  <MotiLink href={ele.url} style={{ marginBottom: 10 }}>
                    <PressableChild
                      label={ele.title}
                      textStyle={{ fontWeight: 'bold' }}
                      primeryColor="white"
                      secondaryColor={ele.secondaryColor}
                      icon={{ name: ele.icon, size: 60 }}
                    />
                  </MotiLink>
                </View>
              )
            })}
          </View>
        </View>
        <View
          sx={{
            flex: 4,
            flexDirection: ['column', 'column', 'row'],
            width: '100%',
            backgroundColor: '#252525',
          }}
        >
          <View
            sx={{
              flex: 1,
              width: '100%',
              mt: '6%',
              // justifyContent: 'center',
              pl: '8%',
            }}
          >
            <H3 sx={{ color: '#c5c5c5' }}>CONTACT INFO</H3>
            <View
              sx={{ width: '40%', flexDirection: 'row', alignItems: 'center' }}
            >
              <FontAwesome
                name="home"
                size={16}
                color="#d65050"
                style={{ marginRight: 10 }}
              />
              <MotiPressable>
                <PressableChild
                  label="HQ: India, Iran."
                  primeryColor="#767676"
                  secondaryColor="#767676"
                  textStyle={{ cursor: 'default' }}
                />
              </MotiPressable>
            </View>
            <View
              sx={{
                width: '40%',
                flexDirection: 'row',
                alignItems: 'center',
                my: 3,
              }}
            >
              <FontAwesome
                name="phone"
                size={16}
                color="#d65050"
                style={{ marginRight: 10 }}
              />
              <MotiPressable>
                <PressableChild
                  label="+98 (353) 8275996"
                  primeryColor="#767676"
                  secondaryColor="#767676"
                  textStyle={{ cursor: 'default' }}
                />
              </MotiPressable>
            </View>

            <View
              sx={{ width: '40%', flexDirection: 'row', alignItems: 'center' }}
            >
              <FontAwesome
                name="envelope"
                size={16}
                color="#d65050"
                style={{ marginRight: 10 }}
              />
              <MotiLink href="mailto:info@vasfa.ir">
                <PressableChild
                  label="info@vasfa.ir"
                  primeryColor="#767676"
                  secondaryColor="#767676"
                />
              </MotiLink>
            </View>
          </View>
          <View
            sx={{
              flex: 1,
              width: '100%',
              mt: '6%',
              // justifyContent: 'center',
              px: '5%',
            }}
          >
            <H3 sx={{ color: '#c5c5c5' }}>OUR STORY</H3>
            <MotiPressable>
              <PressableChild
                label="All started with a small gathering! And now it’s what we proudly
                  call VASFA team."
                primeryColor="#767676"
                secondaryColor="#767676"
                textStyle={{ cursor: 'default' }}
              />
            </MotiPressable>
          </View>
        </View>
        <View
          sx={{
            flex: 1,
            width: '100%',
            backgroundColor: '#1c1c1c',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <MotiPressable>
            <PressableChild
              label="All Rights Reserved (VASFA Co.)"
              primeryColor="#767676"
              secondaryColor="#767676"
              textStyle={{ cursor: 'default' }}
            />
          </MotiPressable>
        </View>
      </View>
    </View>
  )
}
