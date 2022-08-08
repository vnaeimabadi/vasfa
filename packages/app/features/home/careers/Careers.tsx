import { PressableChild } from 'app/components/PressableChild'
import { Progressbar } from 'app/components/Progressbar'
import { SectionTitle } from 'app/components/SectionTitle'
import { containerStyle, height } from 'app/constants/theme'
import { H1, H2, H3, H4, Image, P, Text, View } from 'dripsy'
import { MotiPressable } from 'moti/interactions'
import { MotiLink } from 'solito/moti'
const ourClients = [
  {
    title: 'Our Openings',
    content:
      'As we are constantly growing, we aim to attract and retain a competent and high quality work force that brings a mixture of skills and experience to VASFA. We offer our employees the chance for a career with great potential and growth opportunities.',
    url: 'https://vasfa.ir/hr',
  },
  {
    title: 'HR',
    content:
      'If you are interested in becoming part of our Team and working in a dynamic environment, please send your CV to: hr@vasfa.ir',
    url: 'http://vasfa.ir/careers/',
  },
]
export const Careers = () => {
  return (
    <View sx={{ ...containerStyle, py: 40 }}>
      <View
        sx={{
          flex: 1,
          alignItems: 'center',
          width: ['90%', '90%', '90%'],
        }}
      >
        <View
          sx={{
            justifyContent: 'center',
            flex: 1,
            width: '100%',
          }}
        >
          <SectionTitle title="CAREERS" />
          <View
            sx={{
              flexDirection: ['row'],
              justifyContent: ['space-evenly'],
              alignContent: ['center'],
              alignSelf: ['center'],
              flex: 1,
              flexWrap: ['wrap'],
              width: '100%',
            }}
          >
            {ourClients.map((ele, index) => {
              return (
                <View
                  key={`ourClients-${index}`}
                  sx={{
                    width: ['100%', '45%', '30%'],
                    // height: 100,
                    justifyContent: ['flex-start'],
                    alignItems: ['flex-start'],
                    m: 1,
                    mb: 3,
                  }}
                >
                 
                  <MotiLink
                    href={ele.url}
                    style={{marginBottom: 10}}
                    
                  >
                   <PressableChild
                      label={ele.title}
                      textStyle={{ fontWeight: 'bold' }}
                      primeryColor="#d65050"
                      secondaryColor="black"
                    />
                  </MotiLink>
                  <Text sx={{ fontSize: 16, lineHeight: 25 }}>
                    {ele.content}
                  </Text>
                </View>
              )
            })}
          </View>
        </View>
      </View>
    </View>
  )
}
